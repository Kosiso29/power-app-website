import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { APP_URL } from "./constants";
import { LogoImage, LogoWordmark } from "./Logo";

export function SiteHeader() {
  return (
    <div className="page-nav-shell">
      <header className="nav page-nav">
        <Link className="brand" href="/" aria-label="Cyberwatt home">
          <LogoImage className="brand-mark" />
          <LogoWordmark className="brand-wordmark" />
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a className="nav-button" href={APP_URL}>
          Open app
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </header>
    </div>
  );
}
