"use client";

import { useEffect, useState } from "react";
import DecodeText from "./DecodeText";

const SERVICES = ["SOFTWARE", "APPLICATIONS", "WEBSITES", "INTELLIGENT SYSTEMS", "AUTOMATION"];

// how long each non-final step stays on screen before auto-advancing
const STEP_DURATIONS = [1800, 2000, 6000]; // services step stays long enough to read
const FADE_MS = 420;
const TOTAL_STEPS = 3;

export default function Hero() {
  const [entered, setEntered] = useState(false);
  const [step, setStep] = useState(0);
  const [fading, setFading] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // opening spark -> first content
  useEffect(() => {
    if (reducedMotion) {
      setEntered(true);
      setStep(TOTAL_STEPS - 1);
      return;
    }
    const t = setTimeout(() => setEntered(true), 550);
    return () => clearTimeout(t);
  }, [reducedMotion]);

  // automatic step progression — no click required
  useEffect(() => {
    if (reducedMotion || !entered) return undefined;

    const holdTime = STEP_DURATIONS[step] ?? 2000;
    const holdTimer = setTimeout(() => {
      setFading(true);
      const swapTimer = setTimeout(() => {
        setStep((s) => (s + 1) % TOTAL_STEPS);
        setFading(false);
      }, FADE_MS);
      return () => clearTimeout(swapTimer);
    }, holdTime);

    return () => clearTimeout(holdTimer);
  }, [step, entered, reducedMotion]);

  const isServices = step === 2;

  return (
    <header className="hero" data-reduced-motion={reducedMotion}>
      <div className="hero-vignette" aria-hidden="true" />
      <span className="hero-spark" aria-hidden="true" />

      <div className={`hero-stage ${entered ? "is-visible" : ""}`}>
        {step === 0 && (
          <div className={`hero-panel ${fading ? "is-fading" : ""}`}>
            <h1 className="wordmark">COSMIX</h1>
            <p className="hero-kicker">
              <i className="kicker-line" aria-hidden="true" />
              FOR THE VISIONARIES
            </p>
          </div>
        )}

        {step === 1 && (
          <div className={`hero-panel ${fading ? "is-fading" : ""}`}>
            <p className="hero-statement">
              We engineer intelligent systems that help your business grow.
            </p>
          </div>
        )}

        {step === 2 && (
          <div className="hero-panel">
            <span className="hero-eyebrow">WHAT WE BUILD</span>
            <ul className="hero-services">
              {SERVICES.map((item, i) => (
                <li key={item}>
                  <DecodeText
                    text={item}
                    active={isServices}
                    delay={i * 140}
                    reducedMotion={reducedMotion}
                  />
                </li>
              ))}
            </ul>
            <span className="hero-scan" aria-hidden="true" />
            <a href="#contact" className="hero-cta">
              Book a call →
            </a>
          </div>
        )}

        <div className="hero-progress" aria-hidden="true">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <span key={i} className={`hero-dot ${i === step ? "is-active" : ""}`} />
          ))}
        </div>
      </div>

      <p className="sr-only">
        Cosmix — for the visionaries. We engineer intelligent systems that help
        your business grow: software, applications, websites, intelligent
        systems and automation.
      </p>
    </header>
  );
}