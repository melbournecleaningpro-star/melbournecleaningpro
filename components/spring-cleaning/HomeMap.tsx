"use client";

import { Check } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import type { MapRoom } from "@/lib/spring-cleaning";

/** Room rectangles on the house cross-section (SVG viewBox 0 0 400 300). */
const layout: Record<string, { x: number; y: number; w: number; h: number }> = {
  bedrooms: { x: 40, y: 92, w: 160, h: 88 },
  bathrooms: { x: 200, y: 92, w: 90, h: 88 },
  common: { x: 290, y: 92, w: 70, h: 88 },
  kitchen: { x: 40, y: 180, w: 110, h: 100 },
  living: { x: 150, y: 180, w: 140, h: 100 },
  entry: { x: 290, y: 180, w: 70, h: 100 },
};

/**
 * Interactive house cross-section. Each room is a real button (tab); every
 * room's list is rendered into the HTML and only hidden when inactive.
 */
export function HomeMap({ rooms }: { rooms: MapRoom[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = rooms[active];

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = rooms.length - 1;
    const map: Record<string, number> = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowDown: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      ArrowUp: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    };
    if (!(e.key in map)) return;
    e.preventDefault();
    setActive(map[e.key]);
    tabs.current[map[e.key]]?.focus();
  };

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
      <div className="relative mx-auto w-full max-w-xl">
        <svg viewBox="0 0 400 300" className="h-auto w-full" aria-hidden="true">
          {/* roof, walls, ground */}
          <path d="M28 96 200 14 372 96Z" fill="#eaf5e4" stroke="#10272f" strokeWidth="3" strokeLinejoin="round" />
          <rect x="300" y="30" width="22" height="40" fill="#fff" stroke="#10272f" strokeWidth="3" />
          <rect x="40" y="92" width="320" height="188" fill="#fff" stroke="#10272f" strokeWidth="3" />
          <path d="M0 282h400" stroke="#c9a97e" strokeWidth="4" />
          {rooms.map((room, i) => {
            const r = layout[room.id];
            const on = i === active;
            return (
              <rect
                key={room.id}
                x={r.x + 2}
                y={r.y + 2}
                width={r.w - 4}
                height={r.h - 4}
                fill={on ? "#f4b63f" : "#f6fbf4"}
                opacity={on ? 0.9 : 1}
                style={{ transition: "fill 200ms" }}
              />
            );
          })}
          {/* internal walls + floor line */}
          <path d="M40 180h320M200 92v88M290 92v188M150 180v100" stroke="#10272f" strokeWidth="2.5" />
          {/* stairs rising from the entry to the upstairs hall */}
          <path d="M294 178h10v14h10v14h10v14h10v14" fill="none" stroke="#10272f" strokeWidth="2" opacity=".45" />
          {/* windows + front door */}
          <g fill="#d4ecf2" stroke="#10272f" strokeWidth="2">
            <rect x="70" y="112" width="44" height="30" /><rect x="230" y="112" width="30" height="26" />
            <rect x="60" y="204" width="40" height="30" /><rect x="186" y="200" width="68" height="36" />
          </g>
          <rect x="330" y="226" width="22" height="54" fill="#bfe0d6" stroke="#10272f" strokeWidth="2" />
          {/* blossom tree */}
          <path d="M380 282v-60" stroke="#7a5a3c" strokeWidth="5" />
          <g fill="#f2b8c6"><circle cx="380" cy="214" r="16" /><circle cx="366" cy="226" r="10" /><circle cx="394" cy="228" r="10" /></g>
          <g fill="#6aa864"><path d="M18 282c-4-22 0-38 8-48 6 16 4 32-8 48Z" /></g>
        </svg>

        {/* Accessible room buttons positioned over the drawing */}
        <div role="tablist" aria-label="Rooms in the home" onKeyDown={onKey} className="absolute inset-0">
          {rooms.map((room, i) => {
            const r = layout[room.id];
            const on = i === active;
            return (
              <button
                key={room.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                id={`map-tab-${room.id}`}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls={`map-panel-${room.id}`}
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(i)}
                className="absolute flex items-center justify-center rounded-sm p-0.5 text-center text-[10px] font-semibold leading-tight text-ink transition-colors hover:bg-wattle/30 sm:text-xs"
                style={{
                  left: `${(r.x / 400) * 100}%`,
                  top: `${(r.y / 300) * 100}%`,
                  width: `${(r.w / 400) * 100}%`,
                  height: `${(r.h / 300) * 100}%`,
                }}
              >
                <span className={`rounded px-1 py-0.5 ${on ? "bg-white shadow-card" : "bg-white/70"}`}>{room.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        {rooms.map((room, i) => (
          <div
            key={room.id}
            id={`map-panel-${room.id}`}
            role="tabpanel"
            aria-labelledby={`map-tab-${room.id}`}
            hidden={i !== active}
            tabIndex={0}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wattle-dark">
              Room {i + 1} of {rooms.length}
            </p>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight text-ink">{room.name}</h3>
            <ul className="mt-6 space-y-3">
              {room.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-base text-ink">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eaf5e4] text-brand">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="mt-8 text-sm text-ink-soft">
          Tap a room on the house to see its spring priorities. Currently showing: <span className="font-semibold text-ink">{current.name}</span>.
        </p>
      </div>
    </div>
  );
}
