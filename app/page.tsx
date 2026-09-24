import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { QuoteCTA } from "@/components/QuoteCTA";
import { ServiceAreasPreview } from "@/components/ServiceAreasPreview";
import { ServicesPreview } from "@/components/ServicesPreview";
import { ServiceTypeSection } from "@/components/ServiceTypeSection";
import { StructuredData } from "@/components/StructuredData";
import { TrustBar } from "@/components/TrustBar";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <ServicesPreview />
        <WhyChooseUs />
        <HowItWorks />
        <ServiceTypeSection />
        <ServiceAreasPreview />
        <QuoteCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
