import { faqs, serviceAreas, services } from "@/lib/content";
import { siteConfig } from "@/lib/site";

/**
 * JSON-LD built only from content visible on the page. Contact details and
 * social profiles are included automatically once real (non-placeholder)
 * values are set in lib/site.ts. No ratings, reviews or address are emitted.
 */
export function StructuredData() {
  const { url, name, description, contact } = siteConfig;
  const sameAs = siteConfig.social.map((s) => s.href).filter(Boolean);

  const business: Record<string, unknown> = {
    "@type": "LocalBusiness",
    "@id": `${url}/#business`,
    name,
    description,
    url: `${url}/`,
    logo: `${url}/icons/icon-512.png`,
    image: `${url}/opengraph-image.png`,
    areaServed: [
      { "@type": "City", name: "Melbourne", containedInPlace: { "@type": "State", name: "Victoria" } },
      ...serviceAreas.map((area) => ({ "@type": "Place", name: `${area}, VIC` })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.description },
      })),
    },
  };
  if (!contact.phone.isPlaceholder) business.telephone = contact.phone.href.replace("tel:", "");
  if (!contact.email.isPlaceholder) business.email = contact.email.display;
  if (sameAs.length) business.sameAs = sameAs;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url: `${url}/`,
        name,
        inLanguage: "en-AU",
        publisher: { "@id": `${url}/#business` },
      },
      business,
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
