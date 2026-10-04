/**
 * Cloudflare Worker in front of the static site.
 *
 * POST /api/lead emails an enquiry or quote request to LEAD_TO_EMAIL (the
 * domain inbox, forwarded to Gmail by ImprovMX) through the Resend HTTPS API,
 * with Reply-To set to the customer so a reply goes straight back to them.
 * Workers can't open SMTP connections to Gmail, so sending goes over HTTPS.
 * Every other request is served from the static export in ./out.
 *
 * Secrets (wrangler secret put / .env.local for `wrangler dev`):
 *   RESEND_API_KEY, LEAD_TO_EMAIL
 */

interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY: string;
  LEAD_TO_EMAIL: string;
}

type Lead = { name: string; email: string; subject: string; body: string };

/** Sender on the domain verified in Resend. */
const FROM = "Melbourne Cleaning Pro Website <website@melbournecleaningpro.com>";
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
    await sendLead(env, lead);
    return json({ ok: true });
  } catch (err) {
    console.error("lead email failed:", err instanceof Error ? err.message : err);
    return json({ ok: false, error: "Could not send right now" }, 502);
  }
}

async function sendLead(env: Env, lead: Lead): Promise<void> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [env.LEAD_TO_EMAIL],
      reply_to: `${lead.name.replace(/[<>"]/g, "")} <${lead.email}>`,
      subject: `[Website] ${lead.subject}`,
      text: `${lead.body}\n\n--\nSent from the website form. Press Reply to answer ${lead.name} at ${lead.email}.\n`,
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${(await res.text()).slice(0, 300)}`);
}

/* ---------- helpers ---------- */

function str(v: unknown): string {
  return typeof v === "string" ? v : "";
}

function oneLine(s: string): string {
  return s.replace(/[\r\n]+/g, " ").trim();
}

function json(data: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...headers },
  });
}
