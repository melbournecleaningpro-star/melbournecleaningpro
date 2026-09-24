import Image from "next/image";
import { Phone } from "lucide-react";
import { checklist, showcase, trustPoints } from "@/lib/end-of-lease";
import { quoteHref, siteConfig } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";
import { CheckBox } from "./CheckBox";

const heroImage = showcase[0];

export function EndOfLeaseHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section
      aria-labelledby="eol-hero-heading"
      className="relative overflow-hidden bg-brand-50 [background-image:linear-gradient(to_right,rgb(11_110_105/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(11_110_105/0.05)_1px,transparent_1px)] [background-size:32px_32px]"
    >
      <Container className="pb-16 pt-6 sm:pb-20 sm:pt-8 lg:pb-24">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-10 grid items-center gap-12 lg:mt-12 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              End of Lease Cleaning Melbourne
            </p>
            <h1
              id="eol-hero-heading"
              className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]"
            >
              End of Lease Cleaning in Melbourne
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Moving out of a rental property? Our end of lease cleaning helps you prepare for the final
              inspection and handover, with detailed cleaning throughout the home, from kitchens and
              bathrooms to bedrooms and living areas.
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
          </div>

          <div className="relative mx-auto w-full max-w-xl sm:pb-10 lg:max-w-none lg:pb-0">
            <div className="overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-lift ring-1 ring-line">
              <Image
                src={heroImage.src}
                width={heroImage.width}
                height={heroImage.height}
                alt={heroImage.alt}
                priority
                sizes="(min-width: 1024px) 600px, 100vw"
                className="h-auto w-full rounded-[1.35rem]"
              />
            </div>

            {/* Handover checklist card: echoes the room-by-room approach */}
            <div className="relative mt-4 rounded-2xl bg-white p-4 shadow-lift ring-1 ring-line sm:absolute sm:-bottom-2 sm:left-[-1.5rem] sm:mt-0 sm:w-60 lg:-bottom-8">
              <p className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
                Handover checklist
                <span className="h-2 w-2 rounded-full bg-wattle" aria-hidden="true" />
              </p>
              <ul className="mt-3 space-y-2">
                {checklist.map((room) => (
                  <li key={room.name} className="flex items-center gap-2.5 text-sm font-medium text-ink">
                    <CheckBox />
                    {room.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function TrustStrip() {
  return (
    <section aria-label="Service highlights" className="bg-ink">
      <Container>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-3 py-6 sm:grid-cols-2 lg:grid-cols-5 lg:py-5">
          {trustPoints.map(({ label, icon: Icon }) => (
            <li key={label} className="flex items-center gap-3 text-sm font-medium text-white/90">
              <Icon className="h-5 w-5 shrink-0 text-wattle" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
