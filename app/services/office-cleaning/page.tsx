import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { AreaAndRelated, Boundaries, OfficeCTA, OfficeProcess, QuoteFactors } from "@/components/office/Closing";
import { OfficeHero, OfficeIntro, WorkdayStrip } from "@/components/office/Opening";
import { Disruption, Frequency, OfficeTypes, OneOffAndRecurring } from "@/components/office/Workday";
import { OfficeChecklist, OfficeZones } from "@/components/office/Zones";
import { images, officeFaqs, PAGE_PATH, zones } from "@/lib/office";
import { pageRobots, routeHref, siteConfig } from "@/lib/site";

const title = "Office Cleaning Melbourne";
const description =
  "Office cleaning in Melbourne scheduled around your workday. Regular or one-off cleaning for workstations, meeting rooms, kitchens and bathrooms. Request a free quote.";

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
  { label: "Office Cleaning" },
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
        name: "Office Cleaning",
        serviceType: "Office cleaning",
        description,
        url: pageUrl,
        image: `${url}${images.workspace.src}`,
        areaServed: {
          "@type": "City",
          name: "Melbourne",
          containedInPlace: { "@type": "State", name: "Victoria" },
        },
        audience: { "@type": "BusinessAudience", audienceType: "Offices and workplaces" },
        provider: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Office cleaning zones",
          itemListElement: zones.map((z) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: `${z.name} cleaning` },
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
        mainEntity: officeFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export default function OfficeCleaningPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <OfficeHero breadcrumbs={breadcrumbs} />
        <WorkdayStrip />
        <OfficeIntro />
        <OfficeZones />
        <OfficeChecklist />
        <Frequency />
        <Disruption />
        <OfficeTypes />
        <OneOffAndRecurring />
        <QuoteFactors />
        <OfficeProcess />
        <Boundaries />
        <AreaAndRelated />
        <FAQ
          items={officeFaqs}
          eyebrow="FAQs"
          title="Office Cleaning Melbourne FAQs"
          intro="Practical answers for office managers and business owners."
          className="border-t border-line py-20 sm:py-24"
        />
        <OfficeCTA />
      </main>
      <Footer />
    </>
  );
}
