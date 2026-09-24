import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { AirbnbCTA, AirbnbPricing, AreaAndRelated, BookingSteps } from "@/components/airbnb/Closing";
import { AirbnbHero, TurnoverJourney, WhyDifferent } from "@/components/airbnb/Opening";
import { DoorHangers, GuestEye, WhoWeHelp } from "@/components/airbnb/Rooms";
import { AirbnbFrequency, Included, PropertySkyline, QualityCheck } from "@/components/airbnb/Stays";
import { airbnbFaqs, images, inclusions, PAGE_PATH } from "@/lib/airbnb";
import { pageRobots, routeHref, siteConfig } from "@/lib/site";

const title = "Airbnb Cleaning Melbourne";
const description =
  "Professional Airbnb cleaning in Melbourne for hosts and short-stay properties. Get your property cleaned and guest-ready between stays.";

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
  { label: "Airbnb Cleaning" },
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
        name: "Airbnb Cleaning",
        serviceType: "Short-stay turnover cleaning",
        alternateName: ["Short-stay cleaning", "Holiday rental cleaning"],
        description,
        url: pageUrl,
        image: `${url}${images.bedroom.src}`,
        areaServed: {
          "@type": "City",
          name: "Melbourne",
          containedInPlace: { "@type": "State", name: "Victoria" },
        },
        audience: { "@type": "Audience", audienceType: "Airbnb hosts and short-stay property managers" },
        provider: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Turnover clean inclusions",
          itemListElement: inclusions.map((i) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: i.title, description: i.text },
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
        mainEntity: airbnbFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export default function AirbnbCleaningPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <AirbnbHero breadcrumbs={breadcrumbs} />
        <TurnoverJourney />
        <WhyDifferent />
        <DoorHangers />
        <GuestEye />
        <WhoWeHelp />
        <AirbnbFrequency />
        <PropertySkyline />
        <Included />
        <QualityCheck />
        <AirbnbPricing />
        <BookingSteps />
        <AreaAndRelated />
        <FAQ
          items={airbnbFaqs}
          eyebrow="FAQs"
          title="Airbnb Cleaning FAQs"
          intro="Answers for hosts and short-stay property managers."
          className="py-20 sm:py-24"
        />
        <AirbnbCTA />
      </main>
      <Footer />
    </>
  );
}
