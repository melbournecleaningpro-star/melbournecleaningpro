import { Plus } from "lucide-react";
import { faqs as homepageFaqs, type Faq } from "@/lib/content";
import { Container, SectionHeading } from "./ui";

type FAQProps = {
  items?: Faq[];
  eyebrow?: string;
  title?: string;
  intro?: string;
  className?: string;
};

/** Native <details> accordion: accessible and keyboard-friendly with zero JavaScript. */
export function FAQ({
  items = homepageFaqs,
  eyebrow = "FAQs",
  title = "Frequently Asked Questions",
  intro = "Quick answers about our cleaning services in Melbourne.",
  className = "pb-20 sm:pb-24",
}: FAQProps) {
  return (
    <section id="faq" aria-labelledby="faq-heading" className={className}>
      <Container className="max-w-3xl">
        <SectionHeading id="faq-heading" eyebrow={eyebrow} title={title} intro={intro} />
        <div className="mt-12 divide-y divide-line rounded-3xl border border-line bg-white">
          {items.map(({ question, answer }, i) => (
            <details key={question} className="faq-item group" open={i === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-6 rounded-3xl px-6 py-5 text-left sm:px-8">
                <h3 className="text-base font-semibold text-ink sm:text-[17px]">{question}</h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand transition-transform duration-200 group-open:rotate-45">
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-soft sm:px-8">{answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
