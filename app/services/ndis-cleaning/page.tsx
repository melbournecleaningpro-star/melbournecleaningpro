import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  Boundaries,
  CommunicationAccess,
  DifferentRoutines,
  FundingInfo,
  GettingStarted,
  HomeMap,
  MelbourneAndSuit,
  NdisCTA,
  NdisFAQ,
  NdisHero,
  OneOffCleaning,
  PeopleAround,
  QuotePrep,
  RegularRoutine,
  RespectfulExperience,
  WhatItMeans,
  YourRoutine,
} from "@/components/ndis-cleaning/Routine";
import { RoutineBuilder } from "@/components/ndis-cleaning/RoutineBuilder";
import { ndisFaqs, PAGE_PATH, QUOTE_PATH } from "@/lib/ndis-cleaning";
import { pageRobots, routeHref, siteConfig } from "@/lib/site";

const title = "NDIS Cleaning Melbourne";
const description =
  "NDIS cleaning support in Melbourne for household cleaning needs and regular routines. Tell Melbourne Cleaning Pro what you need and request a tailored quote.";

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
  { label: "NDIS Cleaning" },
];

// Service schema describes household cleaning only; it makes no claim about
// NDIS registration, provider status or funding.
function structuredData() {
  const { url, name } = siteConfig;
  const pageUrl = `${url}${PAGE_PATH}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "NDIS Cleaning",
        serviceType: "Household cleaning",
        alternateName: ["Domestic cleaning support", "NDIS household cleaning"],
        description,
        url: pageUrl,
        areaServed: { "@type": "City", name: "Melbourne", containedInPlace: { "@type": "State", name: "Victoria" } },
        provider: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
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
        mainEntity: ndisFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export default function NdisCleaningPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <NdisHero breadcrumbs={breadcrumbs} />
        <WhatItMeans />
        <YourRoutine>
          <RoutineBuilder quoteHref={QUOTE_PATH} />
        </YourRoutine>
        <HomeMap />
        <DifferentRoutines />
        <GettingStarted />
        <RegularRoutine />
        <OneOffCleaning />
        <CommunicationAccess />
        <PeopleAround />
        <FundingInfo />
        <Boundaries />
        <RespectfulExperience />
        <MelbourneAndSuit />
        <QuotePrep />
        <NdisFAQ />
        <NdisCTA />
      </main>
      <Footer />
    </>
  );
}
