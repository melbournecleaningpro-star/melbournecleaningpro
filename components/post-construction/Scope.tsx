import Image from "next/image";
import { ArrowRight, Check, TriangleAlert, X } from "lucide-react";
import { detailZones, images, nextStages, specialistOnly, specSheet, weFocusOn, whoNeedsIt } from "@/lib/post-construction";
import { isLiveRoute } from "@/lib/site";
import { Container } from "../ui";

/** Checklist presented as a drawing-style specification sheet. */
export function SpecSheet() {
  return (
    <section id="included" aria-labelledby="spec-heading" className="py-20 sm:py-24">
      <Container>
        <h2 id="spec-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          What Post-Construction Cleaning Can Cover
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          A general post-project clean across the property. The exact scope is agreed for each job.
        </p>

        <div className="mt-10 border-2 border-ink bg-white">
          {/* title block */}
          <div className="grid grid-cols-2 border-b-2 border-ink text-xs sm:grid-cols-4">
            {[
              ["Document", "Cleaning specification"],
              ["Sheet", "PC-01"],
              ["Stage", "Post-project"],
              ["Scope", "As agreed"],
            ].map(([k, v], i) => (
              <div key={k} className={`px-4 py-3 ${i % 2 === 1 ? "border-l border-ink/30" : ""} ${i === 2 ? "border-t border-ink/30 sm:border-l sm:border-t-0" : ""} ${i === 3 ? "border-t border-ink/30 sm:border-t-0" : ""}`}>
                <span className="block font-semibold uppercase tracking-[0.16em] text-ink-soft">{k}</span>
                <span className="mt-0.5 block text-sm font-semibold text-ink">{v}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 bg-[linear-gradient(to_right,rgb(16_39_47/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(16_39_47/0.05)_1px,transparent_1px)] bg-[size:24px_24px] md:grid-cols-2 lg:grid-cols-3">
            {specSheet.map(({ code, area, items }, i) => (
              <div
                key={code}
                className={`border-ink/20 p-6 ${i > 0 ? "border-t md:border-t-0" : ""} ${i >= 2 ? "md:border-t" : ""} ${i % 2 === 1 ? "md:border-l" : ""} ${
                  i >= 3 ? "lg:border-t" : "lg:border-t-0"
                } ${i % 3 !== 0 ? "lg:border-l" : "lg:border-l-0"}`}
              >
                <h3 className="flex items-center gap-3 text-lg font-semibold text-ink">
                  <span className="rounded-sm bg-ink px-1.5 py-0.5 text-[11px] font-semibold tracking-[0.1em] text-wattle">{code}</span>
                  {area}
                </h3>
                <ul className="mt-4 space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[15px] text-ink">
                      <span aria-hidden="true" className="flex h-4 w-4 shrink-0 items-center justify-center border-[1.5px] border-ink bg-white">
                        <Check className="h-3 w-3 text-brand" strokeWidth={3.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="hidden border-l border-t border-ink/20 p-6 text-sm leading-relaxed text-ink-soft lg:block">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.16em]">Notes</span>
              <span className="mt-2 block">
                Accessible areas only. Excludes waste removal, hazardous materials and repairs. See below.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function DetailZones() {
  return (
    <section aria-labelledby="zones-pc-heading" className="bg-ink py-20 text-white sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 id="zones-pc-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Where Construction Dust Tends to Stay
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Detailed cleaning pays attention to the accessible areas where dust and visible residue remain after
            the work is done.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div className="relative overflow-hidden rounded-lg ring-1 ring-white/15">
            <Image src={images.ready.src} width={images.ready.width} height={images.ready.height} alt="Renovated kitchen illustration with numbered markers showing common dust areas" loading="lazy" sizes="(min-width: 1024px) 700px, 100vw" className="h-auto w-full" />
            {detailZones.map(({ n, title, x, y }) => (
              <span
                key={n}
                aria-hidden="true"
                title={title}
                className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-wattle text-xs font-bold text-ink shadow-lift ring-4 ring-wattle/30 sm:h-8 sm:w-8 sm:text-sm"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {n}
              </span>
            ))}
          </div>

          <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {detailZones.map(({ n, title, text }) => (
              <li key={n} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-wattle text-xs font-bold text-ink">{n}</span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/65">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

export function FocusVsSpecialist() {
  return (
    <section aria-labelledby="scope-limits-heading" className="py-20 sm:py-24">
      <Container className="max-w-5xl">
        <h2 id="scope-limits-heading" className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          What We Clean vs What We Don&apos;t
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-ink-soft sm:text-lg">
          Being clear about scope avoids surprises. We provide general post-construction cleaning, not specialist or
          regulated services.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-lg border-2 border-brand bg-white p-7 sm:p-8">
            <h3 className="text-xl font-semibold text-ink">We can focus on</h3>
            <ul className="mt-5 space-y-3">
              {weFocusOn.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] text-ink">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-lg border border-line bg-cream">
            <span aria-hidden="true" className="block h-2 bg-[repeating-linear-gradient(45deg,#f4b63f_0,#f4b63f_10px,#10272f_10px,#10272f_20px)]" />
            <div className="p-7 sm:p-8">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-ink">
                <TriangleAlert className="h-5 w-5 text-wattle-dark" aria-hidden="true" />
                May require another specialist
              </h3>
              <ul className="mt-5 space-y-3">
                {specialistOnly.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-ink-soft">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink/[0.07]">
                      <X className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-ink-soft">
                These need your builder or a licensed specialist, and should be completed before cleaning starts.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function WhoNeedsIt() {
  return (
    <section aria-labelledby="who-pc-heading" className="bg-[#eef0ee] py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
        <div>
          <h2 id="who-pc-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Who Needs Post-Construction Cleaning?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Anyone with a finished project that isn&apos;t quite ready to use yet.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-ink/20 bg-white">
          <table className="w-full text-left">
            <thead className="bg-ink text-white">
              <tr>
                <th scope="col" className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] sm:px-6">Who</th>
                <th scope="col" className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] sm:px-6">When it helps</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {whoNeedsIt.map(({ role, when }) => (
                <tr key={role}>
                  <th scope="row" className="w-2/5 px-5 py-4 align-top text-[15px] font-semibold text-ink sm:px-6">{role}</th>
                  <td className="px-5 py-4 text-[15px] text-ink-soft sm:px-6">{when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

export function NextStage() {
  const moveInLive = isLiveRoute("/services/move-in-cleaning/");
  return (
    <section aria-labelledby="next-stage-heading" className="py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 id="next-stage-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Ready for the Next Stage
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            A post-construction clean prepares the property for whatever comes after the build. It&apos;s one part
            of finishing a project, alongside your builder&apos;s own completion, inspections and any sign-off.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Cleaning doesn&apos;t guarantee handover approval or builder compliance. It removes the dust and mess
            so the finished work can be seen and used properly.
          </p>
          {moveInLive && (
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              Moving in straight after? A{" "}
              <a href="/services/move-in-cleaning/" className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand">
                move-in clean before you unpack
              </a>{" "}
              can follow once the property is fully clear.
            </p>
          )}
        </div>
        <ul className="divide-y divide-dashed divide-ink/20 border-y border-ink/20">
          {nextStages.map(({ title, text }) => (
            <li key={title} className="flex items-start gap-4 py-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-brand-50 text-brand">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-[15px] leading-relaxed text-ink-soft">
                <span className="block font-semibold text-ink">{title}</span>
                {text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
