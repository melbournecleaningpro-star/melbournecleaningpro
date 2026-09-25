"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { AlertCircle, Check, ChevronDown, Copy, Mail, Send } from "lucide-react";
import { propertyTypes, serviceOptions } from "@/lib/contact";
import { quoteMailto, siteConfig } from "@/lib/site";

type Fields = {
  name: string;
  email: string;
  phone: string;
  service: string;
  property: string;
  suburb: string;
  date: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", phone: "", service: "", property: "", suburb: "", date: "", message: "" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s-]{8,20}$/;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Please enter your name.";
  if (!f.email.trim()) e.email = "Please enter your email address so we can reply.";
  else if (!EMAIL_RE.test(f.email.trim())) e.email = "That email address doesn't look right. Please check it, e.g. name@example.com.";
  if (f.phone.trim() && !PHONE_RE.test(f.phone.trim())) e.phone = "Please enter a valid phone number, or leave this blank.";
  return e;
}

function formatDate(iso: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

function composeEnquiry(f: Fields) {
  const line = (label: string, value: string) => `${label}: ${value.trim() || "Not provided"}`;
  const subject = `Cleaning quote request${f.service ? `: ${f.service}` : ""}${f.suburb.trim() ? ` in ${f.suburb.trim()}` : ""}`;
  const body = [
    "Hi Melbourne Cleaning Pro,",
    "",
    "I'd like to ask about cleaning.",
    "",
    line("Name", f.name),
    line("Email", f.email),
    line("Phone", f.phone),
    line("Service", f.service),
    line("Property type", f.property),
    line("Suburb / area", f.suburb),
    line("Preferred date", formatDate(f.date)),
    "",
    "Cleaning requirements:",
    f.message.trim() || "Not provided",
    "",
    "Thanks,",
    f.name.trim(),
  ].join("\n");
  return { subject, body };
}

/**
 * Delivery method. There is no form backend (static export), so this opens the
 * visitor's email app with the enquiry pre-filled. Nothing is sent until they
 * press send there, and the success message says exactly that.
 */
function sendEnquiry(f: Fields) {
  const { subject, body } = composeEnquiry(f);
  window.location.href = quoteMailto(subject, body);
  return { subject, body };
}

const input =
  "block w-full rounded-xl border border-ink/20 bg-white px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 transition focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 aria-[invalid=true]:border-red-600 aria-[invalid=true]:ring-red-600/10";

function Label({ htmlFor, children, required }: { htmlFor: string; children: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 flex items-baseline justify-between gap-2 text-sm font-semibold text-ink">
      {children}
      <span className={`text-xs font-medium ${required ? "text-brand" : "text-ink-soft"}`}>{required ? "Required" : "Optional"}</span>
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 flex items-start gap-1.5 text-sm font-medium text-red-700">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <span>
        <span className="sr-only">Error: </span>
        {message}
      </span>
    </p>
  );
}

function Group({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <fieldset className="border-t border-line pt-7 first:border-t-0 first:pt-0">
      <legend className="float-left mb-5 flex w-full items-center gap-3 text-base font-semibold text-ink">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white" aria-hidden="true">
          {n}
        </span>
        {title}
      </legend>
      <div className="clear-left grid grid-cols-1 gap-5 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

export function EnquiryForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState<{ subject: string; body: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const set = (key: keyof Fields) => (e: { target: { value: string } }) => {
    const next = { ...fields, [key]: e.target.value };
    setFields(next);
    if (submitted) setErrors(validate(next));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    const found = validate(fields);
    setErrors(found);
    const first = (Object.keys(found) as (keyof Fields)[])[0];
    if (first) {
      summaryRef.current?.focus();
      return;
    }
    setSent(sendEnquiry(fields));
    requestAnimationFrame(() => successRef.current?.focus());
  };

  const copy = async () => {
    if (!sent) return;
    try {
      await navigator.clipboard.writeText(`To: ${siteConfig.contact.email.display}\nSubject: ${sent.subject}\n\n${sent.body}`);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const errorList = Object.entries(errors) as [keyof Fields, string][];
  const described = (key: keyof Fields) => (errors[key] ? `${key}-error` : undefined);

  if (sent) {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="rounded-3xl bg-white p-6 shadow-lift ring-1 ring-line outline-none sm:p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
          <Mail className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink">Your enquiry is ready to send</h3>
        <p className="mt-3 text-base leading-relaxed text-ink-soft">
          Your email app should have opened with your enquiry filled in and addressed to{" "}
          <strong className="font-semibold text-ink">{siteConfig.contact.email.display}</strong>.{" "}
          <strong className="font-semibold text-ink">It isn&apos;t sent until you press send</strong> in your email app.
        </p>
        <div className="mt-6 rounded-2xl bg-cream p-5 text-sm leading-relaxed text-ink-soft">
          <p className="font-semibold text-ink">Nothing opened?</p>
          <p className="mt-1">
            Copy your enquiry and paste it into a new email to {siteConfig.contact.email.display}.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 font-semibold text-white transition hover:bg-ink/85 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30"
            >
              {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
              {copied ? "Copied" : "Copy my enquiry"}
            </button>
            <a
              href={quoteMailto(sent.subject, sent.body)}
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold text-ink ring-1 ring-inset ring-ink/20 transition hover:ring-brand"
            >
              Try opening email again
            </a>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setSent(null);
            setCopied(false);
          }}
          className="mt-6 text-sm font-semibold text-brand underline underline-offset-4 hover:text-brand-dark"
        >
          Edit my enquiry
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} aria-labelledby="enquiry-heading" className="rounded-3xl bg-white p-6 shadow-lift ring-1 ring-line sm:p-9">
      <h2 id="enquiry-heading" className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Tell us what you need
      </h2>
      <p className="mt-2 text-[15px] text-ink-soft">Only your name and email are required. Everything else just helps us understand.</p>

      <div ref={summaryRef} tabIndex={-1} aria-live="assertive" className="outline-none">
        {errorList.length > 0 && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            <p className="flex items-center gap-2 font-semibold">
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              Please fix {errorList.length === 1 ? "this" : `these ${errorList.length}`} before sending:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              {errorList.map(([key, msg]) => (
                <li key={key}>
                  <a href={`#${key}`} className="underline underline-offset-2">
                    {msg}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-8 space-y-8">
        <Group n={1} title="Your details">
          <div className="sm:col-span-2">
            <Label htmlFor="name" required>
              Full name
            </Label>
            <input id="name" name="name" autoComplete="name" required aria-required="true" aria-invalid={!!errors.name} aria-describedby={described("name")} value={fields.name} onChange={set("name")} className={input} />
            <FieldError id="name-error" message={errors.name} />
          </div>
          <div>
            <Label htmlFor="email" required>
              Email
            </Label>
            <input id="email" name="email" type="email" inputMode="email" autoComplete="email" required aria-required="true" aria-invalid={!!errors.email} aria-describedby={described("email")} value={fields.email} onChange={set("email")} className={input} />
            <FieldError id="email-error" message={errors.email} />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={described("phone")} value={fields.phone} onChange={set("phone")} className={input} />
            <FieldError id="phone-error" message={errors.phone} />
          </div>
        </Group>

        <Group n={2} title="Your property">
          <div>
            <Label htmlFor="property">Property type</Label>
            <div className="relative">
              <select id="property" name="property" value={fields.property} onChange={set("property")} className={`${input} appearance-none pr-11`}>
              <option value="">Select a property type</option>
              {propertyTypes.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft" aria-hidden="true" />
            </div>
          </div>
          <div>
            <Label htmlFor="suburb">Suburb / area</Label>
            <input id="suburb" name="suburb" autoComplete="address-level2" placeholder="e.g. Richmond" value={fields.suburb} onChange={set("suburb")} className={input} />
          </div>
        </Group>

        <Group n={3} title="Cleaning requirements">
          <div>
            <Label htmlFor="service">Service</Label>
            <div className="relative">
              <select id="service" name="service" value={fields.service} onChange={set("service")} className={`${input} appearance-none pr-11`}>
              <option value="">Select a service</option>
              {serviceOptions.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft" aria-hidden="true" />
            </div>
          </div>
          <div>
            <Label htmlFor="date">Preferred date</Label>
            <input id="date" name="date" type="date" value={fields.date} onChange={set("date")} className={`${input} min-h-[50px]`} />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="message">Message / cleaning requirements</Label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us about the property, cleaning requirements, preferred date, or anything else we should know."
              value={fields.message}
              onChange={set("message")}
              className={`${input} resize-y`}
            />
          </div>
        </Group>
      </div>

      <div className="mt-8 border-t border-line pt-7">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30 sm:w-auto"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          Request a Cleaning Quote
        </button>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          This opens your email app with your enquiry filled in, addressed to {siteConfig.contact.email.display}.
          Nothing is sent until you press send.
        </p>
      </div>
    </form>
  );
}
