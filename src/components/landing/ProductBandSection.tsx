import Image from "next/image";

const powerMoments = [
  {
    title: "Room-by-room command",
    description: "Connected spaces respond without friction.",
    image: "/cyberwatt-collage-living-room.png",
  },
  {
    title: "Appliance awareness",
    description: "Know what is running before it becomes waste.",
    image: "/cyberwatt-collage-appliances.png",
  },
  {
    title: "Visible usage",
    description: "Clear energy signals for everyday decisions.",
    image: "/cyberwatt-collage-dashboard.png",
  },
  {
    title: "Backup confidence",
    description: "Power systems that stay calm under pressure.",
    image: "/cyberwatt-collage-backup.png",
  },
  {
    title: "Instant switching",
    description: "Direct control for the moments that matter.",
    image: "/cyberwatt-collage-remote.png",
  },
];

export function ProductBandSection() {
  return (
    <section className="product-band" aria-labelledby="product-band-title">
      <span className="product-band-tape" aria-hidden="true" />
      <div className="power-collage" aria-label="Cyberwatt smart power moments">
        <span className="power-collage-spark" aria-hidden="true" />
        <span className="power-collage-logo-shadow" aria-hidden="true" />
        <span className="power-collage-stamp" aria-hidden="true">
          <Image
            src="/cyberwatt-logo-dark-curve.png"
            alt=""
            width={76}
            height={76}
            className="power-collage-stamp-logo"
          />
        </span>
        {powerMoments.map((moment, index) => (
          <figure className={`power-print power-print-${index + 1}`} key={moment.title}>
            <span className="power-print-image">
              <Image
                src={moment.image}
                alt=""
                fill
                sizes="(max-width: 720px) 46vw, (max-width: 980px) 32vw, 22vw"
              />
            </span>
            <figcaption>
              <strong>{moment.title}</strong>
              <span>{moment.description}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="product-band-copy">
        <p className="eyebrow dark">Built for confident control</p>
        <h2 id="product-band-title">
          Your home power story, captured in real moments.
        </h2>
        <p>
          Cyberwatt brings switching, automation, visibility, and backup readiness
          into one calm experience, so every appliance and room feels easier to
          understand from anywhere.
        </p>
      </div>
    </section>
  );
}
