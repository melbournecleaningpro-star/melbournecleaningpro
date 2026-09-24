"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { Comparison } from "@/lib/deep-cleaning";

/**
 * Before/after slider. The "before" layer is the same image with a dulling
 * filter and grime overlay: an illustrative concept, not a customer result.
 * To use real photos later, give each comparison separate before/after images.
 */
export function BeforeAfter({ items }: { items: Comparison[] }) {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const sliderId = useId();
  const item = items[active];

  return (
    <div>
      <div role="tablist" aria-label="Choose a room" className="flex flex-wrap gap-2">
        {items.map((c, i) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => {
              setActive(i);
              setPos(50);
            }}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              i === active ? "bg-ink text-white" : "bg-white text-ink ring-1 ring-inset ring-line hover:ring-ink/40"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="relative mt-5 overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-line select-none">
        {/* Before (dulled) */}
        <div className="relative">
          <Image
            src={item.image.src}
            width={item.image.width}
            height={item.image.height}
            alt={`Illustration of a ${item.label.toLowerCase()} before a deep clean`}
            sizes="(min-width: 1024px) 900px, 100vw"
            className="h-auto w-full [filter:grayscale(0.55)_sepia(0.35)_brightness(0.82)_contrast(0.9)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_18%_62%,rgb(90_70_40/0.28),transparent_22%),radial-gradient(circle_at_70%_40%,rgb(90_70_40/0.22),transparent_18%),radial-gradient(circle_at_45%_85%,rgb(90_70_40/0.25),transparent_25%),radial-gradient(circle_at_88%_78%,rgb(90_70_40/0.2),transparent_16%)]"
          />
        </div>

        {/* After (clean), revealed from the slider position to the right */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          <Image
            src={item.image.src}
            width={item.image.width}
            height={item.image.height}
            alt={`Illustration of the same ${item.label.toLowerCase()} after a deep clean`}
            sizes="(min-width: 1024px) 900px, 100vw"
            className="h-auto w-full"
          />
        </div>

        {/* Divider + handle */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="absolute inset-y-0 -ml-px w-0.5 bg-white shadow-[0_0_0_1px_rgb(16_39_47/0.15)]" />
          <div className="absolute top-1/2 -ml-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-lift">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6-6 6 6 6M15 6l6 6-6 6" />
            </svg>
          </div>
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white sm:left-4 sm:top-4">
          Overlooked
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-wattle px-3 py-1 text-xs font-semibold text-ink sm:right-4 sm:top-4">
          Refreshed
        </span>

        <label htmlFor={sliderId} className="sr-only">
          Drag to compare before and after for the {item.label.toLowerCase()}
        </label>
        <input
          id={sliderId}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize touch-pan-y opacity-0"
        />
      </div>

      <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{item.note}</p>
    </div>
  );
}
