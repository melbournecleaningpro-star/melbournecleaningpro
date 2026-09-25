"use client";

import { useState } from "react";
import { surfaces, type TextureId } from "@/lib/pressure-cleaning";
import { grime, marks, textures } from "./textures";

/**
 * Surface selector: pick a surface to see a weathered/cleaned swatch and its
 * cleaning considerations. Every panel is rendered in the HTML.
 */
export function SurfaceInspector() {
  const [active, setActive] = useState<TextureId>("concrete");

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-12">
      <div role="group" aria-label="Choose a surface" className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin] lg:flex-col lg:overflow-visible lg:pb-0">
        {surfaces.map((s) => {
          const on = active === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(s.id)}
              aria-pressed={on}
              aria-controls={`surface-${s.id}`}
              className={`group flex shrink-0 items-center gap-3 rounded-xl border-2 p-2 pr-4 text-left text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8fd3ee]/60 ${
                on ? "border-[#1f5f7a] bg-[#1f5f7a] text-white" : "border-[#d7dad6] bg-white text-ink hover:border-[#1f5f7a]/50"
              }`}
            >
              <span aria-hidden="true" className={`h-9 w-9 shrink-0 rounded-lg ${textures[s.id]}`} />
              <span className="whitespace-nowrap lg:whitespace-normal">{s.name}</span>
            </button>
          );
        })}
      </div>

      <div>
        {surfaces.map((s) => (
          <article key={s.id} id={`surface-${s.id}`} hidden={active !== s.id}>
            <div aria-hidden="true" className={`relative h-48 overflow-hidden rounded-2xl sm:h-60 ${textures[s.id]}`}>
              <div className={`absolute inset-y-0 left-0 w-1/2 ${grime}`} />
              {marks[s.id] && <div className={`absolute inset-y-0 left-0 w-1/2 ${marks[s.id]}`} />}
              <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-[#8fd3ee] shadow-[0_0_18px_4px_rgb(143_211_238/0.6)]" />
              <span className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white">Weathered</span>
              <span className="absolute bottom-3 right-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-ink">Cleaned</span>
            </div>
            <h3 className="mt-6 text-2xl font-bold tracking-tight text-ink">{s.name}</h3>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">{s.summary}</p>
            <h4 className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#1f5f7a]">What we consider</h4>
            <ul className="mt-3 space-y-2.5">
              {s.considerations.map((c) => (
                <li key={c} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                  <span aria-hidden="true" className="mt-2 h-1 w-4 shrink-0 rounded-full bg-[#1f5f7a]" />
                  {c}
                </li>
              ))}
            </ul>
          </article>
        ))}
        <p className="mt-6 text-xs text-ink-soft">Swatches are illustrations of the surface types, not photos of real jobs.</p>
      </div>
    </div>
  );
}
