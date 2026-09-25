import type { Metadata } from "next";
import { MessageCircleQuestion } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { QuoteWizard } from "@/components/quote/QuoteWizard";
import { ButtonLink, Container } from "@/components/ui";
import { PAGE_PATH } from "@/lib/quote";
import { pageRobots, siteConfig } from "@/lib/site";

const title = "Request a Cleaning Quote";
const description =
  "Request a cleaning quote from Melbourne Cleaning Pro. Tell us about your property, cleaning requirements and preferred service details.";

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

const breadcrumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Request a Quote" }];

function structuredData() {
  const { url, name } = siteConfig;
  const pageUrl = `${url}${PAGE_PATH}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        name: `${title} | ${name}`,
        description,
        url: pageUrl,
        isPartOf: { "@type": "WebSite", "@id": `${url}/#website`, name, url: `${url}/` },
        about: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
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

export default function QuotePage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header current="quote" />
      <main id="main" className="bg-[linear-gradient(to_bottom,#eef7f5_0,#eef7f5_22rem,#f8f6f1_22rem)]">
        <section aria-labelledby="quote-heading">
          <Container className="max-w-6xl pb-8 pt-6 sm:pt-8">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-7 max-w-2xl">
              <h1 id="quote-heading" className="text-[2.3rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                Request a Cleaning Quote
              </h1>
              <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                Tell us about your property and the cleaning you need. We&apos;ll use the details you provide to
                understand your requirements and prepare the next step.
              </p>
            </div>
          </Container>
        </section>

        {/* Elsewhere the header CTA links to this page; here, #quote lands on the form. */}
        <section id="quote" aria-label="Quote request form" className="scroll-mt-24 pb-16 sm:pb-20">
          <Container className="max-w-6xl">
            <noscript>
              <p className="mb-6 rounded-2xl bg-white p-5 text-ink ring-1 ring-line">
                The quote form needs JavaScript. You can also email your request to{" "}
                <a href={siteConfig.contact.email.href} className="font-semibold text-brand underline">
                  {siteConfig.contact.email.display}
                </a>
                .
              </p>
            </noscript>
            <QuoteWizard />
          </Container>
        </section>

        <section aria-labelledby="quote-help-heading" className="border-t border-line bg-white py-12 sm:py-14">
          <Container className="flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-4">
              <MessageCircleQuestion className="mt-1 h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <h2 id="quote-help-heading" className="text-lg font-semibold text-ink sm:text-xl">
                  Have a question before requesting a quote?
                </h2>
                <p className="mt-1 text-[15px] text-ink-soft">
                  Ask us anything first, or{" "}
                  <a
                    href="/services/"
                    className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
                  >
                    browse our services
                  </a>
                  .
                </p>
              </div>
            </div>
            <ButtonLink href="/contact/" variant="secondary" className="shrink-0">
              Contact Us
            </ButtonLink>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
