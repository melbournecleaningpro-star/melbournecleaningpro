"use client";

import { useState } from "react";
import { blindTypes, type BlindTypeId } from "@/lib/blind-cleaning";

function BlindPreview({ id }: { id: BlindTypeId }) {
  return (
    <svg viewBox="0 0 200 220" aria-hidden="true" className="h-auto w-full max-w-[16rem]">
      <rect x="10" y="10" width="180" height="200" fill="#fff6dc" />
      {id === "venetian" && (
        <>
          <rect x="6" y="6" width="188" height="10" rx="2" fill="#10272f" />
          {Array.from({ length: 14 }, (_, i) => (
            <rect key={i} x="14" y={22 + i * 13} width="172" height="8" rx="2" fill="#d9dfdd" />
          ))}
          <path d="M60 16v186M140 16v186" stroke="#8a9795" strokeWidth="1.2" />
        </>
      )}
      {id === "vertical" && (
        <>
          <rect x="6" y="6" width="188" height="10" rx="2" fill="#10272f" />
          {Array.from({ length: 9 }, (_, i) => (
            <rect key={i} x={14 + i * 20} y="18" width="14" height="190" rx="2" fill="#d9dfdd" />
          ))}
        </>
      )}
      {id === "roller" && (
        <>
          <rect x="6" y="6" width="188" height="16" rx="8" fill="#10272f" />
          <rect x="14" y="22" width="172" height="130" fill="#cfe0dc" />
          <rect x="12" y="150" width="176" height="8" rx="3" fill="#8a9795" />
          <path d="M180 158v30" stroke="#8a9795" strokeWidth="2" />
          <circle cx="180" cy="192" r="4" fill="#8a9795" />
        </>
      )}
      {id === "other" && (
        <>
          <rect x="6" y="6" width="188" height="10" rx="2" fill="#10272f" />
          {Array.from({ length: 6 }, (_, i) => (
            <path key={i} d={`M14 ${24 + i * 26}h172v12c-30 10-142 10-172 0Z`} fill="#e3dccd" />
          ))}
        </>
      )}
    </svg>
  );
}

/** Choose a blind type to see a preview. All descriptions are in the HTML. */
export function BlindSelector() {
  const [active, setActive] = useState<BlindTypeId>("venetian");
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
      <div className="flex justify-center rounded-3xl bg-ink p-8 sm:p-10">
        <BlindPreview id={active} />
      </div>
      <div>
        <div role="group" aria-label="Blind types" className="grid grid-cols-2 gap-2">
          {blindTypes.map((b) => {
            const on = active === b.id;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => setActive(b.id)}
                aria-pressed={on}
                aria-controls={`blind-type-${b.id}`}
                className={`border-l-4 px-4 py-3 text-left text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-wattle/50 ${
                  on ? "border-wattle bg-ink text-white" : "border-ink/15 bg-white text-ink hover:border-ink/40"
                }`}
              >
                {b.name}
              </button>
            );
          })}
        </div>
        {blindTypes.map((b) => (
          <div key={b.id} id={`blind-type-${b.id}`} hidden={active !== b.id} className="mt-7">
            <h3 className="text-2xl font-semibold tracking-tight text-ink">{b.name}</h3>
            <p className="mt-2 text-base leading-relaxed text-ink-soft">{b.text}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink">{b.note}</p>
          </div>
        ))}
        <p className="mt-7 text-sm leading-relaxed text-ink-soft">
          Not every blind or material is suitable for cleaning. It depends on the material, how it&apos;s made and its
          condition.
        </p>
      </div>
    </div>
  );
}
