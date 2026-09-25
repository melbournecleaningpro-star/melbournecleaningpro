import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  BuildUpTray,
  InsideTheOven,
  JobSheet,
  OvenCTA,
  OvenFAQ,
  OvenHero,
  OvenPairings,
  WhyOvensTakeTime,
} from "@/components/oven-cleaning/Kitchen";
import { OvenAnatomy } from "@/components/oven-cleaning/OvenAnatomy";
import { ovenFaqs, ovenImage, ovenParts, PAGE_PATH } from "@/lib/oven-cleaning";
import { pageRobots, routeHref, siteConfig } from "@/lib/site";

const title = "Oven Cleaning Melbourne";
const description =
  "Oven cleaning in Melbourne for built-up grease and baked-on cooking residue, covering the interior, racks, trays and door glass as agreed for your oven.";

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
  { label: "Oven Cleaning" },
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
        name: "Oven Cleaning",
        serviceType: "Oven cleaning",
        description,
        url: pageUrl,
        image: `${url}${ovenImage.src}`,
        areaServed: { "@type": "City", name: "Melbourne", containedInPlace: { "@type": "State", name: "Victoria" } },
        provider: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Oven parts that can be cleaned",
          itemListElement: ovenParts.map((p) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: `Oven ${p.name.toLowerCase()} cleaning` } })),
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
        mainEntity: ovenFaqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
      },
    ],
  };
}

export default function OvenCleaningPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <OvenHero breadcrumbs={breadcrumbs} />
        <InsideTheOven>
          <OvenAnatomy />
        </InsideTheOven>
        <BuildUpTray />
        <WhyOvensTakeTime />
        <JobSheet />
        <OvenPairings />
        <OvenFAQ />
        <OvenCTA />
      </main>
      <Footer />
    </>
  );
}
