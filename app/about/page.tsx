import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  AboutCTA,
  AboutHero,
  Approach,
  CustomerJourney,
  DifferentNeeds,
  Expectations,
  MelbourneFocus,
  OurStory,
  ServicesBand,
  Values,
  WhatWeDo,
  WhoWeServe,
} from "@/components/about/Story";
import { aboutFaqs, images, PAGE_PATH } from "@/lib/about";
import { pageRobots, siteConfig } from "@/lib/site";

const title = "About Us";
const description =
  "Learn more about Melbourne Cleaning Pro, our approach to residential and commercial cleaning, and the cleaning services we provide across Melbourne.";

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

const breadcrumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "About" }];

// References the LocalBusiness entity defined on the homepage by @id; no new
// business facts are introduced here.
function structuredData() {
  const { url, name } = siteConfig;
  const pageUrl = `${url}${PAGE_PATH}`;
  const business = { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#webpage`,
        name: `${title} | ${name}`,
        description,
        url: pageUrl,
        primaryImageOfPage: { "@type": "ImageObject", url: `${url}${images.doorway.src}` },
        isPartOf: { "@type": "WebSite", "@id": `${url}/#website`, name, url: `${url}/` },
        about: business,
        mainEntity: business,
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
        mainEntity: aboutFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <AboutHero breadcrumbs={breadcrumbs} />
        <OurStory />
        <WhatWeDo />
        <Approach />
        <Values />
        <DifferentNeeds />
        <WhoWeServe />
        <MelbourneFocus />
        <CustomerJourney />
        <Expectations />
        <ServicesBand />
        <FAQ
          items={aboutFaqs}
          eyebrow="FAQs"
          title="About Melbourne Cleaning Pro: FAQs"
          intro="Quick answers about who we are and how we work."
          className="py-20 sm:py-24"
        />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
