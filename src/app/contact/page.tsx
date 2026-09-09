import type { Metadata } from "next";
import {
  ArrowRight,
  Globe2,
  Handshake,
  HousePlug,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Send,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { APP_URL } from "@/components/landing/constants";
import { FooterSection, SiteHeader } from "@/components/landing";
import { ContactLiveChat } from "@/components/landing/ContactLiveChat";
import { ContactOptionActions } from "@/components/landing/ContactOptionActions";

export const metadata: Metadata = {
  title: "Contact Cyberwatt | Smart-Home Power Control",
  description:
    "Contact Cyberwatt about smart-home power visibility, scheduling, junction box control, and selected switch control.",
};

const EMAIL = "info@cyberwattenergy.com";
const WEBSITE = "https://cyberwattenergy.com";
const SERVICE_BASE = "Lagos, Nigeria";
const PHONE = "+2348064954840";
const PHONE_DISPLAY = "+234 806 495 4840";

const contactMethods: Array<{
  icon: LucideIcon;
  label: string;
  value: string;
  detail: string;
  actionLabel?: string;
  copyLabel: string;
  copyValue: string;
  external?: boolean;
  href?: string;
}> = [
  {
    icon: Phone,
    label: "Phone",
    value: PHONE_DISPLAY,
    detail: "For installation, rollout, and package enquiries.",
    actionLabel: "Call",
    copyLabel: "Copy number",
    copyValue: PHONE_DISPLAY,
    href: `tel:${PHONE}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: PHONE_DISPLAY,
    detail: "Send a quick message about access, support, or installation.",
    actionLabel: "Chat",
    copyLabel: "Copy number",
    copyValue: PHONE_DISPLAY,
    external: true,
    href: `https://wa.me/${PHONE.replace(/\D/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    detail: "Send product, pilot, partnership, or support questions.",
    actionLabel: "Email",
    copyLabel: "Copy email",
    copyValue: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: SERVICE_BASE,
    detail: "Cyberwatt service base for pilot and installation conversations.",
    copyLabel: "Copy address",
    copyValue: SERVICE_BASE,
  },
  {
    icon: Globe2,
    label: "Website",
    value: "cyberwattenergy.com",
    detail: "Main Cyberwatt web presence and customer entry point.",
    actionLabel: "Visit",
    copyLabel: "Copy link",
    copyValue: WEBSITE,
    external: true,
    href: WEBSITE,
  },
];

const contactCards: Array<{
  icon: LucideIcon;
  label: string;
  title: string;
  text: string;
}> = [
  {
    icon: HousePlug,
    label: "Pilot setup",
    title: "Pilot conversations",
    text: "Discuss the first home, apartment, or workspace where Cyberwatt should be installed.",
  },
  {
    icon: PackageCheck,
    label: "Package fit",
    title: "Package guidance",
    text: "Choose between usage visibility, junction box control, or custom selected-switch control.",
  },
  {
    icon: Handshake,
    label: "Growth channels",
    title: "Partnerships",
    text: "Talk about installers, real estate rollouts, and smart-home energy partnerships.",
  },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/cyberwatt",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5ZM.4 8.02h4.18V23H.4V8.02ZM8.08 8.02h4v2.04h.06c.56-1.06 1.93-2.18 3.98-2.18 4.26 0 5.04 2.8 5.04 6.44V23h-4.18v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V23H8.08V8.02Z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/cyberwatt",
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path d="M18.9 2h3.68l-8.04 9.19L24 22h-7.4l-5.8-6.96L4.18 22H.5l8.6-9.83L0 2h7.6l5.24 6.24L18.9 2Zm-1.29 18.1h2.04L6.5 3.8H4.3l13.31 16.3Z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/cyberwatt",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.27h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/cyberwattenergy?stkn=MWF0anpvYndud2Z6Yg%3D%3D&utm_source=qr",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <defs>
          <linearGradient id="instagram-contact-gradient" x1="2" x2="22" y1="22" y2="2" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#feda75" />
            <stop offset="0.25" stopColor="#fa7e1e" />
            <stop offset="0.5" stopColor="#d62976" />
            <stop offset="0.75" stopColor="#962fbf" />
            <stop offset="1" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm9.65 2.7a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7ZM12 7.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 2a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Z" />
      </svg>
    ),
  },
];

function ContactMethod({
  actionLabel,
  copyLabel,
  copyValue,
  detail,
  external,
  href,
  icon: Icon,
  label,
  value,
}: (typeof contactMethods)[number]) {
  return (
    <article className="contact-method">
      <span className="contact-method-icon">
        <Icon size={22} aria-hidden="true" />
      </span>

      <span className="contact-method-content">
        <small>{label}</small>
        <strong>{value}</strong>
        <em>{detail}</em>
        <ContactOptionActions
          actionLabel={actionLabel}
          copyLabel={copyLabel}
          copyValue={copyValue}
          external={external}
          href={href}
        />
      </span>
    </article>
  );
}

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

        <section className="page-section contact-page-section">
          <div className="contact-grid contact-page-grid">
            <div className="contact-main-column">
              <article className="contact-panel contact-panel-primary">
                <div className="contact-panel-heading">
                  <p className="page-eyebrow">Reach the team</p>
                  <h2>Clear channels for pilots, packages, and support.</h2>
                  <p>
                    Choose the route that matches the conversation. Email is
                    active now, live chat is available from this page, and the
                    phone and WhatsApp line is active for direct enquiries.
                  </p>
                </div>

                <div className="contact-method-list">
                  {contactMethods.map((method) => (
                    <ContactMethod {...method} key={method.label} />
                  ))}
                </div>
              </article>

              <article className="contact-panel contact-social-panel">
                <div>
                  <p className="page-eyebrow">Social platforms</p>
                  <h2>Follow Cyberwatt.</h2>
                </div>
                <div className="contact-socials" aria-label="Cyberwatt social media links">
                  {socialLinks.map((social) => (
                    <a
                      href={social.href}
                      key={social.label}
                      rel="noreferrer"
                      target="_blank"
                      title={`${social.label} profile`}
                      aria-label={`${social.label} profile`}
                    >
                      {social.icon}
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </article>
            </div>

            <aside className="contact-side-column">
              <ContactLiveChat />

              <article className="contact-panel contact-actions-panel">
                <span className="contact-action-icon" aria-hidden="true">
                  <Send size={24} />
                </span>
                <h2>Ready to plan a rollout?</h2>
                <p>
                  Open the web app if you already have access, or email the team
                  for package guidance and installation planning.
                </p>
                <div className="contact-action-buttons">
                  <a className="primary-action" href={APP_URL}>
                    Open web app
                    <ArrowRight size={18} aria-hidden="true" />
                  </a>
                  <a className="secondary-action" href={`mailto:${EMAIL}`}>
                    Send email
                    <ArrowRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </aside>
          </div>
        </section>

        <section className="page-section contact-help-section">
          <div className="page-section-intro">
            <p>What we can help with</p>
            <h2>Get routed to the right Cyberwatt conversation.</h2>
            <span>
              Whether you are comparing packages, planning an installation, or
              exploring a partnership, the contact path should make the next
              step obvious.
            </span>
          </div>

          <div className="contact-help-grid">
            {contactCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <article className="contact-help-card" key={card.title}>
                  <span className="contact-help-index">0{index + 1}</span>
                  <span className="contact-help-icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.8} />
                  </span>
                  <small>{card.label}</small>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
