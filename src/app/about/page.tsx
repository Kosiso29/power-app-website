import type { Metadata } from "next";
import { ArrowRight, BarChart3, ShieldCheck, Zap } from "lucide-react";

import { FooterSection, SiteHeader } from "@/components/landing";

export const metadata: Metadata = {
  title: "About Cyberwatt | Smart-Home Power Control",
  description:
    "Learn about Cyberwatt and its approach to smart-home power visibility, scheduling, and remote control.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="inner-page">
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="page-eyebrow">About Cyberwatt</p>
            <h1>Power control for homes that expect more from electricity.</h1>
            <p>
              Cyberwatt is building a smart-home power layer for visibility,
              scheduling, and remote control across everyday electrical systems.
            </p>
            <a className="primary-action" href="/contact">
              Talk to the team
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="page-section">
          <div className="page-section-intro">
            <span>What guides us</span>
            <h2>Clear control before complexity.</h2>
            <p>
              Cyberwatt focuses on practical smart-power upgrades: start with
              usage visibility, add junction box control, then expand to selected
              switches where a home or workspace needs deeper control.
            </p>
          </div>

          <div className="page-card-grid">
            <article className="page-card">
              <BarChart3 size={24} aria-hidden="true" />
              <h3>Visibility first</h3>
              <p>
                Give households a clearer view of energy behavior before asking
                them to change routines.
              </p>
            </article>
            <article className="page-card">
              <Zap size={24} aria-hidden="true" />
              <h3>Control where it matters</h3>
              <p>
                Enable remote access and scheduling at the junction box or at
                selected switches based on the package.
              </p>
            </article>
            <article className="page-card">
              <ShieldCheck size={24} aria-hidden="true" />
              <h3>Calm by design</h3>
              <p>
                Keep the experience focused, readable, and useful for repeated
                daily power decisions.
              </p>
            </article>
          </div>
        </section>

        <section className="page-section page-section-dark">
          <div className="page-split">
            <div>
              <span>How we roll out</span>
              <h2>Start small, then expand deliberately.</h2>
            </div>
            <ul className="feature-list">
              <li>Install the Cyberwatt device and connect the web app.</li>
              <li>Expose usage statistics and power consumption trends.</li>
              <li>Add junction box control and in-app scheduling.</li>
              <li>Upgrade to selected switch control for rooms or appliances.</li>
            </ul>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
