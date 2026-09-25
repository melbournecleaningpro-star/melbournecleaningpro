"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AlertCircle, ArrowLeft, ArrowRight, Check, Copy, Loader2, Mail, Pencil, Send } from "lucide-react";
import {
  areaOptions,
  bathroomOptions,
  bedroomOptions,
  contactMethods,
  frequencyOptions,
  propertyTypes,
  QUOTE_ENDPOINT,
  serviceOptions,
  serviceQuestions,
  sizeOptions,
  steps,
  timeOptions,
  type ServiceId,
} from "@/lib/quote";
import { quoteMailto, siteConfig } from "@/lib/site";

type Data = {
  service: ServiceId | "";
  propertyType: string;
  suburb: string;
  bedrooms: string;
  bathrooms: string;
  size: string;
  frequency: string;
  date: string;
  time: string;
  areas: string[];
  serviceAnswer: string;
  notes: string;
  name: string;
  email: string;
  phone: string;
  contactMethod: string;
};

const initial: Data = {
  service: "",
  propertyType: "",
  suburb: "",
  bedrooms: "",
  bathrooms: "",
  size: "",
  frequency: "",
  date: "",
  time: "",
  areas: [],
  serviceAnswer: "",
  notes: "",
  name: "",
  email: "",
  phone: "",
  contactMethod: "",
};

type Field = keyof Data;
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "submitting" | "sent" | "handoff" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s-]{8,20}$/;
const NON_RESIDENTIAL = new Set(["Office", "Commercial Property"]);

const serviceById = (id: Data["service"]) => serviceOptions.find((s) => s.id === id);

function validateStep(step: number, d: Data): Errors {
  const e: Errors = {};
  if (step === 0 && !d.service) e.service = "Please select a cleaning service.";
  if (step === 1) {
    if (!d.propertyType) e.propertyType = "Please select the property type.";
    if (!d.suburb.trim()) e.suburb = "Please enter the suburb or area.";
  }
  if (step === 3) {
    if (!d.name.trim()) e.name = "Please enter your name.";
    if (!d.email.trim()) e.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(d.email.trim())) e.email = "Please enter a valid email address, e.g. name@example.com.";
    if (d.phone.trim() && !PHONE_RE.test(d.phone.trim())) e.phone = "Please enter a valid phone number, or leave it blank.";
    else if (d.contactMethod === "Phone" && !d.phone.trim()) e.phone = "Please add a phone number, or choose email as your contact method.";
  }
  return e;
}

function formatDate(iso: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

function propertySummary(d: Data) {
  const plural = (n: string, word: string) => `${n} ${word}${n === "1" ? "" : "s"}`;
  return [
    d.propertyType,
    d.bedrooms === "Studio" ? "studio" : d.bedrooms && d.bedrooms !== "Not applicable" ? plural(d.bedrooms, "bedroom") : "",
    d.bathrooms && d.bathrooms !== "Not applicable" ? plural(d.bathrooms, "bathroom") : "",
    d.size && d.size !== "Not sure" ? `${d.size.toLowerCase()} size` : "",
  ]
    .filter(Boolean)
    .join(", ");
}

function compose(d: Data) {
  const s = serviceById(d.service);
  const q = d.service ? serviceQuestions[d.service] : undefined;
  const line = (label: string, v: string) => `${label}: ${v.trim() ? v : "Not provided"}`;
  const subject = `Quote request: ${s?.name ?? "Cleaning"}${d.suburb.trim() ? ` in ${d.suburb.trim()}` : ""}`;
  const body = [
    "Hi Melbourne Cleaning Pro,",
    "",
    "I'd like a quote for cleaning.",
    "",
    line("Service", s?.name ?? ""),
    line("Property type", d.propertyType),
    line("Suburb / area", d.suburb),
    line("Bedrooms", d.bedrooms),
    line("Bathrooms", d.bathrooms),
    line("Approximate size", d.size),
    line("Frequency", d.frequency),
    line("Preferred date", formatDate(d.date)),
    line("Preferred time", d.time),
    line("Priority areas", d.areas.join(", ")),
    ...(q ? [line(q.question, d.serviceAnswer)] : []),
    "",
    "Additional requirements:",
    d.notes.trim() || "Not provided",
    "",
    line("Name", d.name),
    line("Email", d.email),
    line("Phone", d.phone),
    line("Preferred contact method", d.contactMethod),
    "",
    "Thanks,",
    d.name.trim(),
  ].join("\n");
  return { subject, body };
}

/* ---------- small building blocks ---------- */

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-sm font-medium text-red-700">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <span>
        <span className="sr-only">Error: </span>
        {message}
      </span>
    </p>
  );
}

function Tag({ required }: { required?: boolean }) {
  return <span className={`text-xs font-medium ${required ? "text-brand" : "text-ink-soft"}`}>{required ? "Required" : "Optional"}</span>;
}

const pill =
  "group relative flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-ink/15 bg-white px-4 py-3 text-center text-sm font-semibold text-ink transition hover:border-brand has-[:checked]:border-brand has-[:checked]:bg-brand has-[:checked]:text-white has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-brand/25";

/** Radio options as pills. The native radios keep arrow-key navigation; the check icon shows selection without relying on colour. */
function Pills({
  name,
  legend,
  options,
  value,
  onChange,
  required,
  error,
  cols = "grid-cols-2 sm:grid-cols-3",
}: {
  name: string;
  legend: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  error?: string;
  cols?: string;
}) {
  return (
    <fieldset aria-describedby={error ? `${name}-error` : undefined} aria-required={required || undefined}>
      <legend className="mb-2 flex w-full items-baseline justify-between gap-2 text-sm font-semibold text-ink">
        {legend} <Tag required={required} />
      </legend>
      <div className={`grid gap-2 ${cols}`}>
        {options.map((o, i) => (
          <label key={o} className={pill}>
            <input
              type="radio"
              name={name}
              value={o}
              checked={value === o}
              onChange={() => onChange(o)}
              aria-invalid={error ? true : undefined}
              data-first={i === 0 ? name : undefined}
              className="sr-only"
            />
            <Check className="hidden h-4 w-4 shrink-0 group-has-[:checked]:block" strokeWidth={3} aria-hidden="true" />
            {o}
          </label>
        ))}
      </div>
      <ErrorText id={`${name}-error`} message={error} />
    </fieldset>
  );
}

const input =
  "block w-full rounded-xl border border-ink/20 bg-white px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 transition focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 aria-[invalid=true]:border-red-600";

function TextField({
  id,
  label,
  value,
  onChange,
  error,
  required,
  ...rest
}: {
  id: Field;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  inputMode?: "email" | "tel" | "text";
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={`q-${id}`} className="mb-1.5 flex items-baseline justify-between gap-2 text-sm font-semibold text-ink">
        {label} <Tag required={required} />
      </label>
      <input
        id={`q-${id}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-required={required || undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={input}
        {...rest}
      />
      <ErrorText id={`${id}-error`} message={error} />
    </div>
  );
}

/* ---------- the wizard ---------- */

export function QuoteWizard() {
  const [data, setData] = useState<Data>(initial);
  const [step, setStep] = useState(0);
  const [reached, setReached] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  const service = serviceById(data.service);
  const question = data.service ? serviceQuestions[data.service] : undefined;
  const showBedrooms = !NON_RESIDENTIAL.has(data.propertyType);

  // Preselect a service from ?service=<id> so service pages can deep-link here later.
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("service");
    if (id && serviceOptions.some((s) => s.id === id)) setData((d) => ({ ...d, service: id as ServiceId }));
  }, []);

  // Move focus to the new step's heading so keyboard and screen-reader users land in the right place.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [step]);

  useEffect(() => {
    if (status === "sent" || status === "handoff" || status === "error") resultRef.current?.focus();
  }, [status]);

  const update = <K extends Field>(key: K, value: Data[K]) => {
    setData((d) => {
      const next = { ...d, [key]: value };
      if (key === "service") {
        const s = serviceById(value as ServiceId);
        next.serviceAnswer = "";
        if (s?.frequency === "none") next.frequency = "";
        else if (s && !frequencyOptions[s.frequency].includes(next.frequency)) next.frequency = "";
        if (s?.areas === "none") next.areas = [];
        else if (s) next.areas = next.areas.filter((a) => areaOptions[s.areas as "home" | "work"].includes(a));
      }
      if (key === "propertyType" && NON_RESIDENTIAL.has(value as string)) next.bedrooms = "";
      return next;
    });
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const focusFirstError = (errs: Errors) => {
    const first = Object.keys(errs)[0] as Field | undefined;
    if (!first) return;
    requestAnimationFrame(() => {
      const el =
        document.querySelector<HTMLElement>(`[data-first="${first}"]`) ?? document.getElementById(`q-${first}`);
      el?.focus();
    });
  };

  const goTo = (target: number) => {
    setErrors({});
    setStep(target);
    setReached((r) => Math.max(r, target));
  };

  const next = () => {
    const errs = validateStep(step, data);
    setErrors(errs);
    if (Object.keys(errs).length) return focusFirstError(errs);
    goTo(step + 1);
  };

  const submit = async () => {
    for (let s = 0; s < 4; s++) {
      const errs = validateStep(s, data);
      if (Object.keys(errs).length) {
        setStep(s);
        setErrors(errs);
        return focusFirstError(errs);
      }
    }
    setStatus("submitting");
    if (!QUOTE_ENDPOINT) {
      const { subject, body } = compose(data);
      window.location.href = quoteMailto(subject, body);
      setStatus("handoff");
      return;
    }
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(QUOTE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, serviceName: service?.name ?? "", ...compose(data) }),
        signal: controller.signal,
      });
      clearTimeout(timer);
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const copy = async () => {
    const { subject, body } = compose(data);
    try {
      await navigator.clipboard.writeText(`To: ${siteConfig.contact.email.display}\nSubject: ${subject}\n\n${body}`);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  /* ---------- result states ---------- */

  if (status === "sent" || status === "handoff" || status === "error") {
    const { subject, body } = compose(data);
    const mailHref = quoteMailto(subject, body);
    const btn = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30";
    return (
      <div ref={resultRef} tabIndex={-1} role={status === "error" ? "alert" : "status"} className="rounded-3xl bg-white p-6 shadow-lift ring-1 ring-line outline-none sm:p-10">
        {status === "error" ? (
          <>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-700">
              <AlertCircle className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">We couldn&apos;t send your request.</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              Your request hasn&apos;t been received yet, but everything you entered is still here. Please check your
              information and try again. If the problem continues, you can send it by email instead or use the{" "}
              <a href="/contact/" className="font-semibold text-brand underline underline-offset-4">contact page</a>.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={submit} className={`${btn} bg-brand text-white hover:bg-brand-dark`}>
                <Send className="h-4 w-4" aria-hidden="true" /> Try Again
              </button>
              <button type="button" onClick={() => { setStatus("idle"); goTo(4); }} className={`${btn} text-ink ring-1 ring-inset ring-ink/20 hover:ring-brand`}>
                Check My Information
              </button>
              <a href={mailHref} className={`${btn} text-ink ring-1 ring-inset ring-ink/20 hover:ring-brand`}>
                <Mail className="h-4 w-4" aria-hidden="true" /> Send by Email Instead
              </a>
            </div>
          </>
        ) : (
          <>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
              {status === "sent" ? <Check className="h-6 w-6" strokeWidth={3} aria-hidden="true" /> : <Mail className="h-6 w-6" aria-hidden="true" />}
            </span>
            {status === "sent" ? (
              <>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Your Quote Request Has Been Sent</h2>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  Thanks, {data.name.trim().split(" ")[0]}. Your request has been received, and {siteConfig.name} can now
                  review the details you provided to work out the next step.
                </p>
              </>
            ) : (
              <>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Your quote request is ready to send</h2>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  Your email app should have opened with your request written out and addressed to{" "}
                  <strong className="font-semibold text-ink">{siteConfig.contact.email.display}</strong>.{" "}
                  <strong className="font-semibold text-ink">It isn&apos;t sent until you press send</strong> in your email app.
                </p>
                <div className="mt-6 rounded-2xl bg-cream p-5 text-sm leading-relaxed text-ink-soft">
                  <p className="font-semibold text-ink">Nothing opened?</p>
                  <p className="mt-1">Copy your request and paste it into a new email to {siteConfig.contact.email.display}.</p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button type="button" onClick={copy} className={`${btn} bg-ink text-white hover:bg-ink/85`}>
                      {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                      {copied ? "Copied" : "Copy My Request"}
                    </button>
                    <a href={mailHref} className={`${btn} text-ink ring-1 ring-inset ring-ink/20 hover:ring-brand`}>
                      Try Opening Email Again
                    </a>
                  </div>
                </div>
                <button type="button" onClick={() => { setStatus("idle"); setCopied(false); goTo(4); }} className="mt-5 text-sm font-semibold text-brand underline underline-offset-4 hover:text-brand-dark">
                  Edit my request
                </button>
              </>
            )}
            <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row">
              <a href="/" className={`${btn} bg-brand text-white hover:bg-brand-dark`}>
                Back to Home
              </a>
              <a href="/services/" className={`${btn} text-ink ring-1 ring-inset ring-ink/20 hover:ring-brand`}>
                Explore Our Services
              </a>
            </div>
          </>
        )}
      </div>
    );
  }

  /* ---------- steps ---------- */

  const stepTitles = [
    "What cleaning service do you need?",
    "Tell us about the property",
    "What would you like cleaned?",
    "How can we contact you?",
    "Review your request",
  ];

  const summaryRows: { step: number; label: string; value: string }[] = [
    { step: 0, label: "Service", value: service?.name ?? "" },
    { step: 1, label: "Property", value: data.propertyType ? propertySummary(data) : "" },
    { step: 1, label: "Location", value: data.suburb.trim() },
    { step: 2, label: "Frequency", value: data.frequency },
    { step: 2, label: "Preferred date", value: [formatDate(data.date), data.time].filter(Boolean).join(", ") },
    { step: 2, label: "Priority areas", value: data.areas.join(", ") },
    ...(question ? [{ step: 2, label: question.question, value: data.serviceAnswer }] : []),
    { step: 2, label: "Additional requirements", value: data.notes.trim() },
    { step: 3, label: "Contact", value: [data.name.trim(), data.email.trim(), data.phone.trim()].filter(Boolean).join(" · ") },
    { step: 3, label: "Preferred contact method", value: data.contactMethod },
  ];

  const heading = (
    <h2 ref={headingRef} tabIndex={-1} className="text-2xl font-semibold tracking-tight text-ink outline-none sm:text-[1.75rem]">
      {stepTitles[step]}
    </h2>
  );

  let body: ReactNode = null;

  if (step === 0) {
    body = (
      <fieldset aria-describedby={errors.service ? "service-error" : undefined}>
        <legend className="sr-only">Cleaning service (required)</legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {serviceOptions.map((s, i) => (
            <label
              key={s.id}
              className="group relative flex cursor-pointer gap-3 rounded-2xl border border-ink/15 bg-white p-4 transition hover:border-brand has-[:checked]:border-2 has-[:checked]:border-brand has-[:checked]:bg-brand-50 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-brand/25"
            >
              <input
                type="radio"
                name="service"
                value={s.id}
                checked={data.service === s.id}
                onChange={() => update("service", s.id)}
                aria-invalid={errors.service ? true : undefined}
                data-first={i === 0 ? "service" : undefined}
                className="sr-only"
              />
              <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-ink/25 group-has-[:checked]:border-brand group-has-[:checked]:bg-brand">
                <Check className="hidden h-3 w-3 text-white group-has-[:checked]:block" strokeWidth={4} />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-ink">{s.name}</span>
                <span className="mt-0.5 block text-sm leading-snug text-ink-soft">{s.line}</span>
              </span>
            </label>
          ))}
        </div>
        <ErrorText id="service-error" message={errors.service} />
        {service?.path && (
          <p className="mt-4 text-sm text-ink-soft">
            Want to know more first?{" "}
            <a href={service.path} className="font-semibold text-brand underline underline-offset-4 hover:text-brand-dark">
              Learn about {service.name.toLowerCase()}
            </a>
          </p>
        )}
      </fieldset>
    );
  }

  if (step === 1) {
    body = (
      <div className="space-y-7">
        <Pills name="propertyType" legend="Property type" options={propertyTypes} value={data.propertyType} onChange={(v) => update("propertyType", v)} required error={errors.propertyType} cols="grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3" />
        <TextField id="suburb" label="Suburb / area" value={data.suburb} onChange={(v) => update("suburb", v)} error={errors.suburb} required autoComplete="address-level2" placeholder="e.g. Richmond" />
        {showBedrooms && <Pills name="bedrooms" legend="Bedrooms" options={bedroomOptions} value={data.bedrooms} onChange={(v) => update("bedrooms", v)} cols="grid-cols-3 sm:grid-cols-4" />}
        <Pills name="bathrooms" legend="Bathrooms" options={bathroomOptions} value={data.bathrooms} onChange={(v) => update("bathrooms", v)} cols="grid-cols-3 sm:grid-cols-5" />
        <div>
          <Pills name="size" legend="Approximate property size" options={sizeOptions} value={data.size} onChange={(v) => update("size", v)} cols="grid-cols-2 sm:grid-cols-4" />
          <p className="mt-2 text-sm text-ink-soft">A rough idea is fine. You don&apos;t need exact measurements.</p>
        </div>
      </div>
    );
  }

  if (step === 2) {
    const freq = service && service.frequency !== "none" ? frequencyOptions[service.frequency] : null;
    const areas = service && service.areas !== "none" ? areaOptions[service.areas] : null;
    body = (
      <div className="space-y-7">
        {freq && (
          <Pills
            name="frequency"
            legend={data.service === "office" ? "How frequently would you like the office cleaned?" : "Cleaning frequency"}
            options={freq}
            value={data.frequency}
            onChange={(v) => update("frequency", v)}
            cols="grid-cols-2 sm:grid-cols-3"
          />
        )}
        {question && <Pills name="serviceAnswer" legend={question.question} options={question.options} value={data.serviceAnswer} onChange={(v) => update("serviceAnswer", v)} cols="grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3" />}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="q-date" className="mb-1.5 flex items-baseline justify-between gap-2 text-sm font-semibold text-ink">
              Preferred date <Tag />
            </label>
            <input id="q-date" type="date" value={data.date} onChange={(e) => update("date", e.target.value)} className={`${input} min-h-[50px]`} />
          </div>
          <Pills name="time" legend="Preferred time" options={timeOptions} value={data.time} onChange={(v) => update("time", v)} cols="grid-cols-3" />
        </div>
        <p className="-mt-3 text-sm text-ink-soft">Dates and times are preferences. Availability is confirmed when the service is arranged.</p>
        {areas && (
          <fieldset>
            <legend className="mb-2 flex w-full items-baseline justify-between gap-2 text-sm font-semibold text-ink">
              Priority areas <Tag />
            </legend>
            <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 sm:grid-cols-3">
              {areas.map((a) => (
                <label key={a} className="group flex cursor-pointer items-center gap-2.5 rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm font-semibold text-ink transition hover:border-brand has-[:checked]:border-brand has-[:checked]:bg-brand-50 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-brand/25">
                  <input
                    type="checkbox"
                    checked={data.areas.includes(a)}
                    onChange={(e) => update("areas", e.target.checked ? [...data.areas, a] : data.areas.filter((x) => x !== a))}
                    className="sr-only"
                  />
                  <span aria-hidden="true" className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 border-ink/25 group-has-[:checked]:border-brand group-has-[:checked]:bg-brand">
                    <Check className="hidden h-3 w-3 text-white group-has-[:checked]:block" strokeWidth={4} />
                  </span>
                  {a}
                </label>
              ))}
            </div>
          </fieldset>
        )}
        <div>
          <label htmlFor="q-notes" className="mb-1.5 flex items-baseline justify-between gap-2 text-sm font-semibold text-ink">
            Additional requirements <Tag />
          </label>
          <textarea
            id="q-notes"
            rows={5}
            value={data.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Tell us anything else we should know about the property or cleaning requirements."
            className={`${input} resize-y`}
          />
        </div>
      </div>
    );
  }

  if (step === 3) {
    body = (
      <div className="space-y-6">
        <TextField id="name" label="Full name" value={data.name} onChange={(v) => update("name", v)} error={errors.name} required autoComplete="name" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <TextField id="email" label="Email" type="email" inputMode="email" value={data.email} onChange={(v) => update("email", v)} error={errors.email} required autoComplete="email" />
          <TextField id="phone" label="Phone" type="tel" inputMode="tel" value={data.phone} onChange={(v) => update("phone", v)} error={errors.phone} required={data.contactMethod === "Phone"} autoComplete="tel" />
        </div>
        <Pills name="contactMethod" legend="Preferred contact method" options={contactMethods} value={data.contactMethod} onChange={(v) => update("contactMethod", v)} cols="grid-cols-3" />
      </div>
    );
  }

  if (step === 4) {
    const groups = [0, 1, 2, 3].map((s) => ({ s, rows: summaryRows.filter((r) => r.step === s) }));
    body = (
      <div>
        <div className="divide-y divide-line rounded-2xl border border-line">
          {groups.map(({ s, rows }) => (
            <div key={s} className="p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">{steps[s]}</h3>
                <button
                  type="button"
                  onClick={() => goTo(s)}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-brand ring-1 ring-inset ring-brand/25 transition hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25"
                >
                  <Pencil className="h-3.5 w-3.5" aria-hidden="true" /> Edit <span className="sr-only">{steps[s].toLowerCase()}</span>
                </button>
              </div>
              <dl className="mt-3 space-y-2.5">
                {rows.map((r) => (
                  <div key={r.label} className="grid grid-cols-1 gap-0.5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4">
                    <dt className="text-sm text-ink-soft">{r.label}</dt>
                    <dd className={`whitespace-pre-line break-words text-[15px] ${r.value ? "font-medium text-ink" : "text-ink-soft/70"}`}>{r.value || "Not provided"}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-2xl bg-cream p-4 text-sm leading-relaxed text-ink-soft">
          By submitting this form, you agree that {siteConfig.name} may use the information provided to respond to your
          enquiry and discuss your cleaning requirements. See our{" "}
          <a href="/privacy-policy/" className="font-semibold text-brand underline underline-offset-4">Privacy Policy</a>.
        </p>
        {!QUOTE_ENDPOINT && (
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Submitting opens your email app with this request written out, addressed to {siteConfig.contact.email.display}.
            Nothing is sent until you press send there.
          </p>
        )}
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-10">
      <div>
        {/* progress */}
        <nav aria-label="Quote progress">
          <p className="mb-3 text-sm font-semibold text-ink sm:hidden">
            Step {step + 1} of {steps.length}: <span className="text-brand">{steps[step]}</span>
          </p>
          <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-ink/10 sm:hidden" aria-hidden="true">
            <div className="h-full rounded-full bg-brand transition-all" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
          </div>
          <ol className="grid grid-cols-5 gap-1.5 sm:gap-2">
            {steps.map((label, i) => {
              const done = i < step;
              const current = i === step;
              const canVisit = i <= reached && !current;
              const content = (
                <>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                      current ? "bg-brand text-white" : done ? "bg-brand-50 text-brand ring-1 ring-brand/30" : "bg-white text-ink-soft ring-1 ring-ink/15"
                    }`}
                  >
                    {done ? <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" /> : String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`hidden text-xs font-semibold leading-tight sm:block ${current ? "text-ink" : "text-ink-soft"}`}>{label}</span>
                  <span className="sr-only">
                    {current ? " (current step)" : done ? " (completed)" : " (not started)"}
                  </span>
                </>
              );
              return (
                <li key={label} aria-current={current ? "step" : undefined} className="relative">
                  <span aria-hidden="true" className={`absolute left-4 right-0 top-4 hidden h-0.5 -translate-y-1/2 sm:block ${i === steps.length - 1 ? "sm:hidden" : done ? "bg-brand/40" : "bg-ink/10"}`} />
                  {canVisit ? (
                    <button type="button" onClick={() => goTo(i)} className="relative flex flex-col items-start gap-2 rounded-lg text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25">
                      {content}
                    </button>
                  ) : (
                    <span className="relative flex flex-col items-start gap-2">{content}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            if (step < 4) next();
            else submit();
          }}
          aria-labelledby="quote-step-label"
          className="mt-8 rounded-3xl bg-white p-5 shadow-lift ring-1 ring-line sm:p-9"
        >
          <p id="quote-step-label" className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Step {String(step + 1).padStart(2, "0")} &middot; {steps[step]}
          </p>
          <div className="mt-2">{heading}</div>
          <div className="mt-7">{body}</div>

          <div className="mt-9 flex flex-col-reverse gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => goTo(step - 1)}
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-ink ring-1 ring-inset ring-ink/20 transition hover:ring-brand focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
              </button>
            ) : (
              <span />
            )}
            {step < 4 ? (
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30"
              >
                Continue to {steps[step + 1]} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={submitting}
                aria-busy={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
                {submitting ? "Sending your request…" : "Request My Quote"}
              </button>
            )}
          </div>
        </form>
      </div>

      {/* live summary (desktop) */}
      <aside aria-label="Your request so far" className="hidden lg:block">
        <div className="sticky top-24 rounded-3xl border border-line bg-cream p-6">
          <p className="text-sm font-semibold text-ink">Your request so far</p>
          <dl className="mt-4 space-y-3">
            {summaryRows
              .filter((r) => ["Service", "Property", "Location", "Frequency", "Preferred date"].includes(r.label))
              .map((r) => (
                <div key={r.label}>
                  <dt className="text-xs uppercase tracking-[0.14em] text-ink-soft">{r.label}</dt>
                  <dd className={`mt-0.5 text-sm ${r.value ? "font-semibold text-ink" : "text-ink-soft/60"}`}>{r.value || "Not yet added"}</dd>
                </div>
              ))}
          </dl>
          <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-ink-soft">You can go back and change anything before you submit.</p>
        </div>
      </aside>
    </div>
  );
}
