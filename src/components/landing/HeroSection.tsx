import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { APP_URL } from "./constants";
import { AppPreview } from "./AppPreview";
import { LogoImage, LogoWordmark } from "./Logo";

export function HeroSection() {
  return (
    <section className="hero">
      <Image
        src="/cyberwatt-hero.png"
        alt="Modern smart home with connected energy control devices"
        fill
        priority
        sizes="100vw"
        className="hero-visual"
      />
      <div className="hero-shade" />

      <header className="nav">
        <a className="brand" href="#top" aria-label="Cyberwatt home">
          <LogoImage className="brand-mark" />
          <LogoWordmark className="brand-wordmark" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="nav-button" href={APP_URL}>
          Get started
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </header>

      <div id="top" className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Smart power for any home</p>
          <h1>
            <span>Take </span>
            <span>Control</span>
          </h1>
          <p className="hero-lede">
            Switch appliances, automate routines, and see your energy clearly from
            one calm, connected command center.
          </p>
          <div id="download" className="download-row">
            <a href={APP_URL} className="primary-action">
              Get started
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#how" className="secondary-action">
              See how it works
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <AppPreview />
      </div>
    </section>
  );
}
