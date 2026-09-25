import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, BedDouble, Blinds, Building2, ClipboardList, CookingPot, Droplets, Grid3x3, Home, MapPin, Sparkles, Store, type LucideIcon } from "lucide-react";
import {
  choiceFactors,
  commercialKeys,
  hrefFor,
  hubFaqs,
  reasons,
  reasonsToChoose,
  residentialCount,
  residentialGroups,
  scenarios,
  services,
  suburbs,
  type ServiceKey,
} from "@/lib/services-hub";
import { quoteHref, quoteMailHref, siteConfig } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";

/** Inline service reference: a link when the page exists, plain text otherwise. */
function ServiceLink({ k, className = "" }: { k: ServiceKey; className?: string }) {
  const href = hrefFor(k);
  const { name } = services[k];
  return href ? (
    <a href={href} className={`font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand ${className}`}>
      {name}
    </a>
  ) : (
    <span className={`font-semibold text-ink ${className}`}>{name}</span>
  );
}

const mosaic: ServiceKey[] = ["spring", "office", "window", "carpet"];

export function HubHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section aria-labelledby="hub-hero-heading" className="border-b border-line bg-white">
      <Container className="pb-14 pt-6 sm:pt-8 lg:pb-20">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              <ClipboardList className="h-3.5 w-3.5" aria-hidden="true" /> Service directory
            </p>
            <h1 id="hub-hero-heading" className="mt-5 text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-ink sm:text-6xl">
              Cleaning Services in Melbourne
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Melbourne Cleaning Pro provides residential and commercial cleaning across Melbourne. Different
              properties and situations call for different kinds of clean, so each service is set up for a
              particular need. Find yours below.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={quoteHref} size="lg">
                Get a Cleaning Quote
              </ButtonLink>
              <ButtonLink href="#directory" variant="secondary" size="lg">
                Explore Our Services
              </ButtonLink>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4" aria-hidden="true">
            {mosaic.map((k, i) => {
              const image = services[k].image!;
              return (
                <div key={k} className={`relative overflow-hidden rounded-2xl ${i % 2 ? "translate-y-6" : ""}`}>
                  <Image
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt=""
                    priority={i < 2}
                    sizes="(min-width: 1024px) 280px, 45vw"
                    className="aspect-[4/3] h-auto w-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-ink sm:text-xs">
                    {services[k].name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Sticky segmented navigation: plain anchor links, so all content stays in the page. */
export function CategoryNav() {
  const items = [
    { href: "#residential", icon: Home, label: "Residential Cleaning", note: "Homes, apartments, rentals and short stays", count: residentialCount },
    { href: "#commercial", icon: Building2, label: "Commercial Cleaning", note: "Offices, workplaces and business premises", count: commercialKeys.length },
  ];
  return (
    <nav id="directory" aria-label="Service categories" className="z-30 scroll-mt-[72px] border-b sm:sticky sm:top-[72px] border-line bg-cream/95 backdrop-blur-md">
      <Container className="py-3">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]">
          {items.map(({ href, icon: Icon, label, note, count }) => (
            <li key={href}>
              <a
                href={href}
                className="group flex items-center gap-3 rounded-xl bg-white px-4 py-2.5 ring-1 ring-line transition hover:ring-brand focus-visible:ring-brand"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand transition group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-ink sm:text-[15px]">
                    {label} <span className="font-normal text-ink-soft">({count})</span>
                  </span>
                  <span className="hidden truncate text-xs text-ink-soft md:block">{note}</span>
                </span>
              </a>
            </li>
          ))}
          <li className="hidden sm:block">
            <a
              href="#choose"
              className="flex h-full items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold text-brand transition hover:bg-white"
            >
              Help me choose <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

/** Icons for services shown without an image. */
const rowIcons: Partial<Record<ServiceKey, LucideIcon>> = { house: Home, oven: CookingPot, mattress: BedDouble, tile: Grid3x3, blinds: Blinds, pressure: Droplets };

function ServiceRow({ k }: { k: ServiceKey }) {
  const RowIcon = rowIcons[k] ?? Sparkles;
  const { name, description, image } = services[k];
  const href = hrefFor(k);
  const body = (
    <>
      <span className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-brand-50 sm:h-20 sm:w-28">
        {image ? (
          <Image src={image.src} width={image.width} height={image.height} alt="" loading="lazy" sizes="112px" className="h-full w-full object-cover" />
        ) : (
          <RowIcon className="absolute inset-0 m-auto h-7 w-7 text-brand" aria-hidden="true" />
        )}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-lg font-semibold text-ink transition-colors group-hover:text-brand">{name}</span>
        <span className="mt-0.5 block text-[15px] leading-relaxed text-ink-soft">{description}</span>
      </span>
    </>
  );
  return (
    <li id={`service-${services[k].id}`}>
      {href ? (
        <a href={href} className="group flex items-center gap-4 rounded-2xl p-3 transition hover:bg-white hover:shadow-card sm:gap-6 sm:p-4">
          {body}
          <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full ring-1 ring-line transition group-hover:bg-brand group-hover:text-white group-hover:ring-brand sm:flex">
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </a>
      ) : (
        <div className="flex items-center gap-4 rounded-2xl p-3 sm:gap-6 sm:p-4">
          {body}
          <a href={quoteHref} className="hidden shrink-0 text-sm font-semibold text-brand hover:text-brand-dark sm:block">
            Ask in your quote
          </a>
        </div>
      )}
    </li>
  );
}

function ServiceTile({ k }: { k: ServiceKey }) {
  const { name, description, image } = services[k];
  const href = hrefFor(k);
  if (!href || !image) return <ServiceRow k={k} />;
  return (
    <li id={`service-${services[k].id}`}>
      <a href={href} className="group relative block overflow-hidden rounded-2xl">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          loading="lazy"
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
          className="aspect-[4/3] h-auto w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/90 via-ink/60 to-transparent p-5 pt-16 text-white">
          <span>
            <span className="block text-lg font-semibold">{name}</span>
            <span className="mt-0.5 block text-sm text-white/80">{description}</span>
          </span>
          <ArrowUpRight className="h-5 w-5 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </a>
    </li>
  );
}

export function ResidentialDirectory() {
  return (
    <section id="residential" aria-labelledby="residential-heading" className="scroll-mt-[150px] bg-cream py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-3 border-b border-ink/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">For homes</p>
            <h2 id="residential-heading" className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Residential Cleaning Services
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
            For houses, apartments, units, townhouses, rentals and short-stay properties.
          </p>
        </div>

        <div className="divide-y divide-ink/10">
          {residentialGroups.map(({ title, intro, keys, layout }) => (
            <div key={title} className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-[16rem_1fr] lg:gap-12">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{intro}</p>
              </div>
              {layout === "tiles" ? (
                <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {keys.map((k) => (
                    <ServiceTile key={k} k={k} />
                  ))}
                </ul>
              ) : (
                <ul className="-mx-3 space-y-1 sm:-mx-4">
                  {keys.map((k) => (
                    <ServiceRow key={k} k={k} />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CommercialDirectory() {
  const icons = { commercial: Store, office: Building2 } as const;
  return (
    <section id="commercial" aria-labelledby="commercial-heading" className="scroll-mt-[150px] bg-ink py-16 text-white sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-wattle">For business</p>
            <h2 id="commercial-heading" className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Commercial Cleaning Services
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              For offices, workplaces and suitable business premises, scheduled around how your business runs.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {commercialKeys.map((k) => {
              const { name, description, image } = services[k];
              const href = hrefFor(k);
              const Icon = icons[k as keyof typeof icons];
              if (!href || !image) return null;
              return (
                <li key={k} id={`service-${services[k].id}`}>
                  <a href={href} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/[0.06] ring-1 ring-white/10 transition hover:bg-white/[0.1] hover:ring-wattle/60">
                    <Image
                      src={image.src}
                      width={image.width}
                      height={image.height}
                      alt={image.alt}
                      loading="lazy"
                      sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 100vw"
                      className="aspect-[16/9] h-auto w-full object-cover opacity-90 transition group-hover:opacity-100"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-wattle" aria-hidden="true" />
                        <span className="text-xl font-semibold">{name}</span>
                      </div>
                      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-white/70">{description}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-wattle">
                        View {name.toLowerCase()} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function ScenarioGuide() {
  return (
    <section id="choose" aria-labelledby="choose-heading" className="scroll-mt-[150px] py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 id="choose-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Not sure which cleaning service you need?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">Start with what&apos;s going on, and we&apos;ll point you to the right page.</p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
          {scenarios.map(({ quote, key }) => {
            const href = hrefFor(key);
            const inner = (
              <>
                <span className="text-base font-medium text-ink sm:text-[17px]">&ldquo;{quote}&rdquo;</span>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand transition group-hover:bg-brand group-hover:text-white">
                  {services[key].name}
                  {href && <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />}
                </span>
              </>
            );
            return (
              <li key={quote}>
                {href ? (
                  <a href={href} className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-line p-5 transition hover:border-brand sm:flex-row sm:items-center sm:justify-between">
                    {inner}
                  </a>
                ) : (
                  <div className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-dashed border-line p-5 sm:flex-row sm:items-center sm:justify-between">
                    {inner}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export function WhyDifferent() {
  return (
    <section aria-labelledby="why-diff-heading" className="bg-brand-50 py-20 sm:py-24">
      <Container>
        <h2 id="why-diff-heading" className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.15]">
          Every property has different cleaning requirements.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          That&apos;s why there isn&apos;t one clean for everything. The right service usually depends on a
          handful of things:
        </p>
        <ol className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {choiceFactors.map(({ title, text }, i) => (
            <li key={title} className="border-l-2 border-brand/30 pl-5">
              <span className="text-xs font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 font-semibold text-ink">{title}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Down() {
  return (
    <div className="flex justify-center py-3" aria-hidden="true">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-line">
        <ArrowDown className="h-4 w-4 text-brand" />
      </span>
    </div>
  );
}

/** A static three-step decision path. */
export function DecisionPath() {
  return (
    <section aria-labelledby="path-heading" className="py-20 sm:py-24">
      <Container className="max-w-4xl">
        <h2 id="path-heading" className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          How to Choose
        </h2>

        <div className="mt-12 rounded-3xl border border-line p-5 sm:p-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Step 1</p>
          <h3 className="mt-1 text-center text-xl font-semibold text-ink">What are you cleaning?</h3>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a href="#residential" className="group flex items-center justify-between gap-3 rounded-2xl bg-cream p-4 ring-1 ring-line transition hover:ring-brand">
              <span className="flex items-center gap-3 font-semibold text-ink">
                <Home className="h-5 w-5 text-brand" aria-hidden="true" /> A home
              </span>
              <span className="text-sm font-semibold text-brand">Residential services &rarr;</span>
            </a>
            <a href="#commercial" className="group flex items-center justify-between gap-3 rounded-2xl bg-ink p-4 text-white transition hover:bg-ink/90">
              <span className="flex items-center gap-3 font-semibold">
                <Building2 className="h-5 w-5 text-wattle" aria-hidden="true" /> An office or business
              </span>
              <span className="text-sm font-semibold text-wattle">Commercial services &rarr;</span>
            </a>
          </div>
        </div>

        <Down />

        <div className="rounded-3xl border border-line p-5 sm:p-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Step 2</p>
          <h3 className="mt-1 text-center text-xl font-semibold text-ink">Why do you need cleaning?</h3>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ reason, keys }) => (
              <li key={reason} className="rounded-2xl bg-white p-4 ring-1 ring-line">
                <p className="text-sm font-semibold text-ink">{reason}</p>
                <p className="mt-1.5 text-sm text-ink-soft">
                  {keys.map((k, i) => (
                    <span key={k}>
                      {i > 0 && " or "}
                      <ServiceLink k={k} />
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <Down />

        <div className="rounded-3xl bg-brand p-6 text-center text-white sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Step 3</p>
          <h3 className="mt-1 text-xl font-semibold">Choose the service</h3>
          <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-white/80">
            Open the service page to see what&apos;s included, or ask us and we&apos;ll help you decide.
          </p>
          <ButtonLink href={quoteHref} variant="accent" className="mt-5">
            Ask Us Which Service Fits
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function AreaAndTrust() {
  return (
    <section aria-label="Service area and why Melbourne Cleaning Pro" className="border-t border-line bg-cream py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <MapPin className="h-6 w-6 text-brand" aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Across Melbourne</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            We serve Melbourne and surrounding areas, from the city and inner suburbs out to the west and east.
            Tell us your suburb when you ask for a quote.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm font-medium text-ink">
            {suburbs.map((s, i) => (
              <li key={s} className="flex items-center gap-3">
                {s}
                {i < suburbs.length - 1 && <span className="text-ink/25" aria-hidden="true">&middot;</span>}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Why Melbourne Cleaning Pro</h2>
          <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {reasonsToChoose.map(({ title, text }) => (
              <div key={title}>
                <dt className="flex items-center gap-2.5 font-semibold text-ink">
                  <span className="h-2 w-2 rounded-full bg-wattle" aria-hidden="true" />
                  {title}
                </dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

/** Open two-column FAQ (no accordion), with a follow-on link where useful. */
export function HubFAQ() {
  return (
    <section id="faq" aria-labelledby="hub-faq-heading" className="py-20 sm:py-24">
      <Container>
        <h2 id="hub-faq-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Cleaning Services FAQs
        </h2>
        <dl className="mt-12 grid grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-2">
          {hubFaqs.map(({ question, answer, link }) => {
            const href = link ? hrefFor(link.key) : undefined;
            return (
              <div key={question} className="border-t border-line pt-5">
                <dt className="text-lg font-semibold text-ink">{question}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  <p>{answer}</p>
                  {link && href && (
                    <a href={href} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark">
                      {link.label} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </dd>
              </div>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}

export function HubCTA() {
  return (
    <section id="quote" aria-labelledby="hub-cta-heading" className="px-4 pb-20 sm:px-6 sm:pb-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-wattle px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
          <div>
            <h2 id="hub-cta-heading" className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg">
              Get in touch and tell us about your property and what needs cleaning. We&apos;ll suggest the service
              that fits and send you a quote.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={quoteMailHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-ink/85"
            >
              Get a Cleaning Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center text-base font-semibold text-ink ring-2 ring-inset ring-ink/80 transition-colors hover:bg-ink/5"
            >
              Contact {siteConfig.name}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
