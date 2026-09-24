import { Info, Plus } from "lucide-react";
import { additionalCleaning, checklist, inspectionTips, standardInclusions } from "@/lib/end-of-lease";
import { Container, SectionHeading } from "../ui";
import { CheckBox } from "./CheckBox";

export function RoomChecklist() {
  return (
    <section id="checklist" aria-labelledby="checklist-heading" className="bg-cream py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="checklist-heading"
          eyebrow="Room by room"
          title="Our End of Lease Cleaning Checklist"
          intro="Every end of lease clean follows a room-by-room checklist, so the areas most likely to be looked at during an inspection get proper attention."
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {checklist.map(({ name, icon: Icon, items, featured }) => (
            <li
              key={name}
              className={`relative rounded-3xl bg-white p-6 shadow-card ring-1 ring-line sm:p-7 ${
                featured ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-0 h-2.5 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-wattle"
              />
              <div className="flex items-center justify-between gap-4 border-b border-dashed border-line pb-5">
                <h3 className="flex items-center gap-3 text-lg font-semibold text-ink">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {name}
                </h3>
                <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand">
                  {items.length} items
                </span>
              </div>
              <ul
                className={`mt-5 grid gap-3 ${featured ? "md:grid-cols-2 lg:grid-cols-1" : ""}`}
              >
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-ink">
                    <CheckBox />
                    {item}
                  </li>
                ))}
              </ul>
              {featured && (
                <p className="mt-6 rounded-2xl bg-cream p-4 text-sm leading-relaxed text-ink-soft">
                  Oven, rangehood and fridge interiors can be added as extras. See what&apos;s included
                  below.
                </p>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function Inclusions() {
  return (
    <section aria-labelledby="included-heading" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="included-heading"
          title="What's Included in an End of Lease Clean?"
          intro="The exact scope depends on your property and the quote you accept. Standard cleaning covers the whole property, and extras can be added when you need them."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2 lg:gap-6">
          <div className="rounded-3xl border-2 border-brand bg-white p-7 sm:p-9">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-ink">Standard Cleaning</h3>
              <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                Included
              </span>
            </div>
            <p className="mt-2 text-[15px] text-ink-soft">Covered in every end of lease clean.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {standardInclusions.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] text-ink">
                  <CheckBox />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-wattle-dark/50 bg-cream p-7 sm:p-9">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-ink">Additional Cleaning</h3>
              <span className="rounded-full bg-wattle px-3 py-1 text-xs font-semibold text-ink">
                Optional extras
              </span>
            </div>
            <p className="mt-2 text-[15px] text-ink-soft">Added on request and quoted separately.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {additionalCleaning.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] text-ink">
                  <span
                    aria-hidden="true"
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 border-wattle-dark/60 text-wattle-dark"
                  >
                    <Plus className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 flex gap-2.5 rounded-2xl bg-white p-4 text-sm leading-relaxed text-ink-soft">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-wattle-dark" aria-hidden="true" />
              Extras aren&apos;t automatically included. Let us know which ones you need when you request
              your quote, and they&apos;ll be priced and confirmed before the booking.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function InspectionGuide() {
  return (
    <section aria-labelledby="inspection-heading" className="border-t border-line py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.6fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="inspection-heading"
            align="left"
            eyebrow="Inspection guide"
            title="Preparing Your Melbourne Rental for the Final Inspection"
            intro="These are the areas that tend to stand out in an empty property. Keep them in mind whether you're booking a clean or tidying up a few things yourself."
          />
          <p className="mt-6 rounded-2xl border-l-4 border-wattle bg-cream p-5 text-[15px] leading-relaxed text-ink-soft">
            Cleaning removes dirt, dust and grime. It doesn&apos;t repair damaged walls, broken fixtures,
            permanent stains, worn flooring or other property damage. Those are maintenance or repair
            matters, which is worth knowing before your inspection.
          </p>
        </div>

        <ol className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {inspectionTips.map(({ title, text }, i) => (
            <li key={title} className="border-t-2 border-brand-100 pt-5">
              <span className="text-sm font-semibold tabular-nums text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1.5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
