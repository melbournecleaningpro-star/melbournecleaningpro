import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { AreaAndRelated, BookingFlow, MoveInCTA, MoveInPricing } from "@/components/move-in/Closing";
import {
  BeforeTheBoxes,
  BeforeWeArrive,
  MoveInVsRegular,
  Priorities,
  PropertyTypesType,
  WhoItsFor,
} from "@/components/move-in/Prepare";
import { CleanSlate, MoveInHero, RoomRows } from "@/components/move-in/Story";
import { images, moveInFaqs, PAGE_PATH, roomRows } from "@/lib/move-in";
import { pageRobots, routeHref, siteConfig } from "@/lib/site";

const title = "Move-In Cleaning Melbourne";
const description =
  "Professional move-in cleaning in Melbourne to help prepare your new home before you unpack. Request a quote from Melbourne Cleaning Pro.";

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
  { label: "Move-In Cleaning" },
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
        name: "Move-In Cleaning",
        serviceType: "Move-in cleaning",
        alternateName: ["Pre-move cleaning", "New home cleaning"],
        description,
        url: pageUrl,
        image: `${url}${images.emptyHome.src}`,
        areaServed: {
          "@type": "City",
          name: "Melbourne",
          containedInPlace: { "@type": "State", name: "Victoria" },
        },
        audience: { "@type": "Audience", audienceType: "New homeowners, renters and property owners" },
        provider: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Move-in cleaning by room",
          itemListElement: roomRows.map((r) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: `${r.name} move-in cleaning` },
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
        mainEntity: moveInFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export default function MoveInCleaningPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <MoveInHero breadcrumbs={breadcrumbs} />
        <CleanSlate />
        <RoomRows />
        <BeforeTheBoxes />
        <MoveInVsRegular />
        <WhoItsFor />
        <PropertyTypesType />
        <BeforeWeArrive />
        <Priorities />
        <MoveInPricing />
        <BookingFlow />
        <AreaAndRelated />
        <FAQ
          items={moveInFaqs}
          eyebrow="FAQs"
          title="Move-In Cleaning FAQs"
          intro="Common questions about cleaning a property before you move in."
          className="border-t border-line py-20 sm:py-24"
        />
        <MoveInCTA />
      </main>
      <Footer />
    </>
  );
}
