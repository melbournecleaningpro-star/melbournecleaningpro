import { Container } from "../ui";

const facts = [
  { term: "Booking type", detail: "One-off clean, timed around your move-out" },
  { term: "Suited to", detail: "Tenants, owners, landlords and property managers" },
  { term: "Scope", detail: "Agreed with you before the clean is booked" },
  { term: "Extras", detail: "Oven, fridge, windows and more, quoted separately" },
];

export function Intro() {
  return (
    <section aria-labelledby="intro-heading" className="py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div className="max-w-2xl">
          <h2 id="intro-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A Detailed Clean for Your Final Rental Inspection
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft sm:text-[17px]">
            <p>
              Moving out involves a lot at once: packing, organising removalists, setting up utilities at
              the new place and returning keys on time. The cleaning is often left until last, and it&apos;s
              usually a bigger job than people expect once the furniture has gone and every corner is on
              show.
            </p>
            <p>
              An end of lease clean is different from a routine clean. A regular clean keeps a lived-in
              home tidy. A move-out clean prepares an empty property to be handed back, so the focus shifts
              to the areas that are visible and commonly looked at during a final inspection: kitchen
              surfaces and the cooktop, bathrooms and wet areas, floors, skirting boards, doors, handles
              and the marks that build up over a tenancy.
            </p>
            <p>
              We work through the property room by room, so nothing is left to memory on a busy moving
              day. Before booking, you can talk to us about specific requirements, such as a list from your
              agent, areas that need extra attention, or extras like oven and window cleaning.
            </p>
            <p>
              Every property is different, so the quote reflects the property&apos;s size, its current
              condition and the scope you choose. A lightly lived-in apartment and a family home with years
              of build-up in the kitchen are very different jobs. Being upfront about the property&apos;s
              condition helps us give you an accurate quote and plan enough time to do the job properly.
            </p>
          </div>
        </div>

        <aside
          aria-label="End of lease cleaning at a glance"
          className="self-start rounded-3xl border border-line bg-cream p-7 lg:sticky lg:top-28"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">At a glance</p>
          <dl className="mt-5 divide-y divide-line">
            {facts.map(({ term, detail }) => (
              <div key={term} className="py-4 first:pt-0 last:pb-0">
                <dt className="text-sm font-semibold text-ink">{term}</dt>
                <dd className="mt-1 text-[15px] text-ink-soft">{detail}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </Container>
    </section>
  );
}
