import Image from "next/image";
import { Info } from "lucide-react";
import { images, scopeGroups, spaces } from "@/lib/commercial";
import { Container } from "../ui";

export function CommercialIntro() {
  return (
    <section aria-labelledby="com-intro-heading" className="py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:gap-20">
        <div>
          <p className="text-sm font-semibold text-brand">For business owners, managers &amp; property managers</p>
          <h2
            id="com-intro-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]"
          >
            Commercial Cleaning That Works Around Your Business
          </h2>
          <div className="mt-8 h-1 w-20 rounded-full bg-wattle" aria-hidden="true" />
          <Image
            src={images.workplace.src}
            width={images.workplace.width}
            height={images.workplace.height}
            alt={images.workplace.alt}
            loading="lazy"
            sizes="(min-width: 1024px) 480px, 100vw"
            className="mt-8 h-auto w-full rounded-2xl ring-1 ring-line"
          />
        </div>

        <div className="space-y-5 text-base leading-relaxed text-ink-soft sm:text-[17px]">
          <p>
            A workplace is judged on how it looks and feels every day, not just after a big clean. Staff
            notice when kitchens and bathrooms slip, and clients and customers notice entrances, floors and
            surfaces straight away. Commercial spaces need cleaning that happens consistently, on schedule,
            without someone in the office having to chase it up.
          </p>
          <p>
            Just as important is <strong className="font-semibold text-ink">when</strong> the cleaning
            happens. A clean that interrupts meetings, trading or client appointments creates a new problem.
            We plan schedules around your operating hours, whether that means cleaning before opening, after
            closing or during quieter parts of the day.
          </p>
          <p>
            No two businesses have quite the same needs. A small professional office, a retail floor with
            steady foot traffic and a shared building with common facilities all call for a different scope
            and frequency. The cleaning scope is adjusted to the property, so you&apos;re paying for the
            areas and tasks that matter to your premises rather than a generic package.
          </p>
          <p>
            Where it makes sense, we can set up a regular service on a daily, weekly, fortnightly or custom
            basis. One-off cleans are available too. Before you receive a quote, we&apos;ll discuss your
            requirements, including the areas to be cleaned, access arrangements and preferred times, so the
            quote reflects how your business actually operates.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function Spaces() {
  const featured = spaces.filter((s) => s.image);
  const others = spaces.filter((s) => !s.image);
  return (
    <section aria-labelledby="spaces-heading" className="bg-cream py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="spaces-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Commercial Spaces We Clean
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
            From open-plan offices to shopfronts, the cleaning scope is set around how each space is used.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
          {featured.map(({ title, text, icon: Icon, image }) => (
            <article key={title} className="overflow-hidden rounded-2xl bg-white ring-1 ring-line">
              {image && (
                <Image
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  loading="lazy"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-[16/9] h-auto w-full object-cover"
                />
              )}
              <div className="flex gap-4 p-6 sm:p-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink text-wattle">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:mt-6 lg:grid-cols-4 lg:gap-6">
          {others.map(({ title, text, icon: Icon }) => (
            <li key={title} className="rounded-2xl border-l-4 border-brand bg-white p-6 ring-1 ring-line">
              <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
              <h3 className="mt-4 font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function ScopeMatrix() {
  return (
    <section aria-labelledby="scope-heading" className="py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 id="scope-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What Can Be Included in Commercial Cleaning?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Services are grouped by area. You choose what&apos;s relevant to your premises, and the exact
            scope depends on the agreed service.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-line">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {scopeGroups.map(({ area, icon: Icon, items }, i) => (
              <div
                key={area}
                className={`border-line ${i > 0 ? "border-t sm:border-t-0" : ""} ${
                  i % 2 === 1 ? "sm:border-l" : ""
                } ${i >= 2 ? "sm:border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l" : ""}`}
              >
                <h3 className="flex items-center gap-3 bg-ink px-6 py-4 text-base font-semibold text-white">
                  <Icon className="h-5 w-5 text-wattle" aria-hidden="true" />
                  {area}
                </h3>
                <ul className="divide-y divide-line">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3 px-6 py-3.5 text-[15px] text-ink">
                      <span className="h-px w-3 shrink-0 bg-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="flex items-start gap-3 border-t border-line bg-brand-50 px-6 py-4 text-sm leading-relaxed text-ink-soft">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            The exact scope depends on the agreed service. Items are included when they&apos;re part of your
            quote, and anything not listed can be discussed.
          </p>
        </div>
      </Container>
    </section>
  );
}
