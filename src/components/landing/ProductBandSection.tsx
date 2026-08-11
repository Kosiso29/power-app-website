import { CalendarClock, ChartBar, Home as HomeIcon, LockKeyhole } from "lucide-react";

import type { LandingFeature } from "./types";

const capabilities: LandingFeature[] = [
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

export function ProductBandSection() {
  return (
    <section className="product-band">
      <div>
        <p className="eyebrow dark">Built for confident control</p>
        <h2>Cyberwatt makes home power visible, responsive, and easy to command.</h2>
        <p>
          The experience turns everyday electricity into a cleaner system: direct
          actions, readable energy signals, fewer surprises, and less technical
          noise between you and the switches you rely on.
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
  );
}
