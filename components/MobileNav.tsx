"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, quoteHref, siteConfig } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-brand-50"
      >
        {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-white shadow-lift"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 pb-6 pt-2 sm:px-6">
          <ul className="divide-y divide-line">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={close}
                  className="block py-3.5 text-base font-medium text-ink transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href={quoteHref}
              onClick={close}
              className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Get a Free Quote
            </a>
            <a
              href={siteConfig.contact.phone.href}
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-ink ring-1 ring-inset ring-line transition-colors hover:ring-brand"
            >
              <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
              Call Now
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
