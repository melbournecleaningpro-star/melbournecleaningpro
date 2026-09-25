import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  BeyondTheBed,
  GentleAssessment,
  MattressCTA,
  MattressFAQ,
  MattressHero,
  RealisticResults,
  SurfaceEveryNight,
  WhatItCollects,
} from "@/components/mattress-cleaning/Bedroom";
import { bedroomImage, mattressFaqs, PAGE_PATH } from "@/lib/mattress-cleaning";
import { pageRobots, routeHref, siteConfig } from "@/lib/site";

const title = "Mattress Cleaning Melbourne";
const description =
  "Refresh the mattress you sleep on every night. Mattress cleaning in Melbourne for surfaces, seams and well-used areas, with an approach suited to each mattress.";

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
  { label: "Mattress Cleaning" },
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
        name: "Mattress Cleaning",
        serviceType: "Mattress cleaning",
        description,
        url: pageUrl,
        image: `${url}${bedroomImage.src}`,
        areaServed: { "@type": "City", name: "Melbourne", containedInPlace: { "@type": "State", name: "Victoria" } },
        provider: { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` },
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
        mainEntity: mattressFaqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
      },
    ],
  };
}

export default function MattressCleaningPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <MattressHero breadcrumbs={breadcrumbs} />
        <SurfaceEveryNight />
        <WhatItCollects />
        <GentleAssessment />
        <RealisticResults />
        <MattressFAQ />
        <BeyondTheBed />
        <MattressCTA />
      </main>
      <Footer />
    </>
  );
}
