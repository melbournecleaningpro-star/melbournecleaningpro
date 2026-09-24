import Image from "next/image";
import { Building2, Home, Mail, Phone } from "lucide-react";
import {
  carpetQuoteMailHref,
  commercial,
  images,
  notOffered,
  pricingFactors,
  residential,
  steps,
  visitCarpet,
  visitSurrounds,
  whenToBook,
} from "@/lib/carpet-cleaning";
import { isLiveRoute, quoteHref, siteConfig } from "@/lib/site";
import { ButtonLink, Container } from "../ui";

/** Large carpet close-up split on a diagonal: worn and marked on one side, refreshed on the other. */
export function PileCompare() {
  return (
    <section aria-labelledby="compare-carpet-heading" className="bg-cream py-20 sm:py-24">
      <Container>
        <h2 id="compare-carpet-heading" className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Before &amp; After, Up Close
        </h2>
        <figure className="mt-12">
          <div className="relative overflow-hidden rounded-[1.75rem]">
            {/* after: refreshed pile with fresh vacuum lines */}
            <Image
              src={images.closeup.src}
              width={images.closeup.width}
              height={images.closeup.height}
              alt="Illustration of carpet pile, with the left side dull and marked and the right side refreshed"
              loading="lazy"
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="aspect-[4/3] h-auto w-full object-cover sm:aspect-[21/9]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 [background:repeating-linear-gradient(100deg,rgb(255_255_255/0.14)_0_60px,transparent_60px_120px)]"
            />
            {/* before: same pile, flattened and marked, clipped to the left diagonal */}
            <div aria-hidden="true" className="absolute inset-0 [clip-path:polygon(0_0,58%_0,42%_100%,0_100%)]">
              <Image
                src={images.closeup.src}
                width={images.closeup.width}
                height={images.closeup.height}
                alt=""
                loading="lazy"
                sizes="(min-width: 1280px) 1216px, 100vw"
                className="h-full w-full object-cover [filter:saturate(0.6)_brightness(0.8)_contrast(0.8)_sepia(0.25)]"
              />
              <span className="absolute inset-0 [background:radial-gradient(ellipse_70px_50px_at_18%_35%,rgb(90_65_40/0.45),transparent_70%),radial-gradient(ellipse_50px_40px_at_32%_70%,rgb(90_65_40/0.4),transparent_70%),radial-gradient(ellipse_30px_24px_at_10%_78%,rgb(90_65_40/0.35),transparent_70%),linear-gradient(110deg,transparent_20%,rgb(80_65_45/0.25)_30%,rgb(80_65_45/0.25)_45%,transparent_55%)]" />
            </div>
            {/* seam */}
            <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
              <path d="M58 0 42 100" stroke="#f8f6f1" strokeWidth="4" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="absolute left-4 top-4 rounded-md bg-ink/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white sm:left-6 sm:top-6">
              Before Cleaning
            </span>
            <span className="absolute bottom-4 right-4 rounded-md bg-wattle px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink sm:bottom-6 sm:right-6">
              After Cleaning
            </span>
          </div>
          <figcaption className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-ink-soft">
            Illustration only, not a customer project. Results vary with the carpet&apos;s condition and the type
            of marks present, and aren&apos;t identical from one carpet to the next.
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

/** Compact checklist bound like the edge of a rug. */
export function VisitIncludes() {
  const groups = [
    { title: "Carpet Areas", items: visitCarpet },
    { title: "Surrounding Areas", items: visitSurrounds },
  ];
  return (
    <section id="included" aria-labelledby="visit-carpet-heading" className="scroll-mt-24 py-20 sm:py-24">
      <Container className="max-w-4xl">
        <div className="rounded-[1.25rem] bg-[#0a5a56] p-2.5 sm:p-3">
          <div className="rounded-[0.9rem] border-2 border-dashed border-white/35 px-6 py-9 text-white sm:px-10 sm:py-12">
            <h2 id="visit-carpet-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
              What a Carpet Cleaning Visit Can Include
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {groups.map(({ title, items }) => (
                <div key={title}>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-wattle">{title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] leading-snug">
                        <span aria-hidden="true" className="mt-1 flex h-3.5 shrink-0 items-end gap-[2px]">
                          <span className="h-2 w-[3px] rounded-full bg-wattle" />
                          <span className="h-3.5 w-[3px] rounded-full bg-wattle" />
                          <span className="h-2.5 w-[3px] rounded-full bg-wattle" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-9 border-t border-white/15 pt-5 text-sm leading-relaxed text-white/70">
              Not included: {notOffered.join(", ")}. Heavy furniture isn&apos;t moved, so let us know what can be
              cleared beforehand.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Situations laid out as rows of stitched lines, like a carpet's binding. */
export function WhenToClean() {
  return (
    <section aria-labelledby="when-carpet-heading" className="bg-[#f4efe6] py-20 sm:py-24">
      <Container>
        <h2 id="when-carpet-heading" className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          When Should You Consider Carpet Cleaning?
        </h2>
        <ol className="mt-12 grid grid-cols-1 gap-x-14 md:grid-cols-2">
          {whenToBook.map(({ title, text }, i) => (
            <li
              key={title}
              className="flex gap-5 border-b-2 border-dashed border-ink/15 py-6 md:[&:nth-last-child(-n+2)]:border-b-0 last:border-b-0"
            >
              <span className="w-10 shrink-0 text-3xl font-light text-brand/70">{i + 1}</span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/** Full-bleed split: soft residential pile vs commercial carpet tiles. */
export function HomeOrWork() {
  return (
    <section aria-labelledby="homework-carpet-heading">
      <h2 id="homework-carpet-heading" className="sr-only">
        Residential and Commercial Carpet Cleaning
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#e6dccb] [background-image:radial-gradient(#d8ccb5_1.3px,transparent_2px),radial-gradient(#efe7d8_1.3px,transparent_2px)] [background-position:0_0,4px_4px] [background-size:8px_8px] px-5 py-16 sm:px-12 sm:py-20 lg:px-20">
          <div className="max-w-md md:ml-auto">
            <Home className="h-8 w-8 text-brand" aria-hidden="true" />
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Residential Carpet Cleaning</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">
              Bedroom, living-room, hallway and stair carpet in the home you live in.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {residential.map((r) => (
                <li key={r} className="rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-ink">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-[#5f6f74] [background-image:conic-gradient(#6d7d82_25%,transparent_0_50%,#6d7d82_0_75%,transparent_0)] [background-size:56px_56px] px-5 py-16 text-white sm:px-12 sm:py-20 lg:px-20">
          <div className="max-w-md rounded-2xl bg-ink/80 p-6 sm:p-8">
            <Building2 className="h-8 w-8 text-wattle" aria-hidden="true" />
            <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">Commercial Carpet Cleaning</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/75 sm:text-base">
              Carpeted floors in suitable workplaces, including walkways, desks and reception areas.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {commercial.map((c) => (
                <li key={c} className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold ring-1 ring-white/20">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Pricing factors marked off along a tape measure. */
export function TapeMeasure() {
  return (
    <section aria-labelledby="carpet-price-heading" className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="carpet-price-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            How Carpet Cleaning Is Priced
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            We don&apos;t use a fixed price list. Every quote is measured against the carpet and property you
            actually have.
          </p>
          <ButtonLink href={quoteHref} size="lg" className="mt-8">
            Request a Carpet Cleaning Quote
          </ButtonLink>
        </div>
        <div className="relative pl-16 sm:pl-20">
          {/* the tape */}
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-11 rounded-md bg-wattle [background-image:repeating-linear-gradient(to_bottom,#10272f_0_2px,transparent_2px_12px),repeating-linear-gradient(to_bottom,#10272f_0_2px,transparent_2px_60px)] [background-position:0_0,0_0] [background-repeat:repeat-y] [background-size:14px_100%,26px_100%] sm:w-12"
          />
          <ol>
            {pricingFactors.map((f, i) => (
              <li key={f} className="relative flex min-h-[60px] items-center border-b border-line py-3">
                <span aria-hidden="true" className="absolute -left-5 top-1/2 h-0.5 w-4 bg-ink/30 sm:-left-8 sm:w-7" />
                <span className="mr-4 w-6 text-sm font-semibold text-wattle-dark">{i + 1}</span>
                <span className="text-base font-semibold text-ink sm:text-lg">{f}</span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

/** Five steps as alternating vacuum stripes. */
export function VacuumSteps() {
  return (
    <section aria-labelledby="carpet-steps-heading" className="bg-[#cdbfa6]">
      <Container className="pb-4 pt-20 sm:pt-24">
        <h2 id="carpet-steps-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          How It Works
        </h2>
      </Container>
      <ol className="mt-10 grid grid-cols-1 lg:grid-cols-5">
        {steps.map((step, i) => (
          <li
            key={step}
            className={`flex items-center gap-5 px-5 py-8 sm:px-10 lg:min-h-[18rem] lg:flex-col lg:items-start lg:justify-end lg:px-8 lg:py-10 ${
              i % 2 === 0 ? "bg-[#d9cdb6]" : "bg-[#c3b499]"
            } ${pileTexture}`}
          >
            <span className="w-14 shrink-0 text-4xl font-semibold tracking-tight text-ink/35 lg:w-auto lg:text-6xl">{String(i + 1).padStart(2, "0")}</span>
            <span className={`text-lg font-semibold leading-snug ${i === steps.length - 1 ? "text-brand-dark" : "text-ink"}`}>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

const pileTexture =
  "[background-image:radial-gradient(rgb(255_255_255/0.18)_1px,transparent_1.6px),radial-gradient(rgb(0_0_0/0.06)_1px,transparent_1.6px)] [background-size:7px_7px] [background-position:0_0,3.5px_3.5px]";

const suburbs = ["Melbourne CBD", "Richmond", "South Yarra", "Brunswick", "Footscray", "Preston", "Werribee", "Point Cook", "Doncaster", "Glen Waverley"];

function RelLink({ path, children }: { path: string; children: string }) {
  return isLiveRoute(path) ? (
    <a href={path} className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand">
      {children}
    </a>
  ) : (
    <span className="font-semibold text-ink">{children}</span>
  );
}

export function AreaAndRelated() {
  return (
    <section aria-label="Service area and related services" className="py-20 sm:py-24">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Carpet Cleaners Across Melbourne</h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          We clean carpets in homes and suitable business premises across Melbourne, including{" "}
          {suburbs.slice(0, -1).join(", ")} and {suburbs[suburbs.length - 1]}. Tell us your suburb when you ask for
          a quote.
        </p>

        <h2 className="mt-14 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Related Services</h2>
        <p className="mt-4 text-base leading-loose text-ink-soft sm:text-lg">
          Carpets are often one part of a bigger clean. Pair them with{" "}
          <RelLink path="/services/house-cleaning/">regular house cleaning</RelLink>, or book a{" "}
          <RelLink path="/services/deep-cleaning/">deep clean for the whole home</RelLink> or a seasonal{" "}
          <RelLink path="/services/spring-cleaning/">spring clean</RelLink>. Moving? Add carpets to a{" "}
          <RelLink path="/services/move-in-cleaning/">move-in clean</RelLink> or an{" "}
          <RelLink path="/services/end-of-lease-cleaning/">end of lease clean</RelLink>. For workplaces, see{" "}
          <RelLink path="/services/commercial-cleaning/">commercial cleaning</RelLink> and{" "}
          <RelLink path="/services/office-cleaning/">office cleaning</RelLink>.
        </p>
      </Container>
    </section>
  );
}

/** Closing CTA over a full-bleed carpet close-up. */
export function CarpetCTA() {
  return (
    <section id="quote" aria-labelledby="carpet-cta-heading" className="relative isolate overflow-hidden">
      <Image
        src={images.closeup.src}
        width={images.closeup.width}
        height={images.closeup.height}
        alt=""
        loading="lazy"
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <span aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/75 to-ink/90" />
      <Container className="py-24 text-center text-white sm:py-32">
        <h2 id="carpet-cta-heading" className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
          Give Your Carpets a Fresh Start
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Tell us about the rooms, the carpet and any marks you&apos;re worried about, and we&apos;ll come back with a
          clear quote.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={carpetQuoteMailHref} variant="accent" size="lg">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Get a Carpet Cleaning Quote
          </ButtonLink>
          <ButtonLink href={siteConfig.contact.phone.href} variant="ghost-light" size="lg">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
