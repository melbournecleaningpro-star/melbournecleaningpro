import Image from "next/image";
import {
  ArrowRight,
  Building,
  CalendarDays,
  Check,
  Clock,
  Home as HomeIcon,
  KeyRound,
  MapPin,
  Repeat,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import {
  comparison,
  commonAreas,
  discussFactors,
  homes,
  hotspots,
  images,
  journey,
  notSure,
  prepNotes,
  QUOTE_PATH,
  quoteFactors,
  situations,
} from "@/lib/house-cleaning";
import { isLiveRoute } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";

const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/** Text on warm paper to the left; the home scene bleeds off the right edge with a small "week" card. */
export function HouseHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section aria-labelledby="house-hero-heading" className="overflow-hidden bg-[#f7f1e6]">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="px-5 pb-10 pt-6 sm:px-6 sm:pt-8 lg:py-16 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-12">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.24em] text-brand lg:mt-16">House cleaning</p>
          <h1 id="house-hero-heading" className="mt-4 text-[2.5rem] font-semibold leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-[3.6rem] xl:text-[4rem]">
            A Cleaner Home. <span className="text-brand">A Little More Time for You.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
            Melbourne Cleaning Pro looks after homes that need regular upkeep, a one-off hand, or a
            practical reset, with the kitchen, bathrooms, living areas and bedrooms looked after the way you agree.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={QUOTE_PATH} size="lg">
              Request a Quote
            </ButtonLink>
            <ButtonLink href="/services/" variant="secondary" size="lg">
              Explore Our Services
            </ButtonLink>
          </div>
        </div>

        <div className="relative px-5 pb-16 sm:px-6 lg:px-0 lg:py-10">
          <Image
            src={images.living.src}
            width={images.living.width}
            height={images.living.height}
            alt={images.living.alt}
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="aspect-[4/3] h-auto w-full rounded-[2rem] object-cover lg:h-full lg:rounded-l-[3rem] lg:rounded-r-none"
          />
          {/* the rhythm of the week */}
          <div className="absolute bottom-6 left-8 right-8 rounded-2xl bg-white p-4 shadow-lift ring-1 ring-line sm:left-auto sm:right-10 sm:w-80 lg:bottom-16 lg:left-[-3rem] lg:right-auto">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
              <CalendarDays className="h-4 w-4 text-brand" aria-hidden="true" /> Your week
            </p>
            <ol className="mt-3 grid grid-cols-7 gap-1 text-center" aria-label="Example week with one cleaning day">
              {week.map((d, i) => (
                <li key={d} className={`rounded-lg py-1.5 text-[11px] font-semibold ${i === 3 ? "bg-brand text-white" : "bg-[#f7f1e6] text-ink-soft"}`}>
                  {d}
                  {i === 3 && <span className="sr-only"> (cleaning day)</span>}
                </li>
              ))}
            </ol>
            <p className="mt-3 text-xs text-ink-soft">Weekly, fortnightly, monthly or one-off.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const situationIcons: Record<string, LucideIcon> = { regular: Repeat, "one-off": CalendarDays, deep: Sparkles };

export function WhichClean() {
  return (
    <section aria-labelledby="which-clean-heading" className="py-20 sm:py-24">
      <Container>
        <h2 id="which-clean-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          What kind of clean do you need?
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {situations.map(({ id, title, text, cta, href }, i) => {
            const Icon = situationIcons[id];
            return (
              <li key={id}>
                <a
                  href={href}
                  className="group flex h-full flex-col rounded-3xl bg-[#f7f1e6] p-6 transition hover:-translate-y-0.5 hover:bg-[#f1e8d8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30 sm:p-7"
                >
                  <span className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="text-4xl font-light text-ink/15">{String.fromCharCode(65 + i)}</span>
                  </span>
                  <span className="mt-6 text-xl font-semibold text-ink">{title}</span>
                  <span className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{text}</span>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    {cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

/** Numbered markers over the open-plan scene, explained in a legend (nothing is hover-only). */
export function EverydayAreas() {
  return (
    <section aria-labelledby="everyday-areas-heading" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 id="everyday-areas-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            The everyday areas that add up
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Regular house cleaning is mostly about keeping up with the places that get used every single day, so they
            never get the chance to build up.
          </p>
        </div>
        <figure className="mt-12">
          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src={images.openPlan.src}
              width={images.openPlan.width}
              height={images.openPlan.height}
              alt={images.openPlan.alt}
              loading="lazy"
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="aspect-[5/3] h-auto w-full object-cover"
            />
            {hotspots.map((h, i) => (
              <span
                key={h.id}
                aria-hidden="true"
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
                className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white ring-4 ring-white/70 sm:h-9 sm:w-9 sm:text-sm"
              >
                {i + 1}
              </span>
            ))}
          </div>
          <figcaption className="sr-only">Illustration of an open-plan home with six numbered high-use areas</figcaption>
        </figure>
        <ol className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {hotspots.map((h, i) => (
            <li key={h.id} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">{i + 1}</span>
              <div>
                <h3 className="font-semibold text-ink">{h.title}</h3>
                <p className="mt-0.5 text-[15px] leading-relaxed text-ink-soft">{h.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function ScopeSection() {
  return (
    <section aria-labelledby="scope-house-heading" className="py-20 sm:py-24">
      <Container>
        <h2 id="scope-house-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          What Can House Cleaning Include?
        </h2>
        <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-3xl ring-1 ring-line md:grid-cols-2">
          <div className="bg-white p-6 sm:p-9">
            <h3 className="text-lg font-semibold text-ink">Common cleaning areas</h3>
            <ul className="mt-5 space-y-3">
              {commonAreas.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[15px] text-ink sm:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={2.5} aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#f7f1e6] p-6 sm:p-9">
            <h3 className="text-lg font-semibold text-ink">Discussed with you</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Some requirements are agreed separately, depending on:
            </p>
            <ul className="mt-4 space-y-2.5">
              {discussFactors.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[15px] text-ink">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-wattle-dark" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              There&apos;s no one-size checklist; your clean is shaped around your home. Heavy furniture isn&apos;t moved.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** A month of dots per option, showing each rhythm without ranking them. */
export function RegularVsOneOff() {
  return (
    <section aria-labelledby="compare-house-heading" className="bg-ink py-20 text-white sm:py-24">
      <Container>
        <h2 id="compare-house-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Regular, one-off or deep?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Different situations, different rhythms. None is better than the others; it depends on what your home needs.
        </p>
        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {comparison.map(({ id, title, text, rhythm, days, path }) => (
            <li key={id} className="flex flex-col rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 sm:p-7">
              <div aria-hidden="true" className="grid w-full max-w-[14rem] grid-cols-7 gap-1.5">
                {Array.from({ length: 28 }, (_, d) => (
                  <span
                    key={d}
                    className={`aspect-square rounded-[4px] ${
                      days.includes(d) ? (id === "deep" ? "col-span-1 bg-wattle ring-2 ring-wattle/40" : "bg-wattle") : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-wattle">{rhythm}</p>
              <h3 className="mt-2 text-xl font-semibold">{title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-white/70">{text}</p>
              {path && isLiveRoute(path) && (
                <a href={path} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-wattle hover:text-white">
                  About deep cleaning <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

const noteColours = ["bg-[#fff4c9]", "bg-[#dff1ee]", "bg-[#fde2e8]", "bg-[#fff4c9]", "bg-[#dff1ee]"];
const noteTilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-1"];

/** Preparation tips pinned like notes on a fridge door. */
export function Preparation() {
  return (
    <section aria-labelledby="prep-house-heading" className="py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
        <div>
          <h2 id="prep-house-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A Little Preparation Can Help
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            You don&apos;t need to empty the house. A few small things just help the time go into cleaning.
          </p>
        </div>
        <div className="rounded-[2rem] bg-[#e8eeec] p-6 sm:p-10">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {prepNotes.map((n, i) => (
              <li key={n} className={`relative p-5 pt-7 text-[15px] font-medium leading-snug text-ink shadow-card ${noteColours[i]} ${noteTilts[i]}`}>
                <span aria-hidden="true" className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-brand shadow" />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/** The journey as a to-do list being ticked off. */
export function ToDoJourney() {
  return (
    <section aria-labelledby="todo-heading" className="bg-[#f7f1e6] py-20 sm:py-24">
      <Container className="max-w-3xl">
        <h2 id="todo-heading" className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          From &ldquo;I Need to Clean This&rdquo; to &ldquo;That&apos;s Done.&rdquo;
        </h2>
        <div className="mt-10 rounded-3xl bg-white p-6 shadow-lift ring-1 ring-line sm:p-9">
          <p className="border-b border-dashed border-line pb-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft">
            To do: get the house cleaned
          </p>
          <ol className="mt-2">
            {journey.map(({ title, text }, i) => (
              <li key={title} className="flex gap-4 border-b border-dashed border-line py-5 last:border-b-0">
                <span aria-hidden="true" className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 border-brand bg-brand-50 text-brand">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">
                    <span className="mr-2 text-sm font-semibold text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
                    {title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

const homeIcons: Record<string, LucideIcon> = { apartment: Building, family: HomeIcon, rental: KeyRound, busy: Clock };

export function DifferentHomes() {
  return (
    <section aria-labelledby="homes-heading" className="py-20 sm:py-24">
      <Container>
        <h2 id="homes-heading" className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Different homes, different needs
        </h2>
        <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {homes.map(({ id, title, text }) => {
            const Icon = homeIcons[id];
            return (
              <li key={id}>
                <Icon className="h-9 w-9 text-brand" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{text}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export function NotSureHouse() {
  return (
    <section aria-labelledby="not-sure-house-heading" className="border-y border-line bg-white py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
        <h2 id="not-sure-house-heading" className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Not sure which service?
        </h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {notSure.map(({ q, label, path }) => {
            const live = isLiveRoute(path.split("?")[0]);
            return (
              <li key={q} className="flex items-center justify-between gap-3 rounded-2xl bg-[#f7f1e6] px-4 py-3">
                <span className="text-[15px] text-ink">{q}</span>
                {live ? (
                  <a href={path} className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-brand ring-1 ring-brand/20 transition hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30">
                    {label}
                  </a>
                ) : (
                  <span className="shrink-0 text-sm font-semibold text-ink-soft">{label}</span>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export function MelbourneHouse() {
  return (
    <section aria-labelledby="melbourne-house-heading" className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-5 rounded-3xl bg-brand-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="flex gap-4">
            <MapPin className="mt-1 h-7 w-7 shrink-0 text-brand" aria-hidden="true" />
            <div>
              <h2 id="melbourne-house-heading" className="text-2xl font-semibold tracking-tight text-ink">
                House Cleaning Across Melbourne
              </h2>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
                We clean homes across Melbourne, from city apartments to family homes in the suburbs. Availability
                depends on your location and what you need, so include your suburb when you get in touch.
              </p>
            </div>
          </div>
          <ButtonLink href="/service-areas/" variant="secondary" className="shrink-0">
            See Service Areas
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

/** Quote factors laid out like a receipt that deliberately has no prices on it. */
export function QuoteReceipt() {
  return (
    <section aria-labelledby="house-quote-heading" className="bg-[#f7f1e6] py-20 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <h2 id="house-quote-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What Affects Your Cleaning Quote?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            There isn&apos;t a price list, because no two homes are the same. Your quote is prepared from the details
            you share, and it&apos;s free with no obligation.
          </p>
          <ButtonLink href={QUOTE_PATH} size="lg" className="mt-8">
            Request a Quote
          </ButtonLink>
        </div>
        <div className="mx-auto w-full max-w-sm bg-white px-7 pb-8 pt-7 font-mono text-sm text-ink shadow-lift [clip-path:polygon(0_0,100%_0,100%_calc(100%-10px),95%_100%,90%_calc(100%-10px),85%_100%,80%_calc(100%-10px),75%_100%,70%_calc(100%-10px),65%_100%,60%_calc(100%-10px),55%_100%,50%_calc(100%-10px),45%_100%,40%_calc(100%-10px),35%_100%,30%_calc(100%-10px),25%_100%,20%_calc(100%-10px),15%_100%,10%_calc(100%-10px),5%_100%,0_calc(100%-10px))]">
          <p className="text-center font-sans text-base font-semibold">Your house cleaning quote</p>
          <p className="mt-1 text-center text-xs text-ink-soft">Worked out for your home</p>
          <ul className="mt-6 space-y-2.5 border-y border-dashed border-ink/20 py-4">
            {quoteFactors.map((f) => (
              <li key={f} className="flex items-baseline gap-2">
                <span>{f}</span>
                <span aria-hidden="true" className="flex-1 border-b border-dotted border-ink/25" />
                <span className="text-ink-soft">
                  <span aria-hidden="true">✓</span>
                  <span className="sr-only">considered</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 flex justify-between font-semibold">
            <span>Quote</span>
            <span>Free</span>
          </p>
        </div>
      </Container>
    </section>
  );
}

export function HouseCTA() {
  return (
    <section id="quote" aria-labelledby="house-cta-heading" className="py-20 sm:py-24">
      <Container className="max-w-5xl text-center">
        <ol aria-hidden="true" className="mx-auto grid max-w-md grid-cols-7 gap-1.5">
          {week.map((d, i) => (
            <li
              key={d}
              className={`rounded-xl py-2.5 text-xs font-semibold ${i === 5 ? "bg-wattle text-ink" : i === 3 ? "bg-brand text-white" : "bg-[#f7f1e6] text-ink-soft"}`}
            >
              {d}
            </li>
          ))}
        </ol>
        <h2 id="house-cta-heading" className="mx-auto mt-10 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl">
          Ready to Make More Room in Your Week?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          Tell us about your home, how often you&apos;d like help and what matters most, and we&apos;ll come back with
          a quote.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={QUOTE_PATH} size="lg">
            Request a Quote
          </ButtonLink>
          <ButtonLink href="/contact/" variant="secondary" size="lg">
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
