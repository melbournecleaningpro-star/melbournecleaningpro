import Image from "next/image";
import { ArrowDown, ArrowRight, Check, Info } from "lucide-react";
import { images, leftovers, stages } from "@/lib/post-construction";
import { quoteHref } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";

/** Status of each stage for the hero board: done, next, pending. */
const heroStatus: ("done" | "next" | "pending")[] = ["done", "done", "next", "pending"];

export function ProjectHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section aria-labelledby="pc-hero-heading" className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src={images.worksite.src}
        width={images.worksite.width}
        height={images.worksite.height}
        alt={images.worksite.alt}
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_50%]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-ink lg:via-ink/85 lg:to-ink/10" />

      <Container className="pb-8 pt-6 sm:pt-8 lg:pb-10">
        <Breadcrumbs items={breadcrumbs} tone="light" />

        <div className="max-w-2xl pb-14 pt-14 lg:pb-24 lg:pt-20">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-wattle">
            <span className="h-2 w-6 bg-[repeating-linear-gradient(45deg,#f4b63f_0,#f4b63f_3px,transparent_3px,transparent_6px)]" aria-hidden="true" />
            Post-Construction Cleaning Melbourne
          </p>
          <h1 id="pc-hero-heading" className="mt-5 text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            Post-Construction Cleaning Services in Melbourne
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            When the trades pack up, the dust stays behind. Melbourne Cleaning Pro removes construction-related
            dust, visible residue and general post-project mess, so your renovated or newly finished property can
            move to its next stage.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={quoteHref} variant="accent" size="lg" className="sm:whitespace-nowrap">
              Get a Post-Construction Cleaning Quote
            </ButtonLink>
            <ButtonLink href="#included" variant="ghost-light" size="lg" className="sm:whitespace-nowrap">
              See What&apos;s Included
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>

        {/* Project status board */}
        <div className="rounded-xl border border-white/15 bg-ink/90 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Project status</p>
          <ol className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stages.map((stage, i) => {
              const s = heroStatus[i];
              return (
                <li key={stage}>
                  <span
                    aria-hidden="true"
                    className={`block h-1.5 rounded-full ${
                      s === "done" ? "bg-white/70" : s === "next" ? "bg-wattle" : "bg-white/15"
                    }`}
                  />
                  <p className="mt-3 flex items-center gap-2 text-sm font-semibold">
                    {s === "done" && <Check className="h-4 w-4 text-white/70" strokeWidth={3} aria-hidden="true" />}
                    <span className={s === "pending" ? "text-white/50" : s === "next" ? "text-wattle" : "text-white/80"}>
                      {stage}
                    </span>
                  </p>
                  <p className="mt-0.5 text-xs text-white/50">
                    {s === "done" ? "Complete" : s === "next" ? "Where we come in" : "Next stage"}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}

export function WorkFinished() {
  return (
    <section aria-labelledby="finished-heading" className="py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <h2 id="finished-heading" className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.75rem] sm:leading-[1.1]">
            The work may be finished. The cleaning isn&apos;t always finished yet.
          </h2>
          {/* Architectural dimension line */}
          <div aria-hidden="true" className="mt-10 flex items-center gap-0 text-ink/40">
            <span className="h-4 w-px bg-current" />
            <span className="h-px flex-1 bg-current" />
            <span className="mx-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">Handover gap</span>
            <span className="h-px flex-1 bg-current" />
            <span className="h-4 w-px bg-current" />
          </div>
          <p className="mt-8 text-base leading-relaxed text-ink-soft sm:text-lg">
            Builders and trades finish the work they were engaged for. A general clean is usually a separate step,
            and after cutting, sanding, painting and installing, there&apos;s typically a layer of mess between a
            finished project and a space that&apos;s ready to use.
          </p>
        </div>

        <ol className="border-t border-ink">
          {leftovers.map(({ title, text }, i) => (
            <li key={title} className="grid grid-cols-[3rem_1fr] gap-3 border-b border-line py-4">
              <span className="pt-0.5 text-xs font-semibold tabular-nums tracking-[0.1em] text-wattle-dark">
                N-{String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[15px] leading-relaxed text-ink-soft">
                <span className="font-semibold text-ink">{title}.</span> {text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

const cleaningSteps = ["Dust removed from accessible surfaces", "Residue wiped from fixtures and ledges", "Floors vacuumed and mopped", "Kitchen and bathroom detailed"];

export function BeforeAfterStages() {
  return (
    <section aria-labelledby="stages-heading" className="bg-[#eef0ee] py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 id="stages-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            From Worksite to Ready Space
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            The same room at two points in time: straight after the work, and after a detailed clean.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_auto_17rem_auto_1fr] lg:gap-5">
          <figure className="overflow-hidden rounded-lg bg-white ring-1 ring-line">
            <Image src={images.worksite.src} width={images.worksite.width} height={images.worksite.height} alt={images.worksite.alt} loading="lazy" sizes="(min-width: 1024px) 420px, 100vw" className="h-auto w-full" />
            <figcaption className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="font-semibold text-ink">Before</span>
              <span className="text-ink-soft">Work complete, dust remaining</span>
            </figcaption>
          </figure>

          <Arrow />

          <div className="rounded-lg bg-ink p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-wattle">Detailed cleaning</p>
            <ul className="mt-4 space-y-3">
              {cleaningSteps.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm text-white/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-wattle" strokeWidth={3} aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <Arrow />

          <figure className="overflow-hidden rounded-lg bg-white ring-2 ring-brand">
            <Image src={images.ready.src} width={images.ready.width} height={images.ready.height} alt={images.ready.alt} loading="lazy" sizes="(min-width: 1024px) 420px, 100vw" className="h-auto w-full" />
            <figcaption className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="font-semibold text-brand">Ready space</span>
              <span className="text-ink-soft">Clean and presentable</span>
            </figcaption>
          </figure>
        </div>

        <p className="mt-8 flex gap-2.5 text-sm leading-relaxed text-ink-soft">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
          Illustrations for demonstration only. They aren&apos;t photos of a Melbourne Cleaning Pro project.
        </p>
      </Container>
    </section>
  );
}

function Arrow() {
  return (
    <span aria-hidden="true" className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-wattle text-ink">
      <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" />
    </span>
  );
}
