import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  AreaAndRelated,
  CarpetCTA,
  HomeOrWork,
  PileCompare,
  TapeMeasure,
  VacuumSteps,
  VisitIncludes,
  WhenToClean,
} from "@/components/carpet-cleaning/Floor";
import {
  CareLabel,
  CarpetFocus,
  CarpetHero,
  FootTraffic,
  RoomByRoom,
  SampleBoard,
  TrafficMap,
} from "@/components/carpet-cleaning/Pile";
import { carpetFaqs, images, PAGE_PATH, roomStories } from "@/lib/carpet-cleaning";
import { pageRobots, routeHref, siteConfig } from "@/lib/site";

const title = "Carpet Cleaning Melbourne";
const description =
  "Professional carpet cleaning in Melbourne for homes and suitable commercial spaces. Refresh high-traffic areas and everyday carpet buildup. Request a quote.";

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
  { label: "Carpet Cleaning" },
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
        name: "Carpet Cleaning",
        serviceType: "Carpet cleaning",
        alternateName: ["Residential carpet cleaning", "Commercial carpet cleaning"],
        description,
        url: pageUrl,
        image: `${url}${images.living.src}`,
        areaServed: {
          "@type": "City",
          name: "Melbourne",
          containedInPlace: { "@type": "State", name: "Victoria" },
        },
        provider: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Carpet cleaning by room",
          itemListElement: roomStories.map((t) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: `${t.title} carpet cleaning` },
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
        mainEntity: carpetFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export default function CarpetCleaningPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <CarpetHero breadcrumbs={breadcrumbs} />
        <FootTraffic />
        <TrafficMap />
        <RoomByRoom />
        <CarpetFocus />
        <CareLabel />
        <SampleBoard />
        <PileCompare />
        <VisitIncludes />
        <WhenToClean />
        <HomeOrWork />
        <TapeMeasure />
        <VacuumSteps />
        <AreaAndRelated />
        <FAQ
          items={carpetFaqs}
          eyebrow="FAQs"
          title="Carpet Cleaning FAQs"
          intro="Honest answers about carpets, marks and quotes."
          className="bg-cream py-20 sm:py-24"
        />
        <CarpetCTA />
      </main>
      <Footer />
    </>
  );
}
