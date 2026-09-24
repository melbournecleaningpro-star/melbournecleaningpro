import type { NextConfig } from "next";

/**
 * Static export: `next build` writes a fully static site to /out,
 * which deploys directly to Cloudflare Pages (or Workers static assets).
 * If server features are needed later (e.g. a quote form API), switch to
 * the OpenNext Cloudflare adapter (@opennextjs/cloudflare).
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    // Static export has no image optimisation server. Hero/section visuals are
    // lightweight SVGs; swap in pre-optimised WebP/AVIF photos when available.
    unoptimized: true,
  },
};

export default nextConfig;
