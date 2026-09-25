import Image from "next/image";
import { AlertCircle, ArrowRight, CheckCircle2, Layers, Search, Sparkles, Square } from "lucide-react";
import {
  alsoNeed,
  buildUp,
  careTips,
  cleaningSteps,
  fabricFactors,
  furniture,
  helps,
  images,
  inspection,
  markFactors,
  marks,
  quoteFactors,
  zones,
  type FurnitureId,
} from "@/lib/upholstery-cleaning";
import { isLiveRoute } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";

/** Linen-style weave used as a tactile background. */
const linen =
  "[background-image:repeating-linear-gradient(0deg,rgb(16_39_47/0.035)_0_1px,transparent_1px_4px),repeating-linear-gradient(90deg,rgb(16_39_47/0.03)_0_1px,transparent_1px_5px)]";
/** Pinking-shear zigzag edge for fabric swatches. */
const pinked =
  "[clip-path:polygon(0_6%,6%_0,12%_6%,18%_0,24%_6%,30%_0,36%_6%,42%_0,48%_6%,54%_0,60%_6%,66%_0,72%_6%,78%_0,84%_6%,90%_0,96%_6%,100%_0,100%_94%,94%_100%,88%_94%,82%_100%,76%_94%,70%_100%,64%_94%,58%_100%,52%_94%,46%_100%,40%_94%,34%_100%,28%_94%,22%_100%,16%_94%,10%_100%,4%_94%,0_100%)]";

const quoteHrefUph = "/quote/?service=upholstery";

export function UpholsteryHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section aria-labelledby="uph-hero-heading" className={`bg-[#f5efe4] ${linen}`}>
      <Container className="pb-16 pt-6 sm:pt-8 lg:pb-20">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-2 border-b-2 border-dashed border-wattle-dark pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-ink">
              Upholstery cleaning, Melbourne
            </p>
            <h1 id="uph-hero-heading" className="mt-6 text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl">
              Give Your Upholstery a Fresh Start
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
              Sofas, armchairs and dining chairs take a lot of everyday use. Professional upholstery cleaning can help
              refresh fabric furniture and lift accumulated dirt, dust and everyday marks, depending on the material
              and its condition.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={quoteHrefUph} size="lg">
                Request a Quote
              </ButtonLink>
              <ButtonLink href="/services/" variant="secondary" size="lg">
                View All Services
              </ButtonLink>
            </div>
          </div>
          {/* the image framed like a cushion: fabric border with stitched piping */}
          <figure className="rounded-[2.75rem] bg-[#d8c7a9] p-3 shadow-lift sm:p-4">
            <div className="relative overflow-hidden rounded-[2.1rem]">
              <Image
                src={images.sofa.src}
                width={images.sofa.width}
                height={images.sofa.height}
                alt={images.sofa.alt}
                priority
                sizes="(min-width: 1024px) 620px, 100vw"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
              <span aria-hidden="true" className="pointer-events-none absolute inset-2 rounded-[1.75rem] border-2 border-dashed border-white/70" />
            </div>
          </figure>
        </div>
      </Container>
    </section>
  );
}

/** Sofa diagram: zones shaded in fabric tones, explained by pinked swatches. */
export function SofaZones() {
  return (
    <section aria-labelledby="zones-uph-heading" className="py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 id="zones-uph-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Where furniture shows everyday use
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Some parts of a sofa work harder than others. These are general patterns, not a promise of what every
            clean will achieve.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          <svg viewBox="0 0 600 330" className="h-auto w-full" role="img" aria-labelledby="sofa-diagram-title">
            <title id="sofa-diagram-title">Sofa diagram highlighting back cushions, seat cushions, armrests and fabric surfaces</title>
            <defs>
              <pattern id="uph-weave" width="6" height="6" patternUnits="userSpaceOnUse">
                <rect width="6" height="6" fill="#0b6e69" />
                <path d="M0 1.5h6M0 4.5h6" stroke="#0e7f79" strokeWidth="1" />
              </pattern>
            </defs>
            {/* fabric surfaces (whole frame) */}
            <rect x="40" y="40" width="520" height="240" rx="34" fill="url(#uph-weave)" />
            {/* back cushions */}
            {[70, 225, 380].map((x) => (
              <rect key={x} x={x} y="58" width="150" height="110" rx="24" fill="#cfbd9d" stroke="#b9a582" strokeWidth="2" strokeDasharray="4 5" />
            ))}
            {/* seat cushions */}
            {[70, 225, 380].map((x) => (
              <rect key={x} x={x} y="172" width="150" height="62" rx="18" fill="#d8c7a9" stroke="#b9a582" strokeWidth="2" strokeDasharray="4 5" />
            ))}
            {/* armrests */}
            <rect x="16" y="120" width="64" height="160" rx="30" fill="#f4b63f" />
            <rect x="520" y="120" width="64" height="160" rx="30" fill="#f4b63f" />
            <g fill="#6f5439">
              <rect x="70" y="280" width="12" height="26" rx="3" />
              <rect x="518" y="280" width="12" height="26" rx="3" />
            </g>
            <path d="M20 306h560" stroke="#e3e8e7" strokeWidth="3" />
          </svg>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {zones.map(({ id, title, text, swatch }) => (
              <li key={id} className="flex items-start gap-4">
                <span aria-hidden="true" className={`mt-1 h-11 w-14 shrink-0 ${swatch} ${pinked}`} />
                <div>
                  <h3 className="font-semibold text-ink">{title}</h3>
                  <p className="mt-0.5 text-[15px] leading-relaxed text-ink-soft">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function EverydayUse() {
  return (
    <section aria-labelledby="everyday-heading" className="bg-ink py-20 text-white sm:py-24">
      <Container>
        <h2 id="everyday-heading" className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-[3.2rem]">
          Your furniture gets used{" "}
          <span className="border-b-4 border-dashed border-wattle">every day</span>.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          Movie nights, meals on the couch, kids, pets and long days. Over time, upholstered furniture gradually
          collects the traces of ordinary life, which can leave fabric looking duller and more worn than it is.
        </p>
        {/* woven labels */}
        <ul className="mt-12 flex flex-wrap gap-3">
          {buildUp.map((b) => (
            <li
              key={b}
              className="relative bg-[#f5efe4] py-2.5 pl-5 pr-7 text-sm font-semibold text-ink [clip-path:polygon(0_0,100%_0,calc(100%-12px)_50%,100%_100%,0_100%)]"
            >
              <span aria-hidden="true" className="absolute inset-1 border border-dashed border-ink/20 [clip-path:polygon(0_0,100%_0,calc(100%-10px)_50%,100%_100%,0_100%)]" />
              <span className="relative">{b}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function FurnitureGlyph({ id }: { id: FurnitureId }) {
  const fab = "#d8c7a9";
  const leg = "#6f5439";
  return (
    <svg viewBox="0 0 120 80" aria-hidden="true" className="h-20 w-full">
      {id === "sofa" && (
        <>
          <rect x="14" y="20" width="92" height="30" rx="8" fill="#cfbd9d" />
          <rect x="6" y="36" width="16" height="30" rx="7" fill={fab} />
          <rect x="98" y="36" width="16" height="30" rx="7" fill={fab} />
          <rect x="18" y="46" width="84" height="20" rx="5" fill={fab} />
          <path d="M60 22v26" stroke="#b9a582" strokeDasharray="3 3" />
          <g fill={leg}><rect x="12" y="66" width="4" height="8" /><rect x="104" y="66" width="4" height="8" /></g>
        </>
      )}
      {id === "armchair" && (
        <>
          <rect x="36" y="14" width="48" height="40" rx="12" fill="#0e7f79" />
          <rect x="28" y="38" width="14" height="28" rx="6" fill="#0b6e69" />
          <rect x="78" y="38" width="14" height="28" rx="6" fill="#0b6e69" />
          <rect x="38" y="48" width="44" height="18" rx="5" fill="#0e7f79" />
          <g fill={leg}><rect x="34" y="66" width="4" height="8" /><rect x="82" y="66" width="4" height="8" /></g>
        </>
      )}
      {id === "chair" && (
        <>
          <rect x="44" y="10" width="32" height="40" rx="10" fill="#f4b63f" />
          <rect x="40" y="46" width="40" height="14" rx="5" fill="#e0a126" />
          <g stroke={leg} strokeWidth="4"><path d="M46 60l-4 14M74 60l4 14" /></g>
        </>
      )}
      {id === "dining" && (
        <>
          <path d="M46 8h28v38H46Z" fill="none" stroke={leg} strokeWidth="4" />
          <rect x="50" y="14" width="20" height="26" rx="3" fill={fab} />
          <rect x="42" y="46" width="36" height="10" rx="3" fill={fab} />
          <g stroke={leg} strokeWidth="4"><path d="M46 56v18M74 56v18" /></g>
        </>
      )}
      {id === "ottoman" && (
        <>
          <rect x="32" y="38" width="56" height="28" rx="10" fill="#cfbd9d" />
          <path d="M34 50h52" stroke="#b9a582" strokeDasharray="3 3" />
          <g fill={leg}><rect x="38" y="66" width="4" height="8" /><rect x="78" y="66" width="4" height="8" /></g>
        </>
      )}
      {id === "cushion" && (
        <>
          <rect x="30" y="30" width="40" height="36" rx="10" fill="#f4b63f" transform="rotate(-8 50 48)" />
          <rect x="58" y="34" width="36" height="32" rx="9" fill="#0e7f79" transform="rotate(8 76 50)" />
          <circle cx="50" cy="48" r="2.5" fill="#e0a126" />
        </>
      )}
    </svg>
  );
}

/** Furniture lined up on one showroom floor. */
export function FurnitureTypes() {
  return (
    <section aria-labelledby="furniture-heading" className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="furniture-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Furniture we&apos;re often asked about
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
            Suitability depends on the material and how the piece is made. Some materials, like leather, suede or
            delicate and antique fabrics, may need a specialist.
          </p>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 border-b-4 border-[#d9c6a6] pb-8 sm:grid-cols-3 lg:grid-cols-6">
          {furniture.map(({ id, name, text }) => (
            <li key={id} className="text-center">
              <FurnitureGlyph id={id} />
              <h3 className="mt-3 text-[15px] font-semibold text-ink">{name}</h3>
              <p className="mx-auto mt-1 max-w-[12rem] text-sm leading-snug text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

const ribbons = [
  "bg-[#d8c7a9] [background-image:repeating-linear-gradient(90deg,rgb(255_255_255/0.25)_0_2px,transparent_2px_8px)]",
  "bg-[#0e7f79] [background-image:repeating-linear-gradient(45deg,rgb(255_255_255/0.14)_0_3px,transparent_3px_9px)]",
  "bg-[#f4b63f] [background-image:linear-gradient(90deg,rgb(255_255_255/0.2)_50%,transparent_50%),linear-gradient(rgb(255_255_255/0.2)_50%,transparent_50%)] [background-size:12px_12px]",
];

export function FabricMatters() {
  return (
    <section aria-labelledby="fabric-heading" className={`bg-[#f5efe4] py-20 sm:py-24 ${linen}`}>
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <h2 id="fabric-heading" className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.12]">
            Not every fabric is the same.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            A cotton-blend sofa, a velvet armchair and a set of dining chairs can each respond very differently to
            cleaning. That&apos;s why the approach should be considered for each piece before any treatment starts,
            rather than applying one method to everything.
          </p>
          <p className="mt-6 rounded-2xl bg-white p-5 text-[15px] font-medium leading-relaxed text-ink ring-1 ring-line">
            Always follow the manufacturer&apos;s care instructions for your specific furniture, and let us know what
            they say.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft">What the approach depends on</p>
          <ul className="mt-4 space-y-2">
            {fabricFactors.map((f, i) => (
              <li key={f} className={`flex items-center rounded-lg py-1.5 pl-1.5 pr-4 ${ribbons[i % ribbons.length]}`}>
                <span className="rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-ink shadow-sm">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function Blot({ i }: { i: number }) {
  const paths = [
    "M12 3c5 0 9 3 9 8s-4 10-9 10-9-3-8-9 3-9 8-9Z",
    "M11 2c6 1 10 5 9 10s-6 9-11 8-8-5-7-10 3-9 9-8Z",
    "M13 4c4 1 8 4 7 9s-5 8-10 7-7-4-6-9 5-8 9-7Z",
  ];
  const tones = ["#b98b5e", "#8a6a4a", "#a8a08e", "#c7a77a", "#9c8b70"];
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 shrink-0">
      <path d={paths[i % paths.length]} fill={tones[i % tones.length]} opacity=".75" />
    </svg>
  );
}

export function StainsAndMarks() {
  return (
    <section aria-labelledby="stains-uph-heading" className="py-20 sm:py-24">
      <Container>
        <h2 id="stains-uph-heading" className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Stains &amp; marks
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <div className="rounded-3xl bg-white p-6 ring-1 ring-line sm:p-8">
            <h3 className="font-semibold text-ink">Common upholstery marks</h3>
            <ul className="mt-5 space-y-3.5">
              {marks.map((m, i) => (
                <li key={m} className="flex items-center gap-3 text-[15px] text-ink">
                  <Blot i={i} />
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 ring-1 ring-line sm:p-8">
            <h3 className="font-semibold text-ink">Results can vary with</h3>
            <ul className="mt-5 space-y-3">
              {markFactors.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[15px] text-ink">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-4 shrink-0 rounded-full bg-wattle-dark" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 flex items-start gap-3 rounded-2xl border-l-4 border-wattle bg-[#fff8e6] p-5 text-[15px] leading-relaxed text-ink">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-wattle-dark" aria-hidden="true" />
          Many everyday marks can be improved, but not every stain can be removed, and results can&apos;t be
          guaranteed. Older marks, some substances and fragile fabrics can be harder to shift.
        </p>
      </Container>
    </section>
  );
}

/** The things considered before cleaning, set out like an inspection card. */
export function BeforeCleaning() {
  return (
    <section aria-labelledby="inspect-heading" className="bg-[#eef6f3] py-20 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <h2 id="inspect-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What we look at before cleaning
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Upholstery cleaning isn&apos;t one-size-fits-all. A few questions come first, so the approach suits the
            piece in front of us.
          </p>
        </div>
        <div className="rounded-3xl bg-white shadow-lift ring-1 ring-line">
          <p className="border-b border-line px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft">
            Before we clean
          </p>
          <ol className="divide-y divide-line">
            {inspection.map(({ title, question }, i) => (
              <li key={title} className="flex items-start gap-4 px-6 py-5">
                <span className="text-sm font-semibold tabular-nums text-brand">{String(i + 1).padStart(2, "0")}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-ink">{title}</h3>
                  <p className="mt-0.5 text-[15px] text-ink-soft">{question}</p>
                </div>
                <Square className="mt-0.5 h-5 w-5 shrink-0 text-ink/25" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

const stepIcons = [Search, Layers, Sparkles, CheckCircle2];

/** Four steps joined by a stitched thread. */
export function CleaningExperience() {
  return (
    <section aria-labelledby="experience-heading" className="py-20 sm:py-24">
      <Container>
        <h2 id="experience-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          The cleaning experience
        </h2>
        <ol className="relative mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
          <span aria-hidden="true" className="absolute bottom-6 left-7 top-6 border-l-2 border-dashed border-wattle-dark/60 md:bottom-auto md:left-6 md:right-6 md:top-7 md:border-l-0 md:border-t-2" />
          {cleaningSteps.map(({ title, text }, i) => {
            const Icon = stepIcons[i];
            return (
              <li key={title} className="relative flex gap-5 md:block">
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white ring-2 ring-wattle-dark">
                  <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                </span>
                <div className="md:mt-5">
                  <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

export function FurnitureCare() {
  return (
    <section aria-labelledby="care-heading" className="border-t border-line py-20 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Image
          src={images.armchair.src}
          width={images.armchair.width}
          height={images.armchair.height}
          alt={images.armchair.alt}
          loading="lazy"
          sizes="(min-width: 1024px) 560px, 100vw"
          className="aspect-[4/3] h-auto w-full rounded-[2rem] object-cover"
        />
        <div>
          <h2 id="care-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Everyday furniture care
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            A few general habits can help between cleans. They won&apos;t suit every material, so check first.
          </p>
          <ul className="mt-6 space-y-3">
            {careTips.map((t) => (
              <li key={t} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-semibold text-ink">
            Always follow the manufacturer&apos;s care instructions for your specific furniture.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function WhoItHelps() {
  return (
    <section aria-labelledby="helps-heading" className={`bg-[#f5efe4] py-20 sm:py-24 ${linen}`}>
      <Container>
        <h2 id="helps-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Who this service can help
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {helps.map(({ title, text }) => (
            <li key={title} className="border-l-4 border-wattle-dark pl-5">
              <h3 className="text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function MoreThanUpholstery() {
  return (
    <section aria-labelledby="more-heading" className="py-20 sm:py-24">
      <Container className="max-w-4xl">
        <h2 id="more-heading" className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Need More Than Upholstery Cleaning?
        </h2>
        <ul className="mt-10 divide-y divide-line rounded-2xl border border-line bg-white">
          {alsoNeed.map(({ question, path, label }) => {
            const live = isLiveRoute(path);
            const inner = (
              <>
                <span className="text-[15px] text-ink sm:text-base">{question}</span>
                <span className={`inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold ${live ? "text-brand" : "text-ink-soft"}`}>
                  {label}
                  {live && <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />}
                </span>
              </>
            );
            return (
              <li key={path}>
                {live ? (
                  <a href={path} className="group flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-cream focus-visible:bg-brand-50 focus-visible:outline-none sm:px-6">
                    {inner}
                  </a>
                ) : (
                  <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export function FurnitureQuote() {
  return (
    <section aria-labelledby="uph-quote-heading" className="bg-[#eef6f3] py-20 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <h2 id="uph-quote-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Every Piece of Furniture Is Different
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            There&apos;s no fixed price for upholstery cleaning. We look at what you have and prepare a quote from
            the details you give us.
          </p>
          <ButtonLink href={quoteHrefUph} size="lg" className="mt-8">
            Tell Us About Your Upholstery
          </ButtonLink>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {quoteFactors.map((f, i) => (
            <li key={f} className={`flex min-h-[5.5rem] items-end p-4 text-sm font-semibold text-ink ${pinked} ${i % 3 === 1 ? "bg-[#cfbd9d]" : i % 3 === 2 ? "bg-[#fbe3a6]" : "bg-[#d8c7a9]"}`}>
              {f}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Closing panel with a diamond-tufted pattern, like a buttoned headboard. */
export function UpholsteryCTA() {
  return (
    <section id="quote" aria-labelledby="uph-cta-heading" className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <span
            aria-hidden="true"
            className="absolute inset-0 [background-image:radial-gradient(circle,rgb(8_82_78/0.9)_3px,transparent_3.5px),linear-gradient(45deg,transparent_48%,rgb(255_255_255/0.07)_49%,rgb(255_255_255/0.07)_51%,transparent_52%),linear-gradient(-45deg,transparent_48%,rgb(255_255_255/0.07)_49%,rgb(255_255_255/0.07)_51%,transparent_52%)] [background-size:56px_56px]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 id="uph-cta-heading" className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Ready to Refresh Your Furniture?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Tell us what you&apos;d like cleaned, what it&apos;s made from and any marks you&apos;re worried about,
              and we&apos;ll take it from there.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={quoteHrefUph} variant="accent" size="lg">
                Request a Quote
              </ButtonLink>
              <ButtonLink href="/contact/" variant="ghost-light" size="lg">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
