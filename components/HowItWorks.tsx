import { steps } from "@/lib/content";
import { Container, SectionHeading } from "./ui";

export function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="how-heading"
          eyebrow="How it works"
          title="Booking a Clean Is Simple"
          intro="Three easy steps from first enquiry to a cleaner home or workplace."
        />

        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          <span
            aria-hidden="true"
            className="absolute left-[16.66%] right-[16.66%] top-8 hidden border-t-2 border-dashed border-brand-100 md:block"
          />
          {steps.map(({ title, description, icon: Icon }, i) => (
            <li key={title} className="relative flex flex-col items-center text-center">
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand shadow-card ring-1 ring-line">
                <Icon className="h-7 w-7" aria-hidden="true" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-wattle text-xs font-bold text-ink">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-6 text-lg font-semibold text-ink">
                <span className="sr-only">Step {i + 1}: </span>
                {title}
              </h3>
              <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-ink-soft">{description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
