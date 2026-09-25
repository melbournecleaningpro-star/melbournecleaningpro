"use client";

import { useState } from "react";
import { ArrowRight, Check, StickyNote } from "lucide-react";

/**
 * A lightweight, client-only helper: visitors tick what matters most and get a
 * reminder to mention it in their quote request. Nothing is sent or stored.
 */
export function Priorities({ options, quoteHref }: { options: string[]; quoteHref: string }) {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (o: string) => setPicked((p) => (p.includes(o) ? p.filter((x) => x !== o) : [...p, o]));

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {options.map((o) => {
          const on = picked.includes(o);
          return (
            <li key={o}>
              <button
                type="button"
                onClick={() => toggle(o)}
                aria-pressed={on}
                className={`flex w-full items-center justify-between gap-2 rounded-2xl border-2 px-4 py-4 text-left text-[15px] font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30 sm:py-5 ${
                  on ? "border-brand bg-brand text-white" : "border-ink/10 bg-white text-ink hover:border-brand/50"
                }`}
              >
                {o}
                <span
                  aria-hidden="true"
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${on ? "bg-white text-brand" : "border-2 border-ink/20"}`}
                >
                  {on && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div aria-live="polite" className="relative rounded-2xl bg-[#fff4c9] p-6 shadow-card [transform:rotate(-1deg)] sm:p-7">
        <StickyNote className="h-6 w-6 text-wattle-dark" aria-hidden="true" />
        {picked.length === 0 ? (
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
            Tap the areas that matter most in your home. We&apos;ll turn them into a note you can mention in your quote
            request.
          </p>
        ) : (
          <>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">Your note</p>
            <p className="mt-2 text-lg font-semibold leading-snug text-ink">Please prioritise: {picked.join(", ")}.</p>
            <p className="mt-3 text-sm text-ink-soft">Add this to the notes when you request a quote. Nothing is sent from here.</p>
          </>
        )}
        <a href={quoteHref} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark">
          Request a quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
