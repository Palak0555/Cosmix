"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* Data                                                               */
/* ------------------------------------------------------------------ */

const FOUNDER = {
  name: "Palak Jaiswal",
  role: "Founder & CEO",
  quote:
    "I’ve always seen business as more than the pursuit of success. It is the ability to bring our vision and values to life.",
};

const COFOUNDER = {
  name: "Amul Pandey",
  role: "Co-Founder",
  bio: "Turns the vision into systems that actually ship.",
};

const TEAM = [
  {
    name: "Meera Nair",
    role: "Design Lead",
    bio: "Turns complex systems into interfaces people trust.",
  },
  {
    name: "Rohan Kapoor",
    role: "Engineering Lead",
    bio: "Builds architecture that lets everything move fast.",
  },
];

const RESULTS = [
  "Ships faster",
  "Built to last",
  "One system, not five tools",
];

const SERVICES = [
  {
    title: "AI & Automation",
    body: "Automate repetitive work, streamline operations, and turn manual processes into intelligent workflows.",
  },
  {
    title: "Android & Mobile Products",
    body: "Design and build production-ready mobile experiences that turn ideas into products people can actually use.",
  },
  {
    title: "Custom Software",
    body: "Build the internal tools, platforms, and systems businesses need to operate more effectively.",
  },
  {
    title: "AI-Powered Products",
    body: "Integrate intelligent capabilities into products and workflows where they create genuine business value.",
  },
  {
    title: "Business Systems",
    body: "Connect strategy, technology, and operations into systems designed to evolve as the business grows.",
  },
  {
    title: "Product Development",
    body: "Take an idea from early concept through design, engineering, and launch — one system of thinking, start to finish.",
  },
];

/* ------------------------------------------------------------------ */
/* Reveal-on-scroll hook                                               */
/* ------------------------------------------------------------------ */

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */

export default function Founders() {
  return (
    <>
      <FoundersSection />
      <VisionarySection />
      <TeamSection />
    </>
  );
}

/* ==================================================================== */
/* SECTION 1 — FOUNDER STORY                                             */
/* ==================================================================== */

function FoundersSection() {
  const [ref, visible] = useReveal();

  return (
    <section ref={ref} id="founder" className="fs-section">
      <div aria-hidden="true" className="fs-blob fs-blob-a" />
      <div aria-hidden="true" className="fs-blob fs-blob-b" />
      <div aria-hidden="true" className="fs-grid-overlay" />

      <div className="relative mx-auto w-[min(1040px,calc(100%-40px))] pt-16 pb-16 md:pt-20 md:pb-20">

        <div className={`fs-row ${visible ? "is-visible" : ""}`}>
          <div className="fs-eyebrow">THE FOUNDER</div>

          <h1 className="fs-hero">
            Behind Cosmix.{" "}
            <span className="fs-gradient-text">
              The will to set the standard.
            </span>
          </h1>

          <p className="fs-sub">
            The story behind Cosmix — and how we actually work.
          </p>
        </div>

        {/* 01 — Our story */}
        <div
          className={`fs-divider fs-delay-1 ${
            visible ? "is-visible" : ""
          }`}
        />

        <div
          className={`fs-block fs-delay-1 ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="fs-label">
            <span className="fs-num">01</span>
            <span className="fs-tag">OUR STORY</span>
          </div>

          <div className="fs-content">
            <p className="fs-lead">Where it began</p>

            <p className="fs-body">
              Palak had spent years trying to understand what makes a business
              work — how ideas become strategies, how strategies turn into
              decisions, and how decisions ultimately translate into execution.
              By 2020, understanding how businesses worked was no longer
              enough. She wanted to experience what it meant to build one
              herself.
            </p>
          </div>
        </div>

        {/* 02 — The problem */}
        <div
          className={`fs-divider fs-delay-2 ${
            visible ? "is-visible" : ""
          }`}
        />

        <div
          className={`fs-block fs-delay-2 ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="fs-label">
            <span className="fs-num">02</span>
            <span className="fs-tag">THE PROBLEM</span>
          </div>

          <div className="fs-content">
            <h2 className="fs-heading">Beyond the business</h2>

            <p className="fs-body">
              As she got deeper into building businesses, she realised how
              much of the outcome depended on something she hadn't understood
              deeply enough yet — technology. She could see the opportunity,
              shape the strategy, and know where she wanted to take it. But the
              mechanics of building what she had in mind remained out of reach,
              and that gap became frustrating.
            </p>

            <p className="fs-body">
              So she immersed herself in technology to understand how ideas
              move from concept to product — and how thoughtful building can
              create the foundation for a business that grows with intention.
            </p>
          </div>
        </div>

        {/* 03 — The solution */}
        <div
          className={`fs-divider fs-delay-3 ${
            visible ? "is-visible" : ""
          }`}
        />

        <div
          className={`fs-block fs-delay-3 ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="fs-label">
            <span className="fs-num">03</span>
            <span className="fs-tag">THE SOLUTION</span>
          </div>

          <div className="fs-content">
            <h2 className="fs-heading">
              We build the technology behind ambitious businesses
            </h2>

            <p className="fs-body">
              At Cosmix, we begin with a clear understanding of the business,
              the opportunity, and the system needed to turn the vision into
              reality — before we design a single screen or define a single
              feature.
            </p>

            <p className="fs-body">
              We bring strategy, design, technology, and execution together
              from the start, so what we build isn't just a product that works
              today, but a foundation that can evolve, scale, and keep creating
              value as the business grows.
            </p>
          </div>
        </div>

        {/* 04 — Results */}
        <div
          className={`fs-divider fs-delay-4 ${
            visible ? "is-visible" : ""
          }`}
        />

        <div
          className={`fs-block fs-delay-4 ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="fs-label">
            <span className="fs-num">04</span>
            <span className="fs-tag">THE RESULTS</span>
          </div>

          <div className="fs-content">
            <p className="fs-body">
              The work doesn't stop when the product ships. We help businesses
              turn manual processes into automation, ideas into working
              products, and concepts into technology they can build on — from
              AI-powered Android products like InterviewAI to custom software,
              automation, and the systems running behind them. Every engagement
              is built around a practical outcome: saving time, improving
              execution, creating new capabilities, or giving a business the
              technology it needs to move faster.
            </p>

            <p className="fs-services-kicker">
              What we&rsquo;ve helped build
            </p>

            <div className="fs-services-grid">
              {SERVICES.map((s) => (
                <div key={s.title} className="fs-service-card">
                  <div className="fs-service-title">{s.title}</div>
                  <div className="fs-service-body">{s.body}</div>
                </div>
              ))}
            </div>

            <div className="fs-chips">
              {RESULTS.map((r) => (
                <span key={r} className="fs-chip">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fs-section {
          position: relative;
          overflow: clip;
          background: radial-gradient(
            120% 120% at 15% 0%,
            #103430 0%,
            #0a1f1c 42%,
            #071614 100%
          );
          isolation: isolate;
        }

        .fs-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            );
          background-size: 64px 64px;
          -webkit-mask-image: radial-gradient(
            80% 60% at 50% 20%,
            black,
            transparent
          );
          mask-image: radial-gradient(
            80% 60% at 50% 20%,
            black,
            transparent
          );
          pointer-events: none;
        }

        .fs-blob {
          position: absolute;
          border-radius: 999px;
          filter: blur(100px);
          pointer-events: none;
        }

        .fs-blob-a {
          top: -10%;
          left: 4%;
          width: 480px;
          height: 480px;
          background: radial-gradient(
            circle,
            rgba(45, 212, 191, 0.2),
            transparent 70%
          );
          animation: fsDrift 16s ease-in-out infinite;
        }

        .fs-blob-b {
          bottom: -14%;
          right: -6%;
          width: 420px;
          height: 420px;
          background: radial-gradient(
            circle,
            rgba(20, 184, 166, 0.16),
            transparent 70%
          );
          animation: fsDrift 18s ease-in-out infinite reverse;
        }

        @keyframes fsDrift {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(20px, -16px) scale(1.05);
          }
        }

        .fs-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: #5eead4;
        }

        .fs-eyebrow::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: #2dd4bf;
          box-shadow: 0 0 10px rgba(45, 212, 191, 0.7);
        }

        .fs-row,
        .fs-block {
          opacity: 0;
          transform: translate3d(0, 18px, 0);
          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .fs-row.is-visible,
        .fs-block.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .fs-hero {
          margin-top: 12px;
          max-width: 720px;
          font-size: clamp(1.9rem, 3.4vw, 2.85rem);
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.03em;
          color: #f7faf9;
        }

        .fs-gradient-text {
          background: linear-gradient(
            90deg,
            #5eead4,
            #2dd4bf 45%,
            #99f6e4 55%,
            #5eead4
          );
          background-size: 240% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: fsShimmer 7s ease-in-out infinite;
        }

        @keyframes fsShimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }
        }

        .fs-sub {
          margin-top: 12px;
          font-size: 0.95rem;
          color: rgba(226, 232, 230, 0.65);
        }

        .fs-divider {
          margin-top: 30px;
          margin-bottom: 30px;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.14),
            rgba(255, 255, 255, 0.02)
          );
          opacity: 0;
          transition: opacity 700ms ease;
        }

        .fs-divider.is-visible {
          opacity: 1;
        }

        .fs-block {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }

        .fs-delay-1 {
          transition-delay: 80ms;
        }

        .fs-delay-2 {
          transition-delay: 140ms;
        }

        .fs-delay-3 {
          transition-delay: 200ms;
        }

        .fs-delay-4 {
          transition-delay: 260ms;
        }

        .fs-label {
          display: flex;
          align-items: baseline;
          gap: 10px;
        }

        .fs-num {
          font-family: monospace;
          font-size: 13px;
          font-weight: 600;
          color: #2dd4bf;
        }

        .fs-tag {
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.14em;
          color: rgba(226, 232, 230, 0.55);
        }

        .fs-content {
          max-width: 680px;
        }

        .fs-lead {
          font-size: clamp(1.3rem, 2.2vw, 1.7rem);
          font-weight: 500;
          line-height: 1.3;
          letter-spacing: -0.02em;
          color: #f2f6f5;
        }

        .fs-heading {
          font-size: clamp(1.35rem, 2.3vw, 1.75rem);
          font-weight: 600;
          line-height: 1.28;
          letter-spacing: -0.02em;
          color: #f2f6f5;
        }

        .fs-body {
          margin-top: 12px;
          font-size: 0.98rem;
          line-height: 1.7;
          color: rgba(226, 232, 230, 0.72);
        }

        .fs-services-kicker {
          margin-top: 22px;
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(226, 232, 230, 0.5);
        }

        .fs-services-grid {
          margin-top: 12px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
        }

        .fs-service-card {
          padding: 13px 16px;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition:
            border-color 400ms ease,
            transform 400ms ease,
            background 400ms ease;
        }

        .fs-service-card:hover {
          border-color: rgba(94, 234, 212, 0.4);
          background: rgba(255, 255, 255, 0.065);
          transform: translateY(-2px);
        }

        .fs-service-title {
          font-size: 14px;
          font-weight: 600;
          color: #f2f6f5;
        }

        .fs-service-body {
          margin-top: 5px;
          font-size: 13px;
          line-height: 1.6;
          color: rgba(226, 232, 230, 0.62);
        }

        .fs-chips {
          margin-top: 18px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .fs-chip {
          padding: 6px 13px;
          border-radius: 999px;
          background: rgba(45, 212, 191, 0.1);
          border: 1px solid rgba(94, 234, 212, 0.28);
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
          color: #5eead4;
        }

        @media (min-width: 768px) {
          .fs-block {
            grid-template-columns: 140px 1fr;
            gap: 32px;
          }

          .fs-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fs-row,
          .fs-block,
          .fs-divider,
          .fs-blob,
          .fs-gradient-text {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ==================================================================== */
/* SECTION 2 — THE VISIONARY                                             */
/* ==================================================================== */

function VisionarySection() {
  const [ref, visible] = useReveal();

  return (
    <section ref={ref} className="vs-section">
      <div aria-hidden="true" className="vs-glow" />

      <div className="relative mx-auto w-[min(1040px,calc(100%-40px))] py-10 md:py-12">

        <div className={`vs-label ${visible ? "is-visible" : ""}`}>
          <span className="vs-tag">THE VISIONARY</span>
        </div>

        <div
          className={`vs-grid ${
            visible ? "is-visible" : ""
          }`}
        >
          {/* IMAGE */}
          <div className="vs-photo-card">
            <span className="vs-ring" aria-hidden="true" />

            <div className="vs-photo">
              <img
                src="/images/founder.jpeg"
                alt={FOUNDER.name}
                className="vs-img"
              />

              <div className="vs-fallback" aria-hidden="true">
                PJ
              </div>
            </div>
          </div>

          {/* QUOTE */}
          <div className="vs-quote-card">
            <span className="vs-mark" aria-hidden="true">
              &ldquo;
            </span>

            <p className="vs-kicker">
              FOR THE VISIONARIES
            </p>

            <p className="vs-text">
              {FOUNDER.quote}
            </p>

            <div className="vs-line" />

            <p className="vs-name">
              {FOUNDER.name}
            </p>

            <p className="vs-role">
              {FOUNDER.role.toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .vs-section {
          position: relative;
          overflow: clip;
          background: #ffffff;
          isolation: isolate;
        }

        .vs-glow {
          position: absolute;
          top: 0;
          left: 50%;
          width: 520px;
          height: 260px;
          transform: translateX(-50%);
          background: radial-gradient(
            ellipse,
            rgba(45, 212, 191, 0.055),
            transparent 70%
          );
          filter: blur(20px);
          pointer-events: none;
        }

        .vs-label {
          opacity: 0;
          transform: translate3d(0, 12px, 0);
          transition:
            opacity 650ms ease,
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .vs-label.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .vs-tag {
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.16em;
          color: #0d9488;
        }

        .vs-grid {
          position: relative;
          margin-top: 12px;

          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;

          align-items: stretch;

          opacity: 0;
          transform: translate3d(0, 16px, 0);

          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);

          transition-delay: 80ms;
        }

        .vs-grid.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        /* COMPACT IMAGE */

        .vs-photo-card {
          position: relative;
          overflow: hidden;

          border-radius: 16px;
          aspect-ratio: 4 / 4.5;

          max-height: 390px;

          background: #f5f8f7;

          box-shadow:
            0 14px 34px -24px rgba(10, 40, 36, 0.22);

          border: 1px solid #e7efed;
        }

        .vs-ring {
          position: absolute;
          top: -20%;
          left: -10%;
          width: 60%;
          height: 60%;

          background: radial-gradient(
            circle,
            rgba(45, 212, 191, 0.2),
            transparent 70%
          );

          filter: blur(30px);
          pointer-events: none;
        }

        .vs-photo {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .vs-img {
          position: relative;
          z-index: 2;

          width: 100%;
          height: 100%;

          object-fit: cover;
          display: block;
        }

        .vs-img:not([src]),
        .vs-img[src=""] {
          display: none;
        }

        .vs-fallback {
          position: absolute;
          inset: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          font-family: monospace;
          font-size: 42px;
          font-weight: 600;
          letter-spacing: 0.06em;

          color: #06201c;

          background: linear-gradient(
            135deg,
            #5eead4,
            #14b8a6
          );
        }

        /* COMPACT QUOTE */

        .vs-quote-card {
          position: relative;

          display: flex;
          flex-direction: column;
          justify-content: center;

          padding: 24px 26px;

          border-radius: 16px;

          background: #ffffff;

          border: 1px solid #dce9e6;

          box-shadow:
            0 14px 34px -26px rgba(10, 40, 36, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);

          overflow: hidden;
        }

        .vs-quote-card::before {
          content: "";

          position: absolute;

          left: 0;
          top: 0;
          bottom: 0;

          width: 3px;

          background: linear-gradient(
            180deg,
            #14b8a6,
            #5eead4
          );
        }

        .vs-mark {
          position: absolute;

          top: -16px;
          left: 20px;

          font-family: Georgia, "Times New Roman", serif;
          font-size: 62px;
          line-height: 1;

          color: rgba(13, 148, 136, 0.1);

          user-select: none;
        }

        .vs-kicker {
          position: relative;
          z-index: 1;

          font-family: monospace;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;

          color: #0d9488;
        }

        .vs-text {
          position: relative;
          z-index: 1;

          margin-top: 9px;
          max-width: 560px;

          font-family: Georgia, "Iowan Old Style",
            "Times New Roman", serif;

          font-style: italic;

          font-size: clamp(1rem, 1.6vw, 1.28rem);
          line-height: 1.48;

          letter-spacing: -0.01em;

          color: #14201e;
        }

        .vs-line {
          margin-top: 14px;

          width: 30px;
          height: 2px;

          border-radius: 999px;

          background: linear-gradient(
            90deg,
            #14b8a6,
            #5eead4
          );
        }

        .vs-name {
          margin-top: 11px;

          font-size: 14px;
          font-weight: 700;

          color: #12181b;
        }

        .vs-role {
          margin-top: 2px;

          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.13em;

          color: #7b8584;
        }

        @media (min-width: 768px) {
          .vs-grid {
            grid-template-columns: 300px 1fr;
            gap: 20px;
          }

          .vs-photo-card {
            max-height: 340px;
          }

          .vs-quote-card {
            min-height: 300px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vs-label,
          .vs-grid {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ==================================================================== */
/* SECTION 3 — MEET THE TEAM                                             */
/* ==================================================================== */

function TeamSection() {
  const [ref, visible] = useReveal();

  return (
    <section ref={ref} id="team" className="ts-section">
      <div aria-hidden="true" className="ts-blob ts-blob-a" />
      <div aria-hidden="true" className="ts-blob ts-blob-b" />

      <div className="relative mx-auto w-[min(1040px,calc(100%-40px))] py-12 md:py-16">

        {/* HEADER */}

        <div className={`ts-row ${visible ? "is-visible" : ""}`}>
          <div className="ts-eyebrow">
            THE TEAM
          </div>

          <h2 className="ts-heading">
            Meet the team
          </h2>

          <p className="ts-sub">
            The people building Cosmix, one system at a time.
          </p>
        </div>

        {/* GRID LABEL */}

        <div
          className={`ts-grid-label ts-delay-1 ${
            visible ? "is-visible" : ""
          }`}
        >
          <span className="ts-tag">
            CORE TEAM
          </span>

          <span className="ts-scroll-hint">
            03 PEOPLE
          </span>
        </div>

        {/* ========================================================== */}
        {/* ONE SAME GRID — AMUL + MEERA + ROHAN                       */}
        {/* ========================================================== */}

        <div
          className={`ts-team-grid ts-delay-2 ${
            visible ? "is-visible" : ""
          }`}
        >
          <CofounderCard {...COFOUNDER} />

          {TEAM.map((m, i) => (
            <TeamCard
              key={m.name}
              index={i}
              {...m}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .ts-section {
          position: relative;
          overflow: hidden;
          isolation: isolate;

          background:
            radial-gradient(
              700px 420px at 8% 5%,
              rgba(45, 212, 191, 0.2),
              transparent 65%
            ),
            radial-gradient(
              650px 420px at 92% 90%,
              rgba(20, 184, 166, 0.16),
              transparent 65%
            ),
            linear-gradient(
              180deg,
              #063732 0%,
              #052b27 50%,
              #031d1a 100%
            );
        }

        .ts-blob {
          position: absolute;
          border-radius: 999px;
          filter: blur(90px);
          pointer-events: none;
          z-index: -1;
        }

        .ts-blob-a {
          top: -8%;
          right: -5%;

          width: 360px;
          height: 360px;

          background: rgba(45, 212, 191, 0.12);
        }

        .ts-blob-b {
          bottom: -8%;
          left: -5%;

          width: 300px;
          height: 300px;

          background: rgba(20, 184, 166, 0.1);
        }

        .ts-row {
          opacity: 0;
          transform: translate3d(0, 18px, 0);

          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ts-row.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .ts-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;

          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;

          color: #5eead4;
        }

        .ts-eyebrow::before {
          content: "";

          width: 6px;
          height: 6px;

          border-radius: 999px;

          background: #2dd4bf;

          box-shadow:
            0 0 12px rgba(45, 212, 191, 0.8);
        }

        .ts-heading {
          margin-top: 8px;

          font-size: clamp(1.7rem, 3vw, 2.35rem);
          font-weight: 600;

          line-height: 1.15;
          letter-spacing: -0.035em;

          color: #f2fffc;
        }

        .ts-sub {
          margin-top: 7px;

          font-size: 0.92rem;
          line-height: 1.6;

          color: rgba(220, 252, 247, 0.62);
        }

        .ts-delay-1 {
          transition-delay: 90ms;
        }

        .ts-delay-2 {
          transition-delay: 160ms;
        }

        .ts-grid-label {
          margin-top: 28px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          opacity: 0;

          transform: translate3d(0, 14px, 0);

          transition:
            opacity 650ms ease,
            transform 650ms ease;
        }

        .ts-grid-label.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .ts-tag {
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.16em;

          color: rgba(153, 246, 228, 0.72);
        }

        .ts-scroll-hint {
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.12em;

          color: rgba(204, 251, 241, 0.4);
        }

        /* ========================================================== */
        /* SAME 3-COLUMN GRID                                         */
        /* ========================================================== */

        .ts-team-grid {
          margin-top: 12px;

          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 14px;

          align-items: stretch;

          opacity: 0;

          transform: translate3d(0, 18px, 0);

          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ts-team-grid.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        @media (max-width: 767px) {
          .ts-team-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ts-row,
          .ts-grid-label,
          .ts-team-grid {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ==================================================================== */
/* CO-FOUNDER CARD — SAME GRID STYLE                                    */
/* ==================================================================== */

function CofounderCard({ name, role, bio }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <div className="cf-card">
      <span className="cf-glow" aria-hidden="true" />

      <div className="cf-avatar">
        {initials}
      </div>

      <div className="cf-body">
        <div className="cf-badge">
          CO-FOUNDER
        </div>

        <div className="cf-name">
          {name}
        </div>

        <div className="cf-role">
          {role.toUpperCase()}
        </div>

        <p className="cf-bio">
          {bio}
        </p>
      </div>

      <span className="cf-underline" />

      <style jsx>{`
        .cf-card {
          position: relative;
          overflow: hidden;

          min-width: 0;
          min-height: 230px;

          padding: 20px;

          border-radius: 18px;

          display: flex;
          flex-direction: column;

          background:
            linear-gradient(
              145deg,
              rgba(94, 234, 212, 0.13),
              rgba(255, 255, 255, 0.035)
            );

          backdrop-filter:
            blur(18px)
            saturate(140%);

          -webkit-backdrop-filter:
            blur(18px)
            saturate(140%);

          border:
            1px solid
            rgba(94, 234, 212, 0.2);

          box-shadow:
            0 18px 45px rgba(0, 0, 0, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);

          transition:
            transform 400ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 400ms ease,
            box-shadow 400ms ease;
        }

        .cf-card:hover {
          transform: translateY(-5px);

          border-color:
            rgba(94, 234, 212, 0.45);

          box-shadow:
            0 24px 55px rgba(0, 0, 0, 0.25),
            0 0 30px rgba(45, 212, 191, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.14);
        }

        .cf-glow {
          position: absolute;

          top: -35%;
          right: -20%;

          width: 180px;
          height: 180px;

          border-radius: 999px;

          background: radial-gradient(
            circle,
            rgba(45, 212, 191, 0.2),
            transparent 70%
          );

          filter: blur(28px);

          pointer-events: none;
        }

        .cf-avatar {
          position: relative;
          z-index: 1;

          display: flex;

          width: 48px;
          height: 48px;

          align-items: center;
          justify-content: center;

          border-radius: 14px;

          font-family: monospace;
          font-size: 12px;
          font-weight: 600;

          letter-spacing: 0.06em;

          color: #06201c;

          background: linear-gradient(
            135deg,
            #5eead4,
            #14b8a6
          );

          box-shadow:
            0 8px 24px rgba(20, 184, 166, 0.25);
        }

        .cf-body {
          position: relative;
          z-index: 1;

          margin-top: 18px;
        }

        .cf-badge {
          display: inline-block;

          padding: 3px 8px;

          border-radius: 999px;

          background:
            rgba(45, 212, 191, 0.08);

          border:
            1px solid
            rgba(94, 234, 212, 0.2);

          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.14em;

          color: #5eead4;
        }

        .cf-name {
          margin-top: 8px;

          font-size: 17px;
          font-weight: 600;

          letter-spacing: -0.02em;

          color: #effffc;
        }

        .cf-role {
          margin-top: 3px;

          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.12em;

          color: rgba(204, 251, 241, 0.48);
        }

        .cf-bio {
          margin-top: 10px;

          font-size: 11px;
          line-height: 1.55;

          color: rgba(220, 252, 247, 0.62);
        }

        .cf-underline {
          position: absolute;

          bottom: 0;
          left: 0;

          height: 2px;
          width: 0;

          background:
            linear-gradient(
              90deg,
              #14b8a6,
              #5eead4
            );

          transition: width 400ms ease;
        }

        .cf-card:hover .cf-underline {
          width: 100%;
        }
      `}</style>
    </div>
  );
}

/* ==================================================================== */
/* CORE TEAM CARD — GLASSMORPHISM                                       */
/* ==================================================================== */

function TeamCard({ name, role, bio }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <div className="tc-card">
      <span
        className="tc-glow"
        aria-hidden="true"
      />

      <svg
        className="tc-symbol"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke="url(#tcGrad)"
          strokeWidth="1.2"
        />

        <path
          d="M24 8 L24 40 M8 24 L40 24"
          stroke="url(#tcGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
        />

        <circle
          cx="24"
          cy="24"
          r="4"
          fill="url(#tcGrad)"
        />

        <defs>
          <linearGradient
            id="tcGrad"
            x1="0"
            y1="0"
            x2="48"
            y2="48"
          >
            <stop
              offset="0%"
              stopColor="#5eead4"
            />

            <stop
              offset="100%"
              stopColor="#0d9488"
            />
          </linearGradient>
        </defs>
      </svg>

      <div className="tc-avatar">
        {initials}
      </div>

      <div className="tc-info">
        <div className="tc-name">
          {name}
        </div>

        <div className="tc-role">
          {role.toUpperCase()}
        </div>

        <p className="tc-bio">
          {bio}
        </p>
      </div>

      <span className="tc-underline" />

      <style jsx>{`
        .tc-card {
          position: relative;
          overflow: hidden;

          min-width: 0;
          min-height: 230px;

          padding: 20px;

          border-radius: 18px;

          display: flex;
          flex-direction: column;

          background:
            linear-gradient(
              145deg,
              rgba(94, 234, 212, 0.11),
              rgba(255, 255, 255, 0.025)
            );

          backdrop-filter:
            blur(18px)
            saturate(140%);

          -webkit-backdrop-filter:
            blur(18px)
            saturate(140%);

          border:
            1px solid
            rgba(94, 234, 212, 0.16);

          box-shadow:
            0 18px 45px rgba(0, 0, 0, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.09);

          transition:
            transform 400ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 400ms ease,
            box-shadow 400ms ease;
        }

        .tc-card:hover {
          transform: translateY(-5px);

          border-color:
            rgba(94, 234, 212, 0.4);

          box-shadow:
            0 24px 55px rgba(0, 0, 0, 0.25),
            0 0 30px rgba(45, 212, 191, 0.07),
            inset 0 1px 0 rgba(255, 255, 255, 0.14);
        }

        .tc-glow {
          position: absolute;

          top: -25%;
          right: -20%;

          width: 150px;
          height: 150px;

          border-radius: 999px;

          background: radial-gradient(
            circle,
            rgba(45, 212, 191, 0.17),
            transparent 70%
          );

          filter: blur(22px);

          pointer-events: none;
        }

        .tc-symbol {
          position: absolute;

          top: 16px;
          right: 16px;

          width: 22px;
          height: 22px;

          opacity: 0.55;

          transition:
            transform 400ms ease,
            opacity 400ms ease;
        }

        .tc-card:hover .tc-symbol {
          transform: rotate(90deg);
          opacity: 1;
        }

        .tc-avatar {
          position: relative;
          z-index: 1;

          display: flex;

          width: 48px;
          height: 48px;

          align-items: center;
          justify-content: center;

          border-radius: 14px;

          font-family: monospace;
          font-size: 11px;
          font-weight: 600;

          letter-spacing: 0.06em;

          color: #5eead4;

          background:
            rgba(45, 212, 191, 0.08);

          border:
            1px solid
            rgba(94, 234, 212, 0.2);

          transition: transform 400ms ease;
        }

        .tc-card:hover .tc-avatar {
          transform: scale(1.06);
        }

        .tc-info {
          position: relative;
          z-index: 1;

          margin-top: 18px;
        }

        .tc-name {
          font-size: 17px;
          font-weight: 600;

          letter-spacing: -0.02em;

          color: #effffc;
        }

        .tc-role {
          margin-top: 3px;

          font-family: monospace;
          font-size: 8px;

          letter-spacing: 0.1em;

          color: rgba(204, 251, 241, 0.48);
        }

        .tc-bio {
          margin-top: 11px;
          padding-top: 9px;

          border-top:
            1px solid
            rgba(94, 234, 212, 0.1);

          font-size: 11px;
          line-height: 1.55;

          color: rgba(220, 252, 247, 0.62);
        }

        .tc-underline {
          position: absolute;

          bottom: 0;
          left: 0;

          height: 2px;
          width: 0;

          background:
            linear-gradient(
              90deg,
              #14b8a6,
              #5eead4
            );

          transition: width 400ms ease;
        }

        .tc-card:hover .tc-underline {
          width: 100%;
        }
      `}</style>
    </div>
  );
}