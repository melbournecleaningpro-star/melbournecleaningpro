import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { AreaAndRelated, DeepCTA, Journey, PricingAndPrep, PropertyTypes } from "@/components/deep-cleaning/Closing";
import {
  BeforeAfterSection,
  DeepVsRegular,
  Limits,
  Overlooked,
  Priorities,
  RoomFocus,
} from "@/components/deep-cleaning/Detail";
import { DeepHero, Scenarios, WhatMakesItDifferent } from "@/components/deep-cleaning/Opening";
import { deepFaqs, images, PAGE_PATH, rooms } from "@/lib/deep-cleaning";
import { pageRobots, routeHref, siteConfig } from "@/lib/site";

const title = "Deep Cleaning Melbourne";
const description =
  "Deep cleaning in Melbourne for homes that need more than a routine clean. Detailed kitchens, bathrooms and overlooked areas, with your priorities in mind. Free quotes.";

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

const breadcrumbs: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: routeHref("/services/", "/#services") },
  { label: "Deep Cleaning" },
];

function structuredData() {
  const { url, name } = siteConfig;
  const pageUrl = `${url}${PAGE_PATH}`;
  const abs = (href: string) => (href.startsWith("http") ? href : `${url}${href}`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Deep Cleaning",
        serviceType: "Deep cleaning",
        description,
        url: pageUrl,
        image: `${url}${images.home.src}`,
        areaServed: {
          "@type": "City",
          name: "Melbourne",
          containedInPlace: { "@type": "State", name: "Victoria" },
        },
        provider: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Deep cleaning by room",
          itemListElement: rooms.map((r) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: `${r.name} deep cleaning` },
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
          item: c.href ? abs(c.href) : pageUrl,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: deepFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export default function DeepCleaningPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <DeepHero breadcrumbs={breadcrumbs} />
        <Scenarios />
        <WhatMakesItDifferent />
        <BeforeAfterSection />
        <RoomFocus />
        <Overlooked />
        <DeepVsRegular />
        <Priorities />
        <Limits />
        <PropertyTypes />
        <PricingAndPrep />
        <Journey />
        <AreaAndRelated />
        <FAQ
          items={deepFaqs}
          eyebrow="FAQs"
          title="Deep Cleaning Melbourne FAQs"
          intro="Straight answers about what a deep clean involves and how to book one."
          className="py-20 sm:py-24"
        />
        <DeepCTA />
      </main>
      <Footer />
    </>
  );
}
