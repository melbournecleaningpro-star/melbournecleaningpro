import Image from "next/image";
import { Moon, Plus } from "lucide-react";
import { assessment, bedroomImage, everyday, mattressFaqs, mattressLayers, QUOTE_PATH, resultFactors } from "@/lib/mattress-cleaning";
import { isLiveRoute } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";

const soft = "#f6f4fa";
const link = "font-medium text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand";

function MaybeLink({ path, children }: { path: string; children: string }) {
  return isLiveRoute(path) ? (
    <a href={path} className={link}>
      {children}
    </a>
  ) : (
    <span className="font-medium text-ink">{children}</span>
  );
}

/** Immersive bedroom that fades into a quiet, centred headline. */
export function MattressHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section aria-labelledby="mattress-hero-heading" style={{ backgroundColor: soft }}>
      <Container className="pt-6 sm:pt-8">
        <Breadcrumbs items={breadcrumbs} />
      </Container>
      <div className="relative mt-6">
        <Image
          src={bedroomImage.src}
          width={bedroomImage.width}
          height={bedroomImage.height}
          alt={bedroomImage.alt}
          priority
          sizes="100vw"
          className="aspect-[4/3] h-auto w-full object-cover object-[35%_center] sm:aspect-[16/8] lg:aspect-[16/7]"
        />
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent to-[#f6f4fa]" />
      </div>
      <Container className="relative -mt-20 pb-20 text-center sm:-mt-32 sm:pb-24 lg:-mt-44">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-ink-soft backdrop-blur">
          <Moon className="h-3.5 w-3.5 text-[#8a7fa3]" aria-hidden="true" /> Refresh where your day ends
        </p>
        <h1 id="mattress-hero-heading" className="mx-auto mt-6 max-w-3xl text-[2.5rem] font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl">
          Mattress Cleaning in Melbourne
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-[1.8] text-ink-soft sm:text-lg">
          Your mattress is used every single night. We help refresh its surfaces, seams and most-used areas, with an
          approach suited to how it&apos;s made and the condition it&apos;s in.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={QUOTE_PATH} size="lg">
            Request a Mattress Cleaning Quote
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

/** An exploded view of the mattress, layer by layer. */
export function SurfaceEveryNight() {
  const faces = [
    "bg-[#fbfaf7] [background-image:linear-gradient(#e6e2da_1px,transparent_1px),linear-gradient(90deg,#e6e2da_1px,transparent_1px)] [background-size:28px_28px]",
    "bg-[#fbfaf7] outline-2 outline-dashed outline-offset-[-10px] outline-[#d9d2e6]",
    "bg-[#ece8f3] ring-8 ring-inset ring-[#d9d2e6]",
    "bg-[#fbfaf7] [background-image:radial-gradient(ellipse_30%_45%_at_32%_55%,rgb(242_184_198/0.55),transparent_70%),radial-gradient(ellipse_30%_45%_at_68%_55%,rgb(242_184_198/0.4),transparent_70%)]",
  ];
  return (
    <section aria-labelledby="every-night-heading" className="bg-white py-24 sm:py-32">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div aria-hidden="true" className="mx-auto w-full max-w-md">
          <div className="relative h-[21rem] sm:h-[24rem]">
            {faces.map((f, i) => (
              <div
                key={i}
                style={{ zIndex: faces.length - i, top: `${i * 22}%`, left: `${i * 4}%` }}
                className={`absolute h-[30%] w-[84%] -skew-x-12 rounded-3xl shadow-[0_20px_34px_-18px_rgb(16_39_47/0.4)] ring-1 ring-black/5 ${f}`}
              >
                <span className="absolute -right-3 bottom-3 flex h-8 w-8 skew-x-12 items-center justify-center rounded-full bg-[#8a7fa3] text-sm font-medium text-white ring-4 ring-white">
                  {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 id="every-night-heading" className="text-3xl font-medium tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.15]">
            A surface used every night
          </h2>
          <p className="mt-5 text-base leading-[1.8] text-ink-soft sm:text-lg">
            A mattress isn&apos;t one flat surface. Each part meets everyday life a little differently.
          </p>
          <ol className="mt-8 space-y-6">
            {mattressLayers.map((l, i) => (
              <li key={l.name} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#8a7fa3] text-xs font-medium text-white">{i + 1}</span>
                <div>
                  <h3 className="font-medium text-ink">{l.name}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{l.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

export function WhatItCollects() {
  return (
    <section aria-labelledby="collects-heading" style={{ backgroundColor: soft }} className="py-24 text-center sm:py-28">
      <Container className="max-w-3xl">
        <h2 id="collects-heading" className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          What a mattress quietly collects
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-[1.8] text-ink-soft sm:text-lg">
          Nothing dramatic, just the ordinary traces of sleeping, sitting and making the bed, night after night.
        </p>
        <ul className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {everyday.map((e) => (
            <li key={e} className="rounded-full bg-white px-6 py-3.5 text-[15px] text-ink shadow-[0_10px_24px_-14px_rgb(138_127_163/0.6)]">
              {e}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-lg text-sm leading-relaxed text-ink-soft">
          Mattress cleaning is about refreshing a well-used surface. We don&apos;t make health, allergy or sleep claims.
        </p>
      </Container>
    </section>
  );
}

/** Four calm stages joined by a gentle curve. */
export function GentleAssessment() {
  return (
    <section aria-labelledby="assess-mattress-heading" className="bg-white py-24 sm:py-28">
      <Container>
        <h2 id="assess-mattress-heading" className="text-center text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Understanding the mattress first
        </h2>
        <div className="relative mt-16">
          <svg aria-hidden="true" viewBox="0 0 1000 120" preserveAspectRatio="none" className="absolute inset-x-0 top-6 hidden h-24 w-full md:block">
            <path d="M125 50C260 0 320 110 500 60S760 0 875 60" fill="none" stroke="#d9d2e6" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <ol className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {assessment.map((a, i) => (
              <li key={a.name} className={`flex items-center gap-5 md:flex-col md:text-center ${i % 2 ? "md:mt-10" : ""}`}>
                <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#f6f4fa] text-2xl font-light text-[#8a7fa3] ring-8 ring-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-ink">{a.name}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{a.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

export function RealisticResults() {
  return (
    <section aria-labelledby="realistic-heading" className="bg-white pb-24 sm:pb-28">
      <Container className="max-w-4xl">
        <div className="rounded-[2.5rem] bg-[#ece8f3] px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 id="realistic-heading" className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Realistic results, honestly explained
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-[1.8] text-ink-soft sm:text-lg">
            Every mattress is different, and so is what cleaning can achieve. Results vary with:
          </p>
          <ul className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
            {resultFactors.map((f) => (
              <li key={f} className="rounded-2xl bg-white/80 px-5 py-3.5 text-[15px] text-ink">
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base font-medium text-ink">Stain removal can&apos;t be guaranteed.</p>
        </div>
      </Container>
    </section>
  );
}

export function BeyondTheBed() {
  return (
    <section aria-labelledby="beyond-bed-heading" style={{ backgroundColor: soft }} className="py-20 sm:py-24">
      <Container className="max-w-2xl text-center">
        <h2 id="beyond-bed-heading" className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          Beyond the bed
        </h2>
        <p className="mt-5 text-base leading-[1.9] text-ink-soft sm:text-lg">
          Refreshing a bedroom often goes further than the mattress. Sofas and armchairs can be looked after with{" "}
          <MaybeLink path="/services/upholstery-cleaning/">upholstery cleaning</MaybeLink>, and carpeted floors with{" "}
          <MaybeLink path="/services/carpet-cleaning/">carpet cleaning</MaybeLink>. For the whole home, there&apos;s a{" "}
          <MaybeLink path="/services/deep-cleaning/">deep clean</MaybeLink>. Moving in? Pair it with{" "}
          <MaybeLink path="/services/move-in-cleaning/">move-in cleaning</MaybeLink>. Hosting guests? See{" "}
          <MaybeLink path="/services/airbnb-cleaning/">Airbnb cleaning</MaybeLink>.
        </p>
      </Container>
    </section>
  );
}

/** A centred, unhurried FAQ stack. */
export function MattressFAQ() {
  return (
    <section id="faq" aria-labelledby="mattress-faq-heading" className="bg-white py-24 sm:py-28">
      <Container className="max-w-2xl">
        <h2 id="mattress-faq-heading" className="text-center text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Questions, answered gently
        </h2>
        <div className="mt-12 space-y-3">
          {mattressFaqs.map(({ question, answer }) => (
            <details key={question} className="group rounded-3xl bg-[#f6f4fa] px-6 open:bg-[#ece8f3] sm:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8a7fa3]/30 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-medium text-ink sm:text-[17px]">{question}</h3>
                <Plus className="h-5 w-5 shrink-0 text-[#8a7fa3] transition-transform group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="pb-6 text-[15px] leading-[1.8] text-ink-soft sm:text-base">{answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink-soft">
          Looking for something else? Visit the{" "}
          <a href="/faq/" className={link}>
            main FAQ page
          </a>
          .
        </p>
      </Container>
    </section>
  );
}

/** A soft, full-width dawn band with a duvet-like wave. */
export function MattressCTA() {
  return (
    <section id="quote" aria-labelledby="mattress-cta-heading" className="relative overflow-hidden bg-[linear-gradient(120deg,#f6d6de,#fbe9c6_55%,#dce9f0)]">
      <svg aria-hidden="true" viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-12 w-full sm:h-20">
        <path d="M0 0h1440v30c-120 30-240 40-360 20S840 0 720 20 480 60 360 50 120 10 0 30Z" fill="#ffffff" />
      </svg>
      <Container className="max-w-3xl py-16 text-center sm:py-24">
        <h2 id="mattress-cta-heading" className="text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
          Ready to refresh where your day ends?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-[1.8] text-ink/75 sm:text-lg">
          Tell us how many mattresses you have, their sizes and any marks you&apos;re concerned about.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={QUOTE_PATH} size="lg">
            Request a Mattress Cleaning Quote
          </ButtonLink>
          <ButtonLink href="/contact/" variant="secondary" size="lg">
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
