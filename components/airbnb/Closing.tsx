import Image from "next/image";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { airbnbQuoteMailHref, booking, images, pricingFactors } from "@/lib/airbnb";
import { isLiveRoute, quoteHref, siteConfig } from "@/lib/site";
import { ButtonLink, Container } from "../ui";

export function AirbnbPricing() {
  return (
    <section aria-labelledby="airbnb-price-heading" className="bg-brand-50 py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
        <div>
          <h2 id="airbnb-price-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            How Much Does Airbnb Cleaning Cost?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            There&apos;s no flat rate for short-stay cleaning. Each property is quoted on its size, layout and how
            often it turns over. These are the things that shape the price:
          </p>
          <ButtonLink href={quoteHref} size="lg" className="mt-8">
            Request an Airbnb Cleaning Quote
          </ButtonLink>
        </div>

        {/* Factors as luggage tags */}
        <ul className="flex flex-wrap gap-3">
          {pricingFactors.map((f) => (
            <li
              key={f}
              className="inline-flex items-center gap-3 rounded-r-xl rounded-l-[1.4rem] bg-white py-3 pl-3 pr-5 text-[15px] font-medium text-ink shadow-card ring-1 ring-line"
            >
              <span aria-hidden="true" className="h-3 w-3 rounded-full bg-brand-50 ring-2 ring-brand/40" />
              {f}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function BookingSteps() {
  return (
    <section aria-labelledby="booking-heading" className="py-20 sm:py-24">
      <Container>
        <h2 id="booking-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          How Booking Works
        </h2>
        <ol className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {booking.map(({ title, text }, i) => (
            <li key={title} className="relative flex items-center gap-4 lg:block">
              <div className="flex-1 rounded-2xl border-2 border-dashed border-brand/30 p-5 lg:mr-10 lg:min-h-[9.5rem]">
                <span className="text-4xl font-semibold leading-none tracking-tight text-wattle">{i + 1}</span>
                <h3 className="mt-3 font-semibold text-ink">{title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{text}</p>
              </div>
              {i < booking.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-white lg:right-1 lg:flex"
                >
                  <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

const related = [
  { path: "/services/house-cleaning/", before: "Living in the property between guests? Our", anchor: "regular house cleaning", after: "service keeps an occupied home fresh." },
  { path: "/services/deep-cleaning/", before: "Before a listing goes live or after a busy season, a", anchor: "deep clean of the property", after: "tackles built-up grime and overlooked areas." },
  { path: "/services/end-of-lease-cleaning/", before: "Moving a property from short-stay to a long-term lease? See our", anchor: "end of lease cleaning", after: "for rental handovers." },
  { path: "/services/office-cleaning/", before: "Running a business as well? We also provide", anchor: "office cleaning around your working day", after: "." },
  { path: "/services/commercial-cleaning/", before: "And for shops, studios and other premises, there's", anchor: "scheduled commercial cleaning", after: "." },
];

export function AreaAndRelated() {
  return (
    <section aria-label="Service area and related services" className="border-t border-line bg-[#fbf7f0] py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Short-Stay Cleaning Across Melbourne</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            Short-stay properties are spread right across Melbourne, and so is our service area. We clean
            apartments in the Melbourne CBD and nearby Richmond and South Yarra, homes and units in the north
            around Brunswick and Preston, and properties in the west from Footscray to Werribee and Point Cook.
            To the east, we cover suburbs such as Doncaster and Glen Waverley. Let us know the property&apos;s
            suburb and your usual check-out and check-in times so we can confirm what we can arrange.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Related Cleaning Services</h2>
          <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            {related.map(({ path, before, anchor, after }) => (
              <li key={path}>
                {before}{" "}
                {isLiveRoute(path) ? (
                  <a
                    href={path}
                    className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
                  >
                    {anchor}
                  </a>
                ) : (
                  <span className="font-semibold text-ink">{anchor}</span>
                )}
                {after === "." ? "." : ` ${after}`}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function AirbnbCTA() {
  return (
    <section id="quote" aria-labelledby="airbnb-cta-heading" className="relative isolate overflow-hidden">
      <Image
        src={images.bedroom.src}
        width={images.bedroom.width}
        height={images.bedroom.height}
        alt=""
        aria-hidden="true"
        loading="lazy"
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/80" />
      <Container className="py-24 text-center text-white sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-wattle">Next check-in coming up?</p>
        <h2 id="airbnb-cta-heading" className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Get Your Property Guest-Ready
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Tell us about your short-stay property and booking pattern, and we&apos;ll come back with a clear quote
          for cleaning between stays.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={airbnbQuoteMailHref} variant="accent" size="lg">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Get an Airbnb Cleaning Quote
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
