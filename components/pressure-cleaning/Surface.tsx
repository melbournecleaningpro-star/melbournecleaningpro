import type { ReactNode } from "react";
import { ArrowRight, Check, CloudRain, Droplets, Minus, Plus, X } from "lucide-react";
import {
  audiences,
  beforeYouBook,
  buildUp,
  canDo,
  cannotDo,
  driveway,
  inspection,
  journey,
  pressureFaqs,
  QUOTE_PATH,
  quoteFactors,
  softVsPressure,
} from "@/lib/pressure-cleaning";
import { isLiveRoute } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";
import { concrete, grime, textures } from "./textures";

const WET = "#1c2426";
const link = "font-semibold text-[#1f5f7a] underline decoration-[#1f5f7a]/30 underline-offset-4 hover:decoration-[#1f5f7a]";

function MaybeLink({ path, children }: { path: string; children: string }) {
  return isLiveRoute(path) ? (
    <a href={path} className={link}>
      {children}
    </a>
  ) : (
    <span className="font-semibold text-ink">{children}</span>
  );
}

function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] ${light ? "text-[#8fd3ee]" : "text-[#1f5f7a]"}`}>
      <Droplets className="h-4 w-4" aria-hidden="true" />
      {children}
    </p>
  );
}

/* 1 ─ Hero: wet asphalt with the reveal comparison */
export function PressureHero({ breadcrumbs, reveal }: { breadcrumbs: Crumb[]; reveal: ReactNode }) {
  return (
    <section aria-labelledby="pressure-hero-heading" style={{ backgroundColor: WET }} className="relative overflow-hidden text-white">
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgb(255_255_255/0.05)_1px,transparent_1.6px)] [background-size:7px_7px]" />
      <Container className="relative pb-16 pt-6 sm:pt-8 lg:pb-24">
        <Breadcrumbs items={breadcrumbs} tone="light" />
        <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <Eyebrow light>See what a proper clean can reveal</Eyebrow>
            <h1 id="pressure-hero-heading" className="mt-5 text-[2.6rem] font-bold uppercase leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.2rem]">
              Pressure Cleaning in Melbourne
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Driveways, paths, patios and other outdoor hard surfaces slowly take on the dirt, grime and growth of
              everyday life outside. We clean them with an approach matched to the surface, so you can see what&apos;s
              underneath without risking the surface itself.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={QUOTE_PATH} variant="accent" size="lg" className="rounded-md">
                Request a Quote
              </ButtonLink>
              <ButtonLink href="#surfaces" variant="ghost-light" size="lg" className="rounded-md">
                What We Clean
              </ButtonLink>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
              {["Driveways", "Paths", "Patios", "Pavers", "Concrete"].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#8fd3ee]" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>{reveal}</div>
        </div>
      </Container>
    </section>
  );
}

/* 2 ─ What pressure cleaning is, with a spray-fan diagram */
export function HowItWorks() {
  return (
    <section aria-labelledby="how-pressure-heading" className="bg-[#eef0ed] py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <Eyebrow>Water, pressure and a surface</Eyebrow>
          <h2 id="how-pressure-heading" className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.1]">
            What pressure cleaning actually is
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>
              Pressure cleaning, also called pressure washing or high pressure cleaning, directs a focused flow of water
              at a hard surface. The force of the water lifts dirt, grime and organic growth out of the surface texture
              and rinses it away, without scrubbing by hand.
            </p>
            <p>
              Outdoor surfaces build up differently from anything inside. Concrete and pavers are porous, they sit in the
              rain and sun, and they&apos;re walked and driven on every day. Soil washes across them, leaves break down on
              them, and damp, shaded corners let moss and algae take hold. Over months and years, a surface that started
              out light and even becomes dull, patchy and darker.
            </p>
            <p>
              Pressure cleaning makes sense when that build-up is on a surface that can handle it: sound concrete, most
              pavers, paths, patios and driveways. What you can expect is a noticeably cleaner, more even-looking
              surface. What you shouldn&apos;t expect is a repaired or brand-new one; more on that{" "}
              <a href="#expectations" className={link}>
                further down
              </a>
              .
            </p>
          </div>
        </div>
        <figure aria-hidden="true" className="rounded-2xl bg-white p-6 ring-1 ring-black/5 sm:p-8">
          <svg viewBox="0 0 400 300" className="h-auto w-full">
            <defs>
              <linearGradient id="fan" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#8fd3ee" stopOpacity=".95" />
                <stop offset="1" stopColor="#8fd3ee" stopOpacity=".15" />
              </linearGradient>
            </defs>
            {/* wand */}
            <path d="M300 20l-90 110" stroke="#1c2426" strokeWidth="12" strokeLinecap="round" />
            <rect x="196" y="120" width="30" height="22" rx="4" fill="#f4b63f" transform="rotate(-50 211 131)" />
            {/* fan spray */}
            <path d="M205 142L110 250h160Z" fill="url(#fan)" />
            {[130, 160, 190, 220, 250].map((x) => (
              <path key={x} d={`M205 142L${x} 250`} stroke="#fff" strokeWidth="1.5" opacity=".7" />
            ))}
            {/* surface: grimy left, clean right */}
            <rect x="20" y="250" width="360" height="34" fill="#cfd1cc" />
            <rect x="20" y="250" width="110" height="34" fill="#7c8174" />
            <rect x="20" y="250" width="110" height="6" fill="#5c6655" />
            {/* droplets */}
            {[[118, 238], [276, 236], [92, 244], [300, 242]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="3" fill="#8fd3ee" />
            ))}
            <text x="75" y="296" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a5d65">
              BUILD-UP
            </text>
            <text x="300" y="296" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a5d65">
              CLEANED
            </text>
          </svg>
          <p className="mt-2 text-center text-sm text-ink-soft">A fan of water lifts build-up out of the surface texture.</p>
        </figure>
      </Container>
    </section>
  );
}

/* 3 ─ Surface inspector wrapper */
export function WhatWeClean({ children }: { children: ReactNode }) {
  return (
    <section id="surfaces" aria-labelledby="surfaces-heading" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Surface by surface</Eyebrow>
          <h2 id="surfaces-heading" className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            What we&apos;re cleaning, and what each surface needs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Every outdoor surface has its own texture, weak points and way of collecting dirt. Choose one to see what we
            look out for.
          </p>
        </div>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}

/* 4 ─ Build-up as layers settling on a surface */
export function BuildUpLayers() {
  const shades = ["#6f6a5e", "#7a7568", "#5f6b52", "#838074", "#4f5a47", "#8e8a7e"];
  return (
    <section aria-labelledby="buildup-pressure-heading" style={{ backgroundColor: WET }} className="py-20 text-white sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Eyebrow light>What settles outside</Eyebrow>
          <h2 id="buildup-pressure-heading" className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The layers that build up on outdoor surfaces
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            It isn&apos;t one kind of dirt. Outdoor surfaces gather several different layers, and each responds a little
            differently to cleaning. Some lift easily; some, like old staining, may only lighten.
          </p>
        </div>
        <ol className="overflow-hidden rounded-xl ring-1 ring-white/10">
          {buildUp.map((b, i) => (
            <li key={b.name} style={{ backgroundColor: shades[i] }} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-6">
              <h3 className="w-44 shrink-0 font-bold">{b.name}</h3>
              <p className="text-[15px] leading-relaxed text-white/85">{b.text}</p>
            </li>
          ))}
          <li aria-hidden="true" className={`h-8 ${concrete}`} />
        </ol>
      </Container>
    </section>
  );
}

/* 5 ─ Driveway focus with an aerial diagram */
export function DrivewayFocus() {
  return (
    <section aria-labelledby="driveway-heading" className="bg-[#eef0ed] py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Driveway cleaning</Eyebrow>
          <h2 id="driveway-heading" className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.1]">
            The driveway: your biggest, hardest-working surface
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <figure className="mx-auto w-full max-w-md lg:max-w-none">
            <svg viewBox="0 0 320 380" className="h-auto w-full" role="img" aria-labelledby="driveway-svg-title">
              <title id="driveway-svg-title">
                Aerial diagram of a driveway showing the garage entrance, tyre tracks, parking area, joints, edges and the
                kerb
              </title>
              {/* garden */}
              <rect width="320" height="380" fill="#b8d3a4" />
              {/* house + garage */}
              <rect x="40" y="0" width="240" height="60" fill="#d9d0c1" />
              <rect x="80" y="30" width="160" height="30" fill="#8a9795" />
              {/* driveway slab */}
              <rect x="80" y="60" width="160" height="290" fill="#cfd1cc" />
              <rect x="80" y="60" width="160" height="290" fill="#6f6a5e" opacity=".25" />
              {/* tyre tracks */}
              <rect x="104" y="60" width="26" height="290" fill="#3d3a33" opacity=".32" />
              <rect x="190" y="60" width="26" height="290" fill="#3d3a33" opacity=".32" />
              {/* oil mark */}
              <ellipse cx="160" cy="112" rx="22" ry="14" fill="#1c1c1a" opacity=".5" />
              {/* expansion joints */}
              {[140, 220, 300].map((y) => (
                <path key={y} d={`M80 ${y}h160`} stroke="#5c5a52" strokeWidth="2.5" />
              ))}
              {/* edge growth */}
              <rect x="80" y="60" width="8" height="290" fill="#5f6b52" opacity=".7" />
              <rect x="232" y="60" width="8" height="290" fill="#5f6b52" opacity=".7" />
              {/* kerb */}
              <rect x="0" y="350" width="320" height="30" fill="#9aa09b" />
              <path d="M0 350h320" stroke="#7c827d" strokeWidth="3" />
              {/* markers */}
              {[
                [160, 45, 1],
                [117, 250, 2],
                [160, 112, 3],
                [160, 220, 4],
                [84, 180, 5],
                [160, 365, 6],
              ].map(([x, y, n]) => (
                <g key={n}>
                  <circle cx={x} cy={y} r="12" fill="#1f5f7a" stroke="#fff" strokeWidth="3" />
                  <text x={x} y={y + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
                    {n}
                  </text>
                </g>
              ))}
            </svg>
            <figcaption className="mt-3">
              <ol className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-ink-soft">
                {["Garage entrance", "Tyre tracks", "Parking & oil marks", "Expansion joints", "Edges beside garden", "Kerb & crossover"].map((l, i) => (
                  <li key={l}>
                    <span className="font-bold text-[#1f5f7a]">{i + 1}</span> {l}
                  </li>
                ))}
              </ol>
            </figcaption>
          </figure>
          <div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {driveway.map((d) => (
                <div key={d.title} className="border-t-4 border-[#1f5f7a] pt-4">
                  <h3 className="text-lg font-bold text-ink">{d.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{d.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-xl bg-white p-6 ring-1 ring-black/5">
              <h3 className="font-bold text-ink">Realistic expectations for driveways</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                A cleaned driveway usually looks brighter and more even, with less growth along the edges and joints.
                Oil, rust and deeply set tyre marks may lighten without disappearing, and cracks or uneven slabs stay as
                they are, because cleaning doesn&apos;t change the structure of a driveway.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* 6 ─ Patios and paths, side by side with texture strips */
export function PatiosAndPaths() {
  return (
    <section aria-labelledby="patios-paths-heading" className="bg-white py-20 sm:py-28">
      <Container>
        <h2 id="patios-paths-heading" className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Patios, outdoor areas, paths and walkways
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-2xl ring-1 ring-black/10">
            <div aria-hidden="true" className={`relative h-28 ${textures.patio}`}>
              <div className={`absolute inset-y-0 left-0 w-2/5 ${grime}`} />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold tracking-tight text-ink">Patio &amp; outdoor area cleaning</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                Outdoor living spaces take a different kind of wear. Food and drink get spilt, barbecues spit grease,
                leaves collect in corners, and furniture and pot plants leave rings and marks. Covered patios can stay
                damp for longer, which gives growth a chance to settle in.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                Cleaning lifts that everyday build-up so the space looks brighter and more inviting to use again. Because
                patios sit right beside the house, we also consider walls, doors, glass and garden beds that spray or
                runoff could reach.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl ring-1 ring-black/10">
            <div aria-hidden="true" className={`relative h-28 ${textures.path}`}>
              <div className={`absolute inset-y-0 left-0 w-2/5 ${grime}`} />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold tracking-tight text-ink">Paths &amp; walkways</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                Paths carry the most footfall on a property. Dirt is tracked along the same line every day, edges beside
                lawns collect soil, and joints and textured finishes hold grime in their grooves. Shaded paths often
                develop the green, slippery-looking build-up people notice first.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                Cleaning can reduce that build-up and make a path look cleaner and more even. It doesn&apos;t level uneven
                sections or guarantee a non-slip surface. If a path is lifting or damaged, we&apos;ll point it out.
              </p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}

/* 7 ─ Pressure vs soft washing on a gauge */
export function PressureGauge() {
  return (
    <section aria-labelledby="gauge-heading" className="bg-[#eef0ed] py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Pressure washing vs soft washing</Eyebrow>
          <h2 id="gauge-heading" className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.1]">
            More pressure isn&apos;t automatically better
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            Too much force on the wrong surface can etch concrete, dislodge joints, damage finishes or mark softer
            materials. The right approach is the gentlest one that does the job for that material, its condition and the
            build-up on it.
          </p>
        </div>

        <div aria-hidden="true" className="mt-12">
          <div className="h-4 rounded-full bg-gradient-to-r from-[#bfe3f1] via-[#5aa9c9] to-[#1f5f7a]" />
          <div className="mt-2 flex justify-between text-xs font-bold uppercase tracking-[0.18em] text-ink-soft">
            <span>Lower pressure</span>
            <span>Higher pressure</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[softVsPressure.soft, softVsPressure.pressure].map((m, i) => (
            <div key={m.title} className={`rounded-2xl p-6 sm:p-8 ${i === 0 ? "bg-white ring-1 ring-black/5" : "bg-[#1f5f7a] text-white"}`}>
              <h3 className="text-xl font-bold">{m.title}</h3>
              <p className={`mt-2 text-[15px] leading-relaxed ${i === 0 ? "text-ink-soft" : "text-white/80"}`}>{m.text}</p>
              <p className={`mt-5 text-xs font-bold uppercase tracking-[0.18em] ${i === 0 ? "text-[#1f5f7a]" : "text-[#8fd3ee]"}`}>Often suits</p>
              <ul className="mt-2 space-y-1.5">
                {m.suits.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-[15px]">
                    <Check className={`h-4 w-4 shrink-0 ${i === 0 ? "text-[#1f5f7a]" : "text-[#8fd3ee]"}`} strokeWidth={3} aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
          Which approach suits your surface is decided on site, after looking at the material and its condition.
        </p>
      </Container>
    </section>
  );
}

/* 8 ─ Site inspection report: the strongest section */
export function SiteInspection() {
  return (
    <section aria-labelledby="inspection-heading" className={`py-20 sm:py-28 ${concrete}`}>
      <Container>
        <div className="mx-auto max-w-5xl rounded-md bg-white shadow-lift">
          <div className="flex flex-col gap-3 border-b-4 border-ink px-6 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-ink-soft">Surface inspection</p>
              <h2 id="inspection-heading" className="mt-1 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                What we look at before cleaning
              </h2>
            </div>
            <p className="max-w-xs text-sm text-ink-soft">Checked before any water goes on the surface.</p>
          </div>
          <p className="px-6 pt-6 text-base leading-relaxed text-ink-soft sm:px-10 sm:text-lg">
            The difference between a good result and a damaged surface usually comes down to what happens before cleaning
            starts. We look at nine things.
          </p>
          <ol className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {inspection.map((item) => (
              <li key={item.code} className="border-t border-dashed border-ink/15 px-6 py-6 sm:px-10 lg:[&:nth-child(3n+2)]:border-x lg:[&:nth-child(3n+2)]:border-dashed">
                <div className="flex items-center gap-3">
                  <span className="rounded bg-[#1f5f7a] px-2 py-0.5 font-mono text-xs font-bold text-white">{item.code}</span>
                  <h3 className="font-bold text-ink">{item.name}</h3>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{item.text}</p>
              </li>
            ))}
          </ol>
          <p className="border-t-4 border-ink px-6 py-5 text-sm text-ink-soft sm:px-10">
            If something means a surface isn&apos;t suitable for pressure cleaning, or needs a gentler approach, we&apos;ll tell
            you before starting.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* 9 ─ Process as a surface that gets cleaner along its length */
export function SurfaceJourney() {
  return (
    <section aria-labelledby="journey-pressure-heading" className="bg-white py-20 sm:py-28">
      <Container>
        <Eyebrow>From start to finish</Eyebrow>
        <h2 id="journey-pressure-heading" className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          The surface journey
        </h2>
        <div aria-hidden="true" className={`relative mt-12 hidden h-20 overflow-hidden rounded-lg lg:block ${concrete}`}>
          <div className={`absolute inset-0 ${grime} [mask-image:linear-gradient(90deg,#000_0%,#000_20%,transparent_85%)]`} />
          <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-[#8fd3ee]" />
        </div>
        <ol className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-6">
          {journey.map((j, i) => (
            <li key={j.name} className="relative border-l-4 border-[#1f5f7a] pl-5 lg:border-l-0 lg:border-t-4 lg:pl-0 lg:pt-5">
              <span className="font-mono text-sm font-bold text-[#1f5f7a]">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 text-xl font-bold text-ink">{j.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{j.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* 10 ─ Honest expectations */
export function Expectations() {
  return (
    <section id="expectations" aria-labelledby="expect-pressure-heading" style={{ backgroundColor: WET }} className="scroll-mt-24 py-20 text-white sm:py-28">
      <Container>
        <h2 id="expect-pressure-heading" className="max-w-3xl text-3xl font-bold tracking-tight sm:text-[2.6rem] sm:leading-[1.1]">
          What pressure cleaning can and can&apos;t do
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Results vary by surface. Weather, age, previous treatments and the condition of the material all shape what&apos;s
          achievable, and we&apos;d rather tell you that up front.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-[2px] overflow-hidden rounded-2xl bg-white/10 md:grid-cols-2">
          <div className="p-6 sm:p-8" style={{ backgroundColor: WET }}>
            <h3 className="flex items-center gap-2 text-lg font-bold text-[#8fd3ee]">
              <Check className="h-5 w-5" strokeWidth={3} aria-hidden="true" /> It can
            </h3>
            <ul className="mt-5 space-y-3">
              {canDo.map((c) => (
                <li key={c} className="text-[15px] leading-relaxed text-white/85">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 sm:p-8" style={{ backgroundColor: "#243033" }}>
            <h3 className="flex items-center gap-2 text-lg font-bold text-wattle">
              <X className="h-5 w-5" strokeWidth={3} aria-hidden="true" /> It can&apos;t
            </h3>
            <ul className="mt-5 space-y-3">
              {cannotDo.map((c) => (
                <li key={c} className="text-[15px] leading-relaxed text-white/85">
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

/* 11 ─ Melbourne context */
export function MelbourneWeather() {
  return (
    <section aria-labelledby="melbourne-pressure-heading" className="bg-[#eef0ed] py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-14">
        <CloudRain className="h-14 w-14 text-[#1f5f7a]" strokeWidth={1.5} aria-hidden="true" />
        <div className="max-w-3xl">
          <h2 id="melbourne-pressure-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Outdoor surfaces in Melbourne
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>
              Melbourne&apos;s weather changes often, and outdoor surfaces feel all of it: rain that washes soil across
              driveways, damp periods that let moss and algae settle into shaded paths, and hot dry spells that bake dirt
              onto concrete. Add everyday use, from cars and bins to foot traffic and outdoor dining, and even a
              well-kept property gradually takes on a weathered look.
            </p>
            <p>
              Whether it&apos;s a city courtyard, a suburban driveway or the entrance to a business, we clean outdoor hard
              surfaces across Melbourne. Include your suburb when you get in touch, and see our{" "}
              <MaybeLink path="/service-areas/">service areas</MaybeLink> for more.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* 12 ─ Who it's for, as a list of ruled lines */
export function WhoItsFor() {
  return (
    <section aria-labelledby="who-pressure-heading" className="bg-white py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <h2 id="who-pressure-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Who pressure cleaning is for
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Anyone with an outdoor hard surface that&apos;s started to look tired. Businesses may also want to look at{" "}
            <MaybeLink path="/services/commercial-cleaning/">commercial cleaning</MaybeLink> or{" "}
            <MaybeLink path="/services/office-cleaning/">office cleaning</MaybeLink> for the inside.
          </p>
        </div>
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {audiences.map((a) => (
            <li key={a.title} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-6">
              <h3 className="font-bold text-ink">{a.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink-soft">{a.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* 13 ─ Before you book */
export function BeforeYouBook() {
  return (
    <section aria-labelledby="before-book-heading" className="bg-[#eef0ed] py-20 sm:py-24">
      <Container>
        <h2 id="before-book-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Before you book
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          A few simple things make the day go smoothly. None of them are hard requirements; just let us know what&apos;s
          possible.
        </p>
        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {beforeYouBook.map((b, i) => (
            <li key={b.title} className="rounded-xl bg-white p-5 ring-1 ring-black/5">
              <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#1f5f7a] text-sm font-bold text-[#1f5f7a]">
                {i + 1}
              </span>
              <h3 className="mt-4 font-bold text-ink">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{b.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* 14 ─ Quote factors as a measurement sheet */
export function QuoteFactors() {
  return (
    <section aria-labelledby="pressure-quote-heading" className="bg-white py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="pressure-quote-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            What affects a pressure cleaning quote
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            We don&apos;t use a fixed price, because a small courtyard and a long driveway with paths and a patio are very
            different jobs. Quotes are free and based on what you tell us, and photos help.
          </p>
          <ButtonLink href={QUOTE_PATH} size="lg" className="mt-8 rounded-md">
            Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-ink/10 sm:grid-cols-2">
          {quoteFactors.map((f) => (
            <div key={f.name} className="bg-white p-5">
              <dt className="flex items-center gap-3 font-bold text-ink">
                <span aria-hidden="true" className="flex gap-0.5">
                  {[0, 1, 2, 3].map((k) => (
                    <span key={k} className="h-3 w-1 rounded-full bg-[#1f5f7a]" style={{ opacity: 0.25 + k * 0.25 }} />
                  ))}
                </span>
                {f.name}
              </dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{f.text}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/* 15 ─ FAQ: sticky heading beside a numbered list */
export function PressureFAQ() {
  return (
    <section id="faq" aria-labelledby="pressure-faq-heading" className="bg-[#eef0ed] py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Questions</Eyebrow>
          <h2 id="pressure-faq-heading" className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Pressure cleaning FAQs
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            Looking for help inside the home too? See{" "}
            <MaybeLink path="/services/house-cleaning/">house cleaning</MaybeLink>, a{" "}
            <MaybeLink path="/services/deep-cleaning/">deep clean</MaybeLink>,{" "}
            <MaybeLink path="/services/window-cleaning/">window cleaning</MaybeLink>, or{" "}
            <MaybeLink path="/services/post-construction-cleaning/">post-construction cleaning</MaybeLink> after building
            work. Browse <MaybeLink path="/services/">all services</MaybeLink> or read the{" "}
            <a href="/faq/" className={link}>
              general FAQ
            </a>
            .
          </p>
        </div>
        <div className="space-y-2">
          {pressureFaqs.map(({ question, answer }, i) => (
            <details key={question} className="group rounded-lg bg-white ring-1 ring-black/5 open:ring-[#1f5f7a]/40">
              <summary className="flex cursor-pointer list-none items-start gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8fd3ee]/60 [&::-webkit-details-marker]:hidden">
                <span className="w-7 shrink-0 font-mono text-sm font-bold text-[#1f5f7a]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="flex-1 text-base font-bold text-ink">{question}</h3>
                <Plus className="h-5 w-5 shrink-0 text-ink-soft group-open:hidden" aria-hidden="true" />
                <Minus className="hidden h-5 w-5 shrink-0 text-[#1f5f7a] group-open:block" aria-hidden="true" />
              </summary>
              <p className="px-5 pb-6 pl-16 text-[15px] leading-relaxed text-ink-soft">{answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* 16 ─ CTA: a dry/wet reveal band */
export function RevealCTA() {
  return (
    <section id="quote" aria-labelledby="pressure-cta-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className={`absolute inset-0 ${concrete}`} />
      <div aria-hidden="true" className={`absolute inset-0 ${grime} [clip-path:polygon(0_0,48%_0,36%_100%,0_100%)]`} />
      <div aria-hidden="true" className="absolute inset-y-0 left-[42%] w-1.5 -skew-x-[7deg] bg-[#8fd3ee] shadow-[0_0_30px_8px_rgb(143_211_238/0.6)]" />
      <Container className="relative py-16 sm:py-24">
        <div className="ml-auto max-w-2xl rounded-2xl p-7 text-white shadow-lift sm:p-10" style={{ backgroundColor: WET }}>
          <h2 id="pressure-cta-heading" className="text-3xl font-bold uppercase leading-[1.05] tracking-tight sm:text-4xl">
            See what a proper clean can reveal.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">Tell us:</p>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-[15px] text-white/85 sm:grid-cols-2">
            {["What surface needs cleaning", "The approximate area", "Your suburb", "Your preferred timing", "Any special concerns"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Droplets className="h-4 w-4 shrink-0 text-[#8fd3ee]" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={QUOTE_PATH} variant="accent" size="lg" className="whitespace-nowrap rounded-md">
              Request a Quote
            </ButtonLink>
            <ButtonLink href="/contact/" variant="ghost-light" size="lg" className="rounded-md">
              Contact Melbourne Cleaning Pro
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

