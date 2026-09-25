import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  BeforeCleaning,
  CleaningExperience,
  EverydayUse,
  FabricMatters,
  FurnitureCare,
  FurnitureQuote,
  FurnitureTypes,
  MoreThanUpholstery,
  SofaZones,
  StainsAndMarks,
  UpholsteryCTA,
  UpholsteryHero,
  WhoItHelps,
} from "@/components/upholstery-cleaning/Fabric";
import { furniture, images, PAGE_PATH, upholsteryFaqs } from "@/lib/upholstery-cleaning";
import { pageRobots, routeHref, siteConfig } from "@/lib/site";

const title = "Upholstery Cleaning Melbourne";
const description =
  "Professional upholstery cleaning in Melbourne for sofas, couches, armchairs, dining chairs and other fabric furniture. Tell us about your pieces and request a quote.";

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
  { label: "Upholstery Cleaning" },
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
        name: "Upholstery Cleaning",
        serviceType: "Upholstery cleaning",
        alternateName: ["Sofa cleaning", "Couch cleaning", "Fabric furniture cleaning"],
        description,
        url: pageUrl,
        image: `${url}${images.sofa.src}`,
        areaServed: {
          "@type": "City",
          name: "Melbourne",
          containedInPlace: { "@type": "State", name: "Victoria" },
        },
        provider: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Upholstery cleaning by furniture type",
          itemListElement: furniture.map((t) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: `${t.name} cleaning` },
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
        mainEntity: upholsteryFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export default function UpholsteryCleaningPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <UpholsteryHero breadcrumbs={breadcrumbs} />
        <SofaZones />
        <EverydayUse />
        <FurnitureTypes />
        <FabricMatters />
        <StainsAndMarks />
        <BeforeCleaning />
        <CleaningExperience />
        <FurnitureCare />
        <WhoItHelps />
        <MoreThanUpholstery />
        <FurnitureQuote />
        <FAQ
          items={upholsteryFaqs}
          eyebrow="FAQs"
          title="Upholstery Cleaning FAQs"
          intro="Straight answers about fabrics, stains and quotes."
          className="bg-cream pb-10 pt-20 sm:pt-24"
        />
        <p className="bg-cream pb-20 text-center text-sm sm:pb-24">
          <a href="/faq/" className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand">
            More questions? Read the full FAQ
          </a>
        </p>
        <UpholsteryCTA />
      </main>
      <Footer />
    </>
  );
}
