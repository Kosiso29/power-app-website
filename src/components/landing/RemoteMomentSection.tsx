export function RemoteMomentSection() {
  return (
    <section
      className="remote-moment-section"
      aria-label="Child using a Cyberwatt smart home remote control"
    >
      <svg
        className="remote-moment-curve remote-moment-curve-top"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M0 0H1440V70C1298 118 1172 116 1038 80C884 38 758 42 620 86C454 138 254 152 0 88Z" />
      </svg>
      <div className="remote-moment-copy">
        <p>For the whole home</p>
        <h2>
          Control every <span>watt</span> for everyone at home.
        </h2>
        <span>
          Switch appliances, shape daily schedules, and keep power use visible
          without making the home feel complicated.
        </span>
      </div>
    </section>
  );
}
