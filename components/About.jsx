"use client";

import { useEffect, useRef, useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`${montserrat.className} relative overflow-hidden bg-[#020807] py-16 text-white sm:py-20 md:py-24`}
    >
      {/* =====================================================
          BACKGROUND — MATCHED TO PRICING
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Main teal atmosphere */}
        <div
          className="absolute left-1/2 top-[28%] h-[620px] w-[620px] -translate-x-1/2 rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,217,195,0.095) 0%, rgba(45,217,195,0.035) 38%, transparent 70%)",
            animation: "aboutGlow 8s ease-in-out infinite",
          }}
        />

        {/* Top-left atmosphere */}
        <div
          className="absolute -left-40 top-[5%] h-[420px] w-[420px] rounded-full blur-[135px]"
          style={{
            background:
              "radial-gradient(circle, rgba(20,184,166,0.075), transparent 70%)",
            animation: "aboutFloat 10s ease-in-out infinite",
          }}
        />

        {/* Bottom-right atmosphere */}
        <div
          className="absolute -bottom-40 -right-40 h-[480px] w-[480px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,217,195,0.065), transparent 70%)",
            animation: "aboutFloatReverse 12s ease-in-out infinite",
          }}
        />

        {/* Fine grid — same language as Pricing */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020807] to-transparent" />
      </div>

      {/* =====================================================
          ANIMATIONS — OUTER ABOUT ONLY
      ===================================================== */}

      <style jsx>{`
        @keyframes aboutGlow {
          0%,
          100% {
            opacity: 0.65;
            transform: translateX(-50%) scale(0.92);
          }

          50% {
            opacity: 1;
            transform: translateX(-50%) scale(1.07);
          }
        }

        @keyframes aboutFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(70px, 35px, 0);
          }
        }

        @keyframes aboutFloatReverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-65px, -45px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-intro,
          .about-architecture,
          .about-capabilities,
          .about-approach {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-40px))]">
        {/* ===================================================
            INTRO
        =================================================== */}

        <div
          className={`about-intro ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="about-eyebrow">
            ABOUT COSMIX
          </div>

          <h2 className="about-statement">
            We engineer intelligent systems{" "}
            <span className="about-muted">
              for ambitious ideas.
            </span>
          </h2>

          <p className="about-copy">
            We turn complex problems into focused digital products, AI
            systems, and applications built around real-world needs.
          </p>

          <a
            href="#process"
            className="
              about-cta
              group
              inline-flex
              items-center
              gap-4
              rounded-xl
              border
              border-teal-300/30
              bg-teal-300/[0.035]
              px-5
              py-4
              text-[9px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-teal-200
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-teal-300/50
              hover:bg-teal-300/[0.06]
              hover:text-teal-100
              hover:shadow-[0_0_30px_rgba(45,217,195,0.12)]
            "
          >
            <span>Explore how we build</span>

            <span className="text-base font-light transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* ===================================================
            ARCHITECTURE
            DO NOT TOUCH — ORIGINAL CHART PRESERVED
        =================================================== */}

        <div
          className={`about-architecture ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -inset-20
                rounded-[30px]
                bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.065),transparent_62%)]
                blur-3xl
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[20px]
                border
                bg-[#12161b]/95
              "
              style={{
                borderColor: "rgba(45,212,191,.38)",
                boxShadow:
                  "0 0 0 1px rgba(45,212,191,.06), 0 0 42px rgba(45,212,191,.045), inset 0 0 35px rgba(45,212,191,.02)",
              }}
            >
              <CosmixArchitecture />
            </div>
          </div>
        </div>

        {/* ===================================================
            CAPABILITIES
        =================================================== */}

        <div
          className={`about-capabilities ${
            visible ? "is-visible" : ""
          }`}
        >
          <Capability
            number="01"
            title="Intelligence"
            text="AI and data systems that turn complexity into useful signals."
          />

          <Capability
            number="02"
            title="Applications"
            text="Web and mobile products engineered around real user needs."
          />

          <Capability
            number="03"
            title="Execution"
            text="From first idea to working product, built with intent."
          />
        </div>

        {/* ===================================================
            APPROACH
        =================================================== */}

        <div
          className={`about-approach ${
            visible ? "is-visible" : ""
          }`}
        >
          <div>
           

            
          </div>

          <div className="about-approach-meta">
            BUILD / SOLVE / SCALE
          </div>
        </div>
      </div>

      {/* =====================================================
          OUTER ABOUT STYLES
      ===================================================== */}

      <style jsx>{`
        .about-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;

          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.42em;
          text-transform: uppercase;

          color: #2dd9c3;
        }

        .about-eyebrow::before {
          content: "";

          width: 28px;
          height: 1px;

          background: rgba(45, 217, 195, 0.6);
        }

        .about-intro {
          max-width: 900px;

          opacity: 0;
          transform: translateY(22px);

          transition:
            opacity 750ms ease,
            transform 750ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .about-intro.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-statement {
          margin-top: 24px;
          max-width: 1000px;

          font-size: clamp(2.15rem, 4.5vw, 4rem);
          font-weight: 300;
          line-height: 1.12;
          letter-spacing: 0.005em;

          color: #f5f5f5;
        }

        .about-muted {
          color: #2dd9c3;
          text-shadow: 0 0 20px rgba(45, 217, 195, 0.12);
        }

        .about-copy {
          max-width: 640px;
          margin-top: 24px;

          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          letter-spacing: 0.025em;

          color: #8f9897;
        }

        .about-cta {
          margin-top: 26px;
        }

        .about-architecture {
          margin-top: 58px;

          opacity: 0;
          transform: translateY(26px);

          transition:
            opacity 850ms ease 100ms,
            transform 850ms cubic-bezier(0.22, 1, 0.36, 1) 100ms;
        }

        .about-architecture.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-capabilities {
          display: grid;
          grid-template-columns: 1fr;

          margin-top: 46px;

          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);

          opacity: 0;
          transform: translateY(16px);

          transition:
            opacity 650ms ease 300ms,
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1) 300ms;
        }

        .about-capabilities.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-approach {
          display: flex;
          flex-direction: column;
          gap: 24px;

          margin-top: 52px;

          opacity: 0;
          transform: translateY(14px);

          transition:
            opacity 650ms ease 400ms,
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1) 400ms;
        }

        .about-approach.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-section-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.42em;
          text-transform: uppercase;

          color: #2dd9c3;
        }

        .about-approach-title {
          max-width: 820px;
          margin-top: 14px;

          font-size: clamp(2rem, 4.5vw, 3.6rem);
          font-weight: 300;
          line-height: 1.12;
          letter-spacing: 0.005em;

          color: #f5f5f5;
        }

        .about-approach-title span {
          color: #2dd9c3;
          text-shadow: 0 0 20px rgba(45, 217, 195, 0.12);
        }

        .about-approach-meta {
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.25em;

          color: #505a59;
        }

        @media (min-width: 768px) {
          .about-capabilities {
            grid-template-columns: repeat(3, 1fr);
          }

          .about-architecture {
            margin-top: 70px;
          }

          .about-approach {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
          }
        }

        @media (max-width: 640px) {
          .about-eyebrow {
            font-size: 9px;
            letter-spacing: 0.3em;
          }

          .about-eyebrow::before {
            width: 20px;
          }

          .about-statement {
            margin-top: 20px;

            font-size: clamp(2.05rem, 10vw, 3.25rem);
            line-height: 1.05;
            letter-spacing: 0;
          }

          .about-copy {
            margin-top: 20px;

            font-size: 13px;
            line-height: 1.7;
          }

          .about-cta {
            margin-top: 22px;
          }

          .about-architecture {
            margin-top: 46px;
          }

          .about-capabilities {
            margin-top: 38px;
          }

          .about-approach {
            margin-top: 42px;
          }

          .about-approach-title {
            font-size: clamp(1.9rem, 9vw, 3rem);
          }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   ARCHITECTURE — UNCHANGED
============================================================ */

function CosmixArchitecture() {
  return (
    <div className="relative px-5 py-9 sm:px-8 md:px-12 md:py-14">
      <ArchitectureMotionStyles />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-2 -top-16 -bottom-16 opacity-[0.55]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg width='10' height='10' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='0' width='1.5' height='1.5' fill='%232dd4bf'/></svg>\")",
          backgroundSize: "10px 10px",
          WebkitMaskImage:
            "linear-gradient(180deg, hsla(0,0%,85%,0), #737373 40%, #737373 60%, hsla(0,0%,85%,0))",
          maskImage:
            "linear-gradient(180deg, hsla(0,0%,85%,0), #737373 40%, #737373 60%, hsla(0,0%,85%,0))",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[-40%] w-[55%] arch-sweep"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(45,212,191,.05), transparent)",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#2dd4bf]/[0.06]
          blur-[85px]
          arch-breathe
        "
      />

      <div className="relative mx-auto max-w-[860px]">
        <div className="mb-10 flex items-center justify-between">
          <span className="font-mono text-[8px] tracking-[0.16em] text-[#6b7078]">
            COSMIX / SYSTEM ARCHITECTURE
          </span>

          <span className="flex items-center gap-2 font-mono text-[8px] tracking-[0.12em] text-[#2dd4bf]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf] shadow-[0_0_9px_rgba(45,212,191,.8)] arch-blink" />
            ACTIVE
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <Tag i={0}>STRATEGY</Tag>
          <Tag i={1}>RESEARCH</Tag>
          <Tag i={2} active>
            DESIGN
          </Tag>
          <Tag i={3}>ENGINEERING</Tag>
          <Tag i={4}>GROWTH</Tag>
        </div>

        <DotConnector />

        <div className="flex items-center justify-center gap-10">
          <Tag small i={1}>
            SDK
          </Tag>
          <Tag small i={3}>
            EVENT DESTINATIONS
          </Tag>
        </div>

        <DotConnector short />

        <div className="flex items-center justify-center gap-4 md:gap-8">
          <SidePill label="APP MARKETPLACE" align="right" />

          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 rounded-full bg-[#2dd4bf]/[0.12] blur-2xl arch-breathe"
            />

            <div
              className="
                arch-hub
                relative flex h-[86px] w-[86px] shrink-0 items-center
                justify-center rounded-[16px] border bg-[#161d1d]
                font-mono text-[10px] font-semibold tracking-[0.05em]
                text-[#ecfffc]
              "
              style={{ borderColor: "rgba(45,212,191,.6)" }}
            >
              COSMIX
            </div>
          </div>

          <SidePill label="DATA PIPELINE" align="left" />
        </div>

        <DotConnector short />

        <div className="flex justify-center">
          <div
            className="rounded-full border bg-[#141c1c] px-5 py-2.5"
            style={{
              borderColor: "rgba(45,212,191,.42)",
              boxShadow: "0 0 25px rgba(45,212,191,.08)",
            }}
          >
            <span className="flex items-center gap-2 font-mono text-[8px] tracking-[0.15em] text-[#2dd4bf]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf] shadow-[0_0_8px_rgba(45,212,191,.75)] arch-blink" />
              ORCHESTRATION
            </span>
          </div>
        </div>

        <DotConnector short />

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <Tag small i={0}>
            WEB SYSTEMS
          </Tag>
          <Tag small i={2}>
            MOBILE APPS
          </Tag>
          <Tag small i={4}>
            AI PRODUCTS
          </Tag>
        </div>

        <DotConnector />

        <div className="flex justify-center">
          <div
            className="rounded-full border bg-[#122120] px-6 py-3"
            style={{
              borderColor: "rgba(45,212,191,.48)",
              boxShadow: "0 0 30px rgba(45,212,191,.10)",
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf] shadow-[0_0_9px_rgba(45,212,191,.8)] arch-blink" />

              <span className="font-mono text-[8px] tracking-[0.16em] text-[#d7f9f3]">
                REAL-WORLD OUTCOMES
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tag({ children, active = false, small = false, i = 0 }) {
  return (
    <div
      className={`
        arch-tag
        rounded-[8px]
        border
        border-dashed
        bg-[#171c22]
        font-mono
        tracking-[0.08em]
        text-[#a7acb5]
        ${small ? "px-2.5 py-1.5 text-[7px]" : "px-3 py-2 text-[8px]"}
      `}
      style={{
        borderColor: active ? "#2dd4bf" : "rgba(255,255,255,.16)",
        color: active ? "#2dd4bf" : undefined,
        animationDelay: `${i * 0.5}s`,
      }}
    >
      {children}
    </div>
  );
}

function SidePill({ label, align }) {
  const line = (
    <div className="relative hidden h-px w-8 shrink-0 md:block">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(45,212,191,.6) 0 3px, transparent 3px 7px)",
        }}
      />

      <span
        className={`arch-flow-h absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#2dd4bf] shadow-[0_0_6px_rgba(45,212,191,.8)] ${
          align === "left" ? "arch-flow-h--rev" : ""
        }`}
      />
    </div>
  );

  return (
    <div className="flex items-center gap-2">
      {align === "right" && line}

      <div
        className="
          whitespace-nowrap
          rounded-[7px]
          border
          bg-[#171c22]
          px-2.5
          py-2
          font-mono
          text-[7px]
          tracking-[0.1em]
          text-[#94c3bd]
        "
        style={{ borderColor: "rgba(45,212,191,.28)" }}
      >
        {label}
      </div>

      {align === "left" && line}
    </div>
  );
}

function DotConnector({ short = false }) {
  return (
    <div className="flex justify-center">
      <div
        className={`relative w-px ${
          short ? "my-3 h-6" : "my-4 h-9"
        }`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, rgba(45,212,191,.6) 0 3px, transparent 3px 7px)",
        }}
      >
        <span className="arch-flow-v absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#2dd4bf] shadow-[0_0_8px_rgba(45,212,191,.8)]" />
      </div>
    </div>
  );
}

function ArchitectureMotionStyles() {
  return (
    <style jsx global>{`
      @keyframes archFlowV {
        0% {
          top: -6%;
          opacity: 0;
        }

        12% {
          opacity: 1;
        }

        88% {
          opacity: 1;
        }

        100% {
          top: 106%;
          opacity: 0;
        }
      }

      @keyframes archFlowH {
        0% {
          left: -6%;
          opacity: 0;
        }

        12% {
          opacity: 1;
        }

        88% {
          opacity: 1;
        }

        100% {
          left: 106%;
          opacity: 0;
        }
      }

      @keyframes archBreathe {
        0%,
        100% {
          opacity: 0.7;
          transform: scale(1) translate(-50%, -50%);
        }

        50% {
          opacity: 1;
          transform: scale(1.08) translate(-50%, -50%);
        }
      }

      @keyframes archHubGlow {
        0%,
        100% {
          box-shadow:
            0 0 0 1px rgba(45,212,191,.08),
            0 0 30px rgba(45,212,191,.16);
        }

        50% {
          box-shadow:
            0 0 0 1px rgba(45,212,191,.16),
            0 0 48px rgba(45,212,191,.3);
        }
      }

      @keyframes archTagGlow {
        0%,
        100% {
          border-color: rgba(255,255,255,.16);
        }

        50% {
          border-color: rgba(45,212,191,.55);
        }
      }

      @keyframes archBlink {
        0%,
        100% {
          opacity: 1;
        }

        50% {
          opacity: 0.35;
        }
      }

      @keyframes archSweep {
        0% {
          transform: translateX(0);
        }

        100% {
          transform: translateX(220%);
        }
      }

      .arch-flow-v {
        animation: archFlowV 2.4s linear infinite;
      }

      .arch-flow-h {
        animation: archFlowH 2.4s linear infinite;
      }

      .arch-flow-h--rev {
        animation-direction: reverse;
      }

      .arch-breathe {
        animation: archBreathe 3.2s ease-in-out infinite;
        transform-origin: center;
      }

      .arch-hub {
        animation: archHubGlow 3.2s ease-in-out infinite;
      }

      .arch-tag {
        animation: archTagGlow 3.6s ease-in-out infinite;
      }

      .arch-blink {
        animation: archBlink 1.8s ease-in-out infinite;
      }

      .arch-sweep {
        animation: archSweep 6s ease-in-out infinite;
      }

      @media (prefers-reduced-motion: reduce) {
        .arch-flow-v,
        .arch-flow-h,
        .arch-breathe,
        .arch-hub,
        .arch-tag,
        .arch-blink,
        .arch-sweep {
          animation: none !important;
        }
      }
    `}</style>
  );
}

function Capability({ number, title, text }) {
  return (
    <div
      className={`
        p-6
        md:p-7
        ${
          number !== "01"
            ? "border-t border-white/[0.08] md:border-l md:border-t-0"
            : ""
        }
      `}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8px] tracking-[0.12em] text-[#555a63]">
          {number}
        </span>

        <span className="h-px w-8 bg-[#2dd4bf]/50" />
      </div>

      <h3 className="mt-6 text-[17px] font-medium tracking-[-0.01em] text-[#f5f5f5]">
        {title}
      </h3>

      <p className="mt-2 max-w-[260px] text-[12px] font-light leading-5 tracking-wide text-[#8f9897]">
        {text}
      </p>
    </div>
  );
}