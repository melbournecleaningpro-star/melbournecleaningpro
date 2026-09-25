import type { Metadata } from "next";
import type { Crumb } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { AfterContact, ContactArea, ContactCTA, ContactHero, ContactMain, NotSure, OtherWays } from "@/components/contact/Sections";
import { contactFaqs, PAGE_PATH } from "@/lib/contact";
import { pageRobots, siteConfig } from "@/lib/site";

const title = "Contact Melbourne Cleaning Pro | Cleaning Services Melbourne";
const description =
  "Contact Melbourne Cleaning Pro to ask about residential or commercial cleaning services in Melbourne or request a cleaning quote.";

// Page-level openGraph/twitter objects replace the root ones, so the shared
// brand share image (app/opengraph-image.png) is referenced explicitly.
const shareImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name}: professional cleaning services in Melbourne`,
};

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: PAGE_PATH,
    siteName: siteConfig.name,
    title,
    description,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
  robots: pageRobots,
};

const breadcrumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Contact" }];

// References the LocalBusiness entity defined on the homepage by @id. Contact
// details stay out of schema while they're flagged as placeholders in lib/site.ts.
function structuredData() {
  const { url, name, contact } = siteConfig;
  const pageUrl = `${url}${PAGE_PATH}`;
  const business: Record<string, unknown> = { "@type": "LocalBusiness", "@id": `${url}/#business`, name, url: `${url}/` };
  if (!contact.email.isPlaceholder) business.email = contact.email.display;
  if (!contact.phone.isPlaceholder) business.telephone = contact.phone.href.replace("tel:", "");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${pageUrl}#webpage`,
        name: title,
        description,
        url: pageUrl,
        isPartOf: { "@type": "WebSite", "@id": `${url}/#website`, name, url: `${url}/` },
        about: business,
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
        mainEntity: contactFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={structuredData()} />
      <Header />
      <main id="main">
        <ContactHero breadcrumbs={breadcrumbs} />
        <ContactMain />
        <OtherWays />
        <AfterContact />
        <NotSure />
        <ContactArea />
        <FAQ
          items={contactFaqs}
          eyebrow="FAQs"
          title="Contact FAQs"
          intro="Quick answers about getting in touch."
          className="py-20 sm:py-24"
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
