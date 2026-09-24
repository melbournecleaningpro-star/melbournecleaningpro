import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { differences, images, turnover } from "@/lib/airbnb";
import { quoteHref } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";

export function AirbnbHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section aria-labelledby="airbnb-hero-heading" className="bg-[#fbf7f0]">
      <Container className="pb-16 pt-6 sm:pb-20 sm:pt-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:mt-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* Image first: the guest-ready space leads the story */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src={images.bedroom.src}
                width={images.bedroom.width}
                height={images.bedroom.height}
                alt={images.bedroom.alt}
                priority
                sizes="(min-width: 1024px) 640px, 100vw"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-sm font-semibold text-ink shadow-card sm:left-6 sm:top-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-40 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
              </span>
              Guest ready
            </span>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-wattle-dark">Airbnb Cleaning Melbourne</p>
            <h1
              id="airbnb-hero-heading"
              className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.3rem]"
            >
              Airbnb Cleaning Services in Melbourne
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              We help Airbnb hosts and short-stay property managers reset their properties between guests, so
              the accommodation is clean, presentable and ready for the next stay.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={quoteHref} size="lg" className="sm:whitespace-nowrap">
                Get an Airbnb Cleaning Quote
              </ButtonLink>
              <ButtonLink href="#included" variant="secondary" size="lg" className="sm:whitespace-nowrap">
                See What&apos;s Included
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>

            {/* Subtle turnover progress */}
            <ol aria-label="Turnover stages" className="mt-10 grid grid-cols-4 gap-2">
              {turnover.map(({ status }, i) => (
                <li key={status} className="text-center">
                  <span
                    aria-hidden="true"
                    className={`block h-1.5 rounded-full ${i === turnover.length - 1 ? "bg-wattle" : "bg-brand"}`}
                    style={{ opacity: 0.35 + i * 0.2 }}
                  />
                  <span className="mt-2 block text-[11px] font-medium text-ink-soft sm:text-xs">{status}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function TurnoverJourney() {
  return (
    <section aria-labelledby="journey-heading" className="bg-ink py-20 text-white sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-wattle">The turnover</p>
          <h2 id="journey-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Guest-Ready Between Every Stay
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Every booking follows the same rhythm. Our job sits in the middle: turning a lived-in property back
            into a welcoming one.
          </p>
        </div>

        <ol className="relative mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {/* Continuous track behind the stations (desktop) */}
          <span aria-hidden="true" className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-white/15 via-brand to-wattle lg:block" />
          {turnover.map(({ step, title, text, icon: Icon, status }, i) => {
            const last = i === turnover.length - 1;
            return (
              <li key={step} className="relative rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 lg:rounded-none lg:bg-transparent lg:p-0 lg:pr-8 lg:ring-0">
                <span
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full ring-8 ring-ink ${
                    last ? "bg-wattle text-ink" : "bg-brand text-white"
                  }`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-6 flex items-center gap-3">
                  <span className="text-xs font-semibold tabular-nums text-white/50">{step}</span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.1em] ${
                      last ? "bg-wattle text-ink" : "bg-white/10 text-white/80"
                    }`}
                  >
                    {status}
                  </span>
                </p>
                <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/70">{text}</p>
                {/* progress for this stage */}
                <span aria-hidden="true" className="mt-5 block h-1 overflow-hidden rounded-full bg-white/10 lg:hidden">
                  <span className={`block h-full ${last ? "bg-wattle" : "bg-brand"}`} style={{ width: `${(i + 1) * 25}%` }} />
                </span>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

export function WhyDifferent() {
  return (
    <section aria-labelledby="why-airbnb-heading" className="py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="why-airbnb-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Why Airbnb Cleaning Is Different
          </h2>
          <p className="mt-6 text-2xl font-medium leading-snug tracking-tight text-brand sm:text-3xl">
            A home is cleaned for the people who live there. A short-stay property is cleaned for someone who
            hasn&apos;t arrived yet.
          </p>
          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            That changes what matters. Short-stay cleaning has different expectations from an ordinary
            residential visit.
          </p>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {differences.map(({ lead, text }) => (
            <li key={lead} className="py-5 text-base leading-relaxed text-ink-soft sm:text-[17px]">
              <strong className="font-semibold text-ink">{lead}</strong> {text}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
