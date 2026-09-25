import Image from "next/image";
import { Check, Mail, Phone } from "lucide-react";
import { images, postConstructionQuoteMailHref, pricingFactors, priorities, process, stages } from "@/lib/post-construction";
import { isLiveRoute, quoteHref, siteConfig } from "@/lib/site";
import { ButtonLink, Container } from "../ui";

/** Priorities as a project completion board (punch list). */
export function CompletionBoard() {
  return (
    <section aria-labelledby="board-heading" className="bg-[#eef0ee] py-20 sm:py-24">
      <Container className="max-w-5xl">
        <h2 id="board-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Cleaning Priorities
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          How a post-construction clean works through the property, from the heaviest dust to the final details.
        </p>

        <div className="mt-10 overflow-hidden rounded-lg bg-ink text-white shadow-lift">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
            <p className="text-sm font-semibold">Completion board</p>
            <p className="text-xs uppercase tracking-[0.16em] text-white/50">Post-construction clean</p>
          </div>
          <ol>
            {priorities.map(({ title, text }, i) => (
              <li key={title} className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 border-b border-white/10 px-5 py-5 last:border-b-0 sm:grid-cols-[8rem_1fr_7rem] sm:items-center sm:px-7">
                <span className="whitespace-nowrap font-mono text-xs font-semibold tracking-[0.1em] text-wattle sm:text-sm">
                  PRIORITY {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-2 sm:col-span-1">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-0.5 text-sm text-white/60">{text}</p>
                </div>
                <span className="col-span-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand/30 px-2.5 py-1 text-xs font-semibold text-white/90 sm:col-span-1 sm:justify-self-end">
                  <Check className="h-3.5 w-3.5 text-wattle" strokeWidth={3} aria-hidden="true" />
                  In scope
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

export function PostPricing() {
  return (
    <section aria-labelledby="pc-price-heading" className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <h2 id="pc-price-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              How Much Does Post-Construction Cleaning Cost?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              No two projects leave the same amount of dust behind, so there&apos;s no fixed price. Your quote is
              based on the project and the property:
            </p>
          </div>
          <ButtonLink href={quoteHref} size="lg" className="sm:self-start lg:self-end">
            Request a Post-Construction Cleaning Quote
          </ButtonLink>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pricingFactors.map((f) => (
            <li key={f} className="relative px-5 py-6 text-[15px] font-medium text-ink">
              {/* crop marks */}
              <span aria-hidden="true" className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-ink/40" />
              <span aria-hidden="true" className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-ink/40" />
              <span aria-hidden="true" className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-ink/40" />
              <span aria-hidden="true" className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-ink/40" />
              {f}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Process shown as a simple project schedule (Gantt-style bars, no dates). */
export function ProjectSchedule() {
  const cols = 8;
  return (
    <section aria-labelledby="schedule-pc-heading" className="border-t border-line py-20 sm:py-24">
      <Container>
        <h2 id="schedule-pc-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          How the Service Works
        </h2>
        <ol className="mt-10 space-y-3">
          {process.map(({ title, start, span }, i) => (
            <li key={title} className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[19rem_1fr] lg:gap-6">
              <p className="text-[15px] font-semibold text-ink">
                <span className="mr-2 text-xs tabular-nums text-wattle-dark">{String(i + 1).padStart(2, "0")}</span>
                {title}
              </p>
              <div
                aria-hidden="true"
                className="grid h-9 rounded-sm bg-[linear-gradient(to_right,rgb(16_39_47/0.08)_1px,transparent_1px)] bg-[size:12.5%_100%]"
                style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
              >
                <span
                  className={`my-1.5 rounded-sm ${i === process.length - 1 ? "bg-wattle" : "bg-brand"}`}
                  style={{ gridColumn: `${start + 1} / span ${span}` }}
                />
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-ink-soft">Timing depends on the project. The chart shows the order of steps, not a schedule.</p>
      </Container>
    </section>
  );
}

const related = [
  { path: "/services/deep-cleaning/", before: "For rooms that weren't part of the renovation, a", anchor: "deep clean", after: "tackles built-up grime." },
  { path: "/services/tile-and-grout-cleaning/", before: "New or existing tiles left dusty and marked? Ask about", anchor: "tile and grout cleaning", after: "." },
  { path: "/services/move-in-cleaning/", before: "Moving in after the renovation? Book a", anchor: "move-in clean before you unpack", after: "." },
  { path: "/services/house-cleaning/", before: "Once you're settled,", anchor: "regular house cleaning", after: "keeps it that way." },
  { path: "/services/end-of-lease-cleaning/", before: "Renovating a rental between tenants? See", anchor: "end of lease cleaning", after: "." },
  { path: "/services/commercial-cleaning/", before: "Fitting out a shop or studio? We also offer", anchor: "commercial cleaning", after: "." },
  { path: "/services/office-cleaning/", before: "Refurbished workplace? Ongoing", anchor: "office cleaning", after: "can be scheduled around your hours." },
  { path: "/services/airbnb-cleaning/", before: "Renovated a short-stay property?", anchor: "Airbnb cleaning between guests", after: "can follow." },
];

export function AreaAndRelated() {
  return (
    <section aria-label="Service area and related services" className="bg-[#eef0ee] py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Renovation Cleaning Across Melbourne</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            Renovations happen all over Melbourne, from apartment refits in the Melbourne CBD, Richmond and South
            Yarra to extensions and new kitchens in Brunswick, Preston and Footscray. We also clean properties out
            west in Werribee and Point Cook, and in the east around Doncaster and Glen Waverley. Tell us the suburb,
            what work was done and when the trades will be finished, and we&apos;ll confirm what we can arrange.
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

export function PostCTA() {
  return (
    <section id="quote" aria-labelledby="pc-cta-heading" className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 overflow-hidden rounded-lg border-2 border-ink lg:grid-cols-2">
          <div className="relative">
            <Image
              src={images.ready.src}
              width={images.ready.width}
              height={images.ready.height}
              alt={images.ready.alt}
              loading="lazy"
              sizes="(min-width: 1024px) 620px, 100vw"
              className="h-full w-full object-cover"
            />
            <span className="absolute right-4 top-4 inline-flex -rotate-6 items-center gap-2 rounded-md border-2 border-brand bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-[0.14em] text-brand">
              <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
              Ready space
            </span>
          </div>

          <div className="bg-ink p-8 text-white sm:p-10 lg:p-12">
            <ol aria-label="Project status" className="grid grid-cols-4 gap-2">
              {stages.map((s) => (
                <li key={s}>
                  <span aria-hidden="true" className="block h-1.5 rounded-full bg-wattle" />
                  <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.1em] text-white/60 sm:text-[11px]">{s}</span>
                </li>
              ))}
            </ol>
            <h2 id="pc-cta-heading" className="mt-10 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Turn the Finished Project Into a Ready Space
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Homeowners, builders and property managers: tell us what work was done, the size of the property and
              when it needs to be ready. We&apos;ll come back with a clear quote for the post-construction clean.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={postConstructionQuoteMailHref} variant="accent" size="lg" className="sm:whitespace-nowrap">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Get a Post-Construction Cleaning Quote
              </ButtonLink>
              <ButtonLink href={siteConfig.contact.phone.href} variant="ghost-light" size="lg">
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
