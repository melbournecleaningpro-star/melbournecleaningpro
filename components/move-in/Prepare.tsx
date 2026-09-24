import { ArrowRight, Check } from "lucide-react";
import { audiences, beforeBoxes, comparison, prep, priorities, propertyTypes, type Priority } from "@/lib/move-in";
import { isLiveRoute } from "@/lib/site";
import { Container } from "../ui";

/** Checklist drawn as taped moving boxes, each with a label. */
export function BeforeTheBoxes() {
  return (
    <section aria-labelledby="boxes-heading" className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-wattle-dark">Before the boxes arrive</p>
            <h2 id="boxes-heading" className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              The best time to clean? Before everything moves in.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              Once the removalists have been, every surface has something on it. A clean before moving day means
              nothing is in the way.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {beforeBoxes.map((item) => (
              <li
                key={item}
                className="relative flex min-h-36 flex-col justify-end overflow-hidden rounded-md bg-[#d9b98a] p-4 shadow-card"
              >
                {/* tape */}
                <span aria-hidden="true" className="absolute inset-x-0 top-0 mx-auto h-full w-10 bg-[#e8d0a8]/80" />
                <span aria-hidden="true" className="absolute inset-x-0 top-8 h-px bg-[#c4a06c]" />
                {/* label */}
                <span className="relative flex items-start gap-2.5 rounded-sm bg-white px-3 py-2.5 text-sm font-medium leading-snug text-ink shadow-sm">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-brand text-white">
                    <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function MoveInVsRegular() {
  const houseLive = isLiveRoute("/services/house-cleaning/");
  const eolLive = isLiveRoute("/services/end-of-lease-cleaning/");
  const link = "font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand";
  return (
    <section aria-labelledby="vs-movein-heading" className="border-y border-line bg-white py-20 sm:py-24">
      <Container className="max-w-5xl">
        <h2 id="vs-movein-heading" className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Move-In Cleaning vs Regular Cleaning
        </h2>

        <div className="mt-12 hidden grid-cols-[1fr_9rem_1fr] items-end gap-6 md:grid">
          <p className="text-right text-lg font-semibold text-ink-soft">Regular cleaning</p>
          <span />
          <p className="text-lg font-semibold text-brand">Move-in cleaning</p>
        </div>
        <dl className="mt-4 divide-y divide-line">
          {comparison.map(({ label, regular, moveIn }) => (
            <div key={label} className="grid grid-cols-1 gap-2 py-5 md:grid-cols-[1fr_9rem_1fr] md:items-center md:gap-6">
              <dt className="order-first text-center md:order-none md:col-start-2 md:row-start-1">
                <span className="inline-block rounded-full border border-line px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  {label}
                </span>
              </dt>
              <dd className="text-[15px] text-ink-soft md:col-start-1 md:row-start-1 md:text-right">
                <span className="font-semibold text-ink md:hidden">Regular: </span>
                {regular}
              </dd>
              <dd className="text-[15px] text-ink md:col-start-3 md:row-start-1">
                <span className="font-semibold text-brand md:hidden">Move-in: </span>
                {moveIn}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mx-auto mt-10 max-w-2xl text-center text-[15px] leading-relaxed text-ink-soft">
          Move-in cleaning isn&apos;t automatically &ldquo;more&rdquo; than a regular clean. It&apos;s timed and
          focused differently. Once you&apos;ve settled in,{" "}
          {houseLive ? <a href="/services/house-cleaning/" className={link}>regular house cleaning</a> : "regular house cleaning"}{" "}
          keeps things that way. Leaving a rental instead?{" "}
          {eolLive ? <a href="/services/end-of-lease-cleaning/" className={link}>End of lease cleaning</a> : "End of lease cleaning"}{" "}
          prepares a property for handover and inspection.
        </p>
      </Container>
    </section>
  );
}

export function WhoItsFor() {
  return (
    <section aria-labelledby="who-movein-heading" className="py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
        <h2 id="who-movein-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Who Is Move-In Cleaning For?
        </h2>
        <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
          {audiences.map(({ title, text }) => (
            <li key={title} className="flex gap-3 border-t border-line py-4">
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-wattle-dark" aria-hidden="true" />
              <p className="text-[15px] leading-relaxed text-ink-soft">
                <span className="font-semibold text-ink">{title}.</span> {text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function PropertyTypesType() {
  return (
    <section aria-labelledby="movein-types-heading" className="bg-ink py-20 text-white sm:py-24">
      <Container>
        <h2 id="movein-types-heading" className="text-sm font-semibold uppercase tracking-[0.2em] text-wattle">
          For every kind of property
        </h2>
        <p className="mt-8 text-3xl font-semibold leading-snug tracking-tight sm:text-5xl sm:leading-[1.2]">
          {propertyTypes.map((t, i) => (
            <span key={t}>
              <span className={i % 2 === 0 ? "text-white" : "text-white/45"}>{t}</span>
              {i < propertyTypes.length - 1 && (
                <span className="mx-3 text-wattle" aria-hidden="true">
                  /
                </span>
              )}{" "}
            </span>
          ))}
        </p>
        <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-white/65">
          Houses, apartments and units all differ, so every clean is planned around
          the layout, size and condition of your new place. Recently renovated or newly prepared properties can be
          cleaned where appropriate. Heavy builders&apos; cleaning may need separate arrangements.
        </p>
      </Container>
    </section>
  );
}

export function BeforeWeArrive() {
  return (
    <section aria-labelledby="prep-movein-heading" className="py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 id="prep-movein-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Your Move-In Day Prep
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            There&apos;s no heavy lifting on your side. A few practical details simply help the clean go smoothly.
          </p>
        </div>

        {/* Ruled "note" card */}
        <div className="rounded-lg bg-[#fffdf7] p-7 shadow-lift ring-1 ring-line sm:p-9">
          <p className="border-b-2 border-wattle pb-3 text-sm font-semibold uppercase tracking-[0.16em] text-ink">
            Before we arrive
          </p>
          <ol className="mt-2 divide-y divide-dashed divide-ink/15">
            {prep.map(({ title, text }, i) => (
              <li key={title} className="flex gap-3 py-3">
                <span className="w-5 shrink-0 text-sm font-semibold tabular-nums text-wattle-dark">{i + 1}.</span>
                <p className="text-[15px] leading-relaxed text-ink-soft">
                  <span className="font-semibold text-ink">{title}.</span> {text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

/** Tiny floor-plan schematic highlighting the priority area. */
function PlanIcon({ focus }: { focus: Priority["id"] }) {
  const on = "#0b6e69";
  const off = "#e6ecea";
  const kitchen = focus === "kitchen" || focus === "whole" ? on : off;
  const bath = focus === "bathroom" || focus === "whole" ? on : off;
  const rest = focus === "whole" ? on : off;
  return (
    <svg viewBox="0 0 120 80" className="h-20 w-full" aria-hidden="true">
      <rect x="2" y="2" width="116" height="76" rx="3" fill="#fff" stroke="#10272f" strokeWidth="3" />
      <rect x="6" y="6" width="50" height="32" fill={kitchen} />
      <rect x="60" y="6" width="26" height="32" fill={bath} />
      <rect x="90" y="6" width="24" height="32" fill={rest} />
      <rect x="6" y="42" width="108" height="32" fill={rest} />
      {focus === "floors" && (
        <g stroke="#0b6e69" strokeWidth="2" opacity=".8">
          {Array.from({ length: 14 }).map((_, i) => (
            <path key={i} d={`M${6 + i * 8} 74l8-8`} />
          ))}
          <path d="M6 74h108M6 38h108" />
        </g>
      )}
      <path d="M58 2v36M88 2v36M2 40h116" stroke="#10272f" strokeWidth="2" />
      <path d="M28 40h14" stroke="#fff" strokeWidth="4" />
    </svg>
  );
}

export function Priorities() {
  return (
    <section aria-labelledby="priorities-heading" className="bg-brand-50 py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 id="priorities-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Choose What Matters Most
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Every new property is different. Some need the kitchen sorted before anything else, others need the
            whole place reset. Tell us the property&apos;s condition and your priorities when you request a quote.
          </p>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {priorities.map(({ id, title, text }) => (
            <li key={id} className="rounded-2xl bg-white p-6 ring-1 ring-line">
              <PlanIcon focus={id} />
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
