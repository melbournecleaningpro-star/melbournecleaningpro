"use client";

import { useState } from "react";
import { ovenParts, type OvenPartId } from "@/lib/oven-cleaning";

const HOT = "#f4b63f";

/**
 * Oven cutaway: choosing a part highlights it on the diagram. All part
 * descriptions are rendered in the HTML (inactive ones hidden) so nothing
 * depends on JavaScript to be read.
 */
export function OvenAnatomy() {
  const [active, setActive] = useState<OvenPartId>("interior");
  const on = (id: OvenPartId) => active === id;
  const dim = (id: OvenPartId) => (on(id) ? 1 : 0.35);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12">
      <svg viewBox="0 0 520 400" className="h-auto w-full" role="img" aria-labelledby="oven-cutaway-title">
        <title id="oven-cutaway-title">{`Cutaway diagram of an oven with the ${ovenParts.find((p) => p.id === active)?.name.toLowerCase()} highlighted`}</title>
        <defs>
          <pattern id="oven-grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M16 0H0v16" fill="none" stroke="#1b3139" strokeWidth="1" />
          </pattern>
        </defs>
        {/* accessible outer surfaces: body + control strip */}
        <g opacity={dim("surfaces")}>
          <rect x="40" y="16" width="440" height="300" rx="14" fill="#cfd6d8" stroke={on("surfaces") ? HOT : "none"} strokeWidth="5" />
          <rect x="40" y="16" width="440" height="50" rx="14" fill="#10272f" />
          <circle cx="88" cy="41" r="12" fill="#cfd6d8" />
          <circle cx="432" cy="41" r="12" fill="#cfd6d8" />
          <rect x="220" y="30" width="80" height="22" rx="4" fill="#1b3139" />
        </g>
        {/* interior cavity */}
        <g opacity={dim("interior")}>
          <rect x="76" y="84" width="368" height="214" rx="8" fill="#10272f" stroke={on("interior") ? HOT : "none"} strokeWidth="5" />
          <rect x="76" y="84" width="368" height="214" rx="8" fill="url(#oven-grid)" />
        </g>
        {/* racks */}
        <g opacity={dim("racks")} stroke={on("racks") ? HOT : "#9aa6a8"} strokeWidth="4" strokeLinecap="round">
          <path d="M92 164h336M92 234h336" />
          {[120, 160, 200, 240, 280, 320, 360, 400].map((x) => (
            <path key={x} d={`M${x} 158v12M${x} 228v12`} strokeWidth="2.5" />
          ))}
        </g>
        {/* tray on the lower rack */}
        <g opacity={dim("trays")}>
          <path d="M110 222h300l-14 12H124Z" fill={on("trays") ? HOT : "#6f7c7e"} />
        </g>
        {/* door, dropped open, with its glass */}
        <g opacity={dim("glass")}>
          <path d="M40 318h440l30 70H10Z" fill="#dfe4e5" />
          <path d="M84 328h352l20 50H64Z" fill={on("glass") ? "#fbe3a6" : "#2a3a40"} stroke={on("glass") ? HOT : "none"} strokeWidth="4" />
        </g>
      </svg>

      <div>
        <div role="group" aria-label="Oven parts" className="flex flex-wrap gap-2">
          {ovenParts.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(p.id)}
              aria-pressed={on(p.id)}
              aria-controls={`oven-part-${p.id}`}
              className={`rounded-lg border px-3.5 py-2 font-mono text-sm transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-wattle/50 ${
                on(p.id) ? "border-ink bg-ink text-wattle" : "border-ink/15 bg-white text-ink hover:border-ink/40"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
        {ovenParts.map((p, i) => (
          <div key={p.id} id={`oven-part-${p.id}`} hidden={!on(p.id)} className="mt-6 border-l-4 border-wattle pl-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">Part {String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-ink">{p.name}</h3>
            <p className="mt-2 text-base leading-relaxed text-ink-soft">{p.text}</p>
          </div>
        ))}
        <p className="mt-8 text-sm leading-relaxed text-ink-soft">
          Not every part is included in every oven clean. The scope depends on the appliance, its condition and what we
          agree with you.
        </p>
      </div>
    </div>
  );
}
