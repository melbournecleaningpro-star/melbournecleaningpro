import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "accent" | "ghost-light";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark shadow-sm",
  secondary: "bg-white text-ink ring-1 ring-inset ring-line hover:ring-brand hover:text-brand",
  accent: "bg-wattle text-ink hover:bg-wattle-dark shadow-sm",
  "ghost-light": "text-white ring-1 ring-inset ring-white/40 hover:bg-white/10 hover:ring-white/70",
};

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  size?: "md" | "lg";
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const sizing = size === "lg" ? "px-6 py-3.5 text-base" : "px-5 py-3 text-sm";
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full text-center font-semibold transition-colors duration-200 ${sizing} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  // Only apply the default width when the caller doesn't set one, so a passed
  // max-w-* isn't overridden by max-w-7xl in the generated CSS order.
  const width = /(^|\s)max-w-/.test(className) ? "" : "max-w-7xl";
  return <div className={`mx-auto w-full ${width} px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  id?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">{eyebrow}</p>
      )}
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{intro}</p>}
    </div>
  );
}
