import { ArrowRight, Info, Mail, MapPin, Phone, Wrench } from "lucide-react";
import { endOfLeaseQuoteMailHref, notRepairs, preparationSteps, pricingFactors } from "@/lib/end-of-lease";
import { isLiveRoute, quoteHref, siteConfig } from "@/lib/site";
import { ButtonLink, Container } from "../ui";

export function Pricing() {
  return (
    <section aria-labelledby="pricing-heading" className="border-t border-line py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <div>
          <h2 id="pricing-heading" className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            How Much Does End of Lease Cleaning Cost in Melbourne?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            There&apos;s no one-size-fits-all price for a move-out clean. Rather than quoting a flat rate
            that may not fit your property, we price each clean on its details. These are the main things
            that affect the cost:
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {pricingFactors.map((factor) => (
              <li
                key={factor}
                className="rounded-xl border border-line bg-white px-3.5 py-2 text-sm font-medium text-ink"
              >
                {factor}
              </li>
            ))}
          </ul>
        </div>

        <div className="self-start rounded-3xl bg-brand p-7 text-white sm:p-8">
          <p className="text-lg font-semibold">Get a price for your property</p>
          <p className="mt-2 text-[15px] leading-relaxed text-white/80">
            Share your suburb, property type, bedrooms, bathrooms and any extras, and we&apos;ll send a free,
            no-obligation quote.
          </p>
          <ButtonLink href={quoteHref} variant="accent" className="mt-6 w-full">
            Get a Free Quote
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function Preparation() {
  return (
    <section aria-labelledby="prep-heading" className="bg-cream py-20 sm:py-24">
      <Container className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
        <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-line sm:p-10">
          <h2 id="prep-heading" className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            How to Prepare for Your End of Lease Clean
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            A little preparation means the cleaning time goes on cleaning. Before the day:
          </p>
          <ol className="mt-7 space-y-4">
            {preparationSteps.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 border-brand/30 text-xs font-bold text-brand"
                >
                  {i + 1}
                </span>
                <span className="pt-0.5 text-[15px] leading-relaxed text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <aside
          id="expectations"
          aria-labelledby="expectations-heading"
          className="self-start rounded-3xl border border-wattle/50 bg-[#fff8e8] p-7 sm:p-9"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-wattle/25 text-wattle-dark">
            <Wrench className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 id="expectations-heading" className="mt-5 text-xl font-semibold text-ink sm:text-2xl">
            A Clean Property Isn&apos;t the Same as Property Repairs
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
            Professional cleaning addresses dirt, dust and grime. Cleaners aren&apos;t responsible for, and
            can&apos;t fix, issues such as:
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {notRepairs.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-wattle-dark" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 flex gap-2.5 border-t border-wattle/40 pt-5 text-sm leading-relaxed text-ink-soft">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-wattle-dark" aria-hidden="true" />
            If you notice damage while moving out, it&apos;s best to raise it with your agent or landlord
            separately from the clean.
          </p>
        </aside>
      </Container>
    </section>
  );
}

export function AreaAndRelated() {
  const houseCleaningLive = isLiveRoute("/services/house-cleaning/");
  const commercialLive = isLiveRoute("/services/commercial-cleaning/");
  return (
    <section aria-label="Service area and related services" className="py-20 sm:py-24">
      <Container className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-line p-7 sm:p-10">
          <MapPin className="h-7 w-7 text-brand" aria-hidden="true" />
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            End of Lease Cleaning Across Melbourne
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            We provide end of lease cleaning for tenants, owners and property managers across Greater
            Melbourne. That includes apartments in the Melbourne CBD and inner suburbs such as Richmond and
            South Yarra, homes and units in the north around Brunswick and Preston, and properties in the
            west from Footscray out to Werribee and Point Cook. If your rental is somewhere else in the
            metro area, send us the suburb with your quote request and we&apos;ll confirm whether we can
            fit in with your moving date. Travel distance and access can affect scheduling, so it helps to
            get in touch as early as you can.
          </p>
        </div>

        <div className="rounded-3xl bg-brand-50 p-7 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Need More Than an End of Lease Clean?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            Settling into a new place? Our{" "}
            {houseCleaningLive ? (
              <a
                href="/services/house-cleaning/"
                className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
              >
                house cleaning
              </a>
            ) : (
              <span className="font-semibold text-ink">house cleaning</span>
            )}{" "}
            service can keep your new home fresh with regular or one-off cleans. We also provide{" "}
            {commercialLive ? (
              <a
                href="/services/commercial-cleaning/"
                className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
              >
                commercial cleaning
              </a>
            ) : (
              "commercial cleaning"
            )}
            ,{" "}
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
            )}{" "}
            and Airbnb cleaning. Just mention what you need when
            you get in touch.
          </p>
          <a
            href="/"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            See all our cleaning services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}

export function EndOfLeaseCTA() {
  return (
    <section id="quote" aria-labelledby="eol-cta-heading" className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:32px_32px]"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 id="eol-cta-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Moving Out? Let&apos;s Get Your Property Inspection Ready.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                Send us your property details and preferred cleaning date, and we&apos;ll come back with a
                free, no-obligation quote for your end of lease clean.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={endOfLeaseQuoteMailHref} variant="accent" size="lg">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Get a Free Quote
                </ButtonLink>
                <ButtonLink href={siteConfig.contact.phone.href} variant="ghost-light" size="lg">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </ButtonLink>
              </div>
            </div>
            <div className="rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/15 sm:p-7">
              <p className="text-sm font-semibold">Include in your request:</p>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-[15px] text-white/80">
                {["Suburb", "Property type", "Bedrooms", "Bathrooms", "Preferred date", "Any extras"].map((d) => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-wattle" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
