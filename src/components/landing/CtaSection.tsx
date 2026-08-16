"use client";

import type { PointerEvent } from "react";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const sparks = Array.from({ length: 40 }, (_, index) => {
  return {
    className: `cta-spark cta-spark-${index + 1}`,
    id: `cta-spark-${index + 1}`,
  };
});

function isPrimaryActionTarget(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest(".primary-action"));
}

function setCtaCursor(element: HTMLElement, event: PointerEvent<HTMLElement>) {
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const sparkElements = element.querySelectorAll<HTMLElement>(".cta-spark");

  sparkElements.forEach((spark) => {
    if (spark.offsetParent === null) {
      return;
    }

    const dx = x - spark.offsetLeft;
    const dy = y - spark.offsetTop;
    const distance = Math.hypot(dx, dy);

    if (distance === 0) {
      spark.style.setProperty("--spark-pull-x", "0px");
      spark.style.setProperty("--spark-pull-y", "0px");
      return;
    }

    const pull = Math.min(distance, Math.max(50, Math.min(100, distance * 0.2)));

    spark.style.setProperty("--spark-pull-x", `${(dx / distance) * pull}px`);
    spark.style.setProperty("--spark-pull-y", `${(dy / distance) * pull}px`);
  });
}

function clearEntranceTimer(timeoutRef: { current: number | null }) {
  if (timeoutRef.current) {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  }
}

function pauseCtaSparks(element: HTMLElement, timeoutRef: { current: number | null }) {
  clearEntranceTimer(timeoutRef);
  element.classList.remove("cta-sparks-entering");
  element.classList.add("cta-sparks-paused");
  resetCtaSparks(element);
}

function resetCtaSparks(element: HTMLElement) {
  element.querySelectorAll<HTMLElement>(".cta-spark").forEach((spark) => {
    spark.style.setProperty("--spark-pull-x", "0px");
    spark.style.setProperty("--spark-pull-y", "0px");
  });
}

export function CtaSection() {
  const entranceTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (entranceTimeoutRef.current) {
        window.clearTimeout(entranceTimeoutRef.current);
      }
    };
  }, []);

  function handlePointerEnter(event: PointerEvent<HTMLElement>) {
    const section = event.currentTarget;

    if (isPrimaryActionTarget(event.target)) {
      pauseCtaSparks(section, entranceTimeoutRef);
      return;
    }

    clearEntranceTimer(entranceTimeoutRef);
    section.classList.remove("cta-sparks-paused");
    section.classList.add("cta-sparks-entering");
    setCtaCursor(section, event);

    entranceTimeoutRef.current = window.setTimeout(() => {
      section.classList.remove("cta-sparks-entering");
      entranceTimeoutRef.current = null;
    }, 1800);
  }

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (isPrimaryActionTarget(event.target)) {
      pauseCtaSparks(event.currentTarget, entranceTimeoutRef);
      return;
    }

    event.currentTarget.classList.remove("cta-sparks-paused");
    setCtaCursor(event.currentTarget, event);
  }

  function handlePointerLeave(event: PointerEvent<HTMLElement>) {
    clearEntranceTimer(entranceTimeoutRef);
    event.currentTarget.classList.remove("cta-sparks-paused");
    event.currentTarget.classList.remove("cta-sparks-entering");
    resetCtaSparks(event.currentTarget);
  }

  return (
    <section
      id="contact"
      className="cta-section"
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="cta-spark-field" aria-hidden="true">
        {sparks.map((spark) => (
          <span className={spark.className} key={spark.id}>
            <svg viewBox="0 0 100 100" focusable="false">
              <path d="M64 0L34 50H54L39 100L80 42H58Z" />
            </svg>
          </span>
        ))}
      </div>

      <div className="cta-copy">
        <p className="eyebrow dark">Start smarter</p>
        <h2>Bring your home’s power into reach.</h2>
        <p>
          Launch a Cyberwatt pilot and turn everyday power control into a sharper,
          more connected smart-home experience.
        </p>
      </div>
      <a href="mailto:hello@cyberwatt.com" className="primary-action">
        Request early access
        <ArrowRight size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
