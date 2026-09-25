import { Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/lib/content";
import { isLiveRoute, navItems, siteConfig } from "@/lib/site";
import { Logo } from "./Logo";
import { Container } from "./ui";

// Services that have their own page but no homepage card.
const extraServices = [
  { title: "Move-In Cleaning", href: "/services/move-in-cleaning/" },
  { title: "Post-Construction Cleaning", href: "/services/post-construction-cleaning/" },
  { title: "Spring Cleaning", href: "/services/spring-cleaning/" },
  { title: "Window Cleaning", href: "/services/window-cleaning/" },
  { title: "Carpet Cleaning", href: "/services/carpet-cleaning/" },
].filter((s) =>
  isLiveRoute(s.href),
);

export function Footer() {
  const year = new Date().getFullYear();
  const { phone, email } = siteConfig.contact;

  return (
    <footer id="contact" className="bg-ink text-white/70">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
        <div>
          <a href="/" aria-label={`${siteConfig.name} home`} className="inline-block">
            <Logo tone="light" />
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Professional residential and commercial cleaning services in Melbourne, from regular house
            cleaning to end of lease, deep and office cleaning.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Social media">
            {siteConfig.social.map(({ label, href }) =>
              href ? (
                <li key={label}>
                  <a
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex h-9 items-center rounded-full px-3.5 text-xs font-medium ring-1 ring-white/20 transition-colors hover:text-white hover:ring-white/50"
                  >
                    {label}
                  </a>
                </li>
              ) : (
                <li
                  key={label}
                  title={`${label} profile coming soon`}
                  className="inline-flex h-9 items-center rounded-full px-3.5 text-xs font-medium text-white/40 ring-1 ring-white/10"
                >
                  {label}
                </li>
              ),
            )}
          </ul>
        </div>

        <nav aria-labelledby="footer-nav-heading">
          <h2 id="footer-nav-heading" className="text-sm font-semibold text-white">
            Navigation
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[...services, ...extraServices].map((s) => (
              <li key={s.title}>
                <a href={s.href} className="transition-colors hover:text-white">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Contact</h2>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li>
              <a href={phone.href} className="flex items-center gap-3 transition-colors hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-wattle" aria-hidden="true" />
                {phone.display}
              </a>
            </li>
            <li>
              <a href={email.href} className="flex items-center gap-3 transition-colors hover:text-white">
                <Mail className="h-4 w-4 shrink-0 text-wattle" aria-hidden="true" />
                {email.display}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-wattle" aria-hidden="true" />
              <span>Servicing Melbourne CBD and suburbs across Greater Melbourne, VIC</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {isLiveRoute("/privacy-policy/") && (
              <a href="/privacy-policy/" className="underline-offset-4 transition-colors hover:text-white hover:underline">
                Privacy Policy
              </a>
            )}
            <span>Cleaning services in Melbourne, Victoria.</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
