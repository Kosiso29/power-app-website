import {
  CtaSection,
  FaqSection,
  FeatureShowcaseSection,
  HeroSection,
  HowItWorksSection,
  PricingSection,
  ProductBandSection,
  TestimonialsSection,
} from "@/components/landing";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureShowcaseSection />
      <HowItWorksSection />
      <ProductBandSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
