import Image from "next/image";
import { CalendarRange, Moon, Phone, Sunrise } from "lucide-react";
import { images, valuePoints } from "@/lib/commercial";
import { quoteHref, siteConfig } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";

const windows = [
  { label: "Before opening", icon: Sunrise },
  { label: "After closing", icon: Moon },
  { label: "Agreed times", icon: CalendarRange },
];

const days = ["M", "T", "W", "T", "F", "S", "S"];

export function CommercialHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section aria-labelledby="com-hero-heading" className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand/30 blur-3xl"
      />
      <Container className="relative pb-16 pt-6 sm:pb-20 sm:pt-8 lg:pb-24">
        <Breadcrumbs items={breadcrumbs} tone="light" />

        <div className="mt-10 grid items-center gap-12 lg:mt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-wattle ring-1 ring-inset ring-white/15">
              Commercial Cleaning Melbourne
            </p>
            <h1
              id="com-hero-heading"
              className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.3rem]"
            >
              Professional Commercial Cleaning in Melbourne
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Melbourne Cleaning Pro provides reliable cleaning for offices, retail spaces, workplaces and
              other commercial properties, with scheduled cleaning planned around your operating hours so
              your team and customers aren&apos;t disrupted.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={quoteHref} variant="accent" size="lg">
                Request a Commercial Quote
              </ButtonLink>
              <ButtonLink href={siteConfig.contact.phone.href} variant="ghost-light" size="lg">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Us
              </ButtonLink>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-white/70">
              {windows.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-wattle" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/15">
              <Image
                src={images.office.src}
                width={images.office.width}
                height={images.office.height}
                alt={images.office.alt}
                priority
                sizes="(min-width: 1024px) 580px, 100vw"
                className="h-auto w-full"
              />
            </div>

            {/* Schedule card: signals that cleaning is planned around the business week */}
            <div
              aria-hidden="true"
              className="mt-4 rounded-xl bg-white p-4 text-ink shadow-lift sm:absolute sm:-bottom-6 sm:right-6 sm:mt-0 sm:w-64"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">Your cleaning week</p>
              <div className="mt-3 grid grid-cols-7 gap-1.5">
                {days.map((d, i) => (
                  <span
                    key={i}
                    className={`flex h-8 items-center justify-center rounded-md text-xs font-semibold ${
                      i === 0 || i === 2 || i === 4 ? "bg-brand text-white" : "bg-brand-50 text-ink-soft"
                    }`}
                  >
                    {d}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-ink-soft">Days and times set to suit your business</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ValueStrip() {
  return (
    <section aria-label="Why businesses book with us" className="border-b border-line bg-white">
      <Container>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {valuePoints.map(({ label, icon: Icon }, i) => (
            <li
              key={label}
              className={`flex flex-col items-center gap-2.5 px-3 py-6 text-center lg:py-8 ${
                i > 0 ? "lg:border-l lg:border-line" : ""
              } ${i === valuePoints.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
              <span className="text-sm font-semibold leading-snug text-ink">{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
