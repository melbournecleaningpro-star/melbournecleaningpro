import { ArrowRight } from "lucide-react";
import { gridSteps, limits, materialFactors, QUOTE_PATH, tiledAreas, tileFaqs } from "@/lib/tile-and-grout-cleaning";
import { isLiveRoute } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";

/** Shared tile-grid background: 56px tiles with 3px grout lines. */
const tileGrid =
  "[background-image:linear-gradient(90deg,var(--grout)_3px,transparent_3px),linear-gradient(var(--grout)_3px,transparent_3px)] [background-size:56px_56px]";
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

/** Hero laid out on a tile grid, with a feature panel of cleaned vs uncleaned tiles. */
export function TileHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  // 6x4 feature panel: left half has darker grout, right half lighter.
  const cells = Array.from({ length: 24 }, (_, i) => i);
  return (
    <section
      aria-labelledby="tile-hero-heading"
      style={{ ["--grout" as string]: "rgb(16 39 47 / 0.06)" }}
      className={`border-b-[3px] border-ink/10 bg-white ${tileGrid}`}
    >
      <Container className="pb-16 pt-6 sm:pt-8 lg:pb-20">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="bg-white/90 lg:bg-transparent">
            <p className="inline-block border-[3px] border-ink px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-ink">
              Focus on the lines
            </p>
            <h1 id="tile-hero-heading" className="mt-6 text-[2.5rem] font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl">
              Tile &amp; Grout Cleaning in Melbourne
            </h1>
            <p className="mt-6 max-w-lg bg-white text-base leading-relaxed text-ink-soft sm:text-lg">
              Cleaning for tiled areas where dirt and build-up collect, both on the tile surface and in the grout lines
              between. What&apos;s achievable depends on the tiles, the grout and their condition.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={QUOTE_PATH} size="lg" className="rounded-none">
                Request a Tile &amp; Grout Quote
              </ButtonLink>
              <ButtonLink href="#tile-vs-grout" variant="secondary" size="lg" className="rounded-none">
                Tile vs Grout
              </ButtonLink>
            </div>
          </div>
          <figure aria-hidden="true" className="mx-auto w-full max-w-md">
            <div className="grid grid-cols-6 gap-[5px] bg-[#8a7f70] p-[5px]">
              {cells.map((i) => {
                const col = i % 6;
                const clean = col >= 3;
                return (
                  <span
                    key={i}
                    className={`aspect-square ${clean ? "bg-[#f4f1ea]" : "bg-[#e3dccd] [background-image:radial-gradient(rgb(111_84_57/0.18)_1px,transparent_1.6px)] [background-size:6px_6px]"}`}
                  />
                );
              })}
            </div>
            <div className="mt-3 grid grid-cols-2 text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">
              <span>Build-up</span>
              <span className="text-right">After cleaning</span>
            </div>
            <p className="mt-1 text-xs text-ink-soft">Illustration only. Results depend on the tile and grout.</p>
          </figure>
        </div>
      </Container>
    </section>
  );
}

/** Macro cross-sections showing why grout collects dirt differently. */
export function TileVsGrout() {
  return (
    <section id="tile-vs-grout" aria-labelledby="tvg-heading" className="scroll-mt-24 bg-ink py-20 text-white sm:py-24">
      <Container>
        <h2 id="tvg-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          Tile surface vs grout lines
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-[3px] bg-white/15 md:grid-cols-2">
          <div className="bg-ink p-6 sm:p-10">
            <svg viewBox="0 0 300 90" aria-hidden="true" className="h-auto w-full">
              <rect x="0" y="30" width="300" height="60" fill="#f4f1ea" />
              <rect x="0" y="22" width="300" height="8" fill="#dcd4c3" />
              {[20, 70, 130, 190, 250].map((x) => (
                <circle key={x} cx={x} cy="19" r="3" fill="#8a7f70" />
              ))}
            </svg>
            <h3 className="mt-6 text-xl font-bold">Tile surface</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/70">
              Smooth and mostly non-absorbent, so everyday dirt and residue tend to sit on top as a film.
            </p>
          </div>
          <div className="bg-ink p-6 sm:p-10">
            <svg viewBox="0 0 300 90" aria-hidden="true" className="h-auto w-full">
              <rect x="0" y="30" width="130" height="60" fill="#f4f1ea" />
              <rect x="170" y="30" width="130" height="60" fill="#f4f1ea" />
              <path d="M130 30h40v60h-40Z" fill="#8a7f70" />
              <path d="M130 30h40l-6 12h-28Z" fill="#6f6254" />
              {[140, 150, 160, 146, 156].map((x, i) => (
                <circle key={i} cx={x} cy={38 + (i % 2) * 5} r="2.5" fill="#3d342b" />
              ))}
            </svg>
            <h3 className="mt-6 text-xl font-bold">Grout lines</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/70">
              Recessed and more porous, so dirt settles down into them and can make the lines look darker than the
              tiles around them.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** A floor plan of tiled rooms (all listed below; nothing hidden). */
export function WhereItApplies() {
  const span: Record<string, string> = {
    bathroom: "col-span-2 row-span-2",
    kitchen: "col-span-2",
    floors: "col-span-2",
    entry: "col-span-1",
    laundry: "col-span-1",
    other: "col-span-2",
  };
  return (
    <section aria-labelledby="applies-heading" className="bg-[#f4f1ea] py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 id="applies-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Where tile and grout cleaning may apply
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Anywhere there are suitable tiles. Not every tile material is suited to every approach, so we&apos;ll check
            before starting.
          </p>
        </div>
        <ul className="mt-12 grid auto-rows-[minmax(7.5rem,auto)] grid-cols-2 gap-[3px] border-[3px] border-ink bg-ink sm:grid-cols-4 lg:grid-cols-6">
          {tiledAreas.map((a) => (
            <li
              key={a.id}
              style={{ ["--grout" as string]: "rgb(16 39 47 / 0.07)" }}
              className={`${span[a.id]} flex flex-col justify-end bg-white p-4 sm:p-5 ${tileGrid} [background-size:28px_28px]`}
            >
              <h3 className="font-bold text-ink">{a.name}</h3>
              <p className="mt-1 text-sm leading-snug text-ink-soft">{a.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function MaterialMatters() {
  return (
    <section aria-labelledby="material-heading" className="py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <h2 id="material-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Material matters
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Porcelain, ceramic, natural stone and different grouts all respond differently. The requirements for your
            tiles can vary with:
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-[3px] border-[3px] border-ink bg-ink sm:grid-cols-3">
          {materialFactors.map((f, i) => (
            <li key={f} className="flex aspect-[4/3] flex-col justify-between bg-white p-4">
              <span className="font-mono text-xs text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[15px] font-bold leading-tight text-ink">{f}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Process as a row of tiles, each one "cleaner" than the last. */
export function GridTransformation() {
  const shades = ["bg-[#d6cdbb]", "bg-[#e0d8c8]", "bg-[#e9e3d6]", "bg-[#f1ede4]", "bg-white"];
  const grout = ["#5f5448", "#766a5c", "#8e8373", "#a9a092", "#c6bfb2"];
  return (
    <section aria-labelledby="gridsteps-heading" className="bg-[#f4f1ea] py-20 sm:py-24">
      <Container>
        <h2 id="gridsteps-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          How the work comes together
        </h2>
        <ol className="mt-12 grid grid-cols-1 gap-[3px] bg-ink p-[3px] sm:grid-cols-5">
          {gridSteps.map((s, i) => (
            <li key={s.name} className={`relative flex min-h-[9rem] flex-col justify-between p-5 ${shades[i]}`} style={{ boxShadow: `inset 0 0 0 4px ${grout[i]}` }}>
              <span className="text-4xl font-bold text-ink/15">{i + 1}</span>
              <div>
                <h3 className="font-bold text-ink">{s.name}</h3>
                <p className="mt-1 text-sm leading-snug text-ink-soft">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-ink-soft">
          The border on each tile gets lighter as the work progresses. It&apos;s an illustration of the steps, not a promise
          of the result.
        </p>
      </Container>
    </section>
  );
}

function CrackedTile() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12 shrink-0">
      <rect x="2" y="2" width="44" height="44" fill="#f4f1ea" stroke="#10272f" strokeWidth="3" />
      <path d="M12 2l8 14-6 10 10 8-4 12" fill="none" stroke="#10272f" strokeWidth="2" />
    </svg>
  );
}

export function RealisticExpectations() {
  return (
    <section aria-labelledby="expect-tile-heading" className="py-20 sm:py-24">
      <Container>
        <h2 id="expect-tile-heading" className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          What cleaning can and can&apos;t do
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-[3px] border-[3px] border-ink bg-ink md:grid-cols-2">
          {limits.map((l) => (
            <li key={l.title} className="flex gap-5 bg-white p-6">
              <CrackedTile />
              <div>
                <h3 className="text-lg font-bold text-ink">{l.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{l.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-ink-soft">
          Tile and grout cleaning pairs well with a <MaybeLink path="/services/deep-cleaning/">deep clean</MaybeLink>,{" "}
          <MaybeLink path="/services/end-of-lease-cleaning/">end of lease cleaning</MaybeLink>, and{" "}
          <MaybeLink path="/services/post-construction-cleaning/">post-construction cleaning</MaybeLink> after building
          work. For ongoing upkeep, see <MaybeLink path="/services/house-cleaning/">house cleaning</MaybeLink>.
        </p>
      </Container>
    </section>
  );
}

/** FAQ on a two-column tile grid. */
export function TileFAQ() {
  return (
    <section id="faq" aria-labelledby="tile-faq-heading" className="bg-[#f4f1ea] py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="tile-faq-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Tile &amp; grout questions
          </h2>
          <a href="/faq/" className={`text-sm ${link}`}>
            All FAQs
          </a>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-[3px] border-[3px] border-ink bg-ink md:grid-cols-2">
          {tileFaqs.map(({ question, answer }, i) => (
            <details key={question} className={`group bg-white open:bg-[#fffdf8] ${i === tileFaqs.length - 1 && tileFaqs.length % 2 ? "md:col-span-2" : ""}`}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-brand/40 sm:p-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-bold text-ink">{question}</h3>
                <span aria-hidden="true" className="relative h-6 w-6 shrink-0 border-2 border-ink group-open:bg-ink">
                  <span className="absolute left-1/2 top-1/2 h-0.5 w-2.5 -translate-x-1/2 -translate-y-1/2 bg-ink group-open:bg-white" />
                  <span className="absolute left-1/2 top-1/2 h-2.5 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-ink group-open:hidden" />
                </span>
              </summary>
              <p className="px-5 pb-6 text-[15px] leading-relaxed text-ink-soft sm:px-6">{answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Grid CTA: the message sits in a single "tile" within a wider grid. */
export function TileCTA() {
  return (
    <section
      id="quote"
      aria-labelledby="tile-cta-heading"
      style={{ ["--grout" as string]: "rgb(255 255 255 / 0.12)" }}
      className={`bg-brand py-16 sm:py-24 ${tileGrid} [background-size:64px_64px]`}
    >
      <Container>
        <div className="mx-auto max-w-2xl border-[3px] border-white bg-brand-dark p-8 text-center text-white sm:p-12">
          <h2 id="tile-cta-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to focus on the lines?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            Tell us which areas are tiled, roughly how big they are and what the grout looks like now.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={QUOTE_PATH} variant="accent" size="lg" className="rounded-none">
              Request a Tile &amp; Grout Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/contact/" variant="ghost-light" size="lg" className="rounded-none">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
