import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { audiences, processSteps, propertyTypes, showcase } from "@/lib/end-of-lease";
import { quoteHref } from "@/lib/site";
import { ButtonLink, Container, SectionHeading } from "../ui";

const moveOut = ["Dust along skirting and sills", "Grease on the cooktop and splashback", "Soap scum in the shower", "Marks around handles and switches"];
const ready = ["Surfaces wiped and dusted", "Kitchen degreased and wiped down", "Bathrooms cleaned and shined", "Floors vacuumed and mopped"];

/**
 * Visual section. Image cards are driven by `showcase` in lib/end-of-lease.ts,
 * so illustrations can be swapped for genuine job photos without layout changes.
 */
export function Showcase() {
  const [feature, ...rest] = showcase;
  return (
    <section aria-labelledby="showcase-heading" className="bg-ink py-20 text-white sm:py-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-wattle">The difference</p>
            <h2 id="showcase-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              From Move-Out Mess to Inspection Ready
            </h2>
          </div>

          {/* Before / after contrast as a text comparison, not a claimed customer result */}
          <div className="grid w-full max-w-xl grid-cols-[1fr_auto_1fr] items-start gap-3 text-sm sm:gap-4">
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <p className="font-semibold text-white/60">Moving out</p>
              <ul className="mt-2 space-y-1.5 text-white/60">
                {moveOut.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <ArrowRight className="mt-10 h-5 w-5 text-wattle" aria-hidden="true" />
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-wattle/40">
              <p className="font-semibold text-wattle">Inspection ready</p>
              <ul className="mt-2 space-y-1.5 text-white/85">
                {ready.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_1fr] lg:gap-6">
          <figure className="flex flex-col overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
            <Image
              src={feature.src}
              width={feature.width}
              height={feature.height}
              alt={feature.alt}
              sizes="(min-width: 1024px) 700px, 100vw"
              loading="lazy"
              className="h-auto w-full object-cover lg:min-h-0 lg:flex-1"
            />
            <figcaption className="flex items-start gap-3 p-5 text-[15px] text-white/75 sm:p-6">
              <span className="shrink-0 rounded-full bg-wattle px-2.5 py-0.5 text-xs font-semibold text-ink">
                {feature.label}
              </span>
              {feature.caption}
            </figcaption>
          </figure>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
            {rest.map((img) => (
              <figure key={img.src} className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
                <Image
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  alt={img.alt}
                  sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
                  loading="lazy"
                  className="aspect-[16/9] h-auto w-full object-cover"
                />
                <figcaption className="flex items-start gap-3 p-5 text-[15px] text-white/75">
                  <span className="shrink-0 rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-semibold text-white">
                    {img.label}
                  </span>
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Audience() {
  return (
    <section aria-labelledby="audience-heading" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="audience-heading"
          title="Who Can Book End of Lease Cleaning?"
          intro="Anyone responsible for getting a vacated rental property clean can request a quote."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(({ title, text, icon: Icon }) => (
            <li key={title} className="rounded-3xl border-t-4 border-brand bg-brand-50 p-6 sm:p-7">
              <Icon className="h-7 w-7 text-brand" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function Process() {
  return (
    <section aria-labelledby="process-heading" className="bg-cream py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="process-heading"
            align="left"
            eyebrow="Step by step"
            title="How End of Lease Cleaning Works"
            intro="From your first message to handing back the keys, here's how the process runs."
          />
          <ButtonLink href={quoteHref} className="mt-8">
            Start With a Free Quote
          </ButtonLink>
        </div>

        <ol className="relative">
          {processSteps.map(({ title, text, details }, i) => {
            const last = i === processSteps.length - 1;
            return (
              <li key={title} className="relative flex gap-5 pb-10 last:pb-0 sm:gap-7">
                {!last && (
                  <span aria-hidden="true" className="absolute left-6 top-14 bottom-2 w-px bg-brand/25 sm:left-7" />
                )}
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-base font-semibold tabular-nums text-brand shadow-card ring-1 ring-line sm:h-14 sm:w-14 sm:text-lg">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1 sm:pt-2">
                  <h3 className="text-lg font-semibold text-ink sm:text-xl">{title}</h3>
                  <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-ink-soft">{text}</p>
                  {details && (
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Details to include">
                      {details.map((d) => (
                        <li
                          key={d}
                          className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-ink ring-1 ring-line"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

export function PropertyTypes() {
  return (
    <section aria-labelledby="property-heading" className="py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <SectionHeading
            id="property-heading"
            align="left"
            title="End of Lease Cleaning for Melbourne Properties"
          />
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Melbourne&apos;s rental market ranges from CBD apartments to suburban family homes, and each
            layout brings its own cleaning considerations. Tell us about your property and we&apos;ll plan
            the clean around it.
          </p>
        </div>

        <ul className="divide-y divide-line rounded-3xl border border-line bg-white">
          {propertyTypes.map(({ title, text, icon: Icon }) => (
            <li key={title} className="flex gap-4 p-5 sm:gap-5 sm:p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-ink">{title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
