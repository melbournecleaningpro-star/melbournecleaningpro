import Image from "next/image";
import { ArrowRight, Mail, Phone, ShieldCheck } from "lucide-react";
import { boundaries, ctaBrief, images, officeQuoteMailHref, processSteps, quoteFactors } from "@/lib/office";
import { isLiveRoute, quoteHref, siteConfig } from "@/lib/site";
import { ButtonLink, Container } from "../ui";

export function QuoteFactors() {
  return (
    <section aria-labelledby="office-cost-heading" className="bg-cream py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:gap-16">
        <div>
          <h2 id="office-cost-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What Does Office Cleaning Cost in Melbourne?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Office cleaning is quoted on your actual requirements, not a one-size price. These are the details
            we look at when preparing a quote.
          </p>
          <ButtonLink href={quoteHref} className="mt-8">
            Request an Office Cleaning Quote
          </ButtonLink>
        </div>

        {/* Itemised, receipt-like breakdown of factors (no prices) */}
        <div className="rounded-2xl bg-white p-6 ring-1 ring-line sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">Your quote considers</p>
          <dl className="mt-4">
            {quoteFactors.map(({ factor, why }) => (
              <div key={factor} className="flex flex-col gap-0.5 border-b border-dotted border-ink/20 py-3 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-3">
                <dt className="shrink-0 text-[15px] font-semibold text-ink">{factor}</dt>
                <span aria-hidden="true" className="hidden flex-1 border-b border-dotted border-ink/25 sm:block" />
                <dd className="text-sm text-ink-soft sm:text-right">{why}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

export function OfficeProcess() {
  return (
    <section aria-labelledby="office-process-heading" className="py-20 sm:py-24">
      <Container>
        <h2 id="office-process-heading" className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          From Enquiry to a Cleaner Workplace
        </h2>
        <ol className="mt-12 grid gap-2 lg:grid-cols-5 lg:gap-0">
          {processSteps.map(({ title, text }, i) => {
            const last = i === processSteps.length - 1;
            return (
              <li
                key={title}
                className={`relative px-6 py-6 lg:px-8 lg:py-7 ${
                  last ? "bg-brand text-white" : i % 2 === 0 ? "bg-brand-50" : "bg-brand-100/60"
                } rounded-xl lg:rounded-none ${i === 0 ? "lg:rounded-l-2xl" : ""} ${
                  last ? "lg:rounded-r-2xl" : "lg:[clip-path:polygon(0_0,calc(100%-18px)_0,100%_50%,calc(100%-18px)_100%,0_100%)]"
                } ${i > 0 ? "lg:-ml-px lg:pl-10" : ""}`}
              >
                <span className={`text-xs font-semibold uppercase tracking-[0.14em] ${last ? "text-wattle" : "text-brand"}`}>
                  Step {i + 1}
                </span>
                <h3 className={`mt-2 font-semibold ${last ? "text-white" : "text-ink"}`}>{title}</h3>
                <p className={`mt-1.5 text-sm leading-relaxed ${last ? "text-white/80" : "text-ink-soft"}`}>{text}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

export function Boundaries() {
  return (
    <section aria-labelledby="boundaries-heading" className="pb-20 sm:pb-24">
      <Container className="max-w-5xl">
        <div className="rounded-2xl border-l-4 border-ink bg-white p-7 ring-1 ring-line sm:p-10">
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-7 w-7 shrink-0 text-brand" aria-hidden="true" />
            <div>
              <h2 id="boundaries-heading" className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                What We Don&apos;t Assume
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                Offices contain people&apos;s work, belongings and sometimes sensitive information. Unless it&apos;s
                specifically agreed and appropriate, our cleaners won&apos;t:
              </p>
            </div>
          </div>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {boundaries.map(({ text, icon: Icon }) => (
              <li key={text} className="flex items-center gap-3 rounded-lg bg-cream px-4 py-3 text-[15px] text-ink">
                <Icon className="h-4 w-4 shrink-0 text-ink-soft" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-ink-soft">
            If you&apos;d like any of these handled differently, we&apos;ll talk it through and agree on it before
            cleaning starts.
          </p>
        </div>
      </Container>
    </section>
  );
}

const related = [
  { label: "Commercial Cleaning", path: "/services/commercial-cleaning/", text: "Retail, studios, clinics and other commercial premises." },
  { label: "Deep Cleaning", path: "/services/deep-cleaning/", text: "Detailed cleaning for homes that need a reset." },
  { label: "End of Lease Cleaning", path: "/services/end-of-lease-cleaning/", text: "Move-out cleaning for rental properties." },
  { label: "House Cleaning", path: "/services/house-cleaning/", text: "Regular or one-off cleaning for homes." },
];

export function AreaAndRelated() {
  return (
    <section aria-label="Service area and other services" className="border-t border-line py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Office Cleaning Across Melbourne</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            We clean offices across Melbourne and the surrounding suburbs, from high-rise workplaces in the
            Melbourne CBD to smaller offices in Richmond and South Yarra. Our service area also takes in
            workplaces to the north in Brunswick and Preston, the west around Footscray, and the east through
            Doncaster and Glen Waverley. Building access, parking and preferred cleaning times all affect how
            a schedule is planned, so include your office&apos;s suburb and any access details when you request
            a quote, and we&apos;ll confirm what we can arrange.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Other Cleaning Services</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {related.map(({ label, path, text }) => {
              const live = isLiveRoute(path);
              const inner = (
                <>
                  <span className="flex items-center justify-between gap-3 font-semibold text-ink">
                    {label}
                    {live && <ArrowRight className="h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5" aria-hidden="true" />}
                  </span>
                  <span className="mt-1 block text-sm text-ink-soft">{text}</span>
                </>
              );
              return (
                <li key={path}>
                  {live ? (
                    <a href={path} className="group block h-full rounded-xl p-4 ring-1 ring-line transition-colors hover:bg-brand-50 hover:ring-brand/30">
                      {inner}
                    </a>
                  ) : (
                    <div className="h-full rounded-xl p-4 ring-1 ring-line">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
          <a href="/" className="mt-5 inline-block text-sm font-semibold text-brand hover:text-brand-dark">
            Back to the {siteConfig.name} homepage
          </a>
        </div>
      </Container>
    </section>
  );
}

export function OfficeCTA() {
  return (
    <section id="quote" aria-labelledby="office-cta-heading" className="bg-cream py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl ring-1 ring-line">
              <Image
                src={images.kitchen.src}
                width={images.kitchen.width}
                height={images.kitchen.height}
                alt="Clean office kitchen and break area"
                loading="lazy"
                sizes="(min-width: 1024px) 520px, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div>
            <h2 id="office-cta-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              A Cleaner Office Starts With a Simple Quote
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              Send us a few details and we&apos;ll put together a quote based on your office and schedule:
            </p>
            <ol className="mt-6 flex flex-wrap gap-2">
              {ctaBrief.map((b, i) => (
                <li key={b} className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-3.5 text-sm text-ink ring-1 ring-line">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-xs font-semibold text-wattle">
                    {i + 1}
                  </span>
                  {b}
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={officeQuoteMailHref} size="lg">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Request an Office Cleaning Quote
              </ButtonLink>
              <ButtonLink href={siteConfig.contact.phone.href} variant="secondary" size="lg">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
