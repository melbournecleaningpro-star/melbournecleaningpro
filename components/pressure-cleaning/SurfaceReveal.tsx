"use client";

import { useId, useState } from "react";
import { concrete, grime } from "./textures";

/**
 * Drag (or use arrow keys) to compare a weathered and a cleaned concrete
 * surface. It's an illustration drawn in CSS, not a photo of a real job.
 */
export function SurfaceReveal() {
  const [pos, setPos] = useState(55);
  const id = useId();

  return (
    <figure className="w-full">
      <div className={`relative aspect-[4/3] overflow-hidden rounded-[1.5rem] ring-1 ring-black/10 sm:aspect-[5/4] ${concrete}`}>
        {/* weathered side, clipped to the left of the handle */}
        <div aria-hidden="true" className={`absolute inset-0 ${grime}`} style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
        {/* water line at the boundary */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-[#8fd3ee] shadow-[0_0_24px_6px_rgb(143_211_238/0.7)]" style={{ left: `${pos}%` }} />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1f5f7a] shadow-lift"
          style={{ left: `${pos}%` }}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white">Weathered</span>
        <span className="absolute right-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-ink">Cleaned</span>
        <label htmlFor={id} className="sr-only">
          Compare weathered and cleaned concrete: move the slider to reveal more of either side
        </label>
        <input
          id={id}
          type="range"
          min={5}
          max={95}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 focus-visible:opacity-0"
        />
      </div>
      <figcaption className="mt-3 text-xs text-[#aab3b1]">
        Illustration only, drawn to show the idea, not a real job. Drag or use arrow keys to compare.
      </figcaption>
    </figure>
  );
}
