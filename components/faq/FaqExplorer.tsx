"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  CalendarCheck,
  ChevronDown,
  ClipboardList,
  HelpCircle,
  Home,
  KeyRound,
  Receipt,
  Search,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import { allFaqs, faqCategories } from "@/lib/faq";
import { isLiveRoute } from "@/lib/site";
import { Container } from "../ui";

const icons: Record<string, LucideIcon> = {
  general: HelpCircle,
  booking: CalendarCheck,
  pricing: Receipt,
  preparing: ClipboardList,
  house: Home,
  deep: Sparkles,
  "end-of-lease": KeyRound,
  commercial: Briefcase,
  other: Sparkles,
};

const normalise = (s: string) => s.toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9\s]/g, " ");

/**
 * Client-side only: filters the questions already on the page. It never
 * changes the URL or creates new content. Without JavaScript every question is
 * still rendered, and the native <details> accordions still open and close.
 */
export function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(faqCategories[0].id);
  const chipsRef = useRef<HTMLUListElement>(null);

  const terms = useMemo(() => normalise(query).split(/\s+/).filter((t) => t.length > 1), [query]);
  const searching = terms.length > 0;

  const filtered = useMemo(
    () =>
      faqCategories
        .map((c) => ({
          ...c,
          items: searching ? c.items.filter((i) => terms.every((t) => normalise(`${i.q} ${i.a} ${c.title}`).includes(t))) : c.items,
        }))
        .filter((c) => c.items.length > 0),
    [terms, searching],
  );
  const matchCount = filtered.reduce((n, c) => n + c.items.length, 0);

  // Highlight the category currently in view.
  useEffect(() => {
    const sections = faqCategories.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [filtered]);

  // Keep the active chip visible in the horizontally scrolling rail (small screens).
  useEffect(() => {
    const rail = chipsRef.current;
    const el = rail?.querySelector<HTMLElement>('a[aria-current="true"]');
    if (rail && el && rail.scrollWidth > rail.clientWidth) {
      rail.scrollTo({ left: el.offsetLeft - rail.clientWidth / 2 + el.offsetWidth / 2, behavior: "smooth" });
    }
  }, [active]);

  const chip = (id: string) =>
    `whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25 ${
      active === id ? "bg-ink text-white" : "bg-white text-ink ring-1 ring-line hover:ring-brand"
    }`;

  return (
    <>
      {/* search, overlapping the bottom of the hero */}
      <div className="relative z-10 -mt-8 sm:-mt-9">
        <Container className="max-w-3xl">
          <div role="search" className="rounded-2xl bg-white p-2 shadow-lift ring-1 ring-line">
            <label htmlFor="faq-search" className="sr-only">
              Search the frequently asked questions
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft" aria-hidden="true" />
              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What would you like to know?"
                autoComplete="off"
                aria-describedby="faq-search-status"
                className="block w-full rounded-xl border-0 bg-transparent py-4 pl-12 pr-12 text-base text-ink placeholder:text-ink-soft/70 focus:outline-none focus:ring-4 focus:ring-brand/15 [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-ink-soft hover:bg-brand-50 hover:text-brand focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">Clear search</span>
                </button>
              )}
            </div>
          </div>
          <p id="faq-search-status" aria-live="polite" className="mt-3 text-center text-sm text-ink-soft">
            {searching
              ? matchCount === 0
                ? "No questions match that search."
                : `Showing ${matchCount} of ${allFaqs.length} questions`
              : `${allFaqs.length} questions in ${faqCategories.length} topics`}
          </p>
        </Container>
      </div>

      <Container className="max-w-6xl pb-20 pt-10 sm:pb-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-14">
          {/* categories: sticky chip rail on small screens, sticky side list on desktop */}
          <nav aria-label="FAQ topics" className="sticky top-[72px] z-20 -mx-5 bg-cream/95 px-5 py-3 backdrop-blur-md sm:-mx-6 sm:px-6 lg:top-24 lg:mx-0 lg:self-start lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
            <ul ref={chipsRef} className="relative flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
              {filtered.map((c) => (
                <li key={c.id} className="shrink-0">
                  <a href={`#${c.id}`} className={chip(c.id)} aria-current={active === c.id ? "true" : undefined}>
                    {c.short}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:block">
              <p className="px-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">Topics</p>
              <ul className="mt-3 space-y-0.5 border-l border-line">
                {filtered.map((c) => {
                  const Icon = icons[c.id] ?? HelpCircle;
                  const on = active === c.id;
                  return (
                    <li key={c.id}>
                      <a
                        href={`#${c.id}`}
                        aria-current={on ? "true" : undefined}
                        className={`-ml-px flex items-center gap-2.5 border-l-2 py-2 pl-4 pr-2 text-sm transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25 ${
                          on ? "border-brand font-semibold text-ink" : "border-transparent text-ink-soft hover:border-ink/30 hover:text-ink"
                        }`}
                      >
                        <Icon className={`h-4 w-4 shrink-0 ${on ? "text-brand" : "text-ink-soft/70"}`} aria-hidden="true" />
                        <span className="min-w-0 flex-1">{c.short}</span>
                        <span className="text-xs tabular-nums text-ink-soft/70">{c.items.length}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          <div className="min-w-0">
            {matchCount === 0 && (
              <div className="rounded-2xl border border-dashed border-ink/20 bg-white p-8 text-center">
                <p className="text-lg font-semibold text-ink">We couldn&apos;t find that one.</p>
                <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-ink-soft">
                  Try a different word, or{" "}
                  <a href="/contact/" className="font-semibold text-brand underline underline-offset-4">
                    ask us directly
                  </a>
                  . We&apos;re happy to help.
                </p>
                <button type="button" onClick={() => setQuery("")} className="mt-5 rounded-full px-5 py-2.5 text-sm font-semibold text-brand ring-1 ring-inset ring-brand/30 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25">
                  Show all questions
                </button>
              </div>
            )}

            <div className="space-y-14">
              {filtered.map((c) => {
                const Icon = icons[c.id] ?? HelpCircle;
                return (
                  <section key={c.id} id={c.id} aria-labelledby={`${c.id}-heading`} className="scroll-mt-40 lg:scroll-mt-28">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h2 id={`${c.id}-heading`} className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                          {c.title}
                        </h2>
                        <p className="text-sm text-ink-soft">{c.intro}</p>
                      </div>
                    </div>
                    <div className="mt-5 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
                      {c.items.map((item) => {
                        const links = (item.links ?? []).filter((l) => isLiveRoute(l.path));
                        return (
                          <details key={item.q} open={searching ? true : undefined} className="group">
                            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-left transition hover:bg-cream/60 focus-visible:bg-brand-50 focus-visible:outline-none sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                              <h3 className="text-base font-semibold leading-snug text-ink sm:text-[17px]">{item.q}</h3>
                              <ChevronDown
                                className="mt-0.5 h-5 w-5 shrink-0 text-ink-soft transition-transform duration-200 group-open:rotate-180 group-open:text-brand motion-reduce:transition-none"
                                aria-hidden="true"
                              />
                            </summary>
                            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                              <p className="max-w-[65ch] text-[15px] leading-relaxed text-ink-soft sm:text-base">{item.a}</p>
                              {links.length > 0 && (
                                <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                                  {links.map((l) => (
                                    <a key={l.path} href={l.path} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark">
                                      {l.label} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                                    </a>
                                  ))}
                                </p>
                              )}
                            </div>
                          </details>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
