"use client";

import { Check } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import type { Room } from "@/lib/deep-cleaning";

type RoomTab = Omit<Room, "icon"> & { icon: React.ReactNode };

/**
 * Accessible tabs (arrow keys, Home/End). Every panel is rendered into the
 * static HTML; inactive panels are only hidden, so all content stays crawlable.
 */
export function RoomTabs({ rooms }: { rooms: RoomTab[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = rooms.length - 1;
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? active === last ? 0 : active + 1
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? active === 0 ? last : active - 1
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[17rem_1fr] lg:gap-10">
      <div
        role="tablist"
        aria-label="Rooms"
        aria-orientation="vertical"
        onKeyDown={onKey}
        className="-mx-5 flex min-w-0 gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 lg:flex-col lg:overflow-visible"
      >
        {rooms.map((room, i) => (
          <button
            key={room.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            id={`room-tab-${room.id}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`room-panel-${room.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-colors lg:px-5 lg:py-4 lg:text-base ${
              i === active
                ? "bg-brand text-white shadow-card"
                : "bg-white text-ink ring-1 ring-inset ring-line hover:ring-brand/40"
            }`}
          >
            <span className={i === active ? "text-wattle" : "text-brand"}>{room.icon}</span>
            {room.name}
            <span className={`ml-auto hidden text-xs font-medium lg:inline ${i === active ? "text-white/70" : "text-ink-soft"}`}>
              {room.items.length}
            </span>
          </button>
        ))}
      </div>

      {rooms.map((room, i) => (
        <div
          key={room.id}
          id={`room-panel-${room.id}`}
          role="tabpanel"
          aria-labelledby={`room-tab-${room.id}`}
          hidden={i !== active}
          tabIndex={0}
          className="rounded-[1.75rem] bg-white p-6 ring-1 ring-line sm:p-9"
        >
          <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{room.name}</h3>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft sm:text-base">{room.focus}</p>
          <ul className="mt-7 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {room.items.map((item) => (
              <li key={item} className="flex items-center gap-3 border-b border-dashed border-line pb-3.5 text-[15px] text-ink">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-wattle/25 text-wattle-dark">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
