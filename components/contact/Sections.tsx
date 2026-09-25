import { ArrowDown, ArrowRight, Check, ClipboardEdit, Mail, MessageSquare, Phone } from "lucide-react";
import { afterSteps, detailsToInclude, suburbs } from "@/lib/contact";
import { siteConfig } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";
import { EnquiryForm } from "./EnquiryForm";

const { email, phone } = siteConfig.contact;
/** The phone number is only shown once a real one replaces the placeholder in lib/site.ts. */
const showPhone = !phone.isPlaceholder;

const examples = [
  "I need an end of lease clean for a two-bedroom unit.",
  "Could someone clean our office each week?",
  "I'm not sure which service I need.",
];

/** Compact hero: headline beside a few example opening lines, shown as message bubbles. */
export function ContactHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section aria-labelledby="contact-hero-heading" className="bg-brand-50">
      <Container className="pb-10 pt-6 sm:pt-8 lg:pb-14">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h1 id="contact-hero-heading" className="text-[2.4rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Contact Melbourne Cleaning Pro
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              Tell us what you need cleaned and we&apos;ll help you work out the next step.
            </p>
            <ButtonLink href="#quote" size="lg" className="mt-7">
              Request a Cleaning Quote
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <figure className="hidden lg:block" aria-label="Examples of how an enquiry might start">
            <figcaption className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">For example</figcaption>
            <ul className="space-y-3">
              {examples.map((e, i) => (
                <li
                  key={e}
                  className={`w-fit max-w-sm rounded-2xl rounded-br-md bg-white px-5 py-3 text-[15px] text-ink shadow-card ${i === 1 ? "ml-12" : i === 2 ? "ml-6" : ""}`}
                >
                  {e}
                </li>
              ))}
            </ul>
          </figure>
        </div>
      </Container>
    </section>
  );
}

/** Main two-column contact experience: guidance panel + enquiry form. */
export function ContactMain() {
  return (
    <section id="quote" aria-label="Contact details and enquiry form" className="scroll-mt-24 bg-white py-14 sm:py-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)] lg:gap-12">
        <aside className="order-2 lg:order-1">
          <div className="rounded-3xl bg-ink p-6 text-white sm:p-8 lg:sticky lg:top-24">
            <h2 className="text-xl font-semibold">{siteConfig.name}</h2>
            <p className="mt-1 text-sm text-white/65">Residential &amp; commercial cleaning across Melbourne</p>
            <ul className="mt-6 space-y-3">
              <li>
                <a href={email.href} className="group flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10 transition hover:ring-wattle/60">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wattle text-ink">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.16em] text-white/55">Email</span>
                    <span className="block break-all font-semibold group-hover:text-wattle">{email.display}</span>
                  </span>
                </a>
              </li>
              {showPhone && (
                <li>
                  <a href={phone.href} className="group flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10 transition hover:ring-wattle/60">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wattle text-ink">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-white/55">Phone</span>
                      <span className="block font-semibold group-hover:text-wattle">{phone.display}</span>
                    </span>
                  </a>
                </li>
              )}
            </ul>

            <div className="mt-8 border-t border-white/10 pt-7">
              <h2 className="text-lg font-semibold leading-snug">A few details help us understand your request.</h2>
              <p className="mt-2 text-sm text-white/65">None of these are required, but they help:</p>
              <ul className="mt-5 space-y-2.5">
                {detailsToInclude.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-[15px] text-white/85">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-wattle" strokeWidth={3} aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <div className="order-1 lg:order-2">
          <EnquiryForm />
        </div>
      </Container>
    </section>
  );
}

export function OtherWays() {
  const options = [
    { icon: Mail, title: "Email", body: email.display, href: email.href, note: "Write to us directly" },
    ...(showPhone ? [{ icon: Phone, title: "Phone", body: phone.display, href: phone.href, note: "Call us" }] : []),
    { icon: ClipboardEdit, title: "Quote request", body: "Use the enquiry form", href: "#quote", note: "Fill in your details above" },
  ];
  return (
    <section aria-labelledby="other-ways-heading" className="border-y border-line bg-cream py-12 sm:py-14">
      <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <h2 id="other-ways-heading" className="text-xl font-semibold text-ink sm:text-2xl">
          Other ways to contact us
        </h2>
        <ul className="flex flex-col gap-3 sm:flex-row">
          {options.map(({ icon: Icon, title, body, href, note }) => (
            <li key={title}>
              <a href={href} className="group flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-5 ring-1 ring-line transition hover:ring-brand">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand transition group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-ink-soft">
                    {title} &middot; {note}
                  </span>
                  <span className="block break-all text-sm font-semibold text-ink">{body}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** What happens next, as a short thread of message bubbles. */
export function AfterContact() {
  return (
    <section aria-labelledby="after-heading" className="py-20 sm:py-24">
      <Container>
        <h2 id="after-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          What happens after you contact us?
        </h2>
        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {afterSteps.map(({ title, text }, i) => (
            <li key={title} className="relative rounded-3xl rounded-tl-md bg-brand-50 p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-brand ring-1 ring-brand/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function NotSure() {
  return (
    <section aria-labelledby="not-sure-heading" className="pb-20 sm:pb-24">
      <Container>
        <div className="flex flex-col gap-6 rounded-3xl border-2 border-dashed border-brand/30 p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-4">
            <MessageSquare className="mt-1 h-7 w-7 shrink-0 text-brand" aria-hidden="true" />
            <div>
              <h2 id="not-sure-heading" className="text-2xl font-semibold tracking-tight text-ink">
                Not sure which cleaning service is right for you?
              </h2>
              <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                Have a look through our services, or just describe the property and what needs doing in the form.
                You can also read a little <a href="/about/" className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand">about how we work</a>.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <ButtonLink href="/services/" variant="secondary">
              Explore Cleaning Services
            </ButtonLink>
            <ButtonLink href="#quote">Tell Us What You Need</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ContactArea() {
  return (
    <section aria-labelledby="contact-area-heading" className="bg-cream py-16 sm:py-20">
      <Container className="max-w-3xl text-center">
        <h2 id="contact-area-heading" className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Across Melbourne and surrounding areas
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          We clean homes and workplaces around Melbourne, from the {suburbs[0]}, {suburbs[1]} and {suburbs[2]} to{" "}
          {suburbs[3]}, {suburbs[4]} and {suburbs[5]}, and out to {suburbs[6]}, {suburbs[7]}, {suburbs[8]} and{" "}
          {suburbs[9]}. Include your suburb in the enquiry and we&apos;ll let you know.
        </p>
      </Container>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section aria-labelledby="contact-cta-heading" className="py-20 sm:py-24">
      <Container className="max-w-3xl text-center">
        <h2 id="contact-cta-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Ready to Talk About Your Cleaning Needs?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          Send us your property details and cleaning requirements through the form, and we&apos;ll take it from there.
        </p>
        <ButtonLink href="#quote" size="lg" className="mt-8">
          Request a Cleaning Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </Container>
    </section>
  );
}
