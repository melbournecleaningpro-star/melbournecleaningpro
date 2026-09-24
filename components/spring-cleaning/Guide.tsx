import { ArrowRight, Mail, Phone, Scissors } from "lucide-react";
import { audiences, checklist, flow, pricingFactors, priorities, springQuoteMailHref } from "@/lib/spring-cleaning";
import { isLiveRoute, quoteHref, siteConfig } from "@/lib/site";
import { ButtonLink, Container } from "../ui";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const spring = new Set([8, 9, 10]); // Melbourne spring: September to November

/** Year strip: routine cleaning through the year vs a seasonal reset in spring. */
export function SeasonVsRegular() {
  return (
    <section aria-labelledby="season-vs-heading" className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 id="season-vs-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Seasonal Cleaning vs Regular Cleaning
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-ink">Regular cleaning</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                Designed to maintain the home as part of an ongoing routine.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand">Seasonal cleaning</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                A planned opportunity to give extra attention to areas that may not be part of every routine visit.
              </p>
            </div>
          </div>
        </div>

        <figure className="mt-12 overflow-x-auto rounded-2xl border border-line bg-white p-5 sm:p-7">
          <div className="min-w-[640px]" aria-hidden="true">
            <div className="grid grid-cols-[8rem_repeat(12,minmax(0,1fr))] gap-1.5 text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-soft">
              <span />
              {months.map((m, i) => (
                <span key={m} className={spring.has(i) ? "rounded bg-[#eaf5e4] py-1 text-brand" : "py-1"}>
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-[8rem_repeat(12,minmax(0,1fr))] items-center gap-1.5">
              <span className="text-left text-xs font-semibold text-ink">Regular routine</span>
              {months.map((m) => (
                <span key={m} className="flex justify-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-ink/25" />
                  <span className="h-2 w-2 rounded-full bg-ink/25" />
                </span>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-[8rem_repeat(12,minmax(0,1fr))] items-center gap-1.5">
              <span className="text-left text-xs font-semibold text-brand">Spring reset</span>
              {months.map((m, i) => (
                <span key={m} className="flex h-6 items-center justify-center">
                  {i === 9 ? (
                    <span className="rounded-full bg-wattle px-2 py-0.5 text-[10px] font-bold text-ink">Reset</span>
                  ) : spring.has(i) ? (
                    <span className="h-1 w-full rounded-full bg-[#f2b8c6]" />
                  ) : null}
                </span>
              ))}
            </div>
          </div>
          <figcaption className="mt-5 text-sm text-ink-soft">
            Illustration only. In Melbourne, spring runs from September to November. A seasonal clean doesn&apos;t
            automatically include every possible deep-cleaning task.
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-1"];
const colours = ["bg-[#eaf5e4]", "bg-[#fdebf0]", "bg-[#fff4d6]", "bg-[#e3f1ee]", "bg-[#fdebf0]"];

export function WhoMightBook() {
  return (
    <section aria-labelledby="who-spring-heading" className="bg-[#fbfbf3] py-20 sm:py-24">
      <Container>
        <h2 id="who-spring-heading" className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Who Might Book a Spring Clean?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-ink-soft sm:text-lg">
          Pretty much anyone who wants their home to feel reset as the weather turns.
        </p>
        <ul className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-5">
          {audiences.map(({ title, text }, i) => (
            <li
              key={title}
              className={`w-full max-w-[15rem] rounded-2xl p-5 shadow-card transition-transform hover:rotate-0 sm:w-60 ${tilts[i]} ${colours[i]}`}
            >
              <h3 className="font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Magazine "tear-out" checklist. Visual only: no downloadable file. */
export function TearOutChecklist() {
  return (
    <section id="checklist" aria-labelledby="checklist-spring-heading" className="py-20 sm:py-24">
      <Container>
        <div className="relative rounded-2xl border-2 border-dashed border-ink/30 bg-white p-6 sm:p-10">
          <span className="absolute -top-3.5 left-8 flex items-center gap-2 bg-white px-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
            <Scissors className="h-4 w-4" aria-hidden="true" /> Cut out &amp; keep
          </span>
          <div className="flex flex-col gap-2 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="checklist-spring-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Your Spring Cleaning Checklist
            </h2>
            <p className="text-sm text-ink-soft">A realistic starting point. Your scope is agreed with you.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {checklist.map(({ area, items }) => (
              <div key={area}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">{area}</h3>
                <ul className="mt-4 space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[15px] text-ink">
                      <span aria-hidden="true" className="h-4 w-4 shrink-0 rounded-[4px] border-2 border-ink/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Priorities presented as paint chips. */
export function PaintChipPriorities() {
  return (
    <section aria-labelledby="chips-heading" className="bg-[#eef6ea] py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 id="chips-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Pick Your Priorities
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Not every home needs exactly the same spring clean. Choose the focus that suits yours and tell us when
            you request a quote.
          </p>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {priorities.map(({ title, text, swatch }) => (
            <li key={title} className="overflow-hidden rounded-lg bg-white shadow-card ring-1 ring-line">
              <span aria-hidden="true" className={`block h-20 sm:h-24 ${swatch}`} />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-ink sm:text-base">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft sm:text-sm">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function SpringPricing() {
  return (
    <section aria-labelledby="spring-price-heading" className="py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
        <div>
          <h2 id="spring-price-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What Does Spring Cleaning Cost?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            There&apos;s no set price, because every home and every season&apos;s priorities are different. We
            quote on the home you actually have.
          </p>
          <ButtonLink href={quoteHref} size="lg" className="mt-8">
            Request a Spring Cleaning Quote
          </ButtonLink>
        </div>
        <aside aria-label="What affects the price" className="rounded-2xl border-l-4 border-wattle bg-[#fbfbf3] p-7 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">What affects the price</p>
          <ol className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {pricingFactors.map((f, i) => (
              <li key={f} className="flex gap-3 text-[15px] text-ink">
                <span className="w-5 shrink-0 text-sm font-light italic text-brand">{i + 1}</span>
                {f}
              </li>
            ))}
          </ol>
        </aside>
      </Container>
    </section>
  );
}

/** The process as one flowing sentence. */
export function FlowSentence() {
  return (
    <section aria-labelledby="flow-spring-heading" className="border-y border-line bg-white py-20 sm:py-24">
      <Container>
        <h2 id="flow-spring-heading" className="text-sm font-semibold uppercase tracking-[0.2em] text-wattle-dark">
          A simple seasonal reset
        </h2>
        <ol className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-2 text-2xl font-medium leading-snug tracking-tight text-ink sm:text-4xl sm:leading-tight">
          {flow.map((step, i) => (
            <li key={step} className="flex items-baseline gap-3">
              <span>
                <sup className="mr-1 text-xs font-semibold text-brand sm:text-sm">0{i + 1}</sup>
                <span className={i === flow.length - 1 ? "text-brand" : ""}>{step}</span>
              </span>
              {i < flow.length - 1 && <ArrowRight className="h-5 w-5 shrink-0 self-center text-ink/30 sm:h-7 sm:w-7" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

const related = [
  { path: "/services/house-cleaning/", before: "Want to keep the fresh feeling going? Book", anchor: "regular house cleaning", after: "after your seasonal reset." },
  { path: "/services/deep-cleaning/", before: "For heavy build-up in the kitchen or bathroom, a", anchor: "detailed deep clean", after: "goes further." },
  { path: "/services/move-in-cleaning/", before: "Moving house this spring? See", anchor: "move-in cleaning before you unpack", after: "." },
  { path: "/services/end-of-lease-cleaning/", before: "Leaving a rental instead?", anchor: "End of lease cleaning", after: "prepares it for inspection." },
  { path: "/services/airbnb-cleaning/", before: "Getting a short-stay ready for the warmer months?", anchor: "Airbnb cleaning between guests", after: "can help." },
  { path: "/services/office-cleaning/", before: "Refreshing the workplace too? Ask about", anchor: "office cleaning", after: "." },
];

export function AreaAndRelated() {
  return (
    <section aria-label="Service area and related services" className="py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Seasonal Home Cleaning Across Melbourne</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            From city apartments in the Melbourne CBD, Richmond and South Yarra to family homes in Brunswick,
            Preston and Footscray, we help households across Melbourne reset for the season. Our service area also
            reaches Werribee and Point Cook in the west, and Doncaster and Glen Waverley in the east. Spring can be a
            busy time, so include your suburb and preferred dates when you get in touch.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Related Services</h2>
          <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-ink-soft">
            {related.map(({ path, before, anchor, after }) => (
              <li key={path}>
                {before}{" "}
                {isLiveRoute(path) ? (
                  <a href={path} className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand">
                    {anchor}
                  </a>
                ) : (
                  <span className="font-semibold text-ink">{anchor}</span>
                )}
                {after === "." ? "." : ` ${after}`}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function SpringCTA() {
  return (
    <section
      id="quote"
      aria-labelledby="spring-cta-heading"
      className="relative overflow-hidden bg-[linear-gradient(to_bottom,#e7f3f7,#f7fbf2)]"
    >
      {/* blossom sprigs */}
      <svg aria-hidden="true" viewBox="0 0 200 120" className="pointer-events-none absolute -left-6 top-6 w-48 opacity-90 sm:w-64">
        <path d="M0 110C60 90 100 60 150 20" stroke="#7a5a3c" strokeWidth="4" fill="none" />
        {[[40, 94], [70, 80], [96, 64], [120, 46], [146, 24], [84, 84], [110, 58]].map(([x, y], i) => (
          <g key={i}><circle cx={x} cy={y} r="8" fill="#f2b8c6" /><circle cx={x} cy={y} r="3" fill="#f4b63f" /></g>
        ))}
      </svg>
      <svg aria-hidden="true" viewBox="0 0 200 120" className="pointer-events-none absolute -right-6 bottom-6 w-40 rotate-180 opacity-80 sm:w-56">
        <path d="M0 110C60 90 100 60 150 20" stroke="#7a5a3c" strokeWidth="4" fill="none" />
        {[[40, 94], [70, 80], [96, 64], [120, 46], [146, 24]].map(([x, y], i) => (
          <g key={i}><circle cx={x} cy={y} r="8" fill="#f2b8c6" /><circle cx={x} cy={y} r="3" fill="#f4b63f" /></g>
        ))}
      </svg>

      <Container className="relative py-24 text-center sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Refresh &middot; Declutter &middot; Detail &middot; Reset</p>
        <h2 id="spring-cta-heading" className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl">
          Give Your Home a Fresh Start This Season
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          Tell us about your home and the areas you&apos;d like to focus on, and we&apos;ll come back with a clear
          quote for your seasonal clean.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={springQuoteMailHref} size="lg">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Get a Spring Cleaning Quote
          </ButtonLink>
          <ButtonLink href={siteConfig.contact.phone.href} variant="secondary" size="lg">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
