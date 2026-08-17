import type { Metadata } from "next";

import { FooterSection, SiteHeader } from "@/components/landing";

export const metadata: Metadata = {
  title: "Privacy | Cyberwatt",
  description:
    "Cyberwatt privacy information for website visitors and smart-home power product inquiries.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="inner-page">
        <section className="page-hero page-hero-compact">
          <div className="page-hero-inner">
            <p className="page-eyebrow">Privacy</p>
            <h1>Privacy information for Cyberwatt visitors and early users.</h1>
            <p>Last updated: August 17, 2026</p>
          </div>
        </section>

        <section className="page-section">
          <div className="legal-content">
            <h2>Information we collect</h2>
            <p>
              Cyberwatt may collect contact details you provide, messages you
              send to the team, basic website analytics, and product usage data
              needed to support smart-home power visibility and control.
            </p>

            <h2>How we use information</h2>
            <p>
              We use information to respond to inquiries, provide access to the
              web app, support installations, improve product reliability, and
              communicate relevant product updates.
            </p>

            <h2>Product and device data</h2>
            <p>
              When a Cyberwatt device or app account is connected, the service
              may process power usage, scheduling, and control activity required
              to deliver the selected package.
            </p>

            <h2>Sharing</h2>
            <p>
              We do not sell personal information. We may share information with
              service providers or installation partners only where needed to
              operate, secure, or support the Cyberwatt service.
            </p>

            <h2>Contact</h2>
            <p>
              For privacy questions, email{" "}
              <a href="mailto:info@cyberwattenergy.com">info@cyberwattenergy.com</a>.
            </p>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
