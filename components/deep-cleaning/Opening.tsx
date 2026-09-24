import Image from "next/image";
import { Phone } from "lucide-react";
import { images, scenarios } from "@/lib/deep-cleaning";
import { siteConfig } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";

const dulled = "[filter:grayscale(0.55)_sepia(0.35)_brightness(0.82)_contrast(0.9)]";

export function DeepHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  const img = images.home;
  return (
    <section aria-labelledby="deep-hero-heading" className="bg-cream">
      <Container className="pb-12 pt-6 sm:pt-8 lg:pb-16">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-brand">
              <span className="h-px w-10 bg-brand" aria-hidden="true" />
              Deep Cleaning Melbourne
            </p>
            <h1
              id="deep-hero-heading"
              className="mt-5 text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.5rem]"
            >
              A Deeper Clean for Melbourne <span className="text-brand">Homes</span>
            </h1>
          </div>

          <div className="lg:col-span-5 lg:pb-2">
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              Deep cleaning is for homes that need more than a routine clean. We give kitchens, bathrooms,
              living areas and bedrooms detailed attention, working on built-up dirt, overlooked areas and
              hard-to-reach surfaces.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#quote" size="lg">
                Get a Deep Cleaning Quote
              </ButtonLink>
              <ButtonLink href={siteConfig.contact.phone.href} variant="secondary" size="lg">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Us
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Diagonal split: the same illustration dulled vs. fresh. A visual concept, not a customer result. */}
        <figure className="relative mt-12 overflow-hidden rounded-[2rem] lg:mt-14">
          <Image
            src={img.src}
            width={img.width}
            height={img.height}
            alt={img.alt}
            priority
            sizes="(min-width: 1280px) 1216px, 100vw"
            className={`aspect-[4/3] h-auto w-full object-cover sm:aspect-[16/8] lg:aspect-[21/9] ${dulled}`}
          />
          <div className="absolute inset-0 [clip-path:polygon(58%_0,100%_0,100%_100%,42%_100%)]" aria-hidden="true">
            <Image
              src={img.src}
              width={img.width}
              height={img.height}
              alt=""
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="aspect-[4/3] h-auto w-full object-cover sm:aspect-[16/8] lg:aspect-[21/9]"
            />
          </div>
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <line x1="58" y1="0" x2="42" y2="100" stroke="#fff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
          </svg>
          <span className="absolute bottom-4 left-4 rounded-full bg-ink/80 px-3.5 py-1.5 text-xs font-semibold text-white sm:bottom-6 sm:left-6 sm:text-sm">
            Overlooked
          </span>
          <span className="absolute bottom-4 right-4 rounded-full bg-wattle px-3.5 py-1.5 text-xs font-semibold text-ink sm:bottom-6 sm:right-6 sm:text-sm">
            Refreshed
          </span>
        </figure>
      </Container>
    </section>
  );
}

const tints = ["bg-white", "bg-brand-50", "bg-wattle/15", "bg-brand-50", "bg-wattle/15", "bg-white"];

export function Scenarios() {
  return (
    <section aria-labelledby="when-heading" className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="when-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.15]">
            When Does Your Home Need a Deep Clean?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            There&apos;s no fixed schedule. A deep clean usually makes sense at moments like these.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {scenarios.map(({ title, text, icon: Icon }, i) => (
            <li
              key={title}
              className={`relative overflow-hidden rounded-[1.75rem] p-7 ring-1 ring-line/80 ${tints[i]}`}
            >
              <Icon
                aria-hidden="true"
                strokeWidth={1}
                className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 text-ink/[0.06]"
              />
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand ring-1 ring-line">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">{title}</h3>
              <p className="relative mt-2 max-w-xs text-[15px] leading-relaxed text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function WhatMakesItDifferent() {
  return (
    <section aria-labelledby="diff-heading" className="border-y border-line bg-white py-20 sm:py-24">
      <Container className="max-w-3xl">
        <h2 id="diff-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          What Makes Deep Cleaning Different?
        </h2>
        <div className="mt-8 space-y-6 text-base leading-[1.8] text-ink-soft sm:text-[17px]">
          <p className="first-letter:float-left first-letter:mr-1 first-letter:mt-1 first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-brand">
            Regular cleaning is maintenance. It keeps a home that&apos;s already in reasonable shape feeling
            fresh: dusting, vacuuming, mopping and wiping down the kitchen and bathroom. It works well week to
            week, but it isn&apos;t designed to deal with what builds up slowly in the background.
          </p>
          <p>
            A deep clean spends more time on detail. Instead of moving quickly across surfaces, the focus is
            on the areas that routine cleaning tends to skim past: grease on the splashback and around the
            cooktop, residue on shower screens and taps, grime in grout lines, dust along skirting boards and
            marks around handles and light switches.
          </p>
        </div>

        <blockquote className="my-10 border-l-4 border-wattle pl-6 text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl">
          Built-up grime doesn&apos;t appear overnight, and it usually takes more than a quick wipe to shift.
        </blockquote>

        <div className="space-y-6 text-base leading-[1.8] text-ink-soft sm:text-[17px]">
          <p>
            That&apos;s why deep cleaning takes additional attention. Overlooked surfaces such as cabinet
            fronts, door frames and accessible areas around furniture can be included, depending on what your
            home needs.
          </p>
          <p>
            The scope varies from property to property. A small apartment might need a focused deep clean of
            the kitchen and bathroom, while a family home might call for every room. Before booking, you can
            tell us your priorities so the time goes where it matters most to you. Deep cleaning improves a
            lot, but it won&apos;t remove every stain or restore surfaces that are damaged or worn.
          </p>
        </div>
      </Container>
    </section>
  );
}
