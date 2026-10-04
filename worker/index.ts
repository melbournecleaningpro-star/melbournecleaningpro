/**
 * Cloudflare Worker in front of the static site.
 *
 * POST /api/lead emails an enquiry or quote request to LEAD_TO_EMAIL through
 * Gmail SMTP (STARTTLS on 587), with Reply-To set to the customer so a reply
 * from the inbox goes straight back to them. Every other request is served
 * from the static export in ./out.
 *
 * Secrets (wrangler secret put / .env.local for `wrangler dev`):
 *   SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD, LEAD_TO_EMAIL
 */
import { connect } from "cloudflare:sockets";

interface Env {
  ASSETS: Fetcher;
  SMTP_HOST: string;
  SMTP_PORT: string;
  SMTP_USERNAME: string;
  SMTP_PASSWORD: string;
  LEAD_TO_EMAIL: string;
}

type Lead = { name: string; email: string; subject: string; body: string };

const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]{2,}$/;
const MAX_BODY = 10_000;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/lead" || url.pathname === "/api/lead/") return handleLead(request, env, url);
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;

async function handleLead(request: Request, env: Env, url: URL): Promise<Response> {
  if (request.method !== "POST") return json({ ok: false, error: "Method not allowed" }, 405, { Allow: "POST" });

  // Only accept submissions from this site's own pages.
  const origin = request.headers.get("Origin");
  if (origin && new URL(origin).host !== url.host) return json({ ok: false, error: "Forbidden" }, 403);

  const raw = await request.text();
  if (raw.length > 50_000) return json({ ok: false, error: "Request too large" }, 413);

  let data: Record<string, unknown>;
  try {
    data = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: "Invalid JSON" }, 400);
  }

  // Honeypot: real visitors never fill this hidden field.
  if (str(data.website)) return json({ ok: true });

  const lead: Lead = {
    name: oneLine(str(data.name)).slice(0, 100),
    email: oneLine(str(data.email)).slice(0, 254),
    subject: oneLine(str(data.subject)).slice(0, 200) || "Website enquiry",
    body: str(data.body).slice(0, MAX_BODY),
  };
  if (!lead.name) return json({ ok: false, error: "Name is required" }, 400);
  if (!EMAIL_RE.test(lead.email)) return json({ ok: false, error: "A valid email is required" }, 400);
  if (!lead.body.trim()) return json({ ok: false, error: "Message is empty" }, 400);

  try {
    await sendMail(env, lead);
    return json({ ok: true });
  } catch (err) {
    console.error("lead email failed:", err instanceof Error ? err.message : err);
    return json({ ok: false, error: "Could not send right now" }, 502);
  }
}

/* ---------- email ---------- */

function buildMessage(env: Env, lead: Lead): string {
  const host = env.SMTP_USERNAME.split("@")[1] ?? "localhost";
  const headers = [
    `From: ${encodeWord("Website Leads")} <${env.SMTP_USERNAME}>`,
    `To: <${env.LEAD_TO_EMAIL}>`,
    `Reply-To: ${encodeWord(lead.name)} <${lead.email}>`,
    `Subject: ${encodeWord(`[Website] ${lead.subject}`)}`,
    `Date: ${new Date().toUTCString().replace("GMT", "+0000")}`,
    `Message-ID: <${crypto.randomUUID()}@${host}>`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
  ];
  const text = `${lead.body.replace(/\r?\n/g, "\r\n")}\r\n\r\n--\r\nSent from the website form. Press Reply to answer ${lead.name} at ${lead.email}.\r\n`;
  const body = base64(text).replace(/.{1,76}/g, "$&\r\n");
  return `${headers.join("\r\n")}\r\n\r\n${body}`;
}

async function sendMail(env: Env, lead: Lead): Promise<void> {
  // 465 is TLS from the first byte; anything else (587) upgrades with STARTTLS.
  const port = Number(env.SMTP_PORT) || 587;
  const implicitTls = port === 465;
  const socket = connect(
    { hostname: env.SMTP_HOST, port },
    { secureTransport: implicitTls ? "on" : "starttls", allowHalfOpen: false },
  );
  let smtp = new SmtpConnection(socket);
  let step = "connect";
  try {
    await socket.opened;
    step = "greeting";
    await smtp.expect(220);
    await smtp.command("EHLO melbournecleaningpro.com", 250);
    if (!implicitTls) {
      await smtp.command("STARTTLS", 220);
      step = "tls";
      smtp.release();
      smtp = new SmtpConnection(socket.startTls());
      await smtp.command("EHLO melbournecleaningpro.com", 250);
    }
    step = "auth";
    await smtp.command("AUTH LOGIN", 334);
    await smtp.command(base64(env.SMTP_USERNAME), 334);
    await smtp.command(base64(env.SMTP_PASSWORD), 235, "AUTH (password)");
    step = "send";
    await smtp.command(`MAIL FROM:<${env.SMTP_USERNAME}>`, 250);
    await smtp.command(`RCPT TO:<${env.LEAD_TO_EMAIL}>`, 250);
    await smtp.command("DATA", 354);
    // Base64 body lines never start with ".", so no dot-stuffing is needed.
    await smtp.command(`${buildMessage(env, lead)}\r\n.`, 250, "message data");
    await smtp.command("QUIT", 221).catch(() => {});
  } catch (err) {
    throw new Error(`[${step}] ${err instanceof Error ? err.message : String(err)}`);
  } finally {
    await smtp.close();
  }
}

/** Minimal line-based SMTP client over a Workers TCP socket. */
class SmtpConnection {
  private reader: ReadableStreamDefaultReader<Uint8Array>;
  private writer: WritableStreamDefaultWriter<Uint8Array>;
  private buffer = "";
  private decoder = new TextDecoder();
  private encoder = new TextEncoder();

  constructor(private socket: Socket) {
    this.reader = socket.readable.getReader();
    this.writer = socket.writable.getWriter();
  }

  async command(line: string, expected: number, label = line.split(" ")[0]): Promise<string> {
    await this.writer.write(this.encoder.encode(`${line}\r\n`));
    return this.expect(expected, label);
  }

  /** Reads one (possibly multi-line) reply and checks its status code. */
  async expect(expected: number, label = "greeting"): Promise<string> {
    const lines: string[] = [];
    for (;;) {
      const line = await this.readLine();
      lines.push(line);
      if (/^\d{3} /.test(line) || /^\d{3}$/.test(line)) break;
    }
    const code = Number(lines[lines.length - 1].slice(0, 3));
    if (code !== expected) throw new Error(`SMTP ${label}: expected ${expected}, got ${lines.join(" | ")}`);
    return lines.join("\n");
  }

  private async readLine(): Promise<string> {
    for (;;) {
      const i = this.buffer.indexOf("\r\n");
      if (i >= 0) {
        const line = this.buffer.slice(0, i);
        this.buffer = this.buffer.slice(i + 2);
        return line;
      }
      const { value, done } = await this.reader.read();
      if (done) throw new Error("SMTP connection closed");
      this.buffer += this.decoder.decode(value, { stream: true });
    }
  }

  release() {
    this.reader.releaseLock();
    this.writer.releaseLock();
  }

  async close() {
    try {
      this.release();
    } catch {
      /* already released */
    }
    await this.socket.close().catch(() => {});
  }
}

/* ---------- helpers ---------- */

function str(v: unknown): string {
  return typeof v === "string" ? v : "";
}

function oneLine(s: string): string {
  return s.replace(/[\r\n]+/g, " ").trim();
}

function base64(s: string): string {
  const bytes = new TextEncoder().encode(s);
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}

/** RFC 2047 encoded-word, so names and subjects can hold any characters. */
function encodeWord(s: string): string {
  return /^[\x20-\x7e]*$/.test(s) && !/[=?"]/.test(s) ? `"${s}"` : `=?UTF-8?B?${base64(s)}?=`;
}

function json(data: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...headers },
  });
}
