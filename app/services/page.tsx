import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  AreaAndTrust,
  CategoryNav,
  CommercialDirectory,
  DecisionPath,
  HubCTA,
  HubFAQ,
  HubHero,
  ResidentialDirectory,
  ScenarioGuide,
  WhyDifferent,
} from "@/components/services-hub/Hub";
import { hrefFor, hubFaqs, PAGE_PATH, services, type ServiceKey } from "@/lib/services-hub";
import { pageRobots, siteConfig } from "@/lib/site";

const title = "Cleaning Services Melbourne";
const description =
  "Explore residential and commercial cleaning services in Melbourne, including house, deep, end of lease, Airbnb, office, carpet and window cleaning.";

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

const breadcrumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Services" }];

function structuredData() {
  const { url, name } = siteConfig;
  const pageUrl = `${url}${PAGE_PATH}`;
  const linked = (Object.keys(services) as ServiceKey[]).filter((k) => hrefFor(k));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        name: `${title} | ${name}`,
        description,
        url: pageUrl,
        isPartOf: { "@type": "WebSite", "@id": `${url}/#website`, name, url: `${url}/` },
        about: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
        mainEntity: {
          "@type": "ItemList",
          name: "Cleaning services",
          itemListElement: linked.map((k, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: services[k].name,
            url: `${url}${services[k].path}`,
          })),
        },
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
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: hubFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <HubHero breadcrumbs={breadcrumbs} />
        <CategoryNav />
        <ResidentialDirectory />
        <CommercialDirectory />
        <ScenarioGuide />
        <WhyDifferent />
        <DecisionPath />
        <AreaAndTrust />
        <HubFAQ />
        <HubCTA />
      </main>
      <Footer />
    </>
  );
}
