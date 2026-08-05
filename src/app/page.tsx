import Image from "next/image";
import {
  ArrowRight,
  BellRing,
  CalendarClock,
  ChartBar,
  Check,
  ChevronDown,
  Download,
  Home as HomeIcon,
  type LucideIcon,
  LockKeyhole,
  PlugZap,
  Power,
  Smartphone,
  Wifi,
  Zap,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Remote switching",
    description:
      "Turn lights, sockets, and connected appliances on or off from anywhere.",
    icon: Power,
  },
  {
    title: "Scheduling",
    description:
      "Automate power routines for mornings, nights, work hours, and travel days.",
    icon: CalendarClock,
  },
  {
    title: "Energy monitoring",
    description:
      "See usage patterns clearly so you can reduce waste before it becomes cost.",
    icon: ChartBar,
  },
  {
    title: "Security alerts",
    description:
      "Get notified when power behavior needs your attention or a switch changes state.",
    icon: BellRing,
  },
];

const steps = [
  {
    title: "Install device",
    description:
      "Connect Cyberwatts hardware to the circuits and appliance groups you want to manage.",
    icon: PlugZap,
  },
  {
    title: "Connect Wi-Fi",
    description:
      "Pair the device to your home network and label each switch by room or appliance.",
    icon: Wifi,
  },
  {
    title: "Control from app",
    description:
      "Use the app to monitor usage, trigger switches, and keep routines running.",
    icon: Smartphone,
  },
];

const testimonials = [
  {
    quote:
      "Cyberwatts makes power feel visible. I know what is running, what is scheduled, and what needs to be turned off.",
    name: "Home pilot user",
    role: "Smart-home early adopter",
  },
  {
    quote:
      "The product story is simple: less guessing, more control, and a calmer way to manage electricity.",
    name: "Facilities operator",
    role: "Small property manager",
  },
  {
    quote:
      "The biggest win is remote confidence. You do not need to be in the room to act on power usage.",
    name: "Rental owner",
    role: "Multi-unit host",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "Pilot",
    description: "For one home or early test installation.",
    points: ["Remote switching", "Energy dashboard", "Basic schedules"],
  },
  {
    name: "Smart Home",
    price: "Custom",
    description: "For daily household power automation.",
    points: [
      "Multiple switch groups",
      "Usage insights",
      "Security alerts",
      "Priority setup",
    ],
    featured: true,
  },
  {
    name: "Property",
    price: "Custom",
    description: "For rentals, small offices, and managed spaces.",
    points: [
      "Multi-device planning",
      "Owner visibility",
      "Schedule governance",
      "Deployment support",
    ],
  },
];

const capabilities: Feature[] = [
  {
    title: "Control",
    description: "Switch connected appliances instantly",
    icon: HomeIcon,
  },
  {
    title: "Automate",
    description: "Schedule routines around your day",
    icon: CalendarClock,
  },
  {
    title: "Measure",
    description: "Understand energy usage patterns",
    icon: ChartBar,
  },
  {
    title: "Protect",
    description: "Keep access and alerts trustworthy",
    icon: LockKeyhole,
  },
];

const faqs = [
  {
    question: "What does Cyberwatts control?",
    answer:
      "Cyberwatts is positioned for connected switches, appliance groups, and smart-home power routines.",
  },
  {
    question: "Can I control my home remotely?",
    answer:
      "Yes. The core website message is remote switch control from anywhere through the app.",
  },
  {
    question: "Is this only an energy dashboard?",
    answer:
      "No. The product combines control, scheduling, monitoring, and alerts in one smart-home power experience.",
  },
  {
    question: "Why is pricing custom?",
    answer:
      "Hardware count, installation scope, and property size affect the final package, so the site keeps pricing conversation-led.",
  },
];

function AppPreview() {
  return (
    <div className="app-preview" aria-label="Cyberwatts app preview">
      <div className="phone-shell">
        <div className="phone-status">
          <span>Cyberwatts</span>
          <strong>Online</strong>
        </div>
        <div className="power-widget">
          <p>Home power</p>
          <strong>82%</strong>
          <span>Available capacity</span>
        </div>
        <div className="switch-list">
          {["Living room", "Kitchen", "Security lights"].map((item, index) => (
            <div key={item}>
              <span>
                <Power size={15} aria-hidden="true" />
                {item}
              </span>
              <strong>{index === 1 ? "Off" : "On"}</strong>
            </div>
          ))}
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
          src="/cyberwatts-hero.png"
          alt="Modern smart home with connected energy control devices"
          fill
          priority
          sizes="100vw"
          className="hero-visual"
        />
        <div className="hero-shade" />

        <header className="nav">
          <a className="brand" href="#top" aria-label="Cyberwatts home">
            <span>
              <Zap size={18} aria-hidden="true" />
            </span>
            Cyberwatts
          </a>
          <nav aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="nav-button" href="#download">
            Get the app
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </header>

        <div id="top" className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Smart-home power startup</p>
            <h1>Cyberwatts</h1>
            <p className="hero-lede">
              Control your home from anywhere. Switch appliances remotely,
              schedule routines, monitor energy, and stay ahead of power
              events.
            </p>
            <div id="download" className="download-row">
              <a href="#contact" className="primary-action">
                <Download size={18} aria-hidden="true" />
                Download for iOS
              </a>
              <a href="#contact" className="secondary-action">
                <Download size={18} aria-hidden="true" />
                Download for Android
              </a>
            </div>
          </div>
          <AppPreview />
        </div>
      </section>

      <section className="signal-strip" aria-label="Cyberwatts highlights">
        <div>
          <strong>Remote</strong>
          <span>Switch control from anywhere</span>
        </div>
        <div>
          <strong>Scheduled</strong>
          <span>Daily routines without manual checks</span>
        </div>
        <div>
          <strong>Visible</strong>
          <span>Energy usage that is easy to understand</span>
        </div>
      </section>

      <section id="features" className="section">
        <SectionIntro
          label="Features"
          title="Everything a modern smart-power product needs on day one."
          text="A focused homepage for remote control, automation, monitoring, and trust."
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
          title="Install, connect, and control."
          text="The journey should feel as simple as the best smart-home products: clear setup, fast pairing, and direct control."
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
          <p className="eyebrow dark">Built for calm control</p>
          <h2>Cyberwatts turns home power into a system you can see and act on.</h2>
          <p>
            The experience combines the premium darkness of energy hardware
            brands with the clarity of modern SaaS: direct actions, readable
            data, and fewer decisions hidden behind technical noise.
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
          title="The promise is simple: more control, less wasted power."
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
          title="Packages for homes, pilots, and managed spaces."
          text="Keep the buying path clear while installation and hardware scope are still flexible."
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
          title="Clear answers before someone starts a pilot."
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
          <p className="eyebrow dark">Call to action</p>
          <h2>Make every switch in your home reachable.</h2>
          <p>
            Start with a Cyberwatts pilot and turn power management into a
            modern smart-home experience.
          </p>
        </div>
        <a href="mailto:hello@cyberwatts.com" className="primary-action light">
          Request early access
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
