"use client";

import { useEffect, useRef } from "react";

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

const easeInOutCubic = (value: number) =>
  value < 0.5 ? 4 * value ** 3 : 1 - Math.pow(-2 * value + 2, 3) / 2;

export function AboutPowerSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const setMotion = () => {
      frame = 0;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const sectionIsVisible = rect.top < viewportHeight && rect.bottom > 0;

      section.dataset.aboutPowerStatic = rect.bottom <= viewportHeight ? "visible" : "hidden";

      if (!sectionIsVisible) {
        section.style.setProperty("--about-power-opacity", "0");
        section.dataset.aboutPowerStatic = "hidden";
        return;
      }

      if (reducedMotion) {
        section.style.setProperty("--about-power-opacity", "1");
        section.style.setProperty("--about-power-scale", "1");
        section.style.setProperty("--about-power-y", "0px");
        return;
      }

      const startScale = 0.2;
      const startOffset = Math.min(viewportHeight * 0.62, 620);
      const entryLead = viewportHeight * 0.50;
      const entryDistance = rect.height * 0.5;
      const exitStart = viewportHeight * 0.5;
      const exitEnd = viewportHeight * 0.26;
      const exitOpacity = clamp((rect.bottom - exitEnd) / (exitStart - exitEnd));

      const progress = clamp((entryLead - rect.top) / entryDistance);

      if (progress <= 0) {
        section.style.setProperty("--about-power-opacity", "0");
        section.style.setProperty("--about-power-scale", `${startScale}`);
        section.style.setProperty("--about-power-y", `${Math.round(startOffset)}px`);
        return;
      }

      if (progress >= 1) {
        section.style.setProperty("--about-power-opacity", `${exitOpacity.toFixed(3)}`);
        section.style.setProperty("--about-power-scale", "1");
        section.style.setProperty("--about-power-y", "0px");
        return;
      }

      const eased = easeInOutCubic(progress);
      const emergence = clamp(progress / 0.28);

      section.style.setProperty("--about-power-opacity", `${(emergence * exitOpacity).toFixed(3)}`);
      section.style.setProperty("--about-power-scale", `${(startScale + eased * (1 - startScale)).toFixed(3)}`);
      section.style.setProperty("--about-power-y", `${Math.round(startOffset * (1 - eased))}px`);
    };

    const requestMotion = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(setMotion);
    };

    setMotion();
    window.addEventListener("scroll", requestMotion, { passive: true });
    window.addEventListener("resize", requestMotion);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestMotion);
      window.removeEventListener("resize", requestMotion);
    };
  }, []);

  return (
    <section ref={sectionRef} className="about-power-section" aria-label="The power is in your hands">
      <div className="about-power-static-background" aria-hidden="true" />
      <div className="about-power-foreground-shell" aria-hidden="true" />
      <div className="about-power-copy">
        <h2>The power is in your hands.</h2>
      </div>
      <div className="about-power-static-copy" aria-hidden="true">
        <h2>The power is in your hands.</h2>
      </div>
      <div className="about-power-static-foreground" aria-hidden="true" />
    </section>
  );
}
