import { CircleCheck, Info, Sparkles } from "lucide-react";
import { frequencyOptions, inclusions, propertyTypes, qualityChecks } from "@/lib/airbnb";
import { Container } from "../ui";

const weekdays = ["M", "T", "W", "T", "F", "S", "S"];
// Illustrative three-week booking pattern: stays as [firstNight, lastNight] day indexes.
const stays: [number, number][] = [
  [0, 2],
  [3, 5],
  [6, 9],
  [10, 12],
  [13, 16],
  [17, 20],
];
const turnoverDays = new Set(stays.slice(1).map(([start]) => start));
const stayIndex = (d: number) => stays.findIndex(([a, b]) => d >= a && d <= b);

function BookingCalendar() {
  return (
    <figure className="rounded-[1.75rem] bg-white p-6 shadow-card ring-1 ring-line sm:p-8">
      <figcaption className="flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-ink">Example booking pattern</span>
        <span className="text-xs text-ink-soft">3 weeks</span>
      </figcaption>
      <div aria-hidden="true" className="mt-6">
        <div className="grid grid-cols-7 gap-1.5 text-center text-[11px] font-medium text-ink-soft">
          {weekdays.map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-1.5">
          {Array.from({ length: 21 }).map((_, d) => {
            const s = stayIndex(d);
            const turnover = turnoverDays.has(d);
            return (
              <span
                key={d}
                className={`relative flex h-10 items-center justify-center rounded-md text-[11px] font-medium sm:h-11 ${
                  s % 2 === 0 ? "bg-brand/80 text-white" : "bg-brand-100 text-ink"
                }`}
              >
                {d + 1}
                {turnover && (
                  <span className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-wattle text-ink ring-2 ring-white">
                    <Sparkles className="h-3 w-3" />
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-soft">
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-brand/80" aria-hidden="true" />
          <span className="h-3 w-3 rounded-sm bg-brand-100" aria-hidden="true" /> Guest stays
        </span>
        <span className="flex items-center gap-1.5">
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-wattle" aria-hidden="true" /> Turnover clean
        </span>
      </div>
      <p className="mt-3 text-xs text-ink-soft">Illustration only. Your schedule depends on your bookings.</p>
    </figure>
  );
}

export function AirbnbFrequency() {
  return (
    <section aria-labelledby="airbnb-freq-heading" className="bg-brand-50 py-20 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <h2 id="airbnb-freq-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            How Often Does the Property Need Cleaning?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            It depends on your booking pattern and the property. A busy one-bedroom apartment and a holiday home
            booked on weekends need very different schedules.
          </p>
          <ul className="mt-8 space-y-3">
            {frequencyOptions.map(({ title, text }) => (
              <li key={title} className="rounded-2xl bg-white px-5 py-4 ring-1 ring-line">
                <p className="font-semibold text-ink">{title}</p>
                <p className="mt-0.5 text-sm text-ink-soft">{text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft">
            Availability for each option depends on timing and location. Tell us about your bookings and
            we&apos;ll discuss a schedule that suits the property.
          </p>
        </div>
        <BookingCalendar />
      </Container>
    </section>
  );
}

const shades = ["bg-ink text-white", "bg-brand text-white", "bg-wattle text-ink", "bg-brand-dark text-white", "bg-[#0e7f79] text-white", "bg-wattle-dark text-ink"];

/** Property types drawn as a small skyline of blocks. */
export function PropertySkyline() {
  return (
    <section aria-labelledby="stay-types-heading" className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-end lg:gap-16">
          <div>
            <h2 id="stay-types-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Short-Stay Properties We Clean
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              From studio apartments in the city to family houses in the suburbs, the turnover is tailored to the
              layout and size of each property.
            </p>
          </div>
          <ul className="grid grid-cols-3 items-end gap-x-2 gap-y-4 sm:grid-cols-6 sm:gap-3 sm:border-b-4 sm:border-ink">
            {propertyTypes.map(({ name, icon: Icon, height }, i) => (
              <li
                key={name}
                className={`flex flex-col items-center justify-between rounded-t-2xl border-b-4 border-ink px-2 pb-3 pt-4 text-center sm:border-b-0 ${height} ${shades[i]}`}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
                <span lang="en-AU" className="w-full hyphens-auto text-[11px] font-semibold leading-tight [overflow-wrap:anywhere] sm:text-xs">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function Included() {
  return (
    <section id="included" aria-labelledby="included-heading" className="border-t border-line bg-[#fbf7f0] py-20 sm:py-24">
      <Container className="max-w-5xl">
        <h2 id="included-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          What a Turnover Clean Includes
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          A quick summary of the service. The exact tasks are agreed for your property.
        </p>
        <ul className="mt-10 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
          {inclusions.map(({ title, text, icon: Icon }) => (
            <li key={title} className="flex gap-4 border-b border-line py-5">
              <Icon className="mt-0.5 h-6 w-6 shrink-0 text-ink" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-ink">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 flex gap-2.5 text-sm leading-relaxed text-ink-soft">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
          Not included in this cleaning scope: laundry, linen changes, restocking of guest supplies, key handling
          and maintenance.
        </p>
      </Container>
    </section>
  );
}

export function QualityCheck() {
  return (
    <section aria-labelledby="quality-heading" className="py-20 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-wattle-dark">Final check</p>
          <h2 id="quality-heading" className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Before the Next Guest Arrives
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Once the main cleaning is done, the property gets a final walk-through to look for obvious missed
            areas and check the overall presentation.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            It&apos;s a practical last look with fresh eyes before the next check-in, not a formal inspection.
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm rounded-[2rem] bg-ink p-3 shadow-lift">
          <div className="rounded-[1.6rem] bg-white p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-ink">Property status</p>
              <span className="rounded-full bg-wattle px-2.5 py-1 text-xs font-semibold text-ink">Guest ready</span>
            </div>
            <span aria-hidden="true" className="mt-4 block h-1.5 rounded-full bg-brand" />
            <ul className="mt-5 space-y-3.5">
              {qualityChecks.map((c) => (
                <li key={c} className="flex items-center gap-3 text-[15px] text-ink">
                  <CircleCheck className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
