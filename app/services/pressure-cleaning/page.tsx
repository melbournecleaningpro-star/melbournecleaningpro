import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  BeforeYouBook,
  BuildUpLayers,
  DrivewayFocus,
  Expectations,
  HowItWorks,
  MelbourneWeather,
  PatiosAndPaths,
  PressureFAQ,
  PressureGauge,
  PressureHero,
  QuoteFactors,
  RevealCTA,
  SiteInspection,
  SurfaceJourney,
  WhatWeClean,
  WhoItsFor,
} from "@/components/pressure-cleaning/Surface";
import { SurfaceInspector } from "@/components/pressure-cleaning/SurfaceInspector";
import { SurfaceReveal } from "@/components/pressure-cleaning/SurfaceReveal";
import { PAGE_PATH, pressureFaqs, surfaces } from "@/lib/pressure-cleaning";
import { pageRobots, routeHref, siteConfig } from "@/lib/site";

const title = "Pressure Cleaning Melbourne";
const description =
  "Professional pressure cleaning for driveways, paths, patios and outdoor surfaces across Melbourne. Tell us what needs cleaning and request a tailored quote.";

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
  { label: "Pressure Cleaning" },
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
        name: "Pressure Cleaning",
        serviceType: "Pressure cleaning",
        alternateName: ["High pressure cleaning", "Pressure washing", "Driveway cleaning", "Outdoor surface cleaning"],
        description,
        url: pageUrl,
        areaServed: { "@type": "City", name: "Melbourne", containedInPlace: { "@type": "State", name: "Victoria" } },
        provider: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Surfaces",
          itemListElement: surfaces.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: `${s.name} pressure cleaning` },
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
          item: c.href ? (c.href.startsWith("http") ? c.href : `${url}${c.href}`) : pageUrl,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: pressureFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export default function PressureCleaningPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <PressureHero breadcrumbs={breadcrumbs} reveal={<SurfaceReveal />} />
        <HowItWorks />
        <WhatWeClean>
          <SurfaceInspector />
        </WhatWeClean>
        <BuildUpLayers />
        <DrivewayFocus />
        <PatiosAndPaths />
        <PressureGauge />
        <SiteInspection />
        <SurfaceJourney />
        <Expectations />
        <MelbourneWeather />
        <WhoItsFor />
        <BeforeYouBook />
        <QuoteFactors />
        <PressureFAQ />
        <RevealCTA />
      </main>
      <Footer />
    </>
  );
}
