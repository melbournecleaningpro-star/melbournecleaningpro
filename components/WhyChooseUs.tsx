import { benefits } from "@/lib/content";
import { quoteHref } from "@/lib/site";
import { ButtonLink, Container, SectionHeading } from "./ui";

export function WhyChooseUs() {
  return (
    <section id="why-us" aria-labelledby="why-heading" className="bg-cream py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="why-heading"
            align="left"
            eyebrow="Why choose us"
            title="Why Melbourne Homeowners & Businesses Choose Us"
            intro="Good cleaning comes down to reliability, care and clear communication. That's what we focus on for every home and workplace we clean."
          />
          <ButtonLink href={quoteHref} className="mt-8">
            Get a Free Quote
          </ButtonLink>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {benefits.map(({ title, description, icon: Icon }) => (
            <li key={title} className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-line/70 sm:p-7">
              <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold text-ink sm:text-lg">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
