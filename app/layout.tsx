import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { pageRobots, siteConfig } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const title = `${siteConfig.name} | House & Commercial Cleaning in Melbourne`;

// Favicon, Apple touch icon, OG and Twitter images come from the metadata
// file conventions in /app (favicon.ico, icon.svg, apple-icon.png,
// opengraph-image.png, twitter-image.png). Regenerate with `npm run icons`.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
  },
  // Pre-launch: noindex site-wide until NEXT_PUBLIC_ALLOW_INDEXING=true (see lib/site.ts).
  robots: pageRobots,
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#0b6e69",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
