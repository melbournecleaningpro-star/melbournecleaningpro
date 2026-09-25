import type { Metadata } from "next";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { FaqExplorer } from "@/components/faq/FaqExplorer";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Container } from "@/components/ui";
import { allFaqs, decisions, expectSteps, PAGE_PATH } from "@/lib/faq";
import { isLiveRoute, pageRobots, siteConfig } from "@/lib/site";

const title = "FAQ";
const description =
  "Answers to common questions about Melbourne Cleaning Pro: our cleaning services, booking and quotes, pricing, preparing for a clean, and what to expect.";

// Page-level openGraph/twitter objects replace the root ones, so the shared
// brand share image (app/opengraph-image.png) is referenced explicitly.
const shareImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name}: professional cleaning services in Melbourne`,
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: PAGE_PATH,
    siteName: siteConfig.name,
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [shareImage],
  },
  robots: pageRobots,
};

const breadcrumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "FAQ" }];

// FAQPage entries come from the same data the page renders, so schema always
// matches the visible questions and answers exactly.
function structuredData() {
  const { url, name } = siteConfig;
  const pageUrl = `${url}${PAGE_PATH}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        name: `${title} | ${name}`,
        url: pageUrl,
        isPartOf: { "@type": "WebSite", "@id": `${url}/#website`, name, url: `${url}/` },
        mainEntity: allFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: breadcrumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.label,
          item: c.href ? `${url}${c.href}` : pageUrl,
        })),
      },
    ],
  };
}

export default function FaqPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main" className="bg-cream">
        <section aria-labelledby="faq-hero-heading" className="relative overflow-hidden bg-ink pb-20 text-white sm:pb-24">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-16 select-none text-[16rem] font-semibold leading-none text-white/[0.04] sm:text-[22rem] lg:right-16"
          >
            ?
          </span>
          <Container className="relative max-w-3xl pt-6 text-center sm:pt-8">
            <div className="flex justify-center">
              <Breadcrumbs items={breadcrumbs} tone="light" />
            </div>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.28em] text-wattle">Help &amp; information</p>
            <h1 id="faq-hero-heading" className="mt-4 text-[2.4rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              If you&apos;re wondering how our cleaning works, start here. Find answers about our services, booking
              and quotes, pricing, getting ready for a clean, access, and what happens on the day.
            </p>
          </Container>
        </section>

        <FaqExplorer />

        {/* compact decision list */}
        <section aria-labelledby="which-service-heading" className="border-t border-line bg-white py-16 sm:py-20">
          <Container className="grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <h2 id="which-service-heading" className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Not sure which cleaning service you need?
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                Start with your situation. If it isn&apos;t listed, the{" "}
                <a href="/services/" className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand">
                  services page
                </a>{" "}
                has everything, or you can describe the job in a quote request.
              </p>
            </div>
            <ul className="divide-y divide-line border-y border-line">
              {decisions.map(({ need, path, service }) => {
                const live = isLiveRoute(path);
                const inner = (
                  <>
                    <span className="text-[15px] font-medium text-ink sm:text-base">{need}</span>
                    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${live ? "text-brand" : "text-ink-soft"}`}>
                      {service}
                      {live && <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />}
                    </span>
                  </>
                );
                return (
                  <li key={need}>
                    {live ? (
                      <a href={path} className="group flex items-center justify-between gap-4 px-1 py-4 transition hover:bg-cream/70 focus-visible:bg-brand-50 focus-visible:outline-none sm:px-3">
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center justify-between gap-4 px-1 py-4 sm:px-3">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>

        <section aria-labelledby="expect-heading" className="py-16 sm:py-20">
          <Container className="max-w-6xl">
            <h2 id="expect-heading" className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              What to expect
            </h2>
            <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {expectSteps.map(({ title: t, text }, i) => (
                <li key={t} className="relative border-t-2 border-ink/10 pt-5">
                  <span className="absolute -top-[2px] left-0 h-0.5 w-12 bg-brand" aria-hidden="true" />
                  <span className="text-sm font-semibold text-brand">Step {i + 1}</span>
                  <h3 className="mt-1.5 text-lg font-semibold text-ink">{t}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{text}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section id="quote" aria-labelledby="still-question-heading" className="pb-20 sm:pb-24">
          <Container className="max-w-6xl">
            <div className="grid grid-cols-1 items-center gap-8 rounded-[2rem] bg-white p-7 ring-1 ring-line sm:p-10 md:grid-cols-[auto_1fr_auto] md:gap-10 lg:p-12">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-wattle text-ink" aria-hidden="true">
                <MessageCircleQuestion className="h-8 w-8" />
              </span>
              <div>
                <h2 id="still-question-heading" className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Still have a question?
                </h2>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
                  If your question isn&apos;t answered here, get in touch and we&apos;ll help. Or, if you already know
                  what you need, request a quote.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                <ButtonLink href="/quote/" size="lg" className="whitespace-nowrap">
                  Request a Quote
                </ButtonLink>
                <ButtonLink href="/contact/" variant="secondary" size="lg" className="whitespace-nowrap">
                  Contact Us
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
