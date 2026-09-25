import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { AreasHero, CheckYourArea, CoverageIntro, RegionGuide, ServiceMatch, Situations } from "@/components/service-areas/Coverage";
import { areaFaqs, PAGE_PATH } from "@/lib/service-areas";
import { pageRobots, siteConfig } from "@/lib/site";

const title = "Service Areas";
const description =
  "Where Melbourne Cleaning Pro provides residential and commercial cleaning across Melbourne, and how to check availability for your suburb and service.";

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

const breadcrumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Service Areas" }];

// References the homepage LocalBusiness by @id (which already carries
// areaServed from lib/content.ts); no new business facts are added here.
function structuredData() {
  const { url, name } = siteConfig;
  const pageUrl = `${url}${PAGE_PATH}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        name: `${title} | ${name}`,
        description,
        url: pageUrl,
        isPartOf: { "@type": "WebSite", "@id": `${url}/#website`, name, url: `${url}/` },
        about: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: breadcrumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.label,
          item: c.href ? `${url}${c.href}` : pageUrl,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: areaFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main" className="bg-cream">
        <AreasHero breadcrumbs={breadcrumbs} />
        <CoverageIntro />
        <RegionGuide />
        <Situations />
        <ServiceMatch />
        <FAQ
          items={areaFaqs}
          eyebrow="Service area FAQs"
          title="Questions About Where We Clean"
          intro="For bookings, pricing and everything else, see the full FAQ page."
          className="py-16 sm:py-20"
        />
        <p className="-mt-8 pb-16 text-center text-sm sm:-mt-10 sm:pb-20">
          <a href="/faq/" className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand">
            Read all frequently asked questions
          </a>
        </p>
        <CheckYourArea />
      </main>
      <Footer />
    </>
  );
}
