"use client";

import { useState } from "react";
import { Bath, BedDouble, Check, CookingPot, Sofa, type LucideIcon } from "lucide-react";
import type { Room } from "@/lib/house-cleaning";

const icons: Record<string, LucideIcon> = { kitchen: CookingPot, bathroom: Bath, bedroom: BedDouble, living: Sofa };
/** Where each room sits on the plan (CSS grid areas). */
const areas: Record<string, string> = {
  kitchen: "[grid-area:kitchen]",
  living: "[grid-area:living]",
  bathroom: "[grid-area:bathroom]",
  bedroom: "[grid-area:bedroom]",
};

/**
 * A simple home floor plan: each room is a real button that shows its details.
 * Every room's details are rendered in the HTML (inactive ones are hidden), so
 * the content is available without JavaScript to crawlers and assistive tech.
 */
export function FloorPlan({ rooms }: { rooms: Room[] }) {
  const [active, setActive] = useState(rooms[0].id);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-12">
      <div
        role="group"
        aria-label="Choose a room"
        className="grid aspect-[5/4] gap-[6px] rounded-2xl bg-ink p-[6px] [grid-template-areas:'kitchen_living_living'_'bathroom_bedroom_bedroom'] [grid-template-columns:1fr_1fr_1fr] [grid-template-rows:1fr_1fr] sm:aspect-[16/10]"
      >
        {rooms.map((r) => {
          const Icon = icons[r.id];
          const on = active === r.id;
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => setActive(r.id)}
              aria-pressed={on}
              aria-controls={`room-panel-${r.id}`}
              className={`${areas[r.id]} relative flex flex-col items-start justify-between rounded-[10px] p-3 text-left transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-wattle sm:p-5 ${
                on ? "bg-wattle text-ink" : "bg-[#f7f1e6] text-ink hover:bg-white"
              }`}
            >
              <Icon className={`h-6 w-6 sm:h-8 sm:w-8 ${on ? "text-ink" : "text-brand"}`} aria-hidden="true" />
              <span className="text-sm font-semibold sm:text-lg">{r.name}</span>
              {on && (
                <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-ink text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  <span className="sr-only">(showing)</span>
                </span>
              )}
              {/* doorway through to the next room (left-hand rooms only, so the outer wall stays closed) */}
              {(r.id === "kitchen" || r.id === "bathroom") && (
                <span aria-hidden="true" className="absolute -right-[6px] bottom-6 h-10 w-[6px] bg-[#e2cba5]" />
              )}
            </button>
          );
        })}
      </div>

      <div>
        {rooms.map((r) => (
          <div key={r.id} id={`room-panel-${r.id}`} hidden={active !== r.id} className="rounded-2xl bg-white p-6 ring-1 ring-line sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-ink">{r.name}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft sm:text-base">{r.intro}</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">Common areas of attention</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {r.areas.map((a) => (
                <li key={a} className="rounded-full bg-[#f7f1e6] px-3.5 py-1.5 text-sm font-medium text-ink">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          Not every task is part of every booking. The exact scope depends on the service you request and what we agree
          with you.
        </p>
      </div>
    </div>
  );
}
