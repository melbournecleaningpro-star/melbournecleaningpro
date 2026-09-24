"use client";

import { Check, Mail } from "lucide-react";
import { useState } from "react";
import { deepQuoteMailHref } from "@/lib/deep-cleaning";

/** Lets visitors tick priority areas; the quote email is pre-filled with them. */
export function PriorityPicker({ options }: { options: string[] }) {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (o: string) =>
    setSelected((s) => (s.includes(o) ? s.filter((x) => x !== o) : [...s, o]));

  return (
    <div>
      <fieldset>
        <legend className="text-sm font-semibold text-ink">Tap the areas that matter most:</legend>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {options.map((o) => {
            const on = selected.includes(o);
            return (
              <label
                key={o}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand ${
                  on ? "bg-ink text-white" : "bg-white text-ink ring-1 ring-inset ring-line hover:ring-ink/40"
                }`}
              >
                <input type="checkbox" className="sr-only" checked={on} onChange={() => toggle(o)} />
                <span
                  aria-hidden="true"
                  className={`flex h-4 w-4 items-center justify-center rounded-full ${on ? "bg-wattle text-ink" : "ring-1 ring-inset ring-ink/25"}`}
                >
                  {on && <Check className="h-3 w-3" strokeWidth={3} />}
                </span>
                {o}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={deepQuoteMailHref(selected)}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand sm:whitespace-nowrap px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Request a Deep Cleaning Quote
        </a>
        <p className="text-sm text-ink-soft" aria-live="polite">
          {selected.length
            ? `${selected.length} priority area${selected.length > 1 ? "s" : ""} will be added to your email.`
            : "Your selections are added to your quote email."}
        </p>
      </div>
    </div>
  );
}
