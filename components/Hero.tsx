import Image from "next/image";
import { Check, Phone } from "lucide-react";
import { quoteHref, siteConfig } from "@/lib/site";
import { ButtonLink, Container } from "./ui";

const highlights = [
  "Free, no-obligation quotes",
  "One-off or regular cleans",
  "Homes, rentals & workplaces",
];

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-cream">
      <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-brand shadow-card ring-1 ring-line sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-wattle" aria-hidden="true" />
            Local Melbourne cleaners
          </p>
          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Professional Cleaning Services in <span className="text-brand">Melbourne</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Reliable residential and commercial cleaning across Melbourne. From regular house cleaning
            to end of lease and office cleans, our professional cleaners leave your space fresh,
            healthy and ready to enjoy.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={quoteHref} size="lg">
              Get a Free Quote
            </ButtonLink>
            <ButtonLink href={siteConfig.contact.phone.href} variant="secondary" size="lg">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </ButtonLink>
          </div>

          <ul className="mt-8 flex flex-col gap-2.5 text-sm text-ink-soft sm:flex-row sm:flex-wrap sm:gap-x-6">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-lift ring-1 ring-line">
            <Image
              src="/images/hero-clean-living-room.svg"
              width={640}
              height={560}
              alt="A freshly cleaned Melbourne apartment living room with a cleaning caddy ready to go"
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lift ring-1 ring-line sm:right-6 lg:-right-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand">
              <Check className="h-5 w-5" aria-hidden="true" strokeWidth={2.5} />
            </span>
            <span className="text-sm leading-tight">
              <span className="block font-semibold text-ink">Residential &amp; commercial</span>
              <span className="text-ink-soft">Across Melbourne &amp; suburbs</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
