import Image from "next/image";
import { Check } from "lucide-react";
import { homeMap, images, overlooked, resetWords, roomStories, seasonalUses } from "@/lib/spring-cleaning";
import { quoteHref } from "@/lib/site";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { ButtonLink, Container } from "../ui";
import { HomeMap } from "./HomeMap";

const roman = ["i", "ii", "iii", "iv", "v", "vi"];

export function SpringHero({ breadcrumbs }: { breadcrumbs: Crumb[] }) {
  return (
    <section aria-labelledby="spring-hero-heading" className="bg-[#fbfbf3]">
      <Container className="pb-16 pt-6 sm:pt-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Magazine-cover image leads, title sits beneath it */}
        <figure className="relative mt-6 overflow-hidden rounded-[2rem]">
          <Image
            src={images.living.src}
            width={images.living.width}
            height={images.living.height}
            alt={images.living.alt}
            priority
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="aspect-[4/3] h-auto w-full object-cover sm:aspect-[16/8] lg:aspect-[21/8]"
          />
          <figcaption className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink sm:left-6 sm:top-6">
            The seasonal reset &middot; Spring
          </figcaption>
        </figure>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16">
          <h1
            id="spring-hero-heading"
            className="text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.4rem]"
          >
            Spring Cleaning Services in <span className="text-brand">Melbourne</span>
          </h1>
          <div className="lg:pb-2">
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              Give your home a thorough seasonal refresh. We clean every room and spend extra time on the areas
              that routine cleaning often moves past, so you start the season in a cleaner-feeling home.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={quoteHref} size="lg" className="sm:whitespace-nowrap">
                Get a Spring Cleaning Quote
              </ButtonLink>
              <ButtonLink href="#checklist" variant="secondary" size="lg" className="sm:whitespace-nowrap">
                Explore the Cleaning Checklist
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Refresh → Declutter → Detail → Reset ribbon */}
        <ol className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink/15 pt-8 lg:grid-cols-4">
          {resetWords.map(({ word, line }, i) => (
            <li key={word}>
              <p className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {word}
                <sup className="ml-1 text-xs font-semibold text-wattle-dark">0{i + 1}</sup>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{line}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function SeasonalReset() {
  return (
    <section aria-labelledby="reset-heading" className="py-20 sm:py-28">
      <Container>
        <h2
          id="reset-heading"
          className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-[3.4rem]"
        >
          A fresh season is a good reason to reset your home.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          After a Melbourne winter of closed windows and indoor living, spring is a natural point to catch up on
          the cleaning that builds up quietly. It isn&apos;t a different technique, just a planned whole-home
          refresh with time set aside for detail.
        </p>
        <ol className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {seasonalUses.map(({ title, text }, i) => (
            <li key={title} className="border-t border-ink/15 pt-5">
              <span className="text-3xl font-light italic text-brand/60">{roman[i]}.</span>
              <h3 className="mt-2 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function SpringMap() {
  return (
    <section aria-labelledby="map-heading" className="bg-[#eef6ea] py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">The spring cleaning map</p>
          <h2 id="map-heading" className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Walk Through Your Home, Room by Room
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Each part of the home has its own spring priorities. Heavy furniture isn&apos;t moved, and we clean
            the areas that can be safely reached.
          </p>
        </div>
        <div className="mt-12">
          <HomeMap rooms={homeMap} />
        </div>
      </Container>
    </section>
  );
}

export function OverlookedList() {
  return (
    <section aria-labelledby="forget-heading" className="py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 id="forget-heading" className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.75rem] sm:leading-[1.1]">
            The areas that are easy to forget
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            These are the spots that slip through a routine clean and show up in the spring light. The exact
            scope depends on what&apos;s accessible and what we agree with you.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
          {overlooked.map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg font-medium leading-snug text-ink">
              <Check className="mt-1 h-5 w-5 shrink-0 text-brand" strokeWidth={3} aria-hidden="true" />
              {/* highlighter-pen swipe */}
              <span className="min-w-0">
                <span className="bg-[linear-gradient(transparent_55%,rgb(244_182_63/0.35)_55%)] px-0.5 [box-decoration-break:clone]">{item}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function RoomStories() {
  return (
    <section aria-labelledby="stories-heading" className="bg-[#fbfbf3] py-20 sm:py-28">
      <Container>
        <h2 id="stories-heading" className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Refresh by Room
        </h2>
        <div className="mt-16 space-y-20 lg:space-y-28">
          {roomStories.map(({ title, lede, items, image }, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={title} className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <div className={flip ? "lg:order-2" : ""}>
                  <div className="overflow-hidden rounded-[2rem]">
                    <Image
                      src={image.src}
                      width={image.width}
                      height={image.height}
                      alt={image.alt}
                      loading="lazy"
                      sizes="(min-width: 1024px) 600px, 100vw"
                      className="aspect-[4/3] h-auto w-full object-cover"
                    />
                  </div>
                </div>
                <div className={flip ? "lg:order-1" : ""}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wattle-dark">
                    Chapter {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{lede}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[15px] text-ink">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#f2b8c6]" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
