import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

// Add new routes here as each page is built.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteConfig.url}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/services/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/house-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/about/`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteConfig.url}/contact/`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteConfig.url}/privacy-policy/`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/terms-and-conditions/`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/quote/`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteConfig.url}/faq/`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/service-areas/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/services/end-of-lease-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/commercial-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/deep-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/office-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/airbnb-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/move-in-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/post-construction-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/spring-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/window-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/carpet-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/upholstery-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/oven-cleaning/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/services/mattress-cleaning/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/services/tile-and-grout-cleaning/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/services/blind-cleaning/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/services/pressure-cleaning/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/services/ndis-cleaning/`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
