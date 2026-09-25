import { Phone } from "lucide-react";
import { headerQuoteHref, navItems, siteConfig } from "@/lib/site";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { ButtonLink, Container } from "./ui";

export function Header({ current }: { current?: "quote" } = {}) {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/95 supports-[backdrop-filter]:bg-white/85 supports-[backdrop-filter]:backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <a href="/" aria-label={`${siteConfig.name} home`} className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand xl:px-3.5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={siteConfig.contact.phone.href}
            className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-ink transition-colors hover:text-brand xl:flex"
          >
            <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
            {siteConfig.contact.phone.display}
          </a>
          <ButtonLink
            href={headerQuoteHref}
            aria-current={current === "quote" ? "page" : undefined}
            className="whitespace-nowrap aria-[current=page]:ring-4 aria-[current=page]:ring-brand/20"
          >
            Get a Free Quote
          </ButtonLink>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
