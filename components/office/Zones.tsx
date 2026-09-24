import { Bath, Check, Coffee, DoorOpen, Monitor, Presentation } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { checklist, zones } from "@/lib/office";
import { Container } from "../ui";

const zoneMeta: Record<string, { icon: LucideIcon; area: string; tint: string }> = {
  reception: { icon: DoorOpen, area: "lg:[grid-area:reception]", tint: "bg-wattle/10" },
  workstations: { icon: Monitor, area: "lg:[grid-area:work]", tint: "bg-white" },
  meeting: { icon: Presentation, area: "lg:[grid-area:meeting]", tint: "bg-brand-50" },
  kitchen: { icon: Coffee, area: "lg:[grid-area:kitchen]", tint: "bg-brand-50" },
  bathrooms: { icon: Bath, area: "lg:[grid-area:baths]", tint: "bg-wattle/10" },
};

/** Floor-plan-style layout: rooms drawn as spaces inside an office outline. */
export function OfficeZones() {
  return (
    <section aria-labelledby="zones-heading" className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="zones-heading" className="max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Every Part of Your Office Has a Cleaning Need
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
            Each zone is cleaned to the agreed scope. Cleaners work around desks and shared areas, and
            don&apos;t handle personal belongings or confidential documents.
          </p>
        </div>

        <div className="relative mt-12 rounded-md border-[3px] border-ink bg-ink/[0.03] p-2 sm:p-3">
          {/* Entrance gap in the outer wall */}
          <span aria-hidden="true" className="absolute -top-[3px] left-10 h-[3px] w-16 bg-white" />
          <span aria-hidden="true" className="absolute -top-6 left-10 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            Entry
          </span>

          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 lg:[grid-template-areas:'reception_work_work_kitchen'_'meeting_work_work_baths']">
            {zones.map(({ id, name, items }) => {
              const { icon: Icon, area, tint } = zoneMeta[id];
              const isWork = id === "workstations";
              return (
                <li
                  key={id}
                  className={`relative rounded border border-dashed border-ink/25 p-5 sm:p-6 ${tint} ${area} ${
                    isWork ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <h3 className="flex items-center gap-2.5 text-[15px] font-semibold text-ink sm:text-base">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                    {name}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-ink-soft">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {isWork && (
                    <div aria-hidden="true" className="mt-8 hidden grid-cols-4 gap-3 lg:grid">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <span key={i} className="flex flex-col items-center gap-1.5">
                          <span className="h-7 w-full rounded-sm bg-ink/10" />
                          <span className="h-3 w-3 rounded-full bg-brand/30" />
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <p className="mt-4 text-sm text-ink-soft">The exact tasks in each zone depend on the agreed service.</p>
      </Container>
    </section>
  );
}

export function OfficeChecklist() {
  return (
    <section aria-labelledby="office-checklist-heading" className="bg-cream py-20 sm:py-24">
      <Container className="max-w-5xl">
        <div className="text-center">
          <h2 id="office-checklist-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Our Office Cleaning Checklist
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            A typical starting point. The final checklist depends on the scope agreed with you.
          </p>
        </div>

        <dl className="mt-12 divide-y divide-line rounded-2xl bg-white ring-1 ring-line">
          {checklist.map(({ group, items }) => (
            <div key={group} className="grid gap-3 px-6 py-5 sm:grid-cols-[10rem_1fr] sm:items-center sm:gap-6 sm:px-8">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{group}</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-md border border-line bg-cream/60 px-3 py-1.5 text-sm text-ink"
                    >
                      <Check className="h-3.5 w-3.5 text-brand" strokeWidth={3} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
