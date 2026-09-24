import { Info, Minus, Plus, X } from "lucide-react";
import {
  comparisons,
  deepCleaning,
  limits,
  overlooked,
  priorityOptions,
  regularCleaning,
  rooms,
} from "@/lib/deep-cleaning";
import { isLiveRoute } from "@/lib/site";
import { Container } from "../ui";
import { BeforeAfter } from "./BeforeAfter";
import { PriorityPicker } from "./PriorityPicker";
import { RoomTabs } from "./RoomTabs";

export function BeforeAfterSection() {
  return (
    <section aria-labelledby="ba-heading" className="bg-brand-50 py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.5fr] lg:items-center lg:gap-14">
        <div>
          <h2 id="ba-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            See the Difference a Detailed Clean Can Make
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Drag the slider to compare. Pick a room to see where a deep clean spends its time.
          </p>
          <p className="mt-6 flex gap-2.5 rounded-xl bg-white/70 p-4 text-sm leading-relaxed text-ink-soft">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            Illustrations for demonstration only. These are not photos of a customer&apos;s home or results.
          </p>
        </div>
        <BeforeAfter items={comparisons} />
      </Container>
    </section>
  );
}

export function RoomFocus() {
  const tabs = rooms.map(({ icon: Icon, ...room }) => ({
    ...room,
    icon: <Icon className="h-5 w-5" aria-hidden="true" />,
  }));
  return (
    <section aria-labelledby="rooms-heading" className="bg-cream py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="rooms-heading" className="max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What We Focus On During a Deep Clean
          </h2>
          <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
            Choose a room to see the detail involved. The exact scope depends on the agreed service.
          </p>
        </div>
        <div className="mt-10">
          <RoomTabs rooms={tabs} />
        </div>
      </Container>
    </section>
  );
}

export function Overlooked() {
  return (
    <section aria-labelledby="missed-heading" className="bg-ink py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:items-center lg:gap-16">
          <div>
            <h2 id="missed-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
              The Details That Are Easy to Miss
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
              These are the spots people stop noticing day to day, and where a deep clean makes the most
              visible difference.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-white/55">
              We clean areas that can be safely accessed. Some spots, such as those behind heavy furniture or
              at height, may not always be reachable. We&apos;ll let you know if that&apos;s the case.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
            {overlooked.map(({ label, icon: Icon }) => (
              <li key={label} className="flex flex-col items-center text-center">
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-wattle/60">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-wattle">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 -right-1 h-5 w-1.5 rotate-[-45deg] rounded-full bg-wattle"
                  />
                </span>
                <span className="mt-3 text-sm font-medium text-white/90">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function DeepVsRegular() {
  const houseLive = isLiveRoute("/services/house-cleaning/");
  return (
    <section aria-labelledby="vs-heading" className="py-20 sm:py-24">
      <Container>
        <h2 id="vs-heading" className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Deep Cleaning vs Regular Cleaning
        </h2>

        <div className="relative mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2 md:gap-6">
          <div className="rounded-[1.75rem] bg-cream p-7 sm:p-9">
            <h3 className="text-xl font-semibold text-ink">Regular Cleaning</h3>
            <p className="mt-1 text-sm text-ink-soft">Routine maintenance</p>
            <ul className="mt-6 space-y-3">
              {regularCleaning.map((i) => (
                <li key={i} className="flex items-center gap-3 text-[15px] text-ink-soft">
                  <Minus className="h-4 w-4 shrink-0 text-ink/40" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 z-10 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-wattle text-sm font-bold text-ink ring-8 ring-white md:flex"
          >
            vs
          </span>

          <div className="rounded-[1.75rem] bg-brand p-7 text-white sm:p-9">
            <h3 className="text-xl font-semibold">Deep Cleaning</h3>
            <p className="mt-1 text-sm text-white/70">Detailed, more intensive attention</p>
            <ul className="mt-6 space-y-3">
              {deepCleaning.map((i) => (
                <li key={i} className="flex items-center gap-3 text-[15px]">
                  <Plus className="h-4 w-4 shrink-0 text-wattle" strokeWidth={3} aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-ink-soft">
          A deep clean isn&apos;t necessarily a replacement for regular maintenance. You might book a one-off
          deep clean to reset your home, then keep on top of it with{" "}
          {houseLive ? (
            <a
              href="/services/house-cleaning/"
              className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
            >
              regular house cleaning
            </a>
          ) : (
            "regular house cleaning"
          )}
          .
        </p>
      </Container>
    </section>
  );
}

export function Priorities() {
  return (
    <section aria-labelledby="priority-heading" className="pb-20 sm:pb-24">
      <Container>
        <div className="grid gap-10 rounded-[2rem] border-2 border-dashed border-brand/25 p-7 sm:p-10 lg:grid-cols-[0.9fr_1.3fr] lg:gap-14 lg:p-14">
          <div>
            <h2 id="priority-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Tell Us Where Your Home Needs the Most Attention
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              Every home has its trouble spots. Pick your priority areas, whether that&apos;s the kitchen,
              the bathrooms or one particular built-up area, and we&apos;ll plan the clean and the quote
              around them.
            </p>
          </div>
          <PriorityPicker options={priorityOptions} />
        </div>
      </Container>
    </section>
  );
}

export function Limits() {
  return (
    <section aria-labelledby="limits-heading" className="bg-cream py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="limits-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A Deep Clean Has Limits
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            We&apos;d rather be upfront. Deep cleaning is very good at removing dirt, dust and built-up grime.
            It isn&apos;t the same as repairing damage, and it can&apos;t make worn or damaged surfaces new
            again.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Some jobs also need specialist services that may require separate arrangements. If you&apos;re
            not sure whether something falls within a deep clean, ask us when you request your quote.
          </p>
        </div>

        <div className="self-start rounded-[1.75rem] bg-white p-7 ring-1 ring-line sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft">Cleaning can&apos;t fix</p>
          <ul className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
            {limits.map((l) => (
              <li key={l} className="flex items-center gap-3 text-[15px] text-ink">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink/[0.06] text-ink-soft">
                  <X className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {l}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
