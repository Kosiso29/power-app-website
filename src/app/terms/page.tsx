import type { Metadata } from "next";

import { FooterSection, SiteHeader } from "@/components/landing";

export const metadata: Metadata = {
  title: "Terms | Cyberwatt",
  description:
    "Cyberwatt terms information for website visitors, early access users, and smart-home power product inquiries.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="inner-page">
        <section className="page-hero page-hero-compact">
          <div className="page-hero-inner">
            <p className="page-eyebrow">Terms</p>
            <h1>Terms information for Cyberwatt website and early access use.</h1>
            <p>Last updated: August 17, 2026</p>
          </div>
        </section>

        <section className="page-section">
          <div className="legal-content">
            <h2>Use of the website</h2>
            <p>
              The Cyberwatt website provides product, package, and company
              information. You agree not to misuse the site, interfere with its
              security, or attempt unauthorized access to related systems.
            </p>

            <h2>Early access and product availability</h2>
            <p>
              Cyberwatt packages, pilots, installation timelines, and product
              features may change as the service develops. Any rollout details
              should be confirmed directly with the Cyberwatt team.
            </p>

            <h2>App and device use</h2>
            <p>
              The web app and connected devices should be used only for the
              property, equipment, and electrical setup approved during
              installation or onboarding.
            </p>

            <h2>Content</h2>
            <p>
              Website text, visuals, logos, and brand materials belong to
              Cyberwatt unless otherwise stated.
            </p>

            <h2>Contact</h2>
            <p>
              For terms or service questions, email{" "}
              <a href="mailto:info@cyberwattenergy.com">info@cyberwattenergy.com</a>.
            </p>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
