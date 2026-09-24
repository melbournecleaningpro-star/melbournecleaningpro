import { Mail, Phone } from "lucide-react";
import { quoteMailHref, siteConfig } from "@/lib/site";
import { ButtonLink, Container } from "./ui";

const checklist = ["The type of clean you need", "Your suburb", "Property size", "Your preferred date"];

export function QuoteCTA() {
  return (
    <section id="quote" aria-labelledby="quote-heading" className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/[0.06]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 right-40 h-72 w-72 rounded-full bg-wattle/10"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 id="quote-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Need a Cleaner Space? Get Your Free Quote
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Tell us a little about your home or workplace and we&apos;ll get back to you with a
                clear, no-obligation quote. No pressure and no lock-in contracts.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={quoteMailHref} variant="accent" size="lg">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Get a Free Quote
                </ButtonLink>
                <ButtonLink href={siteConfig.contact.phone.href} variant="ghost-light" size="lg">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Us
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-3xl bg-white/[0.08] p-6 ring-1 ring-white/15 sm:p-7">
              <p className="text-sm font-semibold text-white">For a fast quote, include:</p>
              <ol className="mt-4 space-y-3">
                {checklist.map((item, i) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-white/85">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-wattle text-xs font-bold text-ink">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
