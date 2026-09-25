import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { FloorPlan } from "@/components/house-cleaning/FloorPlan";
import {
  DifferentHomes,
  EverydayAreas,
  HouseCTA,
  HouseHero,
  MelbourneHouse,
  NotSureHouse,
  Preparation,
  QuoteReceipt,
  RegularVsOneOff,
  ScopeSection,
  ToDoJourney,
  WhichClean,
} from "@/components/house-cleaning/Home";
import { Priorities } from "@/components/house-cleaning/Priorities";
import { Container } from "@/components/ui";
import { houseFaqs, images, PAGE_PATH, priorities, QUOTE_PATH, rooms } from "@/lib/house-cleaning";
import { pageRobots, routeHref, siteConfig } from "@/lib/site";

const title = "House Cleaning Melbourne";
const description =
  "House cleaning in Melbourne for regular upkeep or a one-off clean, with kitchens, bathrooms, bedrooms and living areas cleaned to an agreed scope. Request a free quote.";

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
  { label: "House Cleaning" },
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
        name: "House Cleaning",
        serviceType: "House cleaning",
        alternateName: ["Home cleaning", "Residential cleaning", "Regular house cleaning", "One-off house cleaning"],
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
          name: "House cleaning by room",
          itemListElement: rooms.map((t) => ({
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
        mainEntity: houseFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export default function HouseCleaningPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <HouseHero breadcrumbs={breadcrumbs} />
        <WhichClean />
        <section aria-labelledby="rooms-house-heading" className="bg-[#eef6f3] py-20 sm:py-24">
          <Container>
            <div className="max-w-2xl">
              <h2 id="rooms-house-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                The home, room by room
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                Choose a room to see the areas that commonly get attention.
              </p>
            </div>
            <div className="mt-10">
              <FloorPlan rooms={rooms} />
            </div>
          </Container>
        </section>
        <EverydayAreas />
        <ScopeSection />
        <section aria-labelledby="priorities-heading" className="bg-white py-20 sm:py-24">
          <Container>
            <div className="max-w-2xl">
              <h2 id="priorities-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                What Matters Most in Your Home?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                Every household has its own priorities, and they can be discussed when you request a quote.
              </p>
            </div>
            <div className="mt-10">
              <Priorities options={priorities} quoteHref={QUOTE_PATH} />
            </div>
          </Container>
        </section>
        <RegularVsOneOff />
        <Preparation />
        <ToDoJourney />
        <DifferentHomes />
        <NotSureHouse />
        <MelbourneHouse />
        <FAQ
          items={houseFaqs}
          eyebrow="FAQs"
          title="House Cleaning FAQs"
          intro="Helpful answers before you book a house clean."
          className="bg-cream pb-10 pt-20 sm:pt-24"
        />
        <p className="bg-cream pb-20 text-center text-sm sm:pb-24">
          <a href="/faq/" className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand">
            More questions? Read the full FAQ
          </a>
        </p>
        <QuoteReceipt />
        <HouseCTA />
      </main>
      <Footer />
    </>
  );
}
