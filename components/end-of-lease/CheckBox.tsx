import { Check } from "lucide-react";

/** Decorative ticked checkbox used across the end of lease checklist visuals. */
export function CheckBox({ tone = "brand" }: { tone?: "brand" | "wattle" | "light" }) {
  const styles = {
    brand: "bg-brand text-white",
    wattle: "bg-wattle text-ink",
    light: "bg-white/15 text-wattle ring-1 ring-inset ring-white/25",
  }[tone];
  return (
    <span aria-hidden="true" className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${styles}`}>
      <Check className="h-3.5 w-3.5" strokeWidth={3} />
    </span>
  );
}
