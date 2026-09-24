import Image from "next/image";
import { CalendarCheck, Check } from "lucide-react";
import { disruption, frequencies, images, officeTypes, oneOffSituations, recurringFactors } from "@/lib/office";
import { quoteHref } from "@/lib/site";
import { ButtonLink, Container } from "../ui";
import { FrequencySelector } from "./FrequencySelector";

export function Frequency() {
  return (
    <section aria-labelledby="freq-heading" className="py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:items-start lg:gap-14">
        <div className="lg:sticky lg:top-28">
          <h2 id="freq-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            How Often Should Your Office Be Cleaned?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            There&apos;s no single right answer. It depends on your team size, how busy the office is and
            which areas get the most use. Select an option to compare.
          </p>
          <ButtonLink href={quoteHref} className="mt-8">
            Discuss Your Cleaning Requirements
          </ButtonLink>
        </div>
        <FrequencySelector options={frequencies} />
      </Container>
    </section>
  );
}

export function Disruption() {
  return (
    <section aria-labelledby="disrupt-heading" className="bg-brand-50 py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl ring-1 ring-line">
            <Image
              src={images.meeting.src}
              width={images.meeting.width}
              height={images.meeting.height}
              alt="Empty meeting room after hours, ready for cleaning"
              loading="lazy"
              sizes="(min-width: 1024px) 580px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 id="disrupt-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Cleaning Without Getting in the Way of Your Team
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Good coordination is what keeps cleaning low-impact. We plan the practical details with you up front.
          </p>

          {/* Memo-style card: a plan agreed in advance */}
          <div className="mt-8 rounded-xl bg-white shadow-card ring-1 ring-line">
            <p className="flex items-center gap-2 border-b border-line px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
              <CalendarCheck className="h-4 w-4 text-brand" aria-hidden="true" />
              Cleaning plan
            </p>
            <dl className="divide-y divide-dashed divide-line">
              {disruption.map(({ title, text }) => (
                <div key={title} className="grid gap-1 px-5 py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
                  <dt className="text-sm font-semibold text-ink">{title}</dt>
                  <dd className="text-sm leading-relaxed text-ink-soft">{text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft">
            Where cleaning has to happen during working hours, we&apos;ll agree on times and areas with you to
            keep interruptions to a minimum.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function OfficeTypes() {
  return (
    <section aria-labelledby="types-heading" className="py-20 sm:py-24">
      <Container>
        <h2 id="types-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Office Cleaning for Different Workplaces
        </h2>
        <ul className="-mx-5 mt-10 flex snap-x gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-5">
          {officeTypes.map(({ title, text, icon: Icon }) => (
            <li
              key={title}
              className="w-60 shrink-0 snap-start rounded-2xl border-t-[3px] border-wattle bg-cream p-6 sm:w-auto"
            >
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

export function OneOffAndRecurring() {
  return (
    <section aria-label="One-off and regular office cleaning" className="pb-20 sm:pb-24">
      <Container className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        <div className="rounded-2xl p-7 ring-1 ring-line sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Need a One-Off Office Clean?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            Not every office needs an ongoing arrangement. A one-off clean can be booked for a specific
            situation, such as:
          </p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {oneOffSituations.map((s) => (
              <li key={s} className="flex items-start gap-2.5 text-[15px] text-ink">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand" strokeWidth={2.5} aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-ink p-7 text-white sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Regular Office Cleaning in Melbourne</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/75 sm:text-base">
            A recurring arrangement is built around your office rather than a fixed package. We structure it
            around:
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {recurringFactors.map((f) => (
              <li key={f} className="rounded-md bg-white/10 px-3 py-1.5 text-sm text-white/90 ring-1 ring-inset ring-white/15">
                {f}
              </li>
            ))}
          </ul>
          <ButtonLink href={quoteHref} variant="accent" className="mt-8">
            Set Up a Cleaning Schedule
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
