import { ArrowRight, Check } from "lucide-react";

import { SectionIntro } from "./SectionIntro";

const pricing = [
  {
    name: "Usage View",
    price: "Simple",
    description:
      "For homes that only need Cyberwatt connected for clear power visibility.",
    points: [
      "Install Cyberwatt device",
      "Connect your web app account",
      "View usage statistics",
      "Track power consumption trends",
    ],
  },
  {
    name: "Junction Box Control",
    price: "Standard",
    description:
      "For homes that want visibility plus control from the main junction box.",
    points: [
      "Everything in Usage View",
      "Junction box control",
      "Remote on/off access",
      "In-app power scheduling",
    ],
    featured: true,
  },
  {
    name: "Custom Switch Control",
    price: "Custom",
    description:
      "For spaces that need selected switches controlled individually, not only from the junction box.",
    points: [
      "Everything in Junction Box Control",
      "Choose specific switches",
      "Room-level or appliance-level control",
      "Schedules per selected switch",
      "Custom rollout guidance",
    ],
  },
];

type PricingMarkKind = "curve" | "spark";

const sparkMarkNumbers = new Set([
  2, 3, 5, 7, 10, 11, 13, 16, 17, 20, 21, 24, 26, 27, 30, 32, 33, 35, 37,
  40, 41, 44, 45, 48, 49, 51, 54, 55, 58, 59, 61, 64, 67, 68, 70, 71,
]);

const pricingMarks: { kind: PricingMarkKind; className: string }[] = Array.from(
  { length: 72 },
  (_, index) => ({
    kind: sparkMarkNumbers.has(index + 1) ? "spark" : "curve",
    className: `pricing-mark-${index + 1}`,
  })
);

export function PricingSection() {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="pricing-pattern" aria-hidden="true">
        {pricingMarks.map((mark) => (
          <span
            className={`pricing-mark pricing-mark-${mark.kind} ${mark.className}`}
            key={mark.className}
          >
            <svg className="pricing-mark-icon" focusable="false" viewBox="0 0 100 100">
              {mark.kind === "curve" ? (
                <path d="M61 10A40 40 0 1 0 92 57" />
              ) : (
                <path d="M64 0L34 50H54L39 100L80 42H58Z" />
              )}
            </svg>
          </span>
        ))}
      </div>
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
