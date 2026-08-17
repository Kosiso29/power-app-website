import type { Metadata } from "next";
import { ArrowRight, Globe2, Mail, MapPin } from "lucide-react";

import { APP_URL } from "@/components/landing/constants";
import { FooterSection, SiteHeader } from "@/components/landing";

export const metadata: Metadata = {
  title: "Contact Cyberwatt | Smart-Home Power Control",
  description:
    "Contact Cyberwatt about smart-home power visibility, scheduling, junction box control, and selected switch control.",
};

const contactCards = [
  {
    title: "Pilot conversations",
    text: "Discuss the first home, apartment, or workspace where Cyberwatt should be installed.",
  },
  {
    title: "Package guidance",
    text: "Choose between usage visibility, junction box control, or custom selected-switch control.",
  },
  {
    title: "Partnerships",
    text: "Talk about installers, real estate rollouts, and smart-home energy partnerships.",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="inner-page">
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="page-eyebrow">Contact Cyberwatt</p>
            <h1>Let’s make the first smart-power rollout clear.</h1>
            <p>
              Reach the Cyberwatt team for pilots, package guidance, installer
              conversations, and product access.
            </p>
          </div>
        </section>

        <section className="page-section">
          <div className="contact-grid">
            <article className="contact-panel">
              <h2>Direct contact</h2>
              <a href="mailto:info@cyberwattenergy.com">
                <Mail size={18} aria-hidden="true" />
                info@cyberwattenergy.com
              </a>
              <span>
                <MapPin size={18} aria-hidden="true" />
                Service base: Lagos, Nigeria
              </span>
              <a href="https://cyberwattenergy.com">
                <Globe2 size={18} aria-hidden="true" />
                cyberwattenergy.com
              </a>
              <a className="primary-action" href={APP_URL}>
                Open web app
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </article>

            <div className="page-card-grid contact-card-grid">
              {contactCards.map((card) => (
                <article className="page-card" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
