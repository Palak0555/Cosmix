"use client";

import { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const SERVICES = [
  "Software",
  "Applications",
  "Websites",
  "Intelligent Systems",
  "Automation",
];

const STEP_DURATIONS = [3500, 6500, 11000];
const FADE_MS = 550;
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

  useEffect(() => {
    if (reducedMotion) {
      setEntered(true);
      setStep(TOTAL_STEPS - 1);
      return;
    }

    const timer = setTimeout(() => {
      setEntered(true);
    }, 450);

    return () => clearTimeout(timer);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion || !entered) return;

    const holdTime = STEP_DURATIONS[step];

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

  return (
    <header
      className={`${montserrat.className} relative min-h-screen w-full overflow-hidden bg-[#020807] text-white`}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main soft teal atmosphere */}
        <div
          className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/[0.055] blur-[150px]"
          style={{
            animation: reducedMotion
              ? "none"
              : "cosmixGlow 7s ease-in-out infinite",
          }}
        />

        {/* Small moving glow */}
        <div
          className="absolute left-[10%] top-[20%] h-[350px] w-[350px] rounded-full bg-teal-300/[0.035] blur-[130px]"
          style={{
            animation: reducedMotion
              ? "none"
              : "cosmixFloat 10s ease-in-out infinite",
          }}
        />

        {/* Bottom glow */}
        <div
          className="absolute bottom-[-10%] right-[5%] h-[420px] w-[420px] rounded-full bg-cyan-300/[0.035] blur-[140px]"
          style={{
            animation: reducedMotion
              ? "none"
              : "cosmixFloatReverse 12s ease-in-out infinite",
          }}
        />
      </div>

      {/* =========================================================
          GLOBAL WAVES
          Same wave style on first + final section
      ========================================================= */}

      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 z-0 h-[420px] w-[1250px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
          step === 1 ? "opacity-[0.12]" : "opacity-100"
        }`}
        aria-hidden="true"
      >
        {/* Central glow behind wave */}
        <div
          className="absolute left-1/2 top-1/2 h-[170px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/[0.07] blur-[90px]"
          style={{
            animation: reducedMotion
              ? "none"
              : "waveGlow 4.5s ease-in-out infinite",
          }}
        />

        {/* MAIN WAVE */}
        <svg
          className="absolute left-1/2 top-1/2 h-[300px] w-[1200px] -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 1200 300"
          fill="none"
          preserveAspectRatio="none"
          style={{
            animation: reducedMotion
              ? "none"
              : "waveMove 9s ease-in-out infinite",
          }}
        >
          {/* blurred glow */}
          <path
            d="M0 165 C190 65 330 245 570 135 C790 35 960 230 1200 115"
            stroke="rgba(45,217,195,0.16)"
            strokeWidth="16"
            filter="blur(10px)"
          />

          {/* soft line */}
          <path
            d="M0 165 C190 65 330 245 570 135 C790 35 960 230 1200 115"
            stroke="rgba(45,217,195,0.22)"
            strokeWidth="4"
            filter="blur(2px)"
          />

          {/* sharp glowing line */}
          <path
            d="M0 165 C190 65 330 245 570 135 C790 35 960 230 1200 115"
            stroke="rgba(91,234,218,0.48)"
            strokeWidth="1.5"
          />
        </svg>

        {/* SECOND WAVE */}
        <svg
          className="absolute left-1/2 top-1/2 h-[340px] w-[1150px] -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 1150 340"
          fill="none"
          preserveAspectRatio="none"
          style={{
            animation: reducedMotion
              ? "none"
              : "waveMoveReverse 12s ease-in-out infinite",
          }}
        >
          <path
            d="M0 175 C180 255 350 65 560 165 C770 260 925 65 1150 150"
            stroke="rgba(34,211,238,0.10)"
            strokeWidth="13"
            filter="blur(10px)"
          />

          <path
            d="M0 175 C180 255 350 65 560 165 C770 260 925 65 1150 150"
            stroke="rgba(34,211,238,0.20)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* =========================================================
          ANIMATIONS
      ========================================================= */}

      <style jsx>{`
        @keyframes cosmixGlow {
          0%,
          100% {
            opacity: 0.35;
            transform: translate(-50%, -50%) scale(0.92);
          }

          50% {
            opacity: 0.75;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        @keyframes cosmixFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(100px, 50px, 0);
          }
        }

        @keyframes cosmixFloatReverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-90px, -60px, 0);
          }
        }

        @keyframes waveMove {
          0%,
          100% {
            transform: translate(-50%, -50%) translateX(-25px)
              rotate(-1deg);
          }

          50% {
            transform: translate(-50%, -50%) translateX(25px)
              rotate(1deg);
          }
        }

        @keyframes waveMoveReverse {
          0%,
          100% {
            transform: translate(-50%, -50%) translateX(25px)
              rotate(1deg);
          }

          50% {
            transform: translate(-50%, -50%) translateX(-25px)
              rotate(-1deg);
          }
        }

        @keyframes waveGlow {
          0%,
          100% {
            opacity: 0.25;
            transform: translate(-50%, -50%) scale(0.9);
          }

          50% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        @keyframes revealUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* =========================================================
          OPENING SPARK
      ========================================================= */}

      {!entered && !reducedMotion && (
        <div
          className="absolute left-1/2 top-1/2 z-20 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300"
          style={{
            boxShadow:
              "0 0 12px rgba(45,217,195,0.9), 0 0 45px rgba(45,217,195,0.55)",
            animation: "waveGlow 1s ease-in-out infinite",
          }}
        />
      )}

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div
        className={`relative z-10 flex min-h-screen w-full items-center justify-center px-6 py-24 transition-all duration-1000 ${
          entered
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        }`}
      >
        {/* =======================================================
            STEP 1 — COSMIX
        ======================================================= */}

        {step === 0 && (
          <div
            className={`flex flex-col items-center transition-opacity duration-500 ${
              fading ? "opacity-0" : "opacity-100"
            }`}
          >
            <h1
              className="
                m-0
                text-[clamp(4rem,10vw,8rem)]
                font-light
                uppercase
                leading-none
                tracking-[0.30em]
                text-neutral-100
              "
            >
              COSMIX
            </h1>

            <div className="mt-8 flex items-center gap-5">
              <span className="h-px w-9 bg-teal-300/70" />

              <p
                className="
                  m-0
                  text-[11px]
                  font-normal
                  uppercase
                  tracking-[0.42em]
                  text-neutral-100
                  sm:text-sm
                "
              >
                FOR THE VISIONARIES
              </p>

              <span className="h-px w-9 bg-teal-300/70" />
            </div>
          </div>
        )}

        {/* =======================================================
            STEP 2 — INTELLIGENT SYSTEMS
        ======================================================= */}

        {step === 1 && (
          <div
            className={`relative flex w-full max-w-[1250px] flex-col items-center transition-opacity duration-500 ${
              fading ? "opacity-0" : "opacity-100"
            }`}
          >
            <p
              className="
                m-0
                mb-10
                text-center
                text-[16px]
                font-normal
                uppercase
                leading-none
                tracking-[0.32em]
                text-neutral-100
                sm:text-[18px]
                md:text-[21px]
              "
            >
              ENGINEERED FOR BUILDING
            </p>

            <h2
              className="
                m-0
                w-full
                text-center
                text-[clamp(2rem,5vw,4.4rem)]
                font-light
                uppercase
                leading-[1.15]
                tracking-[0.16em]
                text-neutral-100
              "
            >
              INTELLIGENT SYSTEMS
            </h2>

            <p
              className="
                m-0
                mt-10
                text-center
                text-[16px]
                font-normal
                uppercase
                leading-none
                tracking-[0.32em]
                text-neutral-100
                sm:text-[18px]
                md:text-[21px]
              "
            >
              TO GROW.
            </p>
          </div>
        )}

        {/* =======================================================
            STEP 3 — WHAT WE BUILD
        ======================================================= */}

        {step === 2 && (
          <div
            className={`relative flex w-full max-w-6xl flex-col items-center transition-opacity duration-500 ${
              fading ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* stronger glow for final section */}

            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/[0.06] blur-[110px]"
              style={{
                animation: reducedMotion
                  ? "none"
                  : "waveGlow 4s ease-in-out infinite",
              }}
            />

            {/* Heading */}

            <div className="relative z-10 flex flex-col items-center">
              <p
                className="
                  m-0
                  text-[11px]
                  font-normal
                  uppercase
                  tracking-[0.42em]
                  text-teal-300
                  sm:text-xs
                "
              >
                WHAT WE BUILD
              </p>

              <span className="my-8 h-px w-14 bg-gradient-to-r from-transparent via-teal-300 to-transparent shadow-[0_0_12px_rgba(45,217,195,0.45)]" />
            </div>

            {/* Services */}

            <div
              className="
                relative
                z-10
                grid
                w-full
                grid-cols-1
                gap-y-6
                sm:grid-cols-2
                lg:grid-cols-5
                lg:gap-0
              "
            >
              {SERVICES.map((item, i) => (
                <div
                  key={item}
                  className="group flex items-center justify-center"
                  style={{
                    animation: reducedMotion
                      ? "none"
                      : `revealUp 700ms ease-out ${i * 120}ms both`,
                  }}
                >
                  <span
                    className="
                      mr-2
                      h-1
                      w-1
                      rounded-full
                      bg-teal-300
                      shadow-[0_0_10px_rgba(45,217,195,0.9)]
                      transition-all
                      duration-300
                      group-hover:scale-150
                    "
                  />

                  <span
                    className="
                      text-[11px]
                      font-light
                      uppercase
                      tracking-[0.16em]
                      text-neutral-300
                      transition-colors
                      duration-300
                      group-hover:text-white
                      sm:text-xs
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <a
              href="#contact"
              className="
                group
                relative
                z-10
                mt-14
                inline-flex
                items-center
                gap-5
                overflow-hidden
                border
                border-teal-300/40
                bg-teal-400/[0.05]
                px-9
                py-4
                text-[10px]
                font-normal
                uppercase
                tracking-[0.30em]
                text-white
                shadow-[0_0_25px_rgba(45,217,195,0.05)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-teal-300
                hover:bg-teal-300/[0.10]
                hover:shadow-[0_0_40px_rgba(45,217,195,0.18)]
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-teal-300/[0.13]
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />

              <span className="relative">
                BOOK A CALL
              </span>

              <span
                className="
                  relative
                  text-base
                  font-light
                  text-teal-300
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>
          </div>
        )}
      </div>

      {/* =========================================================
          PROGRESS
      ========================================================= */}

      <div
        className={`absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 transition-opacity duration-700 ${
          entered ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <span
            key={i}
            className={`
              h-px
              transition-all
              duration-500
              ${
                i === step
                  ? "w-9 bg-teal-300 shadow-[0_0_10px_rgba(45,217,195,0.8)]"
                  : "w-2 bg-neutral-700"
              }
            `}
          />
        ))}
      </div>

      {/* Bottom micro branding */}

      <div className="absolute bottom-8 left-10 z-20 hidden text-[8px] font-light uppercase tracking-[0.3em] text-neutral-700 sm:block">
        COSMIX
      </div>

      <div className="absolute bottom-8 right-10 z-20 hidden text-[8px] font-light uppercase tracking-[0.3em] text-neutral-700 sm:block">
        2026
      </div>

      <p className="sr-only">
        Cosmix — for the visionaries. We engineer intelligent systems
        that help businesses grow through software, applications,
        websites, intelligent systems and automation.
      </p>
    </header>
  );
}