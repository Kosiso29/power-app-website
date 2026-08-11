import { LogoImage, LogoWordmark } from "./Logo";

export function AppPreview() {
  return (
    <div className="app-preview" aria-label="Cyberwatt app preview">
      <div className="phone-shell">
        <div className="phone-status">
          <span className="phone-brand">
            <LogoImage className="phone-logo-mark" />
            <LogoWordmark className="phone-wordmark" />
          </span>
          <strong>Online</strong>
        </div>
        <div className="power-widget">
          <p>Home remote</p>
          <div className="remote-line-graph" aria-hidden="true">
            <svg viewBox="0 0 180 74" focusable="false">
              <defs>
                <linearGradient id="remoteGraphLine" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
                  <stop offset="52%" stopColor="rgba(248, 250, 252, 0.9)" />
                  <stop offset="100%" stopColor="rgba(37, 99, 235, 0.88)" />
                </linearGradient>
                <linearGradient id="remoteGraphFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(37, 99, 235, 0.26)" />
                  <stop offset="100%" stopColor="rgba(37, 99, 235, 0)" />
                </linearGradient>
              </defs>
              <path
                className="remote-graph-fill"
                d="M8 58 C28 52 34 34 52 39 C72 45 78 24 98 27 C120 30 126 14 144 18 C158 21 164 15 172 10 L172 70 L8 70 Z"
              />
              <path
                className="remote-graph-line"
                d="M8 58 C28 52 34 34 52 39 C72 45 78 24 98 27 C120 30 126 14 144 18 C158 21 164 15 172 10"
              />
              <circle cx="52" cy="39" r="3.3" />
              <circle cx="98" cy="27" r="3.3" />
              <circle cx="144" cy="18" r="3.3" />
            </svg>
          </div>
          <span>Remote access active</span>
          <div className="remote-power-button" aria-hidden="true">
            <LogoImage className="remote-logo-mark" />
          </div>
        </div>
        <div className="switch-list">
          {["Refrigerator", "Air conditioner", "Security lights"].map((item, index) => (
            <div key={item}>
              <span>
                <span className="switch-logo-mark" aria-hidden="true" />
                {item}
              </span>
              <strong>{index === 1 ? "Off" : index === 2 ? "Timed" : "On"}</strong>
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
