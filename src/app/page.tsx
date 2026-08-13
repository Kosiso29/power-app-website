import {
  CtaSection,
  FaqSection,
  FeatureShowcaseSection,
  HeroSection,
  HowItWorksSection,
  PricingSection,
  ProductBandSection,
  RemoteMomentSection,
  TestimonialsSection,
} from "@/components/landing";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureShowcaseSection />
      <HowItWorksSection />
      <RemoteMomentSection />
      <ProductBandSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
