import { ArrowRight, Compass, MapPin, MessageCircle } from "lucide-react";
import { regions, scenarios, serviceLinks } from "@/lib/service-areas";
import { isLiveRoute } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";

const link = "font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand";

function MaybeLink({ path, children, className = link }: { path: string; children: string; className?: string }) {
  return isLiveRoute(path) ? (
    <a href={path} className={className}>
      {children}
    </a>
  ) : (
    <span className="font-semibold text-ink">{children}</span>
  );
}

const byId = Object.fromEntries(regions.map((r) => [r.id, r]));

/**
 * Abstract, not-to-scale orientation graphic: regions arranged by compass
 * direction around the city, with the bay to the south. It shows no
 * boundaries, pins or radius, and each tile simply jumps to its section.
 */
function RegionCompass() {
  const tile =
    "group flex flex-col justify-between rounded-2xl p-3 text-left transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-wattle/60 sm:p-4";
  const Tile = ({ id, area }: { id: string; area: string }) => {
    const r = byId[id];
    return (
      <a href={`#${id}`} className={`${tile} ${area} bg-white/[0.07] ring-1 ring-white/15 hover:bg-white/[0.14]`}>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-wattle sm:text-xs">{r.direction}</span>
        <span className="mt-3 text-xs font-medium leading-snug text-white/85 sm:text-sm">{r.suburbs.join(" · ")}</span>
        <span className="sr-only"> (jump to {r.name})</span>
      </a>
    );
  };
  return (
    <figure className="w-full">
      <div className="grid aspect-square grid-cols-3 grid-rows-3 gap-2 sm:gap-3">
        <span aria-hidden="true" className="rounded-2xl border border-dashed border-white/10" />
        <Tile id="north" area="" />
        <span aria-hidden="true" className="rounded-2xl border border-dashed border-white/10" />
        <Tile id="west" area="" />
        <a
          href="#inner-melbourne"
          className={`${tile} relative items-center justify-center bg-wattle text-center text-ink hover:bg-wattle-dark`}
        >
          <MapPin className="h-5 w-5" aria-hidden="true" />
          <span className="mt-2 text-sm font-semibold leading-tight sm:text-base">Inner Melbourne</span>
          <span className="text-[10px] font-medium text-ink/75 sm:text-xs">CBD · Richmond · South Yarra</span>
        </a>
        <Tile id="east" area="" />
        <span
          aria-hidden="true"
          className="col-span-2 flex items-end rounded-2xl bg-[repeating-linear-gradient(170deg,rgb(143_198_219/0.18)_0_6px,transparent_6px_14px)] p-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/55 ring-1 ring-white/10 sm:p-4 sm:text-xs"
        >
          Port Phillip Bay
        </span>
        <Tile id="south-east" area="" />
      </div>
      <figcaption className="mt-3 flex items-center gap-2 text-xs text-white/60">
        <Compass className="h-4 w-4 shrink-0" aria-hidden="true" />
        Not to scale. A rough guide to how we group Melbourne, not a map of service boundaries.
      </figcaption>
    </figure>
  );
}

export function AreasHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section aria-labelledby="areas-hero-heading" className="bg-ink text-white">
      <Container className="pb-16 pt-6 sm:pt-8 lg:pb-20">
        <Breadcrumbs items={breadcrumbs} tone="light" />
        <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-wattle">Service areas</p>
            <h1 id="areas-hero-heading" className="mt-4 text-[2.5rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl">
              Cleaning Services Across Melbourne
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Melbourne Cleaning Pro provides residential and commercial cleaning across Melbourne, from the city out to
              the suburbs. Availability depends on the service you need and where your property is, so if you&apos;re
              unsure, just ask.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/quote/" variant="accent" size="lg">
                Request a Quote
              </ButtonLink>
              <ButtonLink href="/services/" variant="ghost-light" size="lg">
                View Services
              </ButtonLink>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <RegionCompass />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CoverageIntro() {
  const types = ["Houses & family homes", "Apartments & units", "Rental properties", "Short-stay rentals", "Offices", "Commercial premises"];
  return (
    <section aria-labelledby="coverage-heading" className="py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <h2 id="coverage-heading" className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Homes, rentals and workplaces across the city
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            Melbourne is a mix of apartment buildings in the city, terraces and townhouses in the inner suburbs, and
            family homes further out, alongside offices and shops in every direction. We clean all of these, for regular
            upkeep, one-off jobs and moves, and for more specialised needs like windows and carpets.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            What we can offer in a particular place depends on the service and the property, which is why the easiest
            way to check is to tell us both.
          </p>
        </div>
        <ul className="grid grid-cols-2 content-center gap-3 sm:grid-cols-3">
          {types.map((t) => (
            <li key={t} className="rounded-xl border border-line bg-white px-4 py-4 text-sm font-semibold text-ink">
              {t}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function RegionGuide() {
  return (
    <section aria-labelledby="regions-heading" className="border-t border-line bg-white py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 id="regions-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Melbourne, region by region
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            The areas listed are examples of where we clean, not a complete list, and availability can depend on the
            service and location. If you don&apos;t see your suburb, it may still be covered.
          </p>
        </div>
        <ol className="mt-12 divide-y divide-line border-y border-line">
          {regions.map((r, i) => (
            <li key={r.id} id={r.id} className="grid scroll-mt-24 grid-cols-1 gap-4 py-8 md:grid-cols-[14rem_minmax(0,1fr)_minmax(0,1fr)] md:gap-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  {String(i + 1).padStart(2, "0")} &middot; {r.direction}
                </span>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-ink">{r.name}</h3>
              </div>
              <p className="text-[15px] leading-relaxed text-ink-soft sm:text-base">{r.text}</p>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">Areas include</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {r.suburbs.map((s) => (
                    <li key={s} className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-medium text-ink">
                      <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                  <li className="inline-flex items-center rounded-full px-3 py-1.5 text-sm text-ink-soft border border-dashed border-ink/25">
                    and nearby, on request
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function Situations() {
  return (
    <section aria-labelledby="situations-heading" className="py-16 sm:py-20">
      <Container>
        <h2 id="situations-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Wherever you are, it usually starts with a situation
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scenarios.map(({ title, text, links }) => (
            <li key={title} className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-line">
              <h3 className="text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{text}</p>
              <p className="mt-5 flex flex-col gap-1.5 border-t border-line pt-4 text-sm">
                {links.map((l) => (
                  <MaybeLink
                    key={l.path}
                    path={l.path}
                    className="inline-flex items-center gap-1.5 font-semibold text-brand hover:text-brand-dark"
                  >
                    {l.label}
                  </MaybeLink>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function ServiceMatch() {
  const live = serviceLinks.filter((s) => isLiveRoute(s.path));
  const other = serviceLinks.filter((s) => !isLiveRoute(s.path));
  return (
    <section aria-labelledby="service-match-heading" className="border-y border-line bg-white py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <h2 id="service-match-heading" className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Looking for a specific cleaning service?
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            Each service has its own page. Mention your suburb when you ask about one, since availability can depend on
            both.
            {other.length > 0 && <> We also offer {other.map((o) => o.name.toLowerCase()).join(", ")}.</>}
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
          {live.map((s) => (
            <li key={s.path} className="border-b border-line">
              <a href={s.path} className="group flex items-center justify-between gap-3 py-3.5 text-[15px] font-semibold text-ink transition hover:text-brand focus-visible:text-brand focus-visible:outline-none">
                {s.name}
                <ArrowRight className="h-4 w-4 shrink-0 text-ink-soft transition group-hover:translate-x-0.5 group-hover:text-brand" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function CheckYourArea() {
  return (
    <section id="quote" aria-labelledby="check-area-heading" className="bg-cream py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand px-6 py-12 text-white sm:px-12 sm:py-14">
          <MapPin aria-hidden="true" className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 text-white/[0.07] sm:h-64 sm:w-64" />
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_auto] lg:items-center">
            <div>
              <h2 id="check-area-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Not Sure If We Service Your Area?
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Tell us your suburb and what you&apos;d like cleaned through the quote form, and we&apos;ll let you know.
                You can also send a question through the contact page.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href="/quote/" variant="accent" size="lg">
                Request a Quote
              </ButtonLink>
              <ButtonLink href="/contact/" variant="ghost-light" size="lg">
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
