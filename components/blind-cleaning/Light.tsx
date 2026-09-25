import type { ReactNode } from "react";
import { blindFactors, blindFaqs, dustSpots, openingSteps, QUOTE_PATH } from "@/lib/blind-cleaning";
import { isLiveRoute } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";

/** Diagonal bands of sunlight falling through slats. */
const slatLight =
  "[background-image:repeating-linear-gradient(-18deg,rgb(255_236_190/0.55)_0_26px,transparent_26px_46px)]";
const link = "font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand";

function MaybeLink({ path, children }: { path: string; children: string }) {
  return isLiveRoute(path) ? (
    <a href={path} className={link}>
      {children}
    </a>
  ) : (
    <span className="font-semibold text-ink">{children}</span>
  );
}

export function BlindHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section aria-labelledby="blind-hero-heading" className="relative overflow-hidden bg-[#f3eee4]">
      {/* light through slats falls across the whole hero */}
      <span aria-hidden="true" className={`pointer-events-none absolute inset-0 ${slatLight}`} />
      <Container className="relative pb-16 pt-6 sm:pt-8 lg:pb-24">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">Clean between the lines</p>
            <h1 id="blind-hero-heading" className="mt-5 text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl">
              Blind Cleaning in Melbourne
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
              Blinds quietly collect dust along every slat and edge. We clean suitable blinds in homes and workplaces,
              with an approach matched to their material, construction and condition.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={QUOTE_PATH} size="lg">
                Request a Blind Cleaning Quote
              </ButtonLink>
              <ButtonLink href="#blind-types" variant="secondary" size="lg">
                Explore Blind Types
              </ButtonLink>
            </div>
          </div>
          {/* a window with a venetian blind, drawn in CSS */}
          <div aria-hidden="true" className="mx-auto w-full max-w-sm">
            <div className="rounded-sm bg-white p-3 shadow-lift">
              <div className="h-3 rounded-sm bg-ink" />
              <div className="relative mt-1 overflow-hidden bg-[#cfe6ee]">
                <div className="space-y-[6px] py-2">
                  {Array.from({ length: 16 }, (_, i) => (
                    <div key={i} className="mx-2 h-[14px] rounded-[2px] bg-gradient-to-b from-[#f7f4ee] to-[#d9d3c7] shadow-[0_2px_2px_rgb(16_39_47/0.12)]" />
                  ))}
                </div>
                <span className="absolute inset-y-0 left-1/4 w-px bg-[#8a9795]" />
                <span className="absolute inset-y-0 right-1/4 w-px bg-[#8a9795]" />
              </div>
            </div>
            <div className="mx-auto mt-2 h-6 w-[80%] [background-image:repeating-linear-gradient(0deg,rgb(16_39_47/0.08)_0_3px,transparent_3px_8px)] [transform:skewX(-30deg)]" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function BlindTypes({ children }: { children: ReactNode }) {
  return (
    <section id="blind-types" aria-labelledby="blind-types-heading" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <Container>
        <h2 id="blind-types-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Which blinds do you have?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          Choose a type to see where dust tends to collect on it.
        </p>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}

/** Each dust spot sits on its own "slat". */
export function WhereDustSettles() {
  return (
    <section aria-labelledby="dust-settles-heading" className="bg-ink py-20 text-white sm:py-24">
      <Container>
        <h2 id="dust-settles-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Where dust settles
        </h2>
        <ul className="mt-12 space-y-2">
          {dustSpots.map((d, i) => (
            <li
              key={d.name}
              style={{ marginLeft: `${i * 3}%`, marginRight: `${(dustSpots.length - 1 - i) * 3}%` }}
              className="flex flex-col gap-1 rounded-md bg-gradient-to-b from-[#2a3e45] to-[#1b3139] px-5 py-4 shadow-[0_6px_0_rgb(0_0_0/0.25)] sm:flex-row sm:items-center sm:gap-6"
            >
              <h3 className="w-48 shrink-0 font-semibold text-wattle">{d.name}</h3>
              <p className="text-[15px] leading-relaxed text-white/75">{d.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function MaterialCondition() {
  return (
    <section aria-labelledby="blind-material-heading" className="bg-[#f3eee4] py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <h2 id="blind-material-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Material and condition come first
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Aluminium, timber, fabric and vinyl blinds all need different care. We clean; we don&apos;t repair or
            restore, so faded, damaged or permanently stained blinds may stay that way.
          </p>
        </div>
        {/* factors as vertical vanes */}
        <ul className="flex h-72 items-stretch gap-2 sm:h-80">
          {blindFactors.map((f, i) => (
            <li
              key={f}
              className="relative flex flex-1 items-end justify-center overflow-hidden rounded-sm bg-white pb-4 shadow-[inset_-4px_0_0_rgb(16_39_47/0.06)]"
              style={{ marginTop: `${(i % 3) * 12}px` }}
            >
              <span className="whitespace-nowrap text-sm font-semibold text-ink [writing-mode:vertical-rl] [transform:rotate(180deg)]">{f}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Each step opens the slats a little more, from closed to fully open. */
export function OpeningSteps() {
  return (
    <section aria-labelledby="opening-heading" className="bg-white py-20 sm:py-24">
      <Container>
        <h2 id="opening-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          How a blind clean opens up
        </h2>
        <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {openingSteps.map((s, i) => {
            const open = i / (openingSteps.length - 1); // 0 = closed, 1 = open
            return (
              <li key={s.name}>
                <div aria-hidden="true" className="space-y-[3px] rounded-sm bg-[#fff6dc] p-3">
                  {Array.from({ length: 7 }, (_, k) => (
                    <div
                      key={k}
                      className="h-3 rounded-[2px] bg-gradient-to-b from-[#f7f4ee] to-[#cfc8ba]"
                      style={{ transform: `scaleY(${1 - open * 0.75})` }}
                    />
                  ))}
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Step {i + 1}</p>
                <h3 className="mt-1 text-lg font-semibold text-ink">{s.name}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{s.text}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

/** Narrow editorial FAQ with a vertical rule. */
export function BlindFAQ() {
  return (
    <section id="faq" aria-labelledby="blind-faq-heading" className="bg-[#f3eee4] py-20 sm:py-24">
      <Container className="grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-12">
        <div className="md:border-r-2 md:border-ink md:pr-8">
          <h2 id="blind-faq-heading" className="text-3xl font-semibold leading-tight tracking-tight text-ink md:[writing-mode:vertical-rl] md:[transform:rotate(180deg)]">
            Blind cleaning questions
          </h2>
        </div>
        <div className="max-w-2xl">
          {blindFaqs.map(({ question, answer }) => (
            <details key={question} className="group border-b border-ink/15">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold text-ink sm:text-lg">{question}</h3>
                <span aria-hidden="true" className="flex shrink-0 flex-col gap-[3px] pt-1">
                  {[0, 1, 2].map((k) => (
                    <span key={k} className="block h-[3px] w-5 rounded-full bg-brand transition-transform group-open:scale-y-[0.3]" />
                  ))}
                </span>
              </summary>
              <p className="pb-6 text-[15px] leading-relaxed text-ink-soft sm:text-base">{answer}</p>
            </details>
          ))}
          <p className="mt-8 text-[15px] leading-relaxed text-ink-soft">
            Having windows done too? See <MaybeLink path="/services/window-cleaning/">window cleaning</MaybeLink>. Blinds
            can also sit within a <MaybeLink path="/services/deep-cleaning/">deep clean</MaybeLink>,{" "}
            <MaybeLink path="/services/house-cleaning/">regular house cleaning</MaybeLink> or{" "}
            <MaybeLink path="/services/office-cleaning/">office cleaning</MaybeLink>. More answers are on the{" "}
            <a href="/faq/" className={link}>
              FAQ page
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}

/** Light-and-shadow CTA: slatted light across a deep background. */
export function BlindCTA() {
  return (
    <section id="quote" aria-labelledby="blind-cta-heading" className="relative overflow-hidden bg-ink">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:repeating-linear-gradient(-18deg,rgb(244_182_63/0.12)_0_30px,transparent_30px_54px)]"
      />
      <Container className="relative max-w-3xl py-20 text-center text-white sm:py-28">
        <h2 id="blind-cta-heading" className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
          Let the light back in.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
          Tell us what kind of blinds you have, roughly how many and where they are, and we&apos;ll prepare a quote.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={QUOTE_PATH} variant="accent" size="lg">
            Request a Blind Cleaning Quote
          </ButtonLink>
          <ButtonLink href="/contact/" variant="ghost-light" size="lg">
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
