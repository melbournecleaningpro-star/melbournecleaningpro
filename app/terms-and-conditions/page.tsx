import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LAST_UPDATED, TermsDocument } from "@/components/terms/Terms";
import { pageRobots, siteConfig } from "@/lib/site";

const PAGE_PATH = "/terms-and-conditions/";
const title = "Terms & Conditions";
const description =
  "The general conditions for using the Melbourne Cleaning Pro website, requesting a quote and arranging cleaning services.";

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

const breadcrumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Terms & Conditions" }];

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
        dateModified: LAST_UPDATED.iso,
        isPartOf: { "@type": "WebSite", "@id": `${url}/#website`, name, url: `${url}/` },
        publisher: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
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

export default function TermsPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <TermsDocument breadcrumbs={breadcrumbs} />
        {/* Target for the header's #quote fallback; the header CTA itself goes to /quote/. */}
        <p id="quote" className="sr-only">
          To request a cleaning quote, visit the quote page.
        </p>
      </main>
      <Footer />
    </>
  );
}
