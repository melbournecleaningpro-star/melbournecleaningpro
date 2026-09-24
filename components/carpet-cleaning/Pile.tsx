import Image from "next/image";
import { Clock, Droplet, Footprints, Hourglass, Layers, Palette, RefreshCw } from "lucide-react";
import { buildUp, focusAreas, images, propertyTypes, resultFactors, roomStories, zones } from "@/lib/carpet-cleaning";
import { quoteHref } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";

/** Shared CSS textures: pile dots, vacuum lines, fringe threads. */
const pileTexture =
  "[background-image:radial-gradient(rgb(255_255_255/0.09)_1px,transparent_1.6px),radial-gradient(rgb(0_0_0/0.1)_1px,transparent_1.6px)] [background-size:7px_7px] [background-position:0_0,3.5px_3.5px]";
const fringeX = "[background:repeating-linear-gradient(90deg,#e9dfcc_0_2px,transparent_2px_6px)]";

/** Floor-level hero: headline on a teal pile texture, room image below with traffic markers. */
export function CarpetHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section aria-labelledby="carpet-hero-heading" className={`bg-[#0a5a56] ${pileTexture}`}>
      <Container className="pt-6 sm:pt-8">
        <Breadcrumbs items={breadcrumbs} tone="light" />
        <div className="mt-10 grid grid-cols-1 gap-8 pb-12 lg:mt-14 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16 lg:pb-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-wattle">Refresh what&apos;s underfoot</p>
            <h1
              id="carpet-hero-heading"
              className="mt-4 text-[2.5rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]"
            >
              Professional Carpet Cleaning Services in Melbourne
            </h1>
          </div>
          <div>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              Melbourne Cleaning Pro helps refresh carpets affected by everyday use, dust, visible marks and
              high-traffic wear, in homes and suitable commercial spaces.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={quoteHref} variant="accent" size="lg" className="sm:whitespace-nowrap">
                Get a Carpet Cleaning Quote
              </ButtonLink>
              <ButtonLink href="#included" variant="ghost-light" size="lg" className="sm:whitespace-nowrap">
                See What&apos;s Included
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>

      {/* the room sits on the "floor" of the next section */}
      <div className="bg-[linear-gradient(to_bottom,transparent_55%,#f8f6f1_55%)]">
        <Container>
          <figure className="relative overflow-hidden rounded-t-[2rem] rounded-b-lg shadow-lift">
            <Image
              src={images.living.src}
              width={images.living.width}
              height={images.living.height}
              alt={images.living.alt}
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="aspect-[4/3] h-auto w-full object-cover object-[center_80%] sm:aspect-[16/9] lg:aspect-[2/1]"
            />
            {/* high-traffic markers on the carpet */}
            {[
              { label: "Walkway", pos: "left-[44%] top-[78%]" },
              { label: "In front of the sofa", pos: "left-[8%] top-[64%] sm:left-[14%]" },
            ].map(({ label, pos }) => (
              <span
                key={label}
                className={`absolute flex items-center gap-2 rounded-full bg-ink/85 py-1 pl-1.5 pr-3 text-xs font-semibold text-white ${pos}`}
              >
                <span className="relative flex h-4 w-4 items-center justify-center" aria-hidden="true">
                  <span className="absolute h-4 w-4 animate-ping rounded-full bg-wattle/60 motion-reduce:animate-none" />
                  <span className="h-2.5 w-2.5 rounded-full bg-wattle" />
                </span>
                {label}
              </span>
            ))}
            <figcaption className="sr-only">High-traffic areas on a living-room carpet</figcaption>
          </figure>
        </Container>
      </div>
    </section>
  );
}

function Foot({ flip }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 24 40" aria-hidden="true" className={`h-12 w-8 text-[#8f7f65] ${flip ? "-scale-x-100" : ""}`}>
      <path d="M12 14c5 0 8 5 8 12s-3 12-8 12-7-6-7-12 2-12 7-12Z" fill="currentColor" />
      <circle cx="6" cy="8" r="2.4" fill="currentColor" />
      <circle cx="10.5" cy="5" r="2.4" fill="currentColor" />
      <circle cx="15" cy="4.5" r="2.2" fill="currentColor" />
      <circle cx="19" cy="7" r="2" fill="currentColor" />
    </svg>
  );
}

/** A long runner rug with footprints walking across it, one kind of build-up per step. */
export function FootTraffic() {
  return (
    <section aria-labelledby="floors-heading" className="bg-cream pb-20 pt-16 sm:pb-28 sm:pt-24">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
          <h2 id="floors-heading" className="text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-[3.1rem]">
            Your floors work hard. Give them a proper refresh.
          </h2>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
            Every day, carpet takes the weight of the household. Bit by bit it gathers what comes in on shoes and
            settles out of the air, until the colour looks flatter and the walkways start to show.
          </p>
        </div>

        <div className="mt-14">
          <div className={`h-3 ${fringeX}`} aria-hidden="true" />
          <ol className="grid grid-cols-2 gap-px bg-[#d8ccb5] sm:grid-cols-3 lg:grid-cols-6">
            {buildUp.map((item, i) => (
              <li
                key={item}
                className={`flex flex-col items-center gap-4 bg-[#e6dccb] px-3 py-8 text-center ${pileTexture} ${i % 2 ? "lg:pt-14" : "lg:pb-14"}`}
              >
                <Foot flip={i % 2 === 1} />
                <span className="text-[15px] font-semibold text-ink">{item}</span>
              </li>
            ))}
          </ol>
          <div className={`h-3 ${fringeX}`} aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}

const heat = ["", "rgb(244 182 63 / 0.35)", "rgb(244 182 63 / 0.5)", "rgb(224 110 60 / 0.5)"];

/** Floor plan with a heat-style overlay of where foot traffic concentrates. */
export function TrafficMap() {
  return (
    <section aria-labelledby="zones-heading" className="py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">High-traffic zones</p>
          <h2 id="zones-heading" className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Where Carpet Works Hardest
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Foot traffic follows the same routes day after day. These are the places where carpet usually shows
            everyday use first.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <figure>
            <svg viewBox="0 0 600 400" className="h-auto w-full" role="img" aria-labelledby="plan-title">
              <title id="plan-title">
                Floor plan showing entryway, hallway, living area, stairs, bedroom and office area, with warmer
                colours where foot traffic is usually heavier
              </title>
              <defs>
                <pattern id="plan-pile" width="6" height="6" patternUnits="userSpaceOnUse">
                  <rect width="6" height="6" fill="#efe7d8" />
                  <circle cx="1.5" cy="1.5" r="0.9" fill="#e2d7c2" />
                  <circle cx="4.5" cy="4.5" r="0.9" fill="#e2d7c2" />
                </pattern>
                {zones.map((z) => (
                  <radialGradient key={z.id} id={`heat-${z.id}`}>
                    <stop offset="0" stopColor={heat[z.level]} />
                    <stop offset="1" stopColor="rgb(244 182 63 / 0)" />
                  </radialGradient>
                ))}
              </defs>
              <rect width="600" height="400" rx="10" fill="#10272f" />
              {/* rooms */}
              <g fill="url(#plan-pile)">
                <rect x="10" y="10" width="310" height="220" />
                <rect x="330" y="10" width="260" height="220" />
                <rect x="10" y="240" width="160" height="150" />
                <rect x="180" y="240" width="140" height="150" />
                <rect x="330" y="240" width="80" height="150" />
                <rect x="420" y="240" width="170" height="150" />
              </g>
              {/* doorways */}
              <g fill="#efe7d8">
                <rect x="200" y="228" width="50" height="14" />
                <rect x="440" y="228" width="50" height="14" />
                <rect x="168" y="290" width="14" height="50" />
                <rect x="318" y="290" width="14" height="50" />
                <rect x="408" y="290" width="14" height="50" />
                <rect x="60" y="388" width="60" height="12" />
              </g>
              {/* stair treads */}
              <g stroke="#cdbfa6" strokeWidth="3">
                {[260, 282, 304, 326, 348, 370].map((y) => (
                  <path key={y} d={`M334 ${y}h72`} />
                ))}
              </g>
              {/* furniture outlines */}
              <g fill="none" stroke="#cdbfa6" strokeWidth="3">
                <rect x="40" y="30" width="170" height="50" rx="10" />
                <rect x="90" y="120" width="90" height="50" rx="6" />
                <rect x="440" y="40" width="120" height="140" rx="8" />
                <rect x="470" y="300" width="100" height="40" rx="4" />
              </g>
              {/* traffic heat */}
              {zones.map((z) => (
                <ellipse key={z.id} cx={z.cx} cy={z.cy} rx={50 + z.level * 22} ry={40 + z.level * 14} fill={`url(#heat-${z.id})`} />
              ))}
              {/* walking route */}
              <path
                d="M90 392C90 340 120 320 180 315S300 300 320 310M250 300C240 260 225 240 220 200S180 160 150 150M320 310c40 0 60 0 90 0s60 0 80 5M250 300c40-30 120-60 200-90S470 150 480 140"
                fill="none"
                stroke="#0b6e69"
                strokeWidth="3"
                strokeDasharray="2 9"
                strokeLinecap="round"
              />
              <g fontSize="15" fontWeight="600" fill="#10272f">
                <text x="24" y="218">Living</text>
                <text x="344" y="218">Bedroom</text>
                <text x="24" y="262">Entry</text>
                <text x="194" y="262">Hall</text>
                <text x="336" y="384" fontSize="13">Stairs</text>
                <text x="434" y="262">Office</text>
              </g>
            </svg>
            <figcaption className="mt-3 text-sm text-ink-soft">Illustration only. Every home&apos;s traffic pattern is different.</figcaption>
          </figure>

          <ul className="space-y-5">
            {zones.map(({ id, name, text, level }) => (
              <li key={id} className="flex gap-4">
                <span className="mt-1 flex h-6 shrink-0 items-end gap-0.5" aria-label={`Traffic level ${level} of 3`} role="img">
                  {[1, 2, 3].map((n) => (
                    <span key={n} className={`w-1.5 rounded-sm ${n <= level ? "bg-wattle-dark" : "bg-ink/10"}`} style={{ height: `${n * 8}px` }} />
                  ))}
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{name}</h3>
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

/** Editorial room stories: a large image with a carpet "sample tag" pinned over its edge. */
export function RoomByRoom() {
  return (
    <section aria-labelledby="rooms-carpet-heading" className="bg-[#f4efe6] py-20 sm:py-28">
      <Container>
        <h2 id="rooms-carpet-heading" className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Carpet Cleaning, Room by Room
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          Each room wears differently. What we focus on depends on the space, the carpet and the agreed scope.
        </p>
        <div className="mt-14 space-y-16 lg:space-y-24">
          {roomStories.map(({ title, lede, points, image }, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={title} className="grid grid-cols-1 items-center lg:grid-cols-12">
                <div className={`lg:col-span-8 lg:row-start-1 ${flip ? "lg:col-start-5" : "lg:col-start-1"}`}>
                  <Image
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                    loading="lazy"
                    sizes="(min-width: 1024px) 800px, 100vw"
                    className="aspect-[16/10] h-auto w-full rounded-[1.5rem] object-cover"
                  />
                </div>
                <div
                  className={`relative z-10 -mt-10 mx-4 rounded-xl bg-white p-6 shadow-lift sm:mx-10 sm:p-8 lg:row-start-1 lg:mx-0 lg:mt-0 lg:col-span-5 ${
                    flip ? "lg:col-start-1" : "lg:col-start-8"
                  }`}
                >
                  {/* tag hole + stitched binding */}
                  <span aria-hidden="true" className="absolute right-5 top-5 h-3.5 w-3.5 rounded-full bg-[#f4efe6] ring-2 ring-line" />
                  <div className="rounded-lg border-2 border-dashed border-line p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wattle-dark">
                      Sample {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">{title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{lede}</p>
                    <ul className="mt-4 space-y-1.5">
                      {points.map((p) => (
                        <li key={p} className="flex items-center gap-2.5 text-[15px] text-ink">
                          <span aria-hidden="true" className="h-1.5 w-4 rounded-full bg-brand" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

const swatches: Record<(typeof focusAreas)[number]["swatch"], string> = {
  fresh: "bg-[#d8ccb5] [background-image:radial-gradient(#c8b99e_1.2px,transparent_1.8px),radial-gradient(#e6dccb_1.2px,transparent_1.8px)] [background-size:8px_8px] [background-position:0_0,4px_4px]",
  traffic:
    "bg-[#d8ccb5] [background-image:linear-gradient(115deg,transparent_35%,rgb(120_100_70/0.35)_45%,rgb(120_100_70/0.35)_58%,transparent_68%),radial-gradient(#c8b99e_1.2px,transparent_1.8px)] [background-size:100%_100%,8px_8px]",
  marks:
    "bg-[#d8ccb5] [background-image:radial-gradient(circle_at_35%_40%,rgb(110_85_60/0.45)_0_10px,transparent_16px),radial-gradient(circle_at_65%_65%,rgb(110_85_60/0.35)_0_7px,transparent_12px),radial-gradient(#c8b99e_1.2px,transparent_1.8px)] [background-size:100%_100%,100%_100%,8px_8px]",
  lines:
    "bg-[#d8ccb5] [background-image:repeating-linear-gradient(90deg,rgb(255_255_255/0.28)_0_22px,transparent_22px_44px),radial-gradient(#c8b99e_1.2px,transparent_1.8px)] [background-size:100%_100%,8px_8px]",
};

/** Four magnified pile swatches. */
export function CarpetFocus() {
  return (
    <section aria-labelledby="focus-heading" className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h2 id="focus-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What We Can Focus On
          </h2>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
            Up close, carpet tells you what it needs. Results depend on the carpet&apos;s condition, material, the
            type of stain and its age.
          </p>
        </div>
        <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map(({ title, text, swatch }) => (
            <li key={title}>
              <div className="relative mx-auto h-44 w-44" aria-hidden="true">
                <span className={`absolute inset-0 rounded-full ring-[10px] ring-ink ${swatches[swatch]}`} />
                <span className="absolute -bottom-3 -right-3 h-14 w-4 origin-top -rotate-45 rounded-full bg-ink" />
              </div>
              <h3 className="mt-8 text-center text-lg font-semibold text-ink">{title}</h3>
              <p className="mx-auto mt-1.5 max-w-[16rem] text-center text-[15px] leading-relaxed text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

const symbols = {
  clock: Clock,
  fibre: Layers,
  drop: Droplet,
  hourglass: Hourglass,
  cycle: RefreshCw,
  wear: Footprints,
  fade: Palette,
};

/** Honest expectations, presented as a woven care label. */
export function CareLabel() {
  return (
    <section aria-labelledby="honest-heading" className="bg-ink py-20 text-white sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
        <div>
          <h2 id="honest-heading" className="text-3xl font-semibold leading-tight tracking-tight sm:text-[2.7rem] sm:leading-[1.12]">
            A cleaner carpet doesn&apos;t always mean a perfect carpet.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
            Professional cleaning can improve the appearance of many carpets. But permanent damage, wear and
            discoloration may not be fully removable, and some marks only lighten rather than disappear.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            We&apos;d rather tell you that up front. If you&apos;re unsure about a particular mark, mention it
            when you ask for a quote.
          </p>
        </div>

        <div className="mx-auto w-full max-w-md -rotate-1 rounded-sm bg-[#f8f6f1] p-2 text-ink shadow-lift">
          <div className="rounded-sm border-2 border-dashed border-ink/25 px-6 py-7">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">Results can vary with</p>
            <ul className="mt-6 space-y-3.5">
              {resultFactors.map(({ label, symbol }) => {
                const Icon = symbols[symbol];
                return (
                  <li key={label} className="flex items-center gap-4 text-[15px]">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-ink/30">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {label}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

const sampleTextures = [
  "bg-[#cdbfa6] [background-image:radial-gradient(#bfae92_1.3px,transparent_2px)] [background-size:7px_7px]",
  "bg-[#9fb3ad] [background-image:radial-gradient(circle,transparent_2px,#8aa19a_2.5px,transparent_3.5px)] [background-size:9px_9px]",
  "bg-[#d9cbb2] [background-image:repeating-linear-gradient(0deg,#c9b99c_0_3px,transparent_3px_7px)]",
  "bg-[#b9a98f] [background-image:repeating-linear-gradient(45deg,#ab9a7f_0_2px,transparent_2px_6px),repeating-linear-gradient(-45deg,#c7b89f_0_2px,transparent_2px_6px)]",
  "bg-[#6d7d82] [background-image:conic-gradient(#5f6f74_25%,transparent_0_50%,#5f6f74_0_75%,transparent_0)] [background-size:36px_36px]",
  "bg-[#7a8a86] [background-image:radial-gradient(#8e9d99_1.2px,transparent_1.8px)] [background-size:5px_5px]",
];

/** Property types as a carpet sample board. */
export function SampleBoard() {
  return (
    <section aria-labelledby="types-carpet-heading" className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-16">
          <div>
            <h2 id="types-carpet-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Carpets in All Kinds of Properties
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              From apartment bedrooms to office floors, we look at each property and carpet before the job.
            </p>
            <p className="mt-6 rounded-xl border-l-4 border-wattle bg-[#fff8e6] p-5 text-[15px] leading-relaxed text-ink">
              Carpet type and condition can be discussed before the service so the appropriate cleaning approach
              can be considered.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 rounded-2xl bg-[#e9e4da] p-3 sm:grid-cols-3 sm:gap-4 sm:p-4">
            {propertyTypes.map((p, i) => (
              <li key={p} className="overflow-hidden rounded-lg bg-white shadow-card">
                <span aria-hidden="true" className={`block h-24 sm:h-28 ${sampleTextures[i]}`} />
                <p className="px-3 py-3 text-sm font-semibold text-ink sm:text-[15px]">{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
