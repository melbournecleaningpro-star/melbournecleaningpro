import Image from "next/image";
import { Building2, Home } from "lucide-react";
import { anatomy, commercialFor, images, marks, residentialFor, windowTypes, type WindowType } from "@/lib/window-cleaning";
import { quoteHref } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";

/** Full-bleed glazing photo with the copy set inside a single frosted "pane". */
export function WindowHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section
      aria-labelledby="window-hero-heading"
      className="relative isolate flex flex-col overflow-hidden bg-[#eef6f8] lg:block lg:bg-ink"
    >
      {/* Below lg the glazing sits under the copy; from lg it fills the hero behind a frosted pane. */}
      <div className="order-2 px-5 pb-10 sm:px-6 lg:absolute lg:inset-0 lg:-z-10 lg:p-0">
        <Image
          src={images.living.src}
          width={images.living.width}
          height={images.living.height}
          alt={images.living.alt}
          priority
          sizes="100vw"
          className="aspect-[4/3] h-auto w-full rounded-[1.5rem] object-cover lg:aspect-auto lg:h-full lg:rounded-none lg:object-[center_60%]"
        />
      </div>

      <Container className="order-1 py-6 sm:py-10 lg:py-20">
        <div className="relative max-w-xl overflow-hidden rounded-[1.75rem] bg-white/90 p-6 shadow-lift ring-1 ring-white backdrop-blur-md sm:p-9 lg:max-w-[33rem]">
          {/* glint streak */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-10 hidden h-[140%] w-24 rotate-[24deg] bg-gradient-to-r from-transparent via-white/70 to-transparent lg:block"
          />
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-brand">Clearer glass. Brighter spaces.</p>
          <h1
            id="window-hero-heading"
            className="mt-3 text-[2.2rem] font-semibold leading-[1.06] tracking-tight text-ink sm:text-5xl"
          >
            Professional Window Cleaning Services in Melbourne
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            Clear away dust, fingerprints, smudges and everyday build-up for cleaner-looking windows at home or
            work. We clean the glass and accessible frames, sills and edges that can be reached safely.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={quoteHref} size="lg" className="sm:whitespace-nowrap">
              Get a Window Cleaning Quote
            </ButtonLink>
            <ButtonLink href="#included" variant="secondary" size="lg" className="sm:whitespace-nowrap">
              See What&apos;s Included
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** The six kinds of grime as one long strip of glazing, divided into panes. */
export function ClarityIntro() {
  return (
    <section aria-labelledby="clarity-heading" className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <h2 id="clarity-heading" className="text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-[3.2rem]">
            Clean windows change how a space looks.
          </h2>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
            Glass collects more than you notice day to day. Over time a thin layer builds up that dulls the view
            and the light coming in. A proper clean helps bring back a clearer, brighter look.
          </p>
        </div>
        <ul className="mt-14 grid grid-cols-2 gap-[6px] rounded-xl bg-ink p-[6px] sm:grid-cols-3 lg:grid-cols-6">
          {marks.map((m, i) => (
            <li
              key={m}
              className="relative flex aspect-[3/4] items-end overflow-hidden rounded-[4px] bg-gradient-to-b from-[#cfe8f2] to-[#f1f8fa] p-4 sm:aspect-[4/5]"
            >
              <span
                aria-hidden="true"
                className="absolute -left-6 top-0 h-full w-10 rotate-[20deg] bg-white/60"
                style={{ left: `${10 + i * 9}%` }}
              />
              <span className="relative text-sm font-semibold text-ink sm:text-base">{m}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Static double-hung sash: the upper sash shows glass "before", the lower sash "after". */
export function DoubleHung() {
  return (
    <section aria-labelledby="sash-heading" className="bg-[#eef6f8] py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <h2 id="sash-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            From Dull to Clear
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Dust, fingerprints and water marks sit between you and the view. Clearing them lets more natural light
            in and makes the whole room look brighter.
          </p>
          <dl className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="border-t-2 border-ink/20 pt-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Upper sash &middot; before</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-ink">Hazy glass, visible marks and a dusty sill.</dd>
            </div>
            <div className="border-t-2 border-brand pt-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Lower sash &middot; after</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-ink">Clear glass and wiped frames and sills.</dd>
            </div>
          </dl>
        </div>

        <figure>
          <div className="mx-auto max-w-lg rounded-md bg-white p-3 shadow-lift sm:p-4">
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src={images.living.src}
                width={images.living.width}
                height={images.living.height}
                alt=""
                loading="lazy"
                sizes="(min-width: 1024px) 480px, 90vw"
                className="aspect-[4/3] h-auto w-full object-cover [filter:saturate(0.55)_brightness(0.92)_contrast(0.85)] [clip-path:inset(0_0_50%_0)]"
              />
              {/* haze and marks over the upper sash only */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(ellipse_18px_24px_at_22%_40%,rgb(120_110_95/0.35),transparent_70%),radial-gradient(ellipse_16px_22px_at_30%_62%,rgb(120_110_95/0.3),transparent_70%),radial-gradient(circle_at_70%_30%,transparent_6px,rgb(150_150_140/0.45)_7px,transparent_9px),radial-gradient(circle_at_80%_60%,transparent_5px,rgb(150_150_140/0.4)_6px,transparent_8px),linear-gradient(rgb(232_226_214/0.55),rgb(232_226_214/0.55))]"
              />
              <Image
                src={images.living.src}
                width={images.living.width}
                height={images.living.height}
                alt="Illustration of a window with hazy, marked glass in the upper half and clear glass in the lower half"
                loading="lazy"
                sizes="(min-width: 1024px) 480px, 90vw"
                className="absolute inset-0 aspect-[4/3] h-auto w-full object-cover [clip-path:inset(50%_0_0_0)]"
              />
              {/* meeting rail */}
              <span aria-hidden="true" className="absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 bg-white shadow-md" />
              <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white">Before</span>
              <span className="absolute bottom-3 left-3 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">After</span>
            </div>
            <div aria-hidden="true" className="-mx-5 mt-3 h-3 rounded-sm bg-white shadow-md sm:-mx-6" />
          </div>
          <figcaption className="mt-5 text-center text-sm text-ink-soft">
            Illustration for comparison only, not a customer project.
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

/** Labelled window diagram with leader-line callouts. */
export function WindowAnatomy() {
  return (
    <section id="included" aria-labelledby="anatomy-heading" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Window anatomy</p>
          <h2 id="anatomy-heading" className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What Window Cleaning Covers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            A window is more than the glass. These are the parts we look after, where they can be reached safely.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
          <svg viewBox="0 0 400 300" className="h-auto w-full" role="img" aria-labelledby="anatomy-svg-title">
            <title id="anatomy-svg-title">Window diagram showing the glass, frame, sill, edges and visible marks</title>
            <defs>
              <linearGradient id="anat-glass" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#cfe8f2" />
                <stop offset="1" stopColor="#f1f8fa" />
              </linearGradient>
            </defs>
            <rect x="70" y="30" width="260" height="220" rx="4" fill="#10272f" />
            <rect x="84" y="44" width="232" height="192" fill="url(#anat-glass)" />
            <rect x="196" y="44" width="8" height="192" fill="#10272f" />
            <path d="M96 200 150 60M120 220 170 90" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity=".7" />
            <g fill="rgb(120 110 95 / 0.35)">
              <ellipse cx="244" cy="160" rx="7" ry="10" />
              <ellipse cx="258" cy="176" rx="6" ry="9" />
              <ellipse cx="268" cy="158" rx="6" ry="9" />
            </g>
            <rect x="56" y="250" width="288" height="16" rx="3" fill="#f4b63f" />
            {anatomy.map(({ id, x, y, lx, ly }, i) => (
              <g key={id}>
                <path d={`M${x} ${y}L${lx} ${ly}`} stroke="#0b6e69" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx={x} cy={y} r="4" fill="#0b6e69" />
                <circle cx={lx} cy={ly} r="13" fill="#0b6e69" />
                <text x={lx} y={ly + 5} textAnchor="middle" fontSize="14" fontWeight="600" fill="#fff">
                  {i + 1}
                </text>
              </g>
            ))}
          </svg>

          <ol className="space-y-5">
            {anatomy.map(({ id, title, text }, i) => (
              <li key={id} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{title}</h3>
                  <p className="mt-0.5 text-[15px] leading-relaxed text-ink-soft">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function TypeGlyph({ id }: { id: WindowType["id"] }) {
  const frame = { fill: "#10272f" };
  const glass = { fill: "#d6ecf4" };
  return (
    <svg viewBox="0 0 80 64" aria-hidden="true" className="h-16 w-20">
      {id === "standard" && (
        <>
          <rect x="16" y="6" width="48" height="52" {...frame} />
          <rect x="20" y="10" width="40" height="44" {...glass} />
          <path d="M40 10v44M20 32h40" stroke="#10272f" strokeWidth="3" />
        </>
      )}
      {id === "sliding" && (
        <>
          <rect x="6" y="12" width="68" height="40" {...frame} />
          <rect x="10" y="16" width="32" height="32" {...glass} />
          <rect x="38" y="16" width="32" height="32" fill="#bfe0ef" stroke="#10272f" strokeWidth="2" />
          <path d="M50 32h12m-4-4 4 4-4 4" stroke="#0b6e69" strokeWidth="2" fill="none" />
        </>
      )}
      {id === "panel" && (
        <>
          <rect x="4" y="4" width="72" height="56" {...frame} />
          <rect x="8" y="8" width="64" height="48" {...glass} />
          <path d="M14 50 36 12" stroke="#fff" strokeWidth="4" opacity=".8" />
        </>
      )}
      {id === "apartment" && (
        <>
          <rect x="18" y="2" width="44" height="60" fill="#e3e8e7" />
          {[8, 24, 40].map((y) => (
            <g key={y}>
              <rect x="24" y={y} width="14" height="12" {...glass} stroke="#10272f" strokeWidth="1.5" />
              <rect x="42" y={y} width="14" height="12" {...glass} stroke="#10272f" strokeWidth="1.5" />
            </g>
          ))}
        </>
      )}
      {id === "office" && (
        <>
          <rect x="4" y="6" width="72" height="52" {...frame} />
          {[8, 26, 44, 62].map((x) => (
            <rect key={x} x={x} y="10" width="14" height="44" {...glass} />
          ))}
        </>
      )}
      {id === "door" && (
        <>
          <rect x="22" y="2" width="36" height="60" fill="#0b6e69" />
          <rect x="27" y="7" width="26" height="50" {...glass} />
          <rect x="47" y="28" width="3" height="10" rx="1.5" fill="#f4b63f" />
        </>
      )}
    </svg>
  );
}

export function WindowTypes() {
  return (
    <section aria-labelledby="types-heading" className="border-y border-line bg-white py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="types-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Types of Windows We Can Clean
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
            Depending on access, safety and the agreed scope. Tell us what you have when you ask for a quote.
          </p>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {windowTypes.map(({ id, name, note }) => (
            <li key={id} className="text-center">
              <div className="mx-auto flex h-24 w-full max-w-[9rem] items-center justify-center rounded-2xl bg-[#eef6f8]">
                <TypeGlyph id={id} />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink sm:text-[15px]">{name}</h3>
              <p className="mt-1 text-xs leading-relaxed text-ink-soft sm:text-sm">{note}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function HomesAndWorkplaces() {
  const sides = [
    {
      title: "Residential Window Cleaning",
      text: "For homes that need cleaner glass and a brighter look, inside and out where accessible.",
      icon: Home,
      list: residentialFor,
      image: images.house,
    },
    {
      title: "Commercial Window Cleaning",
      text: "For shopfronts and workplaces where suitable access is available.",
      icon: Building2,
      list: commercialFor,
      image: images.office,
    },
  ];
  return (
    <section aria-labelledby="homes-work-heading" className="py-20 sm:py-28">
      <Container>
        <h2 id="homes-work-heading" className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Homes and Workplaces
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {sides.map(({ title, text, icon: Icon, list, image }) => (
            <article key={title} className="overflow-hidden rounded-[1.75rem] bg-[#eef6f8]">
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                loading="lazy"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="aspect-[16/10] h-auto w-full object-cover"
              />
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-semibold text-ink">{title}</h3>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {list.map((item) => (
                    <li key={item} className="rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-ink ring-1 ring-line">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
