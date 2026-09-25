import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { BlindSelector } from "@/components/blind-cleaning/BlindSelector";
import {
  BlindCTA,
  BlindFAQ,
  BlindHero,
  BlindTypes,
  MaterialCondition,
  OpeningSteps,
  WhereDustSettles,
} from "@/components/blind-cleaning/Light";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { blindFaqs, blindTypes, PAGE_PATH } from "@/lib/blind-cleaning";
import { pageRobots, routeHref, siteConfig } from "@/lib/site";

const title = "Blind Cleaning Melbourne";
const description =
  "Blind cleaning in Melbourne for venetian, vertical, roller and other suitable blinds in homes and workplaces, clearing the dust that settles along slats and edges.";

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
  twitter: { card: "summary_large_image", title: `${title} | ${siteConfig.name}`, description, images: [shareImage] },
  robots: pageRobots,
};

const breadcrumbs: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: routeHref("/services/", "/#services") },
  { label: "Blind Cleaning" },
];

function structuredData() {
  const { url, name } = siteConfig;
  const pageUrl = `${url}${PAGE_PATH}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Blind Cleaning",
        serviceType: "Blind cleaning",
        description,
        url: pageUrl,
        areaServed: { "@type": "City", name: "Melbourne", containedInPlace: { "@type": "State", name: "Victoria" } },
        provider: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Blind types",
          itemListElement: blindTypes.map((b) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: `${b.name} cleaning` } })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: breadcrumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.label,
          item: c.href ? (c.href.startsWith("http") ? c.href : `${url}${c.href}`) : pageUrl,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: blindFaqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
      },
    ],
  };
}

export default function BlindCleaningPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <BlindHero breadcrumbs={breadcrumbs} />
        <BlindTypes>
          <BlindSelector />
        </BlindTypes>
        <WhereDustSettles />
        <OpeningSteps />
        <MaterialCondition />
        <BlindFAQ />
        <BlindCTA />
      </main>
      <Footer />
    </>
  );
}
