import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center bg-cream">
      <Container className="py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-ink-soft">Sorry, we couldn&apos;t find that page.</p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          Back to home
        </a>
      </Container>
    </main>
  );
}
