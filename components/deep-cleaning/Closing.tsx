import { ArrowDown, ArrowUpRight, Mail, Phone } from "lucide-react";
import { deepQuoteMailHref, journey, preparation, pricingFactors, propertyTypes } from "@/lib/deep-cleaning";
import { isLiveRoute, siteConfig } from "@/lib/site";
import { ButtonLink, Container } from "../ui";

export function PropertyTypes() {
  return (
    <section aria-labelledby="homes-heading" className="py-20 sm:py-24">
      <Container>
        <h2 id="homes-heading" className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Deep Cleaning for Different Melbourne Homes
        </h2>
        <dl className="mt-10 border-t-2 border-ink">
          {propertyTypes.map(({ name, text }) => (
            <div key={name} className="grid gap-2 border-b border-line py-6 md:grid-cols-[16rem_1fr] md:gap-10">
              <dt className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">{name}</dt>
              <dd className="max-w-2xl text-[15px] leading-relaxed text-ink-soft sm:text-base">{text}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export function PricingAndPrep() {
  return (
    <section aria-label="Pricing and preparation" className="border-t border-line bg-brand-50 py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            How Much Does Deep Cleaning Cost in Melbourne?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Every deep clean is quoted individually, because no two homes need the same amount of work. The
            price depends on:
          </p>
          <p className="mt-6 text-lg font-medium leading-loose text-ink sm:text-xl">
            {pricingFactors.map((f, i) => (
              <span key={f}>
                <span className="whitespace-nowrap">{f}</span>
                {i < pricingFactors.length - 1 && (
                  <>
                    {" "}
                    <span className="mx-1 text-wattle-dark" aria-hidden="true">
                      /
                    </span>{" "}
                  </>
                )}
              </span>
            ))}
          </p>
          <ButtonLink href={deepQuoteMailHref()} size="lg" className="mt-8">
            Get a Deep Cleaning Quote
          </ButtonLink>
        </div>

        <div className="self-start rounded-[1.75rem] bg-white p-7 shadow-card sm:p-8">
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">Before Your Deep Clean</h2>
          <p className="mt-2 text-sm text-ink-soft">A few small things help the day run smoothly. The cleaning is on us.</p>
          <ul className="mt-5 space-y-3">
            {preparation.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px] text-ink">
                <span aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 rounded border-2 border-brand/40" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function Journey() {
  return (
    <section aria-labelledby="journey-heading" className="py-20 sm:py-24">
      <Container className="max-w-2xl">
        <h2 id="journey-heading" className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Your Deep Cleaning Journey
        </h2>
        <ol className="mt-12 flex flex-col items-center">
          {journey.map(({ title, text }, i) => {
            const last = i === journey.length - 1;
            return (
              <li key={title} className="flex w-full flex-col items-center">
                <div
                  className={`w-full rounded-full px-6 py-5 text-center sm:px-10 ${
                    last ? "bg-wattle text-ink" : "bg-white ring-1 ring-line"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-ink sm:text-xl">{title}</h3>
                  <p className={`mt-1 text-sm sm:text-[15px] ${last ? "text-ink/75" : "text-ink-soft"}`}>{text}</p>
                </div>
                {!last && <ArrowDown className="my-3 h-6 w-6 text-brand" aria-hidden="true" />}
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

const related = [
  { label: "House Cleaning", path: "/services/house-cleaning/", text: "Regular or one-off cleaning to keep your home fresh week to week." },
  { label: "End of Lease Cleaning", path: "/services/end-of-lease-cleaning/", text: "A detailed move-out clean for your final rental inspection." },
  { label: "Commercial Cleaning", path: "/services/commercial-cleaning/", text: "Scheduled cleaning for offices, retail spaces and workplaces." },
  { label: "Oven Cleaning", path: "/services/oven-cleaning/", text: "Focused cleaning for grease and baked-on residue in the oven." },
  { label: "Tile & Grout Cleaning", path: "/services/tile-and-grout-cleaning/", text: "Extra attention for tiled areas and grout lines." },
];

export function AreaAndRelated() {
  return (
    <section aria-label="Service area and related services" className="border-t border-line bg-cream py-20 sm:py-24">
      <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Deep Cleaning Across Melbourne</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            We provide deep cleaning for homes throughout Greater Melbourne. That covers apartments in the
            Melbourne CBD and nearby Richmond and South Yarra, homes in the north around Brunswick and Preston,
            and properties in the west from Footscray through to Werribee and Point Cook. If you&apos;re
            somewhere else in the metro area, include your suburb when you request a quote and we&apos;ll
            confirm availability.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Looking for Another Type of Cleaning?</h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {related.map(({ label, path, text }) =>
              isLiveRoute(path) ? (
                <li key={path}>
                  <a href={path} className="group flex items-start justify-between gap-4 py-5">
                    <span>
                      <span className="font-semibold text-ink group-hover:text-brand">{label}</span>
                      <span className="mt-1 block text-sm text-ink-soft">{text}</span>
                    </span>
                    <ArrowUpRight
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ) : (
                <li key={path} className="py-5">
                  <span className="font-semibold text-ink">{label}</span>
                  <span className="mt-1 block text-sm text-ink-soft">{text}</span>
                </li>
              ),
            )}
          </ul>
          <a href="/" className="mt-6 inline-block text-sm font-semibold text-brand hover:text-brand-dark">
            All {siteConfig.name} services on the homepage
          </a>
        </div>
      </Container>
    </section>
  );
}

export function DeepCTA() {
  return (
    <section id="quote" aria-labelledby="deep-cta-heading" className="bg-wattle">
      <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
        <div>
          <h2
            id="deep-cta-heading"
            className="text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Ready to Give Your Home a Deeper Clean?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
            Tell us your property type, your suburb and the areas that need the most attention. We&apos;ll
            come back with a clear quote for your deep clean.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href={deepQuoteMailHref()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Get a Deep Cleaning Quote
          </a>
          <a
            href={siteConfig.contact.phone.href}
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold text-ink ring-2 ring-inset ring-ink/80 transition-colors hover:bg-ink/5"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Us
          </a>
        </div>
      </Container>
    </section>
  );
}
