import type { Metadata } from "next";

import { FooterSection, PricingSection, SiteHeader } from "@/components/landing";

export const metadata: Metadata = {
  title: "Cyberwatt Pricing | Smart-Home Power Packages",
  description:
    "Compare Cyberwatt packages for usage visibility, junction box control, and custom selected-switch control.",
};

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="inner-page pricing-page">
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="page-eyebrow">Packages</p>
            <h1>Choose the rollout that matches your home’s control needs.</h1>
            <p>
              Start with usage visibility, add scheduling and junction box
              control, or customize selected switches for deeper control.
            </p>
          </div>
        </section>
        <PricingSection />
      </main>
      <FooterSection />
    </>
  );
}
