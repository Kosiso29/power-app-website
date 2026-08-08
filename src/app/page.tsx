import Image from "next/image";
import {
  ArrowRight,
  BellRing,
  CalendarClock,
  ChartBar,
  Check,
  ChevronDown,
  Home as HomeIcon,
  type LucideIcon,
  LockKeyhole,
  PlugZap,
  Power,
  Smartphone,
  Wifi,
} from "lucide-react";

const APP_URL = "https://app.cyberwattenergy.com";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Instant remote control",
    description:
      "Switch lights, sockets, and appliances the moment you think of it, from anywhere.",
    icon: Power,
  },
  {
    title: "Smarter schedules",
    description:
      "Set routines that match real life: mornings, nights, trips, work hours, and weekends.",
    icon: CalendarClock,
  },
  {
    title: "Live energy insight",
    description:
      "See what is running, spot waste quickly, and make better power decisions before costs climb.",
    icon: ChartBar,
  },
  {
    title: "Power-aware alerts",
    description:
      "Know when something changes, stays on too long, or needs your attention.",
    icon: BellRing,
  },
];

const steps = [
  {
    title: "Fit the controller",
    description:
      "Connect Cyberwatt to the switches, circuits, and appliance groups that matter most.",
    icon: PlugZap,
  },
  {
    title: "Pair once",
    description:
      "Bring it online, name each zone, and make every controlled point easy to recognize.",
    icon: Wifi,
  },
  {
    title: "Run it anywhere",
    description:
      "Use the app to switch, schedule, monitor, and stay in command wherever the day takes you.",
    icon: Smartphone,
  },
];

const testimonials = [
  {
    quote:
      "Cyberwatt takes the guesswork out of power. I know what is on, what is planned, and what needs action.",
    name: "Home pilot user",
    role: "Smart-home early adopter",
  },
  {
    quote:
      "It feels like the missing control layer for homes and small properties: simple, fast, and confidence-building.",
    name: "Facilities operator",
    role: "Small property manager",
  },
  {
    quote:
      "Remote access changes the feeling completely. I can act on power issues without being in the room.",
    name: "Rental owner",
    role: "Multi-unit host",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "Pilot",
    description: "For proving smart power control in one home.",
    points: ["Remote switching", "Energy view", "Core schedules"],
  },
  {
    name: "Smart Home",
    price: "Custom",
    description: "For homes that want everyday control, visibility, and automation.",
    points: [
      "Multiple zones",
      "Usage intelligence",
      "Power alerts",
      "Guided setup",
    ],
    featured: true,
  },
  {
    name: "Property",
    price: "Custom",
    description: "For rentals, offices, and spaces that need managed power oversight.",
    points: [
      "Multi-device rollout",
      "Owner visibility",
      "Routine controls",
      "Deployment guidance",
    ],
  },
];

const capabilities: Feature[] = [
  {
    title: "Control",
    description: "Act on connected appliances instantly",
    icon: HomeIcon,
  },
  {
    title: "Automate",
    description: "Let routines handle repeated power moments",
    icon: CalendarClock,
  },
  {
    title: "Measure",
    description: "See the habits behind your energy use",
    icon: ChartBar,
  },
  {
    title: "Protect",
    description: "Keep access, alerts, and control reliable",
    icon: LockKeyhole,
  },
];

const faqs = [
  {
    question: "What does Cyberwatt control?",
    answer:
      "Cyberwatt is designed for connected switches, appliance groups, and the power routines that shape daily home life.",
  },
  {
    question: "Can I control my home remotely?",
    answer:
      "Yes. Cyberwatt is built around remote power control, so you can act even when you are away from the room or property.",
  },
  {
    question: "Is this only an energy dashboard?",
    answer:
      "No. It combines switching, scheduling, monitoring, and alerts into one practical smart-home power layer.",
  },
  {
    question: "Why is pricing custom?",
    answer:
      "Every setup is different. Device count, installation scope, and property size shape the right package.",
  },
];

function AppPreview() {
  return (
    <div className="app-preview" aria-label="Cyberwatt app preview">
      <div className="phone-shell">
        <div className="phone-status">
          <span className="phone-brand">
            <LogoImage className="phone-logo-mark" />
            <LogoWordmark className="phone-wordmark" />
          </span>
          <strong>Online</strong>
        </div>
        <div className="power-widget">
          <p>Home remote</p>
          <div className="remote-line-graph" aria-hidden="true">
            <svg viewBox="0 0 180 74" focusable="false">
              <defs>
                <linearGradient id="remoteGraphLine" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
                  <stop offset="52%" stopColor="rgba(248, 250, 252, 0.9)" />
                  <stop offset="100%" stopColor="rgba(37, 99, 235, 0.88)" />
                </linearGradient>
                <linearGradient id="remoteGraphFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(37, 99, 235, 0.26)" />
                  <stop offset="100%" stopColor="rgba(37, 99, 235, 0)" />
                </linearGradient>
              </defs>
              <path
                className="remote-graph-fill"
                d="M8 58 C28 52 34 34 52 39 C72 45 78 24 98 27 C120 30 126 14 144 18 C158 21 164 15 172 10 L172 70 L8 70 Z"
              />
              <path
                className="remote-graph-line"
                d="M8 58 C28 52 34 34 52 39 C72 45 78 24 98 27 C120 30 126 14 144 18 C158 21 164 15 172 10"
              />
              <circle cx="52" cy="39" r="3.3" />
              <circle cx="98" cy="27" r="3.3" />
              <circle cx="144" cy="18" r="3.3" />
            </svg>
          </div>
          <span>Remote access active</span>
          <div className="remote-power-button" aria-hidden="true">
            <LogoImage className="remote-logo-mark" />
          </div>
        </div>
        <div className="switch-list">
          {["Refrigerator", "Air conditioner", "Security lights"].map(
            (item, index) => (
              <div key={item}>
                <span>
                  <span className="switch-logo-mark" aria-hidden="true" />
                  {item}
                </span>
                <strong>{index === 1 ? "Off" : index === 2 ? "Timed" : "On"}</strong>
              </div>
            )
          )}
        </div>
        <div className="mini-chart" aria-hidden="true">
          {[42, 64, 38, 76, 58, 88, 69].map((height, index) => (
            <span key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LogoImage({ className = "" }: { className?: string }) {
  return (
    <span className={`logo-image ${className}`} aria-hidden="true">
      <Image src="/cyberwatt-logo.png" alt="" fill sizes="72px" />
    </span>
  );
}

function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`logo-wordmark ${className}`}>
      <span>Cyber</span>
      <span>watt</span>
    </span>
  );
}

function SectionIntro({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-intro">
      <p>{label}</p>
      <h2>{title}</h2>
      {text ? <span>{text}</span> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
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
              Switch appliances, automate routines, and see your energy clearly
              from one calm, connected command center.
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

      <section id="features" className="section">
        <SectionIntro
          label="Features"
          title="Command every switch, schedule, and power moment from one clean app."
          text="Cyberwatt brings remote control, automation, energy insight, and timely alerts into a premium smart-home power experience."
        />
        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="feature-card" key={feature.title}>
                <Icon size={24} aria-hidden="true" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="how" className="how-section">
        <SectionIntro
          label="How it works"
          title="From installed to in control, without the complexity."
          text="A simple path from hardware setup to everyday power confidence: connect, label, automate, and act."
        />
        <div className="steps">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article key={step.title}>
                <span>0{index + 1}</span>
                <Icon size={28} aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="product-band">
        <div>
          <p className="eyebrow dark">Built for confident control</p>
          <h2>Cyberwatt makes home power visible, responsive, and easy to command.</h2>
          <p>
            The experience turns everyday electricity into a cleaner system:
            direct actions, readable energy signals, fewer surprises, and less
            technical noise between you and the switches you rely on.
          </p>
        </div>
        <div className="capability-list">
          {capabilities.map((item) => {
            const ItemIcon = item.icon;

            return (
              <article key={item.title}>
                <ItemIcon size={23} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section testimonials-section">
        <SectionIntro
          label="Testimonials"
          title="Built for people who want fewer power surprises."
        />
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name}>
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="section pricing-section">
        <SectionIntro
          label="Pricing"
          title="Choose the right path for your first smart-power rollout."
          text="Start small, scale deliberately, and match the package to the number of switches, rooms, and properties you want to control."
        />
        <div className="pricing-grid">
          {pricing.map((plan) => (
            <article
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
              key={plan.name}
            >
              {plan.featured ? <span className="badge">Recommended</span> : null}
              <h3>{plan.name}</h3>
              <strong>{plan.price}</strong>
              <p>{plan.description}</p>
              <ul>
                {plan.points.map((point) => (
                  <li key={point}>
                    <Check size={17} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <a href="#contact">
                Talk to sales
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="faq-section">
        <SectionIntro
          label="FAQ"
          title="What to know before your first Cyberwatt setup."
        />
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <ChevronDown size={18} aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div>
          <p className="eyebrow dark">Start smarter</p>
          <h2>Bring your home’s power into reach.</h2>
          <p>
            Launch a Cyberwatt pilot and turn everyday power control into a
            sharper, more connected smart-home experience.
          </p>
        </div>
        <a href="mailto:hello@cyberwatt.com" className="primary-action light">
          Request early access
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
