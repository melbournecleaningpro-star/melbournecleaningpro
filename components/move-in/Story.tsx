import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { cleanSlate, images, roomRows } from "@/lib/move-in";
import { quoteHref } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";

const stages = ["Empty home", "Clean space", "Ready to move in"];

export function MoveInHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section
      aria-labelledby="movein-hero-heading"
      className="relative overflow-hidden bg-white [background-image:linear-gradient(to_right,rgb(16_39_47/0.045)_1px,transparent_1px)] [background-size:96px_100%]"
    >
      <Container className="pb-16 pt-6 sm:pb-24 sm:pt-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-10 grid grid-cols-1 items-end gap-12 lg:mt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="lg:pb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Move-In Cleaning Melbourne</p>
            <h1
              id="movein-hero-heading"
              className="mt-5 text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4rem]"
            >
              Move-In Cleaning Services in Melbourne
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Start fresh in your new home. We clean the property before your belongings arrive, so you unpack
              into clean rooms instead of cleaning around boxes and furniture.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={quoteHref} size="lg" className="sm:whitespace-nowrap">
                Get a Move-In Cleaning Quote
              </ButtonLink>
              <ButtonLink href="#included" variant="secondary" size="lg" className="sm:whitespace-nowrap">
                See What&apos;s Included
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>

            <p className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-ink-soft" aria-label="Empty home, then clean space, then ready to move in">
              {stages.map((s, i) => (
                <span key={s} className="flex items-center gap-3">
                  <span className={i === stages.length - 1 ? "font-semibold text-brand" : ""}>{s}</span>
                  {i < stages.length - 1 && <ArrowRight className="h-4 w-4 text-wattle-dark" aria-hidden="true" />}
                </span>
              ))}
            </p>
          </div>

          {/* Arched "doorway" frame: stepping into the new home */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <span aria-hidden="true" className="absolute -right-3 -top-3 bottom-3 left-3 rounded-t-full border-2 border-brand/25" />
            <div className="relative overflow-hidden rounded-t-full bg-brand-50">
              <Image
                src={images.emptyHome.src}
                width={images.emptyHome.width}
                height={images.emptyHome.height}
                alt={images.emptyHome.alt}
                priority
                sizes="(min-width: 1024px) 520px, 90vw"
                className="aspect-[4/5] h-auto w-full object-cover object-[35%_50%]"
              />
            </div>
            <p className="relative -mt-5 ml-6 inline-block rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Before you unpack
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CleanSlate() {
  return (
    <section aria-labelledby="slate-heading" className="border-t border-line py-20 sm:py-28">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-wattle-dark">Start with a clean slate</p>
        <h2
          id="slate-heading"
          className="mx-auto mt-5 max-w-4xl text-center text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl"
        >
          A cleaner home before you unpack.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-ink-soft sm:text-lg">
          Moving day is hectic. Once furniture and boxes are in, cleaning gets harder and usually gets put off.
          Cleaning first makes the most of an empty property.
        </p>

        <div className="mt-14 overflow-hidden border border-line">
          <Image
            src={images.emptyHome.src}
            width={images.emptyHome.width}
            height={images.emptyHome.height}
            alt="Wide view of an empty, light-filled living room before furniture arrives"
            loading="lazy"
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="aspect-[16/9] h-auto w-full object-cover lg:aspect-[21/8]"
          />
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {cleanSlate.map(({ title, text }, i) => (
            <li key={title} className={`${i > 0 ? "lg:border-l lg:border-line" : ""} lg:px-6 lg:first:pl-0 lg:last:pr-0`}>
              <h3 className="font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-ink-soft">
          This is a thorough clean of the property. It isn&apos;t a sanitisation or sterilisation service.
        </p>
      </Container>
    </section>
  );
}

export function RoomRows() {
  return (
    <section id="included" aria-labelledby="included-heading" className="bg-[#f6f7f5] py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="included-heading" className="max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What We Clean Before You Move In
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
            Room by room, before a single box is opened. The exact scope is agreed with you.
          </p>
        </div>

        <ol className="mt-12 border-b border-ink/15">
          {roomRows.map(({ name, items, note, image }, i) => (
            <li
              key={name}
              className="grid grid-cols-1 gap-5 border-t border-ink/15 py-8 md:grid-cols-[13rem_1fr] lg:grid-cols-[15rem_1fr_15rem] lg:gap-10 lg:py-10"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Room {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{name}</h3>
              </div>
              <div>
                <ul className="flex flex-wrap gap-x-5 gap-y-2.5 text-[15px] text-ink">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rotate-45 bg-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm italic text-ink-soft">{note}</p>
              </div>
              <div className="hidden lg:block">
                {image ? (
                  <div className="overflow-hidden rounded-t-[4rem] border border-line">
                    <Image
                      src={image.src}
                      width={image.width}
                      height={image.height}
                      alt={image.alt}
                      loading="lazy"
                      sizes="240px"
                      className="aspect-[4/3] h-auto w-full object-cover"
                    />
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
