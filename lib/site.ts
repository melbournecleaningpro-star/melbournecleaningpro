/**
 * Central business configuration.
 *
 * Replace the placeholder values below with real business details before
 * launch. Anything flagged `isPlaceholder` is kept OUT of structured data so
 * search engines never receive invented contact details.
 */
export const siteConfig = {
  name: "Melbourne Cleaning Pro",
  shortName: "MCP",
  tagline: "Residential & commercial cleaning across Melbourne",
  description:
    "Professional cleaning services in Melbourne for homes, rentals and workplaces. House cleaning, end of lease, deep, office and commercial cleaning. Request a free quote today.",
  // Canonical base URL. NEXT_PUBLIC_SITE_URL (set in Cloudflare) overrides it.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://melbournecleaningpro.com").replace(/\/$/, ""),
  locale: "en_AU",
  city: "Melbourne",
  region: "VIC",
  country: "AU",
  contact: {
    phone: {
      display: "04XX XXX XXX",
      href: "tel:+61400000000",
      isPlaceholder: true,
    },
    email: {
      display: "hello@melbournecleaningpro.com",
      href: "mailto:hello@melbournecleaningpro.com",
      isPlaceholder: true,
    },
  },
  // Leave `href` empty until real profiles exist; empty entries render as
  // non-link placeholders and are excluded from structured data.
  social: [
    { label: "Facebook", href: "" },
    { label: "Instagram", href: "" },
    { label: "LinkedIn", href: "" },
  ],
} as const;

/**
 * Search-engine indexing switch. The site is pre-launch, so every page is
 * noindex/nofollow until NEXT_PUBLIC_ALLOW_INDEXING=true is set at build time
 * (and the X-Robots-Tag line is removed from public/_headers).
 */
export const ALLOW_INDEXING = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const pageRobots = ALLOW_INDEXING
  ? {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" as const, "max-snippet": -1 },
    }
  : { index: false, follow: false, googleBot: { index: false, follow: false } };

/**
 * Routes that currently exist (with trailing slash, matching
 * `trailingSlash: true`). As each future page is built, add its path here and
 * every link pointing to it switches from the fallback to the real route.
 */
const LIVE_ROUTES = new Set<string>([
  "/",
  "/services/end-of-lease-cleaning/",
  "/services/commercial-cleaning/",
  "/services/deep-cleaning/",
  "/services/office-cleaning/",
  "/services/airbnb-cleaning/",
  "/services/move-in-cleaning/",
  "/services/post-construction-cleaning/",
  "/services/spring-cleaning/",
  "/services/window-cleaning/",
  "/services/carpet-cleaning/",
]);

export function isLiveRoute(path: string): boolean {
  return LIVE_ROUTES.has(path);
}

/**
 * Returns the route when it exists, otherwise a fallback (usually an anchor),
 * so no page ever links to a 404.
 */
export function routeHref(futurePath: string, fallback: string): string {
  return LIVE_ROUTES.has(futurePath) ? futurePath : fallback;
}

/** Every page renders a section with id="quote". */
export const quoteHref = "#quote";

export function quoteMailto(subject: string, body: string): string {
  return `${siteConfig.contact.email.href}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const quoteMailHref = quoteMailto(
  "Free cleaning quote request",
  "Hi,\n\nI'd like a free quote for:\n\nType of clean:\nSuburb:\nProperty size (bedrooms/bathrooms or m²):\nPreferred date:\n\nThanks,",
);

// Homepage section anchors are prefixed with "/" so they also work from subpages.
export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: routeHref("/services/", "/#services") },
  { label: "Areas We Serve", href: routeHref("/areas/", "/#areas") },
  { label: "About", href: routeHref("/about/", "/#why-us") },
  { label: "Contact", href: routeHref("/contact/", "#contact") },
] as const;
