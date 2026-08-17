import Link from "next/link";
import { ArrowRight, ExternalLink, Globe2, Mail, MapPin } from "lucide-react";

import { APP_URL } from "./constants";
import { LogoImage, LogoWordmark } from "./Logo";

const footerLinks = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How it works", href: "/#how" },
      { label: "Packages", href: "/pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Open web app", href: APP_URL, external: true },
      { label: "Back to top", href: "#top" },
    ],
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
    href: "https://www.instagram.com/cyberwatt",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <defs>
          <linearGradient id="instagram-footer-gradient" x1="2" x2="22" y1="22" y2="2" gradientUnits="userSpaceOnUse">
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

function FooterLink({
  external,
  href,
  label,
}: {
  external?: boolean;
  href: string;
  label: string;
}) {
  if (href.startsWith("#")) {
    return <a href={href}>{label}</a>;
  }

  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} rel={external ? "noreferrer" : undefined} target={external ? "_blank" : undefined}>
        {label}
        {external ? <ExternalLink size={13} aria-hidden="true" /> : null}
      </a>
    );
  }

  return <Link href={href}>{label}</Link>;
}

export function FooterSection() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-block">
          <a className="footer-brand" href="#top" aria-label="Cyberwatt home">
            <LogoImage className="footer-brand-mark" />
            <LogoWordmark className="footer-wordmark" />
          </a>
          <p>
            Smart-home power visibility, scheduling, and remote control for homes
            that want calmer command over everyday energy use.
          </p>
          <div className="footer-brand-colors" aria-label="Cyberwatt brand colors">
            <span className="footer-color footer-color-blue" />
            <span className="footer-color footer-color-cyan" />
            <span className="footer-color footer-color-lime" />
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map((link) => (
                <FooterLink {...link} key={link.label} />
              ))}
            </div>
          ))}
        </nav>

        <div className="footer-contact">
          <h2>Contact</h2>
          <a href="mailto:info@cyberwattenergy.com">
            <Mail size={16} aria-hidden="true" />
            info@cyberwattenergy.com
          </a>
          <span className="footer-detail">
            <MapPin size={16} aria-hidden="true" />
            Service base: Lagos, Nigeria
          </span>
          <a href="https://cyberwattenergy.com">
            <Globe2 size={16} aria-hidden="true" />
            cyberwattenergy.com
          </a>
          <a href={APP_URL} className="footer-app-link">
            Launch app
            <ArrowRight size={15} aria-hidden="true" />
          </a>
          <div className="footer-socials" aria-label="Social media">
            {socialLinks.map((social) => (
              <a
                aria-label={`${social.label} profile`}
                href={social.href}
                key={social.label}
                rel="noreferrer"
                target="_blank"
                title={`${social.label} profile`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Cyberwatt. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="#top">
            Back to top
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
