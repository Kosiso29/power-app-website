import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section id="contact" className="cta-section">
      <div>
        <p className="eyebrow dark">Start smarter</p>
        <h2>Bring your home’s power into reach.</h2>
        <p>
          Launch a Cyberwatt pilot and turn everyday power control into a sharper,
          more connected smart-home experience.
        </p>
      </div>
      <a href="mailto:hello@cyberwatt.com" className="primary-action">
        Request early access
        <ArrowRight size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
