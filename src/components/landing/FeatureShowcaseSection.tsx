import { BellRing, CalendarClock, ChartBar, Power } from "lucide-react";

import type { LandingFeature } from "./types";

const featurePanels: Array<LandingFeature & { image: string; imagePosition: string }> = [
  {
    title: "Instant remote control",
    description:
      "Switch lights, sockets, and appliances the moment you think of it, from anywhere.",
    icon: Power,
    image:
      "https://electronex.net/wp-content/uploads/2024/09/automated_home-transformed-1024x1024.jpeg",
    imagePosition: "center center",
  },
  {
    title: "Smarter schedules",
    description:
      "Set routines that match real life: mornings, nights, trips, work hours, and weekends.",
    icon: CalendarClock,
    image: "https://www.home-art.in/images/hero-ai.png",
    imagePosition: "center center",
  },
  {
    title: "Live energy insight",
    description:
      "See what is running, spot waste quickly, and make better power decisions before costs climb.",
    icon: ChartBar,
    image:
      "https://www.innova.com.tr/medias/Akilli-evler-ve-enerji-yonetimi-Enerji-verimliligini-artirma.jpg",
    imagePosition: "50% center",
  },
  {
    title: "Power-aware alerts",
    description:
      "Know when something changes, stays on too long, or needs your attention.",
    icon: BellRing,
    image:
      "https://images.unsplash.com/photo-1768286868079-90c800c849e2?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=78&w=1500",
    imagePosition: "54% center",
  },
];

export function FeatureShowcaseSection() {
  return (
    <section
      id="features"
      className="feature-showcase-section"
      aria-label="Cyberwatt smart-power features"
    >
      <div className="feature-showcase-header">
        <p>Smart power, made visible</p>
        <h2>Everything connected. Every switch within reach.</h2>
      </div>
      <div className="feature-showcase-grid">
        {featurePanels.map((feature) => {
          const Icon = feature.icon;

          return (
            <article className="feature-showcase-card" key={feature.title}>
              <span
                className="feature-showcase-image"
                style={{
                  backgroundImage: `url("${feature.image}")`,
                  backgroundPosition: feature.imagePosition,
                }}
                aria-hidden="true"
              />
              <div className="feature-showcase-copy">
                <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
