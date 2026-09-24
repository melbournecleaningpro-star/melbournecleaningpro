import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { CommercialChecklist, CommercialProcess, WhyChoose } from "@/components/commercial/Business";
import {
  AreaAndRelatedServices,
  CommercialCTA,
  CostFactors,
  OneOffVsRecurring,
} from "@/components/commercial/Closing";
import { CommercialHero, ValueStrip } from "@/components/commercial/Hero";
import { CommercialIntro, ScopeMatrix, Spaces } from "@/components/commercial/Overview";
import { Schedules, WorkingHours } from "@/components/commercial/Scheduling";
import { commercialFaqs, images, PAGE_PATH, spaces } from "@/lib/commercial";
import { pageRobots, routeHref, siteConfig } from "@/lib/site";

const title = "Commercial Cleaning Melbourne";
const description =
  "Commercial cleaning in Melbourne for offices, retail spaces and workplaces. Daily, weekly or custom schedules before or after business hours. Request a free quote.";

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
  { label: "Commercial Cleaning" },
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
        name: "Commercial Cleaning",
        serviceType: "Commercial cleaning",
        description,
        url: pageUrl,
        image: `${url}${images.office.src}`,
        areaServed: {
          "@type": "City",
          name: "Melbourne",
          containedInPlace: { "@type": "State", name: "Victoria" },
        },
        audience: { "@type": "BusinessAudience", audienceType: "Businesses, workplace managers and property managers" },
        provider: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Commercial spaces cleaned",
          itemListElement: spaces.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: `${s.title} cleaning`, description: s.text },
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
        mainEntity: commercialFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export default function CommercialCleaningPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <CommercialHero breadcrumbs={breadcrumbs} />
        <ValueStrip />
        <CommercialIntro />
        <Spaces />
        <ScopeMatrix />
        <Schedules />
        <WorkingHours />
        <WhyChoose />
        <CommercialProcess />
        <CommercialChecklist />
        <CostFactors />
        <OneOffVsRecurring />
        <AreaAndRelatedServices />
        <FAQ
          items={commercialFaqs}
          eyebrow="FAQs"
          title="Commercial Cleaning Melbourne FAQs"
          intro="Answers to common questions from business owners and workplace managers."
          className="border-t border-line bg-cream py-20 sm:py-24"
        />
        <CommercialCTA />
      </main>
      <Footer />
    </>
  );
}
