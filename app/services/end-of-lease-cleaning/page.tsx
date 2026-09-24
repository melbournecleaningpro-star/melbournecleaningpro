import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { RoomChecklist, Inclusions, InspectionGuide } from "@/components/end-of-lease/Checklist";
import { AreaAndRelated, EndOfLeaseCTA, Preparation, Pricing } from "@/components/end-of-lease/Closing";
import { EndOfLeaseHero, TrustStrip } from "@/components/end-of-lease/Hero";
import { Intro } from "@/components/end-of-lease/Intro";
import { Audience, Process, PropertyTypes, Showcase } from "@/components/end-of-lease/Showcase";
import { endOfLeaseFaqs, PAGE_PATH, standardInclusions } from "@/lib/end-of-lease";
import { pageRobots, routeHref, siteConfig } from "@/lib/site";

const title = "End of Lease Cleaning Melbourne";
const description =
  "End of lease cleaning in Melbourne for rental properties. Detailed room-by-room cleaning of kitchens, bathrooms and living areas before handover. Free quotes.";

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
  { label: "End of Lease Cleaning" },
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
        name: "End of Lease Cleaning",
        serviceType: "End of lease cleaning",
        description,
        url: pageUrl,
        image: `${url}/images/end-of-lease-cleaning-melbourne.webp`,
        areaServed: {
          "@type": "City",
          name: "Melbourne",
          containedInPlace: { "@type": "State", name: "Victoria" },
        },
        audience: { "@type": "Audience", audienceType: "Tenants, landlords, property owners and property managers" },
        provider: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Standard end of lease cleaning",
          itemListElement: standardInclusions.map((item) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item },
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
          ...(c.href ? { item: abs(c.href) } : { item: pageUrl }),
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: endOfLeaseFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export default function EndOfLeaseCleaningPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <EndOfLeaseHero breadcrumbs={breadcrumbs} />
        <TrustStrip />
        <Intro />
        <RoomChecklist />
        <Inclusions />
        <InspectionGuide />
        <Showcase />
        <Audience />
        <Process />
        <PropertyTypes />
        <Pricing />
        <Preparation />
        <AreaAndRelated />
        <FAQ
          items={endOfLeaseFaqs}
          eyebrow="FAQs"
          title="End of Lease Cleaning Melbourne FAQs"
          intro="Common questions from tenants, owners and property managers about move-out cleaning."
          className="bg-cream py-20 sm:py-24"
        />
        <EndOfLeaseCTA />
      </main>
      <Footer />
    </>
  );
}
