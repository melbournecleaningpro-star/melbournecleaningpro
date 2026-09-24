import { ArrowRight } from "lucide-react";
import { benefits, checklistAreas, processSteps } from "@/lib/commercial";
import { siteConfig } from "@/lib/site";
import { Container } from "../ui";
import { PrintButton } from "./PrintButton";

export function WhyChoose() {
  return (
    <section aria-labelledby="why-com-heading" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-6">
          <div className="flex flex-col justify-between rounded-2xl bg-brand-50 p-7 sm:p-8 lg:row-span-2">
            <div>
              <h2 id="why-com-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Why Choose Melbourne Cleaning Pro?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                For most businesses, a good cleaner is one you don&apos;t have to think about: the work gets
                done as agreed, at the agreed time, and questions get a straight answer.
              </p>
            </div>
            <a
              href="#quote"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
            >
              Talk to us about your premises
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:gap-5">
            {benefits.map(({ title, text, icon: Icon }) => (
              <li key={title} className="flex gap-4 rounded-2xl bg-ink p-6 text-white">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-wattle">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function CommercialProcess() {
  return (
    <section aria-labelledby="com-process-heading" className="border-y border-line bg-cream py-20 sm:py-24">
      <Container>
        <h2 id="com-process-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          How Commercial Cleaning Works
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          A straightforward setup process, so you know exactly what&apos;s agreed before cleaning starts.
        </p>

        <ol className="relative mt-12 grid gap-6 lg:grid-cols-5 lg:gap-5">
          <span
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-5 hidden h-0.5 bg-brand/20 lg:block"
          />
          {processSteps.map(({ title, text, details }, i) => (
            <li key={title} className="relative flex gap-4 lg:block">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold tabular-nums text-wattle ring-4 ring-cream lg:mx-auto">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 rounded-xl bg-white p-5 ring-1 ring-line lg:mt-5 lg:min-h-[10rem]">
                <h3 className="font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{text}</p>
                {details && (
                  <ul className="mt-3 space-y-1 text-sm text-ink" aria-label="Details to provide">
                    {details.map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-brand" aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function CommercialChecklist() {
  return (
    <section aria-labelledby="com-checklist-heading" className="py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
        <div>
          <h2 id="com-checklist-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Commercial Cleaning Checklist
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Use this as a starting point when planning your service. Tick the areas that apply to your
            premises and note how often you&apos;d like each one cleaned, then send it with your quote
            request.
          </p>
          <p className="mt-6 rounded-xl border-l-4 border-wattle bg-cream px-5 py-4 text-[15px] font-medium text-ink">
            The final checklist can be adjusted to suit the property and agreed scope.
          </p>
        </div>

        {/* Printable sheet: blank boxes because not every item is included in every booking */}
        <div id="print-checklist" className="rounded-2xl bg-white shadow-lift ring-1 ring-line">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-6 py-5 sm:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">{siteConfig.name}</p>
              <p className="mt-0.5 text-lg font-semibold text-ink">Site cleaning checklist</p>
            </div>
            <PrintButton />
          </div>
          <div className="grid grid-cols-2 gap-4 border-b border-line px-6 py-4 text-xs text-ink-soft sm:px-8">
            <p>
              Business: <span className="inline-block w-24 border-b border-line align-bottom sm:w-32" />
            </p>
            <p>
              Suburb: <span className="inline-block w-24 border-b border-line align-bottom sm:w-32" />
            </p>
          </div>
          <table className="w-full text-left text-[15px]">
            <thead>
              <tr className="text-xs uppercase tracking-[0.1em] text-ink-soft">
                <th scope="col" className="w-12 px-6 py-3 font-semibold sm:px-8">
                  <span className="sr-only">Include</span>
                </th>
                <th scope="col" className="py-3 font-semibold">Area</th>
                <th scope="col" className="hidden py-3 pr-8 font-semibold sm:table-cell">How often</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line border-t border-line">
              {checklistAreas.map((area) => (
                <tr key={area}>
                  <td className="px-6 py-3.5 sm:px-8">
                    <span aria-hidden="true" className="block h-5 w-5 rounded border-2 border-ink/25" />
                  </td>
                  <td className="py-3.5 pr-6 text-ink">{area}</td>
                  <td className="hidden py-3.5 pr-8 sm:table-cell">
                    <span aria-hidden="true" className="block h-px w-28 bg-line" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="border-t border-line px-6 py-4 text-xs text-ink-soft sm:px-8">
            Items are included only when agreed in your quote. {siteConfig.url.replace(/^https?:\/\//, "")}
          </p>
        </div>
      </Container>
    </section>
  );
}
