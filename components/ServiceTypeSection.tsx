import { ArrowRight, Building2, Check, House } from "lucide-react";
import { routeHref } from "@/lib/site";

const panels = [
  {
    title: "Residential Cleaning",
    copy: "Keep your Melbourne home clean, comfortable and easy to relax in. We handle the scrubbing, dusting and mopping so you get your weekends back.",
    points: ["Weekly, fortnightly or one-off", "End of lease & move-in cleans", "Deep cleaning for a full reset"],
    cta: "Explore Home Cleaning",
    href: routeHref("/residential-cleaning/", "#quote"),
    icon: House,
    theme: "light" as const,
  },
  {
    title: "Commercial Cleaning",
    copy: "Clean, presentable workplaces for staff and visitors. We clean offices, retail spaces and commercial properties on a schedule that works around your business.",
    points: ["Offices & shared workspaces", "Before or after business hours", "Regular or one-off service"],
    cta: "Explore Commercial Cleaning",
    href: routeHref("/services/commercial-cleaning/", "#quote"),
    icon: Building2,
    theme: "dark" as const,
  },
];

export function ServiceTypeSection() {
  return (
    <section aria-label="Residential and commercial cleaning" className="pb-20 sm:pb-24">
      <div className="mx-auto grid w-full max-w-7xl gap-5 px-5 sm:px-6 lg:grid-cols-2 lg:gap-6 lg:px-8">
        {panels.map(({ title, copy, points, cta, href, icon: Icon, theme }) => {
          const dark = theme === "dark";
          return (
            <article
              key={title}
              className={`relative flex flex-col overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12 ${
                dark ? "bg-ink text-white" : "bg-brand-50 text-ink"
              }`}
            >
              <Icon
                aria-hidden="true"
                strokeWidth={1}
                className={`pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 ${
                  dark ? "text-white/[0.05]" : "text-brand/[0.07]"
                }`}
              />
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                  dark ? "bg-wattle text-ink" : "bg-brand text-white"
                }`}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
              <p className={`mt-4 max-w-md leading-relaxed ${dark ? "text-white/75" : "text-ink-soft"}`}>{copy}</p>
              <ul className="mt-6 space-y-2.5">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-[15px]">
                    <Check
                      className={`h-4 w-4 shrink-0 ${dark ? "text-wattle" : "text-brand"}`}
                      aria-hidden="true"
                      strokeWidth={2.5}
                    />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={href}
                className={`relative mt-9 inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200 ${
                  dark ? "bg-wattle text-ink hover:bg-wattle-dark" : "bg-brand text-white hover:bg-brand-dark"
                }`}
              >
                {cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
