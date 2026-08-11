import { PlugZap, Smartphone, Wifi } from "lucide-react";

import { SectionIntro } from "./SectionIntro";

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

export function HowItWorksSection() {
  return (
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
  );
}
