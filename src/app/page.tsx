import {
  CtaSection,
  FaqSection,
  FeatureShowcaseSection,
  HeroSection,
  HowItWorksSection,
  PricingSection,
  ProductBandSection,
  RemoteMomentSection,
} from "@/components/landing";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureShowcaseSection />
      <HowItWorksSection />
      <RemoteMomentSection />
      <ProductBandSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
