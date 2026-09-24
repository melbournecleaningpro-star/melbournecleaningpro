"use client";

import { Check } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import type { Frequency } from "@/lib/office";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

/**
 * Segmented frequency selector (accessible tabs). All panels are rendered into
 * the static HTML and only hidden when inactive, so every option is crawlable.
 */
export function FrequencySelector({ options }: { options: Frequency[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = options.length - 1;
    const map: Record<string, number> = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    };
    if (!(e.key in map)) return;
    e.preventDefault();
    setActive(map[e.key]);
    tabs.current[map[e.key]]?.focus();
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lift ring-1 ring-line">
      <div
        role="tablist"
        aria-label="Cleaning frequency"
        onKeyDown={onKey}
        className="grid grid-cols-2 gap-1 border-b border-line bg-brand-50 p-1.5 sm:grid-cols-4"
      >
        {options.map((o, i) => (
          <button
            key={o.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            id={`freq-tab-${o.id}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`freq-panel-${o.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`rounded-xl px-3 py-3 text-left transition-colors sm:px-4 ${
              i === active ? "bg-white shadow-card ring-1 ring-line" : "hover:bg-white/60"
            }`}
          >
            <span className={`block text-sm font-semibold ${i === active ? "text-brand" : "text-ink"}`}>{o.name}</span>
            <span className="mt-0.5 block text-xs text-ink-soft">{o.short}</span>
          </button>
        ))}
      </div>

      {options.map((o, i) => (
        <div
          key={o.id}
          id={`freq-panel-${o.id}`}
          role="tabpanel"
          aria-labelledby={`freq-tab-${o.id}`}
          hidden={i !== active}
          tabIndex={0}
          className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1.2fr_1fr] md:gap-10"
        >
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-ink">{o.name}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">{o.text}</p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">Often suits</p>
            <ul className="mt-3 space-y-2">
              {o.suits.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-[15px] text-ink">
                  <Check className="h-4 w-4 shrink-0 text-brand" strokeWidth={2.5} aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Illustrative working week */}
          <div aria-hidden="true" className="self-start rounded-xl border border-line p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">Example working week</p>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {days.map((d, di) => {
                const on = o.week ? o.week[di] : null;
                return (
                  <div key={d} className="text-center">
                    <span className="text-[11px] font-medium text-ink-soft">{d}</span>
                    <span
                      className={`mt-1.5 flex h-12 items-end justify-center rounded-lg pb-1.5 ${
                        on === null
                          ? "border-2 border-dashed border-wattle-dark/60 bg-wattle/15"
                          : on
                            ? "bg-brand"
                            : "bg-ink/[0.05]"
                      }`}
                    >
                      {on && <span className="h-1.5 w-1.5 rounded-full bg-wattle" />}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-ink-soft">
              {o.week ? "Example only. Actual days are agreed with you." : "You choose the days and times."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
