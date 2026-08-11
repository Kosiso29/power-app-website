import { SectionIntro } from "./SectionIntro";

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

export function TestimonialsSection() {
  return (
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
  );
}
