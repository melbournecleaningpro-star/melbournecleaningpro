import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

// Add new routes here as each page is built.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteConfig.url}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/services/end-of-lease-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/commercial-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/deep-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/office-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/airbnb-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/move-in-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/post-construction-cleaning/`, changeFrequency: "monthly", priority: 0.9 },
  ];
}
