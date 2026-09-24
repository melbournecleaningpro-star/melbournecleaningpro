import { siteConfig } from "@/lib/site";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="14" fill="#0b6e69" />
      <path
        d="M15 31 32 17l17 14v15.5a2.5 2.5 0 0 1-2.5 2.5h-29a2.5 2.5 0 0 1-2.5-2.5Z"
        fill="none"
        stroke="#fff"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M32 27.5c.9 4.6 2.9 6.6 7.5 7.5-4.6.9-6.6 2.9-7.5 7.5-.9-4.6-2.9-6.6-7.5-7.5 4.6-.9 6.6-2.9 7.5-7.5Z"
        fill="#f4b63f"
      />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-white/60" : "text-ink-soft";
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={`text-[15px] font-semibold tracking-tight ${text}`}>{siteConfig.name}</span>
        <span className={`mt-1 text-[11px] font-medium uppercase tracking-[0.16em] ${sub}`}>
          Residential &amp; Commercial
        </span>
      </span>
    </span>
  );
}
