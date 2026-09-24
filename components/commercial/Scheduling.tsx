import { schedules, timingOptions } from "@/lib/commercial";
import { quoteHref } from "@/lib/site";
import { ButtonLink, Container } from "../ui";

const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

function WeekGrid({ pattern }: { pattern: (0 | 1 | 2)[] }) {
  return (
    <div aria-hidden="true" className="space-y-1.5">
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold text-ink-soft/70">
        {dayLabels.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
      {[0, 1].map((week) => (
        <div key={week} className="grid grid-cols-7 gap-1">
          {pattern.slice(week * 7, week * 7 + 7).map((v, i) => (
            <span
              key={i}
              className={`h-5 rounded ${
                v === 1
                  ? "bg-brand"
                  : v === 2
                    ? "border-2 border-dashed border-wattle-dark/70 bg-wattle/20"
                    : "bg-ink/[0.06]"
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function Schedules() {
  return (
    <section aria-labelledby="schedule-heading" className="bg-cream py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">Service frequency</p>
          <h2 id="schedule-heading" className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Choose a Cleaning Schedule That Fits Your Business
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Not every business needs daily cleaning. Pick the frequency that matches how your premises are
            used, and adjust it as your needs change.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {schedules.map(({ name, tagline, text, pattern }) => (
            <li
              key={name}
              className="group relative flex flex-col rounded-2xl bg-white p-6 ring-1 ring-line transition-shadow duration-200 hover:shadow-lift hover:ring-brand/40"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">{tagline}</p>
                  <h3 className="mt-1 text-2xl font-semibold text-ink">{name}</h3>
                </div>
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-line transition-colors group-hover:border-brand"
                >
                  <span className="h-2 w-2 rounded-full bg-brand opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
              </div>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{text}</p>
              <div className="mt-6 rounded-xl bg-cream p-3.5">
                <WeekGrid pattern={pattern} />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center gap-5 text-center">
          <p className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-ink-soft">
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-sm bg-brand" aria-hidden="true" /> Example cleaning day
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-sm border-2 border-dashed border-wattle-dark/70 bg-wattle/20" aria-hidden="true" />{" "}
              Days you choose
            </span>
            <span>Patterns are examples. Actual days are agreed with you.</span>
          </p>
          <ButtonLink href={quoteHref} size="lg">
            Discuss Your Cleaning Schedule
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

/** Hours are percentages of a 24h day, used only for the illustrative timeline. */
const pct = (h: number) => `${(h / 24) * 100}%`;

export function WorkingHours() {
  return (
    <section aria-labelledby="hours-heading" className="bg-brand py-20 text-white sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <h2 id="hours-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Cleaning Around Your Working Hours
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            The best cleaning schedule is one your team barely notices. We work out a time that keeps
            disruption to a minimum, based on when your premises are open and busiest.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {timingOptions.map(({ title, text, icon: Icon }) => (
              <li key={title} className="rounded-xl bg-white/[0.08] p-5 ring-1 ring-white/15">
                <Icon className="h-5 w-5 text-wattle" aria-hidden="true" />
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/75">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Illustrative 24-hour timeline: operating hours vs cleaning windows */}
        <figure className="rounded-2xl bg-white p-6 text-ink shadow-lift sm:p-8">
          <figcaption className="text-sm font-semibold">A typical business day</figcaption>
          <p className="mt-1 text-sm text-ink-soft">Cleaning is placed outside the hours you&apos;re busiest.</p>

          <div className="mt-8" aria-hidden="true">
            <div className="relative h-14 overflow-hidden rounded-lg bg-ink/[0.05]">
              <div className="absolute inset-y-0 bg-brand/85" style={{ left: pct(8.5), width: pct(9) }} />
              <div
                className="absolute inset-y-0 bg-wattle [background-image:repeating-linear-gradient(45deg,transparent,transparent_6px,rgb(255_255_255/0.35)_6px,rgb(255_255_255/0.35)_12px)]"
                style={{ left: pct(6), width: pct(2) }}
              />
              <div
                className="absolute inset-y-0 bg-wattle [background-image:repeating-linear-gradient(45deg,transparent,transparent_6px,rgb(255_255_255/0.35)_6px,rgb(255_255_255/0.35)_12px)]"
                style={{ left: pct(18.5), width: pct(2.5) }}
              />
              <span
                className="absolute inset-y-0 flex items-center justify-center text-xs font-semibold text-white"
                style={{ left: pct(8.5), width: pct(9) }}
              >
                Open
              </span>
            </div>
            <div className="relative mt-2 h-4 text-[11px] text-ink-soft">
              {[0, 6, 12, 18, 24].map((h) => (
                <span
                  key={h}
                  className="absolute -translate-x-1/2 first:translate-x-0 last:-translate-x-full"
                  style={{ left: pct(h) }}
                >
                  {h === 0 || h === 24 ? "12am" : h === 12 ? "12pm" : h < 12 ? `${h}am` : `${h - 12}pm`}
                </span>
              ))}
            </div>
          </div>

          <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-line pt-6 text-sm sm:grid-cols-3">
            <div className="flex items-center gap-2.5">
              <span className="h-3 w-6 rounded-sm bg-brand/85" aria-hidden="true" />
              <div>
                <dt className="font-semibold">Operating hours</dt>
                <dd className="text-ink-soft">Your team at work</dd>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="h-3 w-6 rounded-sm bg-wattle" aria-hidden="true" />
              <div>
                <dt className="font-semibold">Cleaning window</dt>
                <dd className="text-ink-soft">Before or after</dd>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="h-3 w-6 rounded-sm bg-ink/10" aria-hidden="true" />
              <div>
                <dt className="font-semibold">Other times</dt>
                <dd className="text-ink-soft">By agreement</dd>
              </div>
            </div>
          </dl>
        </figure>
      </Container>
    </section>
  );
}
