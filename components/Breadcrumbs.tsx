import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

/** Visible breadcrumb trail. The last item is the current page. */
export function Breadcrumbs({
  items,
  className = "",
  tone = "dark",
}: {
  items: Crumb[];
  className?: string;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${light ? "text-white/60" : "text-ink-soft"}`}>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {last || !item.href ? (
                <span aria-current={last ? "page" : undefined} className={last ? (light ? "font-medium text-white" : "font-medium text-ink") : ""}>
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className={light ? "transition-colors hover:text-white" : "transition-colors hover:text-brand"}>
                  {item.label}
                </a>
              )}
              {!last && <ChevronRight className={`h-3.5 w-3.5 ${light ? "text-white/40" : "text-ink-soft/60"}`} aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
