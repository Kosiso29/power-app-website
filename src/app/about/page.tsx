import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CircuitBoard,
  Gauge,
  Home,
  PlugZap,
  Router,
  ShieldCheck,
  SlidersHorizontal,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { FooterSection, SiteHeader } from "@/components/landing";

export const metadata: Metadata = {
  title: "About Cyberwatt | Smart-Home Power Control",
  description:
    "Learn about Cyberwatt and its approach to smart-home power visibility, scheduling, and remote control.",
};

const controlSignals = [
  { label: "Visibility", text: "Usage trends and power behavior" },
  { label: "Scheduling", text: "Routines that match daily life" },
  { label: "Control", text: "Junction box and selected switches" },
];

const principles: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: BarChart3,
    title: "Make usage visible first",
    text: "People make better power decisions when the app shows what is happening clearly before asking them to automate anything.",
  },
  {
    icon: SlidersHorizontal,
    title: "Keep control intentional",
    text: "Cyberwatt is designed around calm, deliberate controls for real home routines, not noisy switches scattered across an app.",
  },
  {
    icon: ShieldCheck,
    title: "Respect the electrical layer",
    text: "Remote access should feel dependable, readable, and careful because it sits close to the systems people trust every day.",
  },
];

const rolloutSteps = [
  {
    step: "01",
    title: "Connect the home",
    text: "Install the Cyberwatt device, connect the web app, and map the first power points clearly.",
  },
  {
    step: "02",
    title: "Reveal the pattern",
    text: "Turn usage into readable statistics so the home can see what is running and when it matters.",
  },
  {
    step: "03",
    title: "Automate the routine",
    text: "Add scheduling and junction box control for the everyday actions that should not require guesswork.",
  },
  {
    step: "04",
    title: "Expand where needed",
    text: "Move from broad control to selected switches for rooms, appliances, and custom power priorities.",
  },
];

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
            <Link className="primary-action" href="/contact">
              Talk to the team
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="about-story-section">
          <div className="about-story-grid">
            <div className="about-story-copy">
              <span>Why Cyberwatt exists</span>
              <h2>We are making the home’s power system feel visible and within reach.</h2>
              <p>
                Electricity already shapes the rhythm of a home. Cyberwatt turns
                that invisible layer into something people can see, schedule, and
                control without making the experience feel technical.
              </p>
              <p>
                The product starts with clear usage statistics, then grows into
                junction box control and selected-switch access for homes that
                need deeper command over appliances, rooms, and routines.
              </p>
              <div className="about-signal-row" aria-label="Cyberwatt focus areas">
                {controlSignals.map((signal) => (
                  <span key={signal.label}>
                    <strong>{signal.label}</strong>
                    <small>{signal.text}</small>
                  </span>
                ))}
              </div>
            </div>

            <div className="about-control-board" aria-label="Cyberwatt smart power control model">
              <span className="about-board-logo" aria-hidden="true" />
              <div className="about-board-header">
                <span>Home power layer</span>
                <strong>Connected</strong>
              </div>
              <div className="about-board-wave" aria-hidden="true">
                {[42, 68, 54, 82, 62, 92, 74, 56, 86].map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="about-board-list">
                <div>
                  <CircuitBoard size={18} aria-hidden="true" />
                  <span>
                    <strong>Junction box</strong>
                    <small>scheduled control</small>
                  </span>
                </div>
                <div>
                  <Home size={18} aria-hidden="true" />
                  <span>
                    <strong>Rooms</strong>
                    <small>selected switches</small>
                  </span>
                </div>
                <div>
                  <PlugZap size={18} aria-hidden="true" />
                  <span>
                    <strong>Appliances</strong>
                    <small>remote actions</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-principles-section page-section">
          <div className="about-section-heading">
            <span>What guides us</span>
            <h2>Clear control before complexity.</h2>
            <p>
              Cyberwatt is not trying to make homes feel more complicated. The
              point is to make power behavior easier to understand, safer to act
              on, and simpler to repeat every day.
            </p>
          </div>

          <div className="about-principles-grid">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article className="about-principle-card" key={principle.title}>
                  <span>
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="about-leadership-section">
          <div className="about-leadership-inner">
            <div className="about-section-heading">
              <span>Leadership</span>
              <h2>Founder-led, with room for the full team story.</h2>
              <p>
                Cyberwatt is being shaped around practical installations, real
                home routines, and the trust required when software connects to
                everyday power decisions.
              </p>
            </div>

            <div className="about-founder-grid">
              <article className="about-founder-card about-founder-card-primary">
                <div className="about-founder-photo">
                  <Image
                    src="/cyberwatt-founder-ceo-soft-blue.png"
                    alt="Cyberwatt Founder and CEO"
                    fill
                    sizes="(max-width: 720px) 100vw, 420px"
                  />
                </div>
                <div className="about-founder-meta">
                  <span>Leadership 01</span>
                  <h3>Founder & CEO</h3>
                  <p>
                    Leading Cyberwatt’s product direction, smart-home power
                    strategy, and the rollout path from visibility to deeper
                    remote control.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="about-rollout-section">
          <div className="about-rollout-inner">
            <div className="about-rollout-copy">
              <span>How we roll out</span>
              <h2>Start small, then expand deliberately.</h2>
              <p>
                Cyberwatt is built as a practical path, not an all-or-nothing
                installation. A home can begin with visibility and grow into
                richer control as the need becomes clear.
              </p>
              <div className="about-rollout-actions">
                <Link className="primary-action" href="/pricing">
                  View packages
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link className="secondary-action" href="/contact">
                  Plan a rollout
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <ol className="about-timeline">
              {rolloutSteps.map((item) => (
                <li key={item.step}>
                  <span>{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="about-rollout-strip" aria-hidden="true">
            <span>
              <Router size={18} />
              Web app connected
            </span>
            <span>
              <Gauge size={18} />
              Usage visible
            </span>
            <span>
              <Zap size={18} />
              Control ready
            </span>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
