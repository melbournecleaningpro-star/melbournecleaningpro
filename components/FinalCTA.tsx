import { quoteMailHref } from "@/lib/site";
import { ButtonLink, Container } from "./ui";

export function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-heading" className="border-t border-line bg-cream">
      <Container className="flex flex-col items-start justify-between gap-6 py-14 sm:flex-row sm:items-center">
        <div>
          <h2 id="final-cta-heading" className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Ready for a Cleaner Space?
          </h2>
          <p className="mt-2 text-ink-soft">Get a free, no-obligation quote from local Melbourne cleaners.</p>
        </div>
        <ButtonLink href={quoteMailHref} size="lg" className="shrink-0">
          Request a Free Quote
        </ButtonLink>
      </Container>
    </section>
  );
}
