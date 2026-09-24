import { AlertTriangle, Mail, Phone, ShieldCheck } from "lucide-react";
import {
  accessTiers,
  flow,
  notRestoration,
  pricingFactors,
  sides,
  signs,
  visitGlass,
  visitSurrounds,
  windowQuoteMailHref,
  type Side,
} from "@/lib/window-cleaning";
import { isLiveRoute, quoteHref, siteConfig } from "@/lib/site";
import { ButtonLink, Container } from "../ui";

/** A squeegee stroke used as a list marker. */
function Stroke() {
  return (
    <svg viewBox="0 0 28 14" aria-hidden="true" className="mt-1 h-3.5 w-7 shrink-0">
      <path d="M2 11C8 4 16 3 26 5" stroke="#0b6e69" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <rect x="20" y="1" width="3" height="8" rx="1.5" fill="#f4b63f" transform="rotate(12 21 5)" />
    </svg>
  );
}

export function VisitChecklist() {
  const groups = [
    { title: "Glass", intro: "Removing everyday build-up from accessible glass:", items: visitGlass },
    { title: "Accessible Surrounding Areas", intro: "Where included in the agreed scope:", items: visitSurrounds },
  ];
  return (
    <section aria-labelledby="visit-heading" className="bg-ink py-20 text-white sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-wattle">The visit</p>
          <h2 id="visit-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            What a Window Cleaning Visit Includes
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
          {groups.map(({ title, intro, items }) => (
            <div key={title} className="border-t border-white/15 pt-6">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-[15px] text-white/70">{intro}</p>
              <ul className="mt-5 space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base">
                    <Stroke />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <aside className="mt-12 flex flex-col gap-4 rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10 sm:flex-row sm:p-7">
          <AlertTriangle className="h-6 w-6 shrink-0 text-wattle" aria-hidden="true" />
          <div>
            <p className="font-semibold">Cleaning, not glass restoration</p>
            <p className="mt-1 text-[15px] leading-relaxed text-white/70">
              Window cleaning removes everyday dirt and marks. It doesn&apos;t repair or remove:{" "}
              {notRestoration.join(", ").toLowerCase()}. These need a glass restoration or glazing specialist.
            </p>
          </div>
        </aside>
      </Container>
    </section>
  );
}

/** Wall cross-section: the highlighted side(s) of the glass are the ones cleaned. */
function SideDiagram({ id }: { id: Side["id"] }) {
  const inside = id !== "outside";
  const outside = id !== "inside";
  return (
    <svg viewBox="0 0 200 120" aria-hidden="true" className="h-auto w-full">
      <rect x="0" y="0" width="100" height="120" fill={inside ? "#fff4d6" : "#f1f4f3"} />
      <rect x="100" y="0" width="100" height="120" fill={outside ? "#dcefe9" : "#f1f4f3"} />
      <rect x="92" y="0" width="16" height="30" fill="#10272f" />
      <rect x="92" y="90" width="16" height="30" fill="#10272f" />
      <rect x="98" y="30" width="4" height="60" fill="#8fc6db" />
      {inside && <path d="M90 36v48" stroke="#e0a126" strokeWidth="4" strokeLinecap="round" />}
      {outside && <path d="M110 36v48" stroke="#0b6e69" strokeWidth="4" strokeLinecap="round" />}
      <text x="50" y="112" textAnchor="middle" fontSize="11" fontWeight="600" fill="#4a5d65">INSIDE</text>
      <text x="150" y="112" textAnchor="middle" fontSize="11" fontWeight="600" fill="#4a5d65">OUTSIDE</text>
    </svg>
  );
}

export function InsideOutside() {
  return (
    <section aria-labelledby="sides-heading" className="py-20 sm:py-24">
      <Container>
        <h2 id="sides-heading" className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Inside, Outside or Both
        </h2>
        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {sides.map(({ id, title, text }) => (
            <li key={id} className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-line">
              <SideDiagram id={id} />
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-2xl rounded-full bg-[#fff4d6] px-6 py-3 text-center text-[15px] font-medium text-ink">
          Access and safety conditions determine which windows can be serviced.
        </p>
      </Container>
    </section>
  );
}

/** Six "glass samples", each showing the kind of mark it describes. */
export function GlassSamples() {
  return (
    <section aria-labelledby="signs-heading" className="bg-[#eef6f8] py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 id="signs-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Signs Your Windows Need Cleaning
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Hold these up against your own glass. If you recognise a few, it might be time.
          </p>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {signs.map(({ title, text, swatch }) => (
            <li key={title} className="flex gap-5 rounded-2xl bg-white p-4 ring-1 ring-line">
              <span
                aria-hidden="true"
                className={`h-24 w-20 shrink-0 rounded-lg border-[5px] border-ink shadow-inner ${swatch}`}
              />
              <div className="self-center">
                <h3 className="font-semibold text-ink">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Building elevation: access gets harder the higher the window. */
export function AccessSafety() {
  const floors = [...accessTiers].reverse();
  return (
    <section aria-labelledby="access-heading" className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div aria-hidden="true" className="mx-auto w-full max-w-sm">
          <div className="rounded-t-lg bg-[#e3e8e7] p-4 pb-0">
            {floors.map(({ level, tone }) => (
              <div key={level} className="grid grid-cols-3 gap-3 border-b-4 border-white py-4">
                {[0, 1, 2].map((n) => (
                  <span key={n} className={`relative h-14 rounded-sm ${tone} opacity-80`}>
                    <span className="absolute inset-1 rounded-[2px] bg-[#e8f4f8]/70" />
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="h-3 rounded-b-md bg-ink" />
        </div>

        <div>
          <h2 id="access-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Every window is different. Access matters.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Before we confirm the job, we&apos;ll talk through which windows can be reached safely. We only clean
            windows that can be accessed safely and won&apos;t take on work that needs specialist height equipment.
          </p>
          <ul className="mt-8 space-y-4">
            {accessTiers.map(({ level, status, text, tone }) => (
              <li key={level} className="flex gap-4 rounded-xl border border-line bg-white p-4">
                <span aria-hidden="true" className={`mt-1 h-3 w-3 shrink-0 rounded-full ${tone}`} />
                <div>
                  <p className="font-semibold text-ink">
                    {level} <span className="font-normal text-ink-soft">&middot; {status}</span>
                  </p>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
            If some windows need a specialist, we&apos;ll tell you before the job so you can arrange it separately.
          </p>
        </div>
      </Container>
    </section>
  );
}

/** Pricing factors as the panes of one large window. */
export function WindowPricing() {
  return (
    <section aria-labelledby="window-price-heading" className="border-t border-line bg-white py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <h2 id="window-price-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              What Affects the Price?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              There&apos;s no one-size price for windows. Each quote is based on these factors.
            </p>
          </div>
          <ButtonLink href={quoteHref} size="lg">
            Request a Window Cleaning Quote
          </ButtonLink>
        </div>
        <ol className="mt-12 grid grid-cols-1 gap-[8px] rounded-xl bg-ink p-[8px] min-[420px]:grid-cols-2 lg:grid-cols-4">
          {pricingFactors.map((f, i) => (
            <li
              key={f}
              className="relative overflow-hidden rounded-[4px] bg-gradient-to-br from-[#d6ecf4] to-[#f4fafb] px-5 py-7 sm:py-9"
            >
              <span aria-hidden="true" className="absolute -top-4 right-6 h-[160%] w-6 rotate-[22deg] bg-white/60" />
              <span className="relative text-xs font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
              <p className="relative mt-2 text-base font-semibold text-ink">{f}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/** Booking steps joined by a line, with a water droplet at each step. */
export function DropletFlow() {
  return (
    <section aria-labelledby="window-flow-heading" className="bg-[#eef6f8] py-20 sm:py-24">
      <Container>
        <h2 id="window-flow-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          How Booking Works
        </h2>
        <ol className="relative mt-12 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          <span aria-hidden="true" className="absolute left-[19px] top-4 h-[calc(100%-2rem)] w-0.5 bg-brand/25 md:left-0 md:top-[19px] md:h-0.5 md:w-full" />
          {flow.map((step, i) => (
            <li key={step} className="relative flex gap-5 md:block">
              <svg viewBox="0 0 40 48" aria-hidden="true" className="h-12 w-10 shrink-0">
                <path d="M20 2C26 14 36 22 36 32a16 16 0 0 1-32 0C4 22 14 14 20 2Z" fill={i === flow.length - 1 ? "#0b6e69" : "#fff"} stroke="#0b6e69" strokeWidth="2.5" />
                <text x="20" y="37" textAnchor="middle" fontSize="12" fontWeight="700" fill={i === flow.length - 1 ? "#fff" : "#0b6e69"}>
                  {String(i + 1).padStart(2, "0")}
                </text>
              </svg>
              <p className="self-center text-lg font-semibold leading-snug text-ink md:mt-4">{step}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

const suburbs = [
  "Melbourne CBD",
  "Richmond",
  "South Yarra",
  "St Kilda",
  "Brunswick",
  "Preston",
  "Footscray",
  "Box Hill",
  "Glen Waverley",
  "Werribee",
];

const related = [
  { path: "/services/house-cleaning/", label: "House cleaning", note: "Keep the rest of the home tidy." },
  { path: "/services/deep-cleaning/", label: "Deep cleaning", note: "Heavy build-up throughout the home." },
  { path: "/services/spring-cleaning/", label: "Spring cleaning", note: "A seasonal whole-home refresh." },
  { path: "/services/commercial-cleaning/", label: "Commercial cleaning", note: "Business premises and shared spaces." },
  { path: "/services/office-cleaning/", label: "Office cleaning", note: "Scheduled workplace cleaning." },
  { path: "/services/move-in-cleaning/", label: "Move-in cleaning", note: "A clean home before you unpack." },
  { path: "/services/post-construction-cleaning/", label: "Post-construction cleaning", note: "Dust and residue after building work." },
];

export function AreaAndRelated() {
  return (
    <section aria-label="Service area and related services" className="py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Window Cleaning Around Melbourne</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            We clean windows for homes and suitable business premises across Melbourne, from apartments and
            terraces in the inner city to family homes in the suburbs. Include your suburb when you get in touch.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {suburbs.map((s) => (
              <li key={s} className="rounded-md bg-[#eef6f8] px-3 py-1.5 text-sm font-medium text-ink">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Related Services</h2>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {related.map(({ path, label, note }) => (
              <li key={path} className="flex flex-col gap-0.5 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                {isLiveRoute(path) ? (
                  <a href={path} className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand">
                    {label}
                  </a>
                ) : (
                  <span className="font-semibold text-ink">{label}</span>
                )}
                <span className="text-sm text-ink-soft">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/** Closing CTA framed as a four-pane window. */
export function WindowCTA() {
  return (
    <section id="quote" aria-labelledby="window-cta-heading" className="bg-cream py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[1.5rem] border-[10px] border-ink bg-gradient-to-br from-[#cfe8f2] via-[#e9f5f8] to-[#f7fbf9] sm:border-[14px]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <span className="absolute inset-y-0 left-1/2 w-[10px] -translate-x-1/2 bg-ink/[0.05] sm:w-[14px]" />
            <span className="absolute inset-x-0 top-1/2 h-[10px] -translate-y-1/2 bg-ink/[0.05] sm:h-[14px]" />
            <span className="absolute -left-10 top-0 h-full w-28 rotate-[22deg] bg-white/50" />
            <span className="absolute right-24 top-0 h-full w-10 rotate-[22deg] bg-white/40" />
          </div>
          <div className="relative px-6 py-16 text-center sm:px-10 sm:py-24">
            <h2 id="window-cta-heading" className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl">
              Bring More Clarity to Your Windows
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Tell us about the property, the windows and how they can be reached, and we&apos;ll come back with a
              clear quote.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={windowQuoteMailHref} size="lg">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Get a Window Cleaning Quote
              </ButtonLink>
              <ButtonLink href={siteConfig.contact.phone.href} variant="secondary" size="lg">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
