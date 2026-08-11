import { ChevronDown } from "lucide-react";

import { SectionIntro } from "./SectionIntro";

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

export function FaqSection() {
  return (
    <section id="faq" className="faq-section">
      <SectionIntro label="FAQ" title="What to know before your first Cyberwatt setup." />
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
  );
}
