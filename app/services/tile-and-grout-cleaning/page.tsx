import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  GridTransformation,
  MaterialMatters,
  RealisticExpectations,
  TileCTA,
  TileFAQ,
  TileHero,
  TileVsGrout,
  WhereItApplies,
} from "@/components/tile-and-grout-cleaning/Grid";
import { PAGE_PATH, tiledAreas, tileFaqs } from "@/lib/tile-and-grout-cleaning";
import { pageRobots, routeHref, siteConfig } from "@/lib/site";

const title = "Tile & Grout Cleaning Melbourne";
const description =
  "Tile and grout cleaning in Melbourne for bathrooms, kitchens, laundries and tiled floors, lifting build-up from tile surfaces and recessed grout lines where possible.";

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
  { label: "Tile & Grout Cleaning" },
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
        name: "Tile & Grout Cleaning",
        serviceType: "Tile and grout cleaning",
        description,
        url: pageUrl,
        areaServed: { "@type": "City", name: "Melbourne", containedInPlace: { "@type": "State", name: "Victoria" } },
        provider: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Tiled areas",
          itemListElement: tiledAreas.map((a) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: `${a.name} tile and grout cleaning` } })),
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
        mainEntity: tileFaqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
      },
    ],
  };
}

export default function TileAndGroutCleaningPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <TileHero breadcrumbs={breadcrumbs} />
        <TileVsGrout />
        <WhereItApplies />
        <MaterialMatters />
        <GridTransformation />
        <RealisticExpectations />
        <TileFAQ />
        <TileCTA />
      </main>
      <Footer />
    </>
  );
}
