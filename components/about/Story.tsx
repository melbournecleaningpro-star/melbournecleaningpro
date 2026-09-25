import Image from "next/image";
import { ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react";
import { audiences, expectations, images, journey, needs, principles, specialist, suburbs, values } from "@/lib/about";
import { isLiveRoute, quoteHref, quoteMailHref, siteConfig } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";

const link = "font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand";

function MaybeLink({ path, children }: { path: string; children: string }) {
  return isLiveRoute(path) ? (
    <a href={path} className={link}>
      {children}
    </a>
  ) : (
    <span className="font-semibold text-ink">{children}</span>
  );
}

/** Oversized type beside an arched doorway illustration. */
export function AboutHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section aria-labelledby="about-hero-heading" className="relative overflow-hidden bg-cream">
      <span aria-hidden="true" className="pointer-events-none absolute -left-40 top-40 h-[34rem] w-[34rem] rounded-full border border-brand/10" />
      <Container className="relative pb-16 pt-6 sm:pt-8 lg:pb-24">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-10 grid grid-cols-1 items-end gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 lg:pb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-wattle-dark">The people behind the clean</p>
            <h1 id="about-hero-heading" className="mt-5 text-[2.9rem] font-semibold leading-[0.98] tracking-tight text-ink sm:text-7xl lg:text-[5.4rem]">
              About <span className="block text-brand">Melbourne Cleaning Pro</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              We&apos;re a Melbourne-focused residential and commercial cleaning business. Our job is simple to
              describe: helping people keep their homes and workplaces clean, presentable and comfortable, without
              making the process complicated.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={quoteHref} size="lg">
                Get a Cleaning Quote
              </ButtonLink>
              <ButtonLink href="/services/" variant="secondary" size="lg">
                Explore Our Services
              </ButtonLink>
            </div>
          </div>
          <figure className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
            <div className="overflow-hidden rounded-t-[999px] rounded-b-[2rem] shadow-lift">
              <Image
                src={images.doorway.src}
                width={images.doorway.width}
                height={images.doorway.height}
                alt={images.doorway.alt}
                priority
                sizes="(min-width: 1024px) 460px, 384px"
                className="aspect-[3/4] h-auto w-full object-cover"
              />
            </div>
            <figcaption className="absolute -bottom-5 left-4 rounded-2xl bg-white px-4 py-3 text-sm shadow-card sm:-left-6">
              <span className="block font-semibold text-ink">Residential &amp; commercial</span>
              <span className="text-ink-soft">Melbourne, VIC</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}

export function OurStory() {
  return (
    <section aria-labelledby="story-heading" className="py-20 sm:py-28">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Our story</p>
        <h2 id="story-heading" className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-tight text-ink sm:text-6xl">
          Cleaning should make life simpler.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="text-base leading-relaxed text-ink-soft sm:text-lg lg:col-span-8 lg:columns-2 lg:gap-10">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-brand">
              Arranging a clean shouldn&apos;t feel like another job on the list. Melbourne Cleaning Pro is built
              around that idea: make it easy to find the right service, easy to explain what you need, and easy
              to know what&apos;s going to happen.
            </p>
            <p className="mt-5">
              No two properties are quite the same. A one-bedroom apartment, a family home, a rental between
              tenants and an office floor each need something different, so we offer clear service options rather
              than one clean for everything.
            </p>
            <p className="mt-5">
              Once the scope is agreed, that&apos;s what we pay attention to. You know what&apos;s included before
              the day, and the booking itself stays straightforward.
            </p>
            <p className="mt-5">
              And we&apos;re focused on Melbourne. That&apos;s where our customers are, and it&apos;s who this
              business is for.
            </p>
          </div>
          <aside className="lg:col-span-4">
            <blockquote className="border-l-4 border-wattle pl-6 text-2xl font-medium leading-snug tracking-tight text-ink sm:text-[1.7rem]">
              &ldquo;Clear options, a clear scope and a simple booking. That&apos;s the whole idea.&rdquo;
            </blockquote>
          </aside>
        </div>
      </Container>
    </section>
  );
}

export function WhatWeDo() {
  return (
    <section aria-labelledby="whatwedo-heading" className="bg-[#f1f5f3] py-20 sm:py-28">
      <Container>
        <h2 id="whatwedo-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          What We Do
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <article className="lg:col-span-7">
            <Image
              src={images.home.src}
              width={images.home.width}
              height={images.home.height}
              alt={images.home.alt}
              loading="lazy"
              sizes="(min-width: 1024px) 680px, 100vw"
              className="aspect-[16/10] h-auto w-full rounded-[1.75rem] object-cover"
            />
            <h3 className="mt-6 text-2xl font-semibold text-ink">Residential Cleaning</h3>
            <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-ink-soft sm:text-base">
              Homes, apartments, units and other suitable residential properties, whether you need regular help or
              a one-off clean.
            </p>
          </article>
          <article className="lg:col-span-5 lg:mt-28">
            <Image
              src={images.workplace.src}
              width={images.workplace.width}
              height={images.workplace.height}
              alt={images.workplace.alt}
              loading="lazy"
              sizes="(min-width: 1024px) 480px, 100vw"
              className="aspect-[4/3] h-auto w-full rounded-[1.75rem] object-cover"
            />
            <h3 className="mt-6 text-2xl font-semibold text-ink">Commercial Cleaning</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft sm:text-base">
              Suitable offices and commercial environments, arranged around how the business runs.
            </p>
          </article>
        </div>

        <div className="mt-16 border-t border-ink/10 pt-10 lg:grid lg:grid-cols-12 lg:gap-12">
          <h3 className="text-2xl font-semibold text-ink lg:col-span-4">Specialist Cleaning Needs</h3>
          <div className="mt-4 lg:col-span-8 lg:mt-0">
            <p className="text-base leading-loose text-ink-soft sm:text-lg">
              Some situations call for something more specific:{" "}
              {specialist.map(({ label, path }, i) => (
                <span key={path}>
                  <MaybeLink path={path}>{label}</MaybeLink>
                  {i < specialist.length - 2 ? ", " : i === specialist.length - 2 ? " and " : "."}
                </span>
              ))}
            </p>
            <a href="/services/" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-dark">
              Explore All Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Four principles set as outlined display words. */
export function Approach() {
  return (
    <section aria-labelledby="approach-heading" className="bg-ink py-20 text-white sm:py-28">
      <Container>
        <h2 id="approach-heading" className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          A straightforward approach to cleaning.
        </h2>
        <ol className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {principles.map(({ word, text }) => (
            <li key={word} className="grid grid-cols-1 gap-3 py-7 md:grid-cols-[1fr_1fr] md:items-center md:gap-10">
              <h3 className="text-5xl font-semibold tracking-tight text-transparent [-webkit-text-stroke:1.5px_rgb(244_182_63)] sm:text-7xl">
                {word}
              </h3>
              <p className="max-w-md text-base leading-relaxed text-white/75 sm:text-lg">{text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/** Values in a staggered two-column editorial layout. */
export function Values() {
  return (
    <section aria-labelledby="values-heading" className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="values-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:sticky lg:top-28">
              What Matters to Us
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:col-span-8">
            {values.map(({ title, text }, i) => (
              <li key={title} className={i % 2 === 1 ? "sm:mt-20" : ""}>
                <span className="text-5xl font-light text-wattle">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft sm:text-base">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/** Large statements that alternate sides, each pointing to the relevant page. */
export function DifferentNeeds() {
  return (
    <section aria-labelledby="needs-heading" className="bg-brand-50 py-20 sm:py-28">
      <Container>
        <h2 id="needs-heading" className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Different Homes, Different Needs
        </h2>
        <ul className="mx-auto mt-14 max-w-5xl space-y-10 sm:space-y-12">
          {needs.map(({ property, need, links }, i) => (
            <li key={property} className={`max-w-2xl ${i % 2 ? "sm:ml-auto sm:text-right" : ""}`}>
              <p className="text-2xl leading-snug tracking-tight text-ink sm:text-[2rem] sm:leading-tight">
                <span className="font-semibold">{property}</span> <span className="text-ink-soft">{need}</span>
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                See{" "}
                {links.map(({ label, path }, j) => (
                  <span key={path}>
                    {j > 0 && " or "}
                    <MaybeLink path={path}>{label}</MaybeLink>
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Who we serve, set like a list of credits with dotted leaders. */
export function WhoWeServe() {
  return (
    <section aria-labelledby="serve-heading" className="py-20 sm:py-28">
      <Container className="max-w-4xl">
        <h2 id="serve-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Who We Serve
        </h2>
        <dl className="mt-10">
          {audiences.map(({ who, what }) => (
            <div key={who} className="flex flex-col gap-1 border-b border-line py-5 sm:flex-row sm:items-baseline sm:gap-4">
              <dt className="shrink-0 text-lg font-semibold text-ink sm:text-xl">{who}</dt>
              <span aria-hidden="true" className="hidden min-w-8 flex-1 border-b-2 border-dotted border-ink/20 sm:block" />
              <dd className="text-[15px] text-ink-soft sm:shrink-0 sm:text-right sm:text-base">{what}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export function MelbourneFocus() {
  return (
    <section aria-labelledby="melbourne-heading" className="bg-cream pt-20 sm:pt-28">
      <Container className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <h2 id="melbourne-heading" className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.12]">
          Cleaning services for Melbourne properties.
        </h2>
        <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
          This business is built for customers across Melbourne and the surrounding areas: city apartments in
          the {suburbs[0]}, homes in {suburbs[1]}, {suburbs[3]} and {suburbs[5]}, and further out to{" "}
          {suburbs[6]}, {suburbs[7]}, {suburbs[8]} and {suburbs[9]}. If you&apos;re not sure whether we cover
          your suburb, just ask.
        </p>
      </Container>
      <Image
        src={images.melbourne.src}
        width={images.melbourne.width}
        height={images.melbourne.height}
        alt={images.melbourne.alt}
        loading="lazy"
        sizes="100vw"
        className="mt-14 h-auto min-h-[180px] w-full object-cover"
      />
    </section>
  );
}

/** Customer journey as a centred vertical timeline. */
export function CustomerJourney() {
  return (
    <section aria-labelledby="journey-heading" className="py-20 sm:py-28">
      <Container className="max-w-5xl">
        <h2 id="journey-heading" className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          How We Work With You
        </h2>
        <ol className="relative mt-14">
          <span aria-hidden="true" className="absolute bottom-2 left-[15px] top-2 w-px bg-brand/25 md:left-1/2" />
          {journey.map(({ title, text }, i) => {
            const right = i % 2 === 1;
            return (
              <li key={title} className="relative grid grid-cols-1 pb-12 pl-12 last:pb-0 md:grid-cols-2 md:gap-16 md:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-semibold text-brand ring-2 ring-brand md:left-1/2 md:-translate-x-1/2"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={right ? "md:col-start-2" : "md:text-right"}>
                  <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

/** Expectations written as a short signed note. */
export function Expectations() {
  return (
    <section aria-labelledby="expect-heading" className="bg-[#f1f5f3] py-20 sm:py-28">
      <Container className="max-w-3xl">
        <div className="relative rounded-md bg-white p-7 shadow-lift sm:p-12">
          <span aria-hidden="true" className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[-2deg] bg-wattle/70" />
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-soft">A note from us</p>
          <h2 id="expect-heading" className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Clear expectations matter.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            We&apos;d rather be upfront than overpromise. A few things are worth knowing before you book:
          </p>
          <ul className="mt-6 space-y-3 text-base leading-relaxed text-ink">
            {expectations.map((e) => (
              <li key={e} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {e}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg italic text-ink">&mdash; The {siteConfig.name} team</p>
        </div>
      </Container>
    </section>
  );
}

export function ServicesBand() {
  return (
    <section aria-labelledby="services-band-heading" className="bg-brand py-16 text-white sm:py-20">
      <Container className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_auto] lg:items-center lg:gap-16">
        <div>
          <h2 id="services-band-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Looking for a specific cleaning service?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            We offer different cleaning options for residential and commercial properties, each explained on its
            own page.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href="/services/"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 font-semibold text-brand transition hover:bg-wattle hover:text-ink"
          >
            Explore Cleaning Services
            <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <ButtonLink href={quoteHref} variant="ghost-light" size="lg">
            Get a Quote
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function AboutCTA() {
  const { phone, email } = siteConfig.contact;
  return (
    <section id="quote" aria-labelledby="about-cta-heading" className="bg-cream py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
        <div className="mx-auto w-40 overflow-hidden rounded-t-[999px] rounded-b-2xl sm:w-52 lg:mx-0" aria-hidden="true">
          <Image
            src={images.doorway.src}
            width={images.doorway.width}
            height={images.doorway.height}
            alt=""
            loading="lazy"
            sizes="208px"
            className="aspect-[3/4] h-auto w-full object-cover"
          />
        </div>
        <div className="text-center lg:text-left">
          <h2 id="about-cta-heading" className="text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Let&apos;s Talk About Your Cleaning Needs
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg lg:mx-0">
            Tell us a little about your property and what you&apos;d like done. There&apos;s no need to have it all
            worked out; we&apos;re happy to talk it through and send you a clear quote.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <ButtonLink href={quoteMailHref} size="lg">
              Get a Cleaning Quote
            </ButtonLink>
            <ButtonLink href="/services/" variant="secondary" size="lg">
              View Our Services
            </ButtonLink>
          </div>
          <div className="mt-8 flex flex-col items-center gap-3 text-[15px] text-ink-soft sm:flex-row sm:justify-center sm:gap-8 lg:justify-start">
            <a href={email.href} className="inline-flex items-center gap-2 hover:text-brand">
              <Mail className="h-4 w-4 text-brand" aria-hidden="true" /> {email.display}
            </a>
            <a href={phone.href} className="inline-flex items-center gap-2 hover:text-brand">
              <Phone className="h-4 w-4 text-brand" aria-hidden="true" /> {phone.display}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
