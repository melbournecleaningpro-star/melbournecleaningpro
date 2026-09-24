import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { images, moveInQuoteMailHref, pricingFactors, steps } from "@/lib/move-in";
import { isLiveRoute, quoteHref, siteConfig } from "@/lib/site";
import { ButtonLink, Container } from "../ui";

/** Pricing factors laid out along a tape-measure style ruler. */
export function MoveInPricing() {
  return (
    <section aria-labelledby="movein-price-heading" className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <h2 id="movein-price-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              How Much Does Move-In Cleaning Cost?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              We don&apos;t use fixed prices, because every property is different. Your quote is measured against
              these factors:
            </p>
          </div>
          <ButtonLink href={quoteHref} size="lg" className="sm:self-start lg:self-end">
            Request a Move-In Cleaning Quote
          </ButtonLink>
        </div>

        <div className="mt-12">
          <div
            aria-hidden="true"
            className="hidden h-10 rounded-sm bg-wattle [background-image:repeating-linear-gradient(to_right,rgb(16_39_47/0.55)_0,rgb(16_39_47/0.55)_1px,transparent_1px,transparent_12px),repeating-linear-gradient(to_right,rgb(16_39_47/0.8)_0,rgb(16_39_47/0.8)_2px,transparent_2px,transparent_60px)] [background-size:100%_40%,100%_75%] [background-repeat:no-repeat] lg:block"
          />
          <ul className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 lg:mt-4 lg:grid-cols-7 lg:gap-x-3">
            {pricingFactors.map((f, i) => (
              <li key={f} className="border-l-2 border-wattle pl-3 lg:border-l-0 lg:pl-0">
                <span className="block text-xs font-semibold tabular-nums text-wattle-dark">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-1 block text-[15px] font-medium text-ink">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function BookingFlow() {
  return (
    <section aria-labelledby="flow-heading" className="border-t border-line bg-[#f6f7f5] py-20 sm:py-24">
      <Container>
        <h2 id="flow-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          A Simple Booking Flow
        </h2>
        <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s} className="border-t border-ink/15 py-6 sm:pr-8 lg:border-l lg:border-t-0 lg:py-0 lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
              <span className="block text-6xl font-semibold leading-none tracking-tight text-brand/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-ink">{s}</h3>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

const related = [
  { path: "/services/house-cleaning/", label: "Regular house cleaning", text: "once you've settled in" },
  { path: "/services/end-of-lease-cleaning/", label: "End of lease cleaning", text: "for the place you're leaving" },
  { path: "/services/deep-cleaning/", label: "A detailed deep clean", text: "for built-up grime" },
  { path: "/services/airbnb-cleaning/", label: "Airbnb and short-stay cleaning", text: "between guests" },
  { path: "/services/office-cleaning/", label: "Office cleaning", text: "around your working day" },
  { path: "/services/commercial-cleaning/", label: "Commercial cleaning", text: "for shops and workplaces" },
];

export function AreaAndRelated() {
  return (
    <section aria-label="Service area and related services" className="py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Pre-Move Cleaning Across Melbourne</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            Wherever you&apos;re moving to in Melbourne, we can help you start fresh. Our service area covers
            apartments and homes in the Melbourne CBD, Richmond and South Yarra, the northern suburbs around
            Brunswick and Preston, and the west from Footscray out to Werribee and Point Cook. Heading east? We
            also clean properties in areas such as Doncaster and Glen Waverley. Include the suburb and your
            moving date when you request a quote, and we&apos;ll confirm availability before you get the keys.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Related Services</h2>
          <ul className="mt-5 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {related.map(({ path, label, text }) => (
              <li key={path} className="border-b border-line py-3 text-[15px]">
                {isLiveRoute(path) ? (
                  <a href={path} className="font-semibold text-brand hover:text-brand-dark">
                    {label}
                  </a>
                ) : (
                  <span className="font-semibold text-ink">{label}</span>
                )}{" "}
                <span className="text-ink-soft">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function MoveInCTA() {
  return (
    <section id="quote" aria-labelledby="movein-cta-heading" className="bg-brand-50">
      <Container className="grid grid-cols-1 items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Ready to move in</p>
          <h2 id="movein-cta-heading" className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Make Your New Place Feel Fresh From Day One
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Tell us about the property you&apos;re moving into and when you get the keys. We&apos;ll come back with a
            clear quote for a move-in clean before you unpack.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={moveInQuoteMailHref} size="lg" className="sm:whitespace-nowrap">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Get a Move-In Cleaning Quote
            </ButtonLink>
            <ButtonLink href={siteConfig.contact.phone.href} variant="secondary" size="lg">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Us
            </ButtonLink>
          </div>
        </div>

        {/* Bookend to the hero: the same doorway, now ready */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-t-full ring-8 ring-white">
            <Image
              src={images.bedroom.src}
              width={images.bedroom.width}
              height={images.bedroom.height}
              alt="Clean, empty bedroom ready for furniture on moving day"
              loading="lazy"
              sizes="(min-width: 1024px) 380px, 80vw"
              className="aspect-[4/5] h-auto w-full object-cover object-[30%_50%]"
            />
          </div>
          <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-wattle px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            Ready to move in
          </p>
        </div>
      </Container>
    </section>
  );
}
