import { Building2, CalendarClock, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "./ui";

const items = [
  { label: "Reliable Local Cleaners", icon: ShieldCheck },
  { label: "Flexible Bookings", icon: CalendarClock },
  { label: "Residential & Commercial", icon: Building2 },
  { label: "Quality-Focused Service", icon: Sparkles },
];

export function TrustBar() {
  return (
    <section aria-label="Why customers book with us" className="border-y border-line bg-white">
      <Container>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-5 py-6 sm:py-7 lg:grid-cols-4">
          {items.map(({ label, icon: Icon }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold leading-snug text-ink">{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
