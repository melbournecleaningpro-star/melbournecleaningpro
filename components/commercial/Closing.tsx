import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { commercialQuoteMailHref, costFactors, oneOffUses, quoteBrief, recurringUses } from "@/lib/commercial";
import { isLiveRoute, quoteHref, siteConfig } from "@/lib/site";
import { ButtonLink, Container } from "../ui";

export function CostFactors() {
  return (
    <section aria-labelledby="cost-heading" className="bg-cream py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 id="cost-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What Affects Commercial Cleaning Costs?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Commercial premises vary too much for a fixed price list. Your quote is based on the property
            and the service you need, and these factors have the biggest influence:
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line sm:grid-cols-3">
          {costFactors.map(({ label, icon: Icon }) => (
            <li key={label} className="flex items-center gap-4 bg-white px-6 py-5">
              <Icon className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <span className="text-[15px] font-medium text-ink">{label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl bg-ink px-6 py-6 text-white sm:flex-row sm:items-center sm:px-8">
          <p className="max-w-xl text-[15px] leading-relaxed text-white/80">
            Tell us about your premises and preferred schedule, and we&apos;ll put together a quote that
            reflects your actual requirements.
          </p>
          <ButtonLink href={quoteHref} variant="accent" className="shrink-0">
            Request a Commercial Cleaning Quote
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

const comparisonRows = [
  { label: "What it is", oneOff: "A single clean booked for a specific need", recurring: "Ongoing cleaning on an agreed schedule" },
  { label: "Commitment", oneOff: "No ongoing arrangement", recurring: "Frequency agreed up front and reviewed as needed" },
  { label: "Scope", oneOff: "Set for that particular clean", recurring: "Consistent scope, adjusted as your needs change" },
];

export function OneOffVsRecurring() {
  return (
    <section aria-labelledby="compare-heading" className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="compare-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            One-Off or Recurring Commercial Cleaning?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Neither option is better by default. One-off cleaning suits a specific situation, while recurring
            cleaning suits premises that need consistent upkeep. Some businesses use both.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl ring-1 ring-line">
          <div className="grid grid-cols-2 bg-ink text-white">
            <h3 className="px-5 py-5 text-lg font-semibold sm:px-8">One-Off Cleaning</h3>
            <h3 className="border-l border-white/10 px-5 py-5 text-lg font-semibold sm:px-8">Recurring Cleaning</h3>
          </div>

          <dl>
            {comparisonRows.map(({ label, oneOff, recurring }) => (
              <div key={label} className="border-t border-line">
                <dt className="bg-brand-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand sm:px-8">
                  {label}
                </dt>
                <dd className="grid grid-cols-2 text-[15px] text-ink">
                  <span className="px-5 py-4 sm:px-8">{oneOff}</span>
                  <span className="border-l border-line px-5 py-4 sm:px-8">{recurring}</span>
                </dd>
              </div>
            ))}
            <div className="border-t border-line">
              <dt className="bg-brand-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand sm:px-8">
                Useful for
              </dt>
              <dd className="grid grid-cols-2 text-[15px] text-ink">
                <ul className="space-y-2 px-5 py-5 sm:px-8">
                  {oneOffUses.map((u) => (
                    <li key={u} className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" strokeWidth={2.5} />
                      {u}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 border-l border-line px-5 py-5 sm:px-8">
                  {recurringUses.map((u) => (
                    <li key={u} className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" strokeWidth={2.5} />
                      {u}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}

export function AreaAndRelatedServices() {
  const houseLive = isLiveRoute("/services/house-cleaning/");
  const eolLive = isLiveRoute("/services/end-of-lease-cleaning/");
  const linkClass =
    "font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand";

  return (
    <section aria-label="Service area and other services" className="border-t border-line">
      <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20">
        <div>
          <MapPin className="h-7 w-7 text-brand" aria-hidden="true" />
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Commercial Cleaning Across Melbourne
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            We work with businesses across Greater Melbourne, from offices and shopfronts in the Melbourne CBD
            to workplaces in the inner suburbs like Richmond and South Yarra. Our service area also covers
            premises in the west around Footscray, the north through Brunswick and Preston, and the east out
            to Doncaster and Glen Waverley. Travel time and access are part of planning a regular
            schedule, so let us know your suburb and preferred cleaning times when you get in touch, and
            we&apos;ll confirm what we can arrange.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Other Cleaning Services</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            Alongside commercial cleaning, we also help with homes and rentals. Our{" "}
            {houseLive ? (
              <a href="/services/house-cleaning/" className={linkClass}>
                house cleaning
              </a>
            ) : (
              <span className="font-semibold text-ink">house cleaning</span>
            )}{" "}
            service covers regular and one-off cleans, and our{" "}
            {eolLive ? (
              <a href="/services/end-of-lease-cleaning/" className={linkClass}>
                end of lease cleaning
              </a>
            ) : (
              <span className="font-semibold text-ink">end of lease cleaning</span>
            )}{" "}
            helps tenants, landlords and property managers prepare a vacated property for handover.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            You can also ask us about{" "}
            {isLiveRoute("/services/deep-cleaning/") ? (
              <a
                href="/services/deep-cleaning/"
                className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
              >
                deep cleaning
              </a>
            ) : (
              "deep cleaning"
            )}
            ,{" "}
            {isLiveRoute("/services/office-cleaning/") ? (
              <a
                href="/services/office-cleaning/"
                className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
              >
                office cleaning
              </a>
            ) : (
              "office cleaning"
            )}
            , Airbnb cleaning, carpet cleaning and
            window cleaning when you request a quote.
          </p>
          <a href="/" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark">
            Back to the {siteConfig.name} homepage
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}

export function CommercialCTA() {
  return (
    <section id="quote" aria-labelledby="com-cta-heading" className="py-20 sm:py-24">
      <Container>
        <div className="grid overflow-hidden rounded-2xl shadow-lift ring-1 ring-line lg:grid-cols-2">
          <div className="bg-brand px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-12">
            <h2 id="com-cta-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s Build a Cleaning Schedule for Your Business
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              Share a few details about your premises and how you&apos;d like the cleaning to run. We&apos;ll
              review your requirements and come back with a clear commercial cleaning quote.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={commercialQuoteMailHref} variant="accent" size="lg">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Request a Commercial Quote
              </ButtonLink>
              <ButtonLink href={siteConfig.contact.phone.href} variant="ghost-light" size="lg">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Us
              </ButtonLink>
            </div>
          </div>

          <div className="bg-white px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft">Your quote brief</p>
            <ul className="mt-5 divide-y divide-line">
              {quoteBrief.map(({ label, hint, icon: Icon }) => (
                <li key={label} className="flex items-center gap-4 py-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-ink">{label}</p>
                    <p className="text-sm text-ink-soft">{hint}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
