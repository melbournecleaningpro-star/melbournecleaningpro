import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  AreaAndRelated,
  FlowSentence,
  PaintChipPriorities,
  SeasonVsRegular,
  SpringCTA,
  SpringPricing,
  TearOutChecklist,
  WhoMightBook,
} from "@/components/spring-cleaning/Guide";
import { OverlookedList, RoomStories, SeasonalReset, SpringHero, SpringMap } from "@/components/spring-cleaning/Magazine";
import { homeMap, images, PAGE_PATH, springFaqs } from "@/lib/spring-cleaning";
import { pageRobots, routeHref, siteConfig } from "@/lib/site";

const title = "Spring Cleaning Melbourne";
const description =
  "Give your home a seasonal refresh with professional spring cleaning in Melbourne. Request a quote from Melbourne Cleaning Pro.";

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
  { label: "Spring Cleaning" },
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
        name: "Spring Cleaning",
        serviceType: "Spring cleaning",
        alternateName: ["Seasonal cleaning", "Seasonal home cleaning"],
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
          name: "Spring cleaning by area",
          itemListElement: homeMap.map((r) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: `${r.name} spring cleaning` },
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
        mainEntity: springFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export default function SpringCleaningPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <SpringHero breadcrumbs={breadcrumbs} />
        <SeasonalReset />
        <SpringMap />
        <OverlookedList />
        <RoomStories />
        <SeasonVsRegular />
        <WhoMightBook />
        <TearOutChecklist />
        <PaintChipPriorities />
        <SpringPricing />
        <FlowSentence />
        <AreaAndRelated />
        <FAQ
          items={springFaqs}
          eyebrow="FAQs"
          title="Spring Cleaning FAQs"
          intro="Quick answers about booking a seasonal clean."
          className="bg-[#fbfbf3] py-20 sm:py-24"
        />
        <SpringCTA />
      </main>
      <Footer />
    </>
  );
}
