import { ArrowRight, Check } from "lucide-react";

import { SectionIntro } from "./SectionIntro";

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
    points: ["Multiple zones", "Usage intelligence", "Power alerts", "Guided setup"],
    featured: true,
  },
  {
    name: "Property",
    price: "Custom",
    description: "For rentals, offices, and spaces that need managed power oversight.",
    points: ["Multi-device rollout", "Owner visibility", "Routine controls", "Deployment guidance"],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="section pricing-section">
      <SectionIntro
        label="Pricing"
        title="Choose the right path for your first smart-power rollout."
        text="Start small, scale deliberately, and match the package to the number of switches, rooms, and properties you want to control."
      />
      <div className="pricing-grid">
        {pricing.map((plan) => (
          <article className={`pricing-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
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
  );
}
