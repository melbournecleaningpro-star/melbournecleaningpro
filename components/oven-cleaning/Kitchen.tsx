import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Flame } from "lucide-react";
import { buildUp, jobSheet, layers, ovenFaqs, ovenImage, QUOTE_PATH } from "@/lib/oven-cleaning";
import { isLiveRoute } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";

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

/** Control-panel hero: text on charcoal with a dial motif, the oven framed in brushed steel. */
export function OvenHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section aria-labelledby="oven-hero-heading" className="bg-ink text-white">
      <Container className="pb-14 pt-6 sm:pt-8 lg:pb-20">
        <Breadcrumbs items={breadcrumbs} tone="light" />
        <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-wattle">
              <span aria-hidden="true" className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-wattle/70">
                <span className="absolute top-1 h-3 w-0.5 rounded-full bg-wattle" />
              </span>
              From baked-on to back in order
            </div>
            <h1 id="oven-hero-heading" className="mt-6 text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl">
              Oven Cleaning in Melbourne
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Professional oven cleaning for when cooking residue and everyday build-up have got ahead of you. Tell us
              about the oven and we&apos;ll agree what&apos;s included before we start.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={QUOTE_PATH} variant="accent" size="lg">
                Request an Oven Cleaning Quote
              </ButtonLink>
              <ButtonLink href="#inside-the-oven" variant="ghost-light" size="lg">
                Inside the Oven
              </ButtonLink>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10 font-mono text-xs">
              {[
                ["Interior", "cavity"],
                ["Racks", "& trays"],
                ["Door", "glass"],
              ].map(([a, b]) => (
                <div key={a} className="bg-ink px-3 py-3">
                  <dt className="text-white">{a}</dt>
                  <dd className="text-white/50">{b}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="rounded-[1.75rem] bg-[linear-gradient(135deg,#e9edee,#b9c2c4)] p-3 shadow-lift sm:p-4">
            <Image
              src={ovenImage.src}
              width={ovenImage.width}
              height={ovenImage.height}
              alt={ovenImage.alt}
              priority
              sizes="(min-width: 1024px) 580px, 100vw"
              className="aspect-[4/3] h-auto w-full rounded-[1.25rem] object-cover"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}

export function InsideTheOven({ children }: { children: ReactNode }) {
  return (
    <section id="inside-the-oven" aria-labelledby="inside-oven-heading" className="scroll-mt-24 bg-[#eef1f1] py-20 sm:py-24">
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">Oven anatomy</p>
        <h2 id="inside-oven-heading" className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Inside the Oven
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          Choose a part to see where it sits and why it collects build-up.
        </p>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}

const textures: Record<(typeof buildUp)[number]["texture"], string> = {
  grease: "bg-[#e9d9a8] [background-image:radial-gradient(circle_at_30%_40%,rgb(201_138_30/0.45)_0_8px,transparent_12px),radial-gradient(circle_at_70%_65%,rgb(201_138_30/0.35)_0_6px,transparent_10px)]",
  residue: "bg-[#d8cbb4] [background-image:radial-gradient(rgb(111_84_57/0.35)_1.2px,transparent_1.8px)] [background-size:7px_7px]",
  splash: "bg-[#e6d3c0] [background-image:radial-gradient(ellipse_22px_10px_at_40%_45%,rgb(160_60_40/0.4),transparent_70%),radial-gradient(circle_at_68%_30%,rgb(160_60_40/0.35)_0_4px,transparent_6px)]",
  baked: "bg-[#7a5a3c] [background-image:repeating-linear-gradient(160deg,rgb(16_39_47/0.35)_0_3px,transparent_3px_8px)]",
  everyday: "bg-[#cfd6d8] [background-image:linear-gradient(rgb(16_39_47/0.08),rgb(16_39_47/0.08))]",
};

/** Build-up types laid out as the compartments of a baking tray. */
export function BuildUpTray() {
  return (
    <section aria-labelledby="buildup-oven-heading" className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
          <h2 id="buildup-oven-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What builds up in an oven
          </h2>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
            Every roast and bake leaves a little behind. Over time it adds up in a few recognisable ways.
          </p>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-3 rounded-[1.5rem] bg-[#8a9795] p-3 sm:grid-cols-2 lg:grid-cols-5">
          {buildUp.map((b) => (
            <li key={b.name} className="flex overflow-hidden rounded-xl bg-white sm:block">
              <span aria-hidden="true" className={`block w-24 shrink-0 sm:h-24 sm:w-auto ${textures[b.texture]}`} />
              <div className="p-4">
                <h3 className="font-semibold text-ink">{b.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{b.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** A cross-section of layers building up over time. */
export function WhyOvensTakeTime() {
  const tones = ["bg-[#f3e2b3]", "bg-[#c9a36b]", "bg-[#6f5439]"];
  return (
    <section aria-labelledby="why-oven-heading" className="bg-white py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <h2 id="why-oven-heading" className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.12]">
            Why ovens take time
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            Each time the oven heats up, old spills cook a little further. What started as a soft splash can set into a
            hard layer that takes more time and care to address, and some older build-up may not lift completely.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            That&apos;s why we don&apos;t promise a like-new oven. We aim for a cleaner, more usable one, and tell you
            honestly what to expect for its condition.
          </p>
        </div>
        <div>
          <ol className="overflow-hidden rounded-2xl ring-1 ring-line">
            {layers.map((l, i) => (
              <li key={l.label} className={`flex gap-4 p-5 sm:p-6 ${tones[i]} ${i === 2 ? "text-white" : "text-ink"}`}>
                <span className="font-mono text-sm font-semibold opacity-70">L{i + 1}</span>
                <div>
                  <h3 className="font-semibold">{l.label}</h3>
                  <p className={`mt-1 text-[15px] leading-relaxed ${i === 2 ? "text-white/80" : "text-ink-soft"}`}>{l.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-3 flex items-center gap-2 font-mono text-xs text-ink-soft">
            <Flame className="h-4 w-4 text-wattle-dark" aria-hidden="true" /> More heat cycles, harder layers
          </p>
        </div>
      </Container>
    </section>
  );
}

/** The process as a technical job sheet. */
export function JobSheet() {
  return (
    <section aria-labelledby="jobsheet-heading" className="bg-[#eef1f1] py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <h2 id="jobsheet-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            How an oven clean runs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Every oven is different, so the details are worked out on the day for the appliance in front of us.
          </p>
        </div>
        <div className="rounded-md bg-white font-mono shadow-lift ring-1 ring-line">
          <div className="flex items-center justify-between border-b-2 border-ink px-5 py-3 text-xs uppercase tracking-[0.18em] text-ink">
            <span>Job sheet: oven</span>
            <span className="rounded border border-brand px-2 py-0.5 text-brand">Agreed scope</span>
          </div>
          <ol>
            {jobSheet.map(({ step, note }, i) => (
              <li key={step} className="grid grid-cols-[3rem_minmax(0,1fr)] border-b border-dashed border-ink/15 last:border-b-0">
                <span className="border-r border-ink/15 py-4 text-center text-sm font-semibold text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
                <div className="px-5 py-4">
                  <h3 className="font-sans text-lg font-semibold text-ink">{step}</h3>
                  <p className="mt-1 font-sans text-[15px] leading-relaxed text-ink-soft">{note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

export function OvenPairings() {
  return (
    <section aria-labelledby="oven-pairings-heading" className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h2 id="oven-pairings-heading" className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Part of a bigger clean?
        </h2>
        <p className="mt-4 text-base leading-loose text-ink-soft sm:text-lg">
          Oven cleaning is often requested on its own, but it also fits naturally with other services. Moving out? Add
          it to an <MaybeLink path="/services/end-of-lease-cleaning/">end of lease clean</MaybeLink>. Tackling the whole
          kitchen? Pair it with a <MaybeLink path="/services/deep-cleaning/">deep clean</MaybeLink>. Or ask about it
          alongside <MaybeLink path="/services/house-cleaning/">regular house cleaning</MaybeLink>.
        </p>
      </Container>
    </section>
  );
}

/** FAQ beside a rack-and-tray detail panel. */
export function OvenFAQ() {
  return (
    <section id="faq" aria-labelledby="oven-faq-heading" className="bg-white py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <h2 id="oven-faq-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Oven cleaning questions
          </h2>
          <div aria-hidden="true" className="mt-8 hidden rounded-2xl bg-ink p-6 lg:block">
            <div className="space-y-5">
              {[0, 1, 2].map((r) => (
                <div key={r} className="h-2 rounded-full bg-[repeating-linear-gradient(90deg,#9aa6a8_0_3px,transparent_3px_22px)] ring-1 ring-[#9aa6a8]/60" />
              ))}
              <div className="h-8 rounded-md bg-[#6f7c7e]" />
            </div>
          </div>
          <p className="mt-6 text-sm text-ink-soft">
            More general questions are answered on the{" "}
            <a href="/faq/" className={link}>
              FAQ page
            </a>
            .
          </p>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {ovenFaqs.map(({ question, answer }, i) => (
            <details key={question} className="group" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold text-ink sm:text-[17px]">
                  <span className="mr-3 font-mono text-sm text-wattle-dark">Q{i + 1}</span>
                  {question}
                </h3>
                <ChevronDown className="mt-0.5 h-5 w-5 shrink-0 text-ink-soft transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="pb-5 pl-9 text-[15px] leading-relaxed text-ink-soft sm:text-base">{answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** A compact CTA sitting on a stone benchtop. */
export function OvenCTA() {
  return (
    <section id="quote" aria-labelledby="oven-cta-heading" className="bg-[#eef1f1] pt-16 sm:pt-20">
      <Container>
        <div className="mx-auto max-w-4xl rounded-t-2xl bg-white px-6 py-10 text-center ring-1 ring-line sm:px-10">
          <h2 id="oven-cta-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Ready to get the oven back in order?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
            Tell us the type of oven and how much build-up there is, and we&apos;ll prepare a quote.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={QUOTE_PATH} size="lg">
              Request an Oven Cleaning Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/contact/" variant="secondary" size="lg">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </Container>
      {/* benchtop */}
      <div aria-hidden="true" className="h-10 bg-[#d9dfdd] [background-image:radial-gradient(rgb(16_39_47/0.08)_1px,transparent_1.5px)] [background-size:9px_9px] shadow-[inset_0_6px_0_rgb(255_255_255/0.6)]" />
      <div aria-hidden="true" className="h-6 bg-[#0e7f79]" />
    </section>
  );
}
