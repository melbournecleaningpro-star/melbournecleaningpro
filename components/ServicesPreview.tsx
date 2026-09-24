import { ArrowRight } from "lucide-react";
import { services } from "@/lib/content";
import { Container, SectionHeading } from "./ui";

export function ServicesPreview() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow="Our services"
          title="Cleaning Services We Offer"
          intro="From weekly house cleaning to one-off deep cleans and scheduled commercial cleaning, choose the service that fits your home or business."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map(({ title, description, icon: Icon, href }) => (
            <li key={title}>
              <article className="group relative flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-card transition-[box-shadow,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-lift">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-soft">{description}</p>
                <a
                  href={href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand after:absolute after:inset-0 after:rounded-3xl"
                >
                  Learn More<span className="sr-only"> about {title}</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
