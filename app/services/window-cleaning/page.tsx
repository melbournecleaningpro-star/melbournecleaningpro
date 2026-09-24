import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  ClarityIntro,
  DoubleHung,
  HomesAndWorkplaces,
  WindowAnatomy,
  WindowHero,
  WindowTypes,
} from "@/components/window-cleaning/Glass";
import {
  AccessSafety,
  AreaAndRelated,
  DropletFlow,
  GlassSamples,
  InsideOutside,
  VisitChecklist,
  WindowCTA,
  WindowPricing,
} from "@/components/window-cleaning/Scope";
import { images, PAGE_PATH, windowFaqs, windowTypes } from "@/lib/window-cleaning";
import { pageRobots, routeHref, siteConfig } from "@/lib/site";

const title = "Window Cleaning Melbourne";
const description =
  "Professional window cleaning in Melbourne for residential and suitable commercial properties. Request a quote from Melbourne Cleaning Pro.";

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
  { label: "Window Cleaning" },
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
        name: "Window Cleaning",
        serviceType: "Window cleaning",
        alternateName: ["Residential window cleaning", "Commercial window cleaning"],
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
          name: "Window cleaning by window type",
          itemListElement: windowTypes.map((t) => ({
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
        mainEntity: windowFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export default function WindowCleaningPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <WindowHero breadcrumbs={breadcrumbs} />
        <ClarityIntro />
        <DoubleHung />
        <WindowAnatomy />
        <WindowTypes />
        <HomesAndWorkplaces />
        <VisitChecklist />
        <InsideOutside />
        <GlassSamples />
        <AccessSafety />
        <WindowPricing />
        <DropletFlow />
        <AreaAndRelated />
        <FAQ
          items={windowFaqs}
          eyebrow="FAQs"
          title="Window Cleaning FAQs"
          intro="Straight answers about access, scope and quotes."
          className="bg-[#eef6f8] py-20 sm:py-24"
        />
        <WindowCTA />
      </main>
      <Footer />
    </>
  );
}
