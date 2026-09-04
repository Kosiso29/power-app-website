import {
  AboutPowerSection,
  CtaSection,
  FaqSection,
  FeatureShowcaseSection,
  FooterSection,
  HeroSection,
  HowItWorksSection,
  PricingSection,
  ProductBandSection,
  RemoteMomentSection,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <FeatureShowcaseSection />
        <HowItWorksSection />
        <RemoteMomentSection />
        <ProductBandSection />
        <AboutPowerSection />
        <PricingSection />
        <div className="closing-band">
          <FaqSection />
          <CtaSection />
        </div>
      </main>
      <FooterSection />
    </>
  );
}
