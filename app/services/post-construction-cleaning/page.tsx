import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  AreaAndRelated,
  CompletionBoard,
  PostCTA,
  PostPricing,
  ProjectSchedule,
} from "@/components/post-construction/Closing";
import { BeforeAfterStages, ProjectHero, WorkFinished } from "@/components/post-construction/Project";
import { DetailZones, FocusVsSpecialist, NextStage, SpecSheet, WhoNeedsIt } from "@/components/post-construction/Scope";
import { images, PAGE_PATH, postConstructionFaqs, specSheet } from "@/lib/post-construction";
import { pageRobots, routeHref, siteConfig } from "@/lib/site";

const title = "Post-Construction Cleaning Melbourne";
const description =
  "Detailed post-construction cleaning in Melbourne for renovated and recently completed properties. Get a quote from Melbourne Cleaning Pro.";

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
  { label: "Post-Construction Cleaning" },
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
        name: "Post-Construction Cleaning",
        serviceType: "Post-construction cleaning",
        alternateName: ["After renovation cleaning", "Builders clean"],
        description,
        url: pageUrl,
        image: `${url}${images.ready.src}`,
        areaServed: {
          "@type": "City",
          name: "Melbourne",
          containedInPlace: { "@type": "State", name: "Victoria" },
        },
        audience: { "@type": "Audience", audienceType: "Homeowners, builders, property owners and property managers" },
        provider: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Post-construction cleaning scope",
          itemListElement: specSheet.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: `${s.area} cleaning`, description: s.items.join(", ") },
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
        mainEntity: postConstructionFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export default function PostConstructionCleaningPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <ProjectHero breadcrumbs={breadcrumbs} />
        <WorkFinished />
        <BeforeAfterStages />
        <SpecSheet />
        <DetailZones />
        <FocusVsSpecialist />
        <WhoNeedsIt />
        <NextStage />
        <CompletionBoard />
        <PostPricing />
        <ProjectSchedule />
        <AreaAndRelated />
        <FAQ
          items={postConstructionFaqs}
          eyebrow="FAQs"
          title="Post-Construction Cleaning FAQs"
          intro="Straight answers, including what the service doesn't cover."
          className="border-t border-line py-20 sm:py-24"
        />
        <PostCTA />
      </main>
      <Footer />
    </>
  );
}
