import { ArrowRight, Mail } from "lucide-react";

import { APP_URL } from "./constants";
import { LogoImage, LogoWordmark } from "./Logo";

const footerLinks = [
  {
    title: "Website",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Start",
    links: [
      { label: "Open web app", href: APP_URL },
      { label: "Contact team", href: "mailto:hello@cyberwattenergy.com" },
      { label: "Back to top", href: "#top" },
    ],
  },
];

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
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </nav>

        <div className="footer-contact">
          <h2>Cyberwatt Energy</h2>
          <a href="mailto:hello@cyberwattenergy.com">
            <Mail size={16} aria-hidden="true" />
            hello@cyberwattenergy.com
          </a>
          <a href={APP_URL} className="footer-app-link">
            Launch app
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Cyberwatt Energy. All rights reserved.</p>
        <a href="#top">
          Back to top
          <ArrowRight size={15} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
