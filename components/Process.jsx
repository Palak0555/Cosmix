"use client";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const STEPS = [
  {
    num: "01",
    title: "Understand",
    body: "We start by understanding the business, the problem, and the outcome that actually matters. No unnecessary features, no building for the sake of building.",
    time: "START",
  },
  {
    num: "02",
    title: "Architect",
    body: "We turn the vision into a clear digital system — defining the experience, technology, workflows, and automation required to make it work.",
    time: "PLAN",
  },
  {
    num: "03",
    title: "Build",
    body: "We design and engineer the system around the business. Websites, applications, software, and intelligent infrastructure are built as one connected ecosystem.",
    time: "EXECUTE",
  },
  {
    num: "04",
    title: "Automate & Scale",
    body: "Once the foundation works, we remove repetitive work, connect the systems, and create the infrastructure that lets the business grow without adding unnecessary complexity.",
    time: "GROW",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className={`${montserrat.className} relative overflow-hidden bg-[#020807] py-24 text-white sm:py-32`}
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main teal glow */}
        <div
          className="absolute left-1/2 top-[42%] h-[680px] w-[680px] -translate-x-1/2 rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,217,195,0.13) 0%, rgba(45,217,195,0.045) 35%, transparent 70%)",
            animation: "processGlow 8s ease-in-out infinite",
          }}
        />

        {/* Left glow */}
        <div
          className="absolute -left-40 top-[25%] h-[420px] w-[420px] rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(20,184,166,0.08), transparent 70%)",
            animation: "processFloat 10s ease-in-out infinite",
          }}
        />

        {/* Right glow */}
        <div
          className="absolute -right-40 bottom-[10%] h-[500px] w-[500px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,217,195,0.08), transparent 70%)",
            animation: "processFloatReverse 12s ease-in-out infinite",
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#020807] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020807] to-transparent" />
      </div>

      {/* ================= ANIMATIONS ================= */}

      <style jsx>{`
        @keyframes processGlow {
          0%,
          100% {
            opacity: 0.55;
            transform: translateX(-50%) scale(0.92);
          }

          50% {
            opacity: 0.95;
            transform: translateX(-50%) scale(1.08);
          }
        }

        @keyframes processFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(70px, 35px, 0);
          }
        }

        @keyframes processFloatReverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-70px, -45px, 0);
          }
        }

        @keyframes processReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes borderPulse {
          0%,
          100% {
            box-shadow:
              0 0 22px rgba(45, 217, 195, 0.055),
              inset 0 0 22px rgba(45, 217, 195, 0.012);
          }

          50% {
            box-shadow:
              0 0 34px rgba(45, 217, 195, 0.11),
              inset 0 0 30px rgba(45, 217, 195, 0.02);
          }
        }

        .process-card {
          animation:
            processReveal 800ms ease-out both,
            borderPulse 5s ease-in-out infinite;
        }

        .process-card:nth-child(1) {
          animation-delay: 100ms, 0ms;
        }

        .process-card:nth-child(2) {
          animation-delay: 200ms, 700ms;
        }

        .process-card:nth-child(3) {
          animation-delay: 300ms, 1400ms;
        }

        .process-card:nth-child(4) {
          animation-delay: 400ms, 2100ms;
        }
      `}</style>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}

        <div className="mx-auto mb-16 max-w-5xl text-center sm:mb-20">

          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-teal-300/60" />

            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-teal-300">
              The Cosmix Mechanism
            </span>

            <span className="h-px w-8 bg-teal-300/60" />
          </div>

          {/* SINGLE LINE HEADING */}

          <h2 className="whitespace-nowrap text-[clamp(1.1rem,3.4vw,3.2rem)] font-light uppercase leading-none tracking-[0.045em] text-neutral-100">
            WHERE BUSINESS MEETS{" "}
            <span className="text-teal-300 drop-shadow-[0_0_20px_rgba(45,217,195,0.30)]">
              INTELLIGENCE
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm font-light leading-7 tracking-wide text-neutral-400 sm:text-base">
            We do not simply deliver digital products. We build the systems
            that turn a business idea into something that can operate, improve,
            and scale.
          </p>
        </div>

        {/* ================= PROCESS ================= */}

        <div className="relative">

          {/* DESKTOP GLOWING WAVE */}

          <div
            className="pointer-events-none absolute left-[7%] right-[7%] top-[58px] hidden h-24 lg:block"
            aria-hidden="true"
          >
            <svg
              className="h-full w-full overflow-visible"
              viewBox="0 0 1000 100"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Outer glow */}
              <path
                d="M0 50 C120 5 150 95 250 50 S380 5 500 50 S620 95 750 50 S880 5 1000 50"
                stroke="rgba(45,217,195,0.12)"
                strokeWidth="16"
                filter="blur(10px)"
              />

              {/* Medium glow */}
              <path
                d="M0 50 C120 5 150 95 250 50 S380 5 500 50 S620 95 750 50 S880 5 1000 50"
                stroke="rgba(45,217,195,0.22)"
                strokeWidth="7"
                filter="blur(4px)"
              />

              {/* Main wave */}
              <path
                d="M0 50 C120 5 150 95 250 50 S380 5 500 50 S620 95 750 50 S880 5 1000 50"
                stroke="rgba(91,234,218,0.48)"
                strokeWidth="1.5"
              />

              {/* Bright center */}
              <path
                d="M0 50 C120 5 150 95 250 50 S380 5 500 50 S620 95 750 50 S880 5 1000 50"
                stroke="rgba(153,246,236,0.38)"
                strokeWidth="0.7"
              />
            </svg>
          </div>

          {/* MOBILE CONNECTOR */}

          <div
            className="pointer-events-none absolute bottom-0 left-[27px] top-0 w-px bg-gradient-to-b from-transparent via-teal-300/30 to-transparent lg:hidden"
            aria-hidden="true"
          />

          {/* ================= CARDS ================= */}

          <div className="grid gap-5 lg:grid-cols-4 lg:gap-5">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="process-card group relative"
              >

                {/* NUMBER */}

                <div className="relative z-20 mb-7 flex items-center lg:justify-center">
                  <div
                    className="
                      relative
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-teal-300/45
                      bg-[#06110f]/95
                      text-[10px]
                      font-medium
                      tracking-[0.18em]
                      text-teal-300
                      shadow-[0_0_25px_rgba(45,217,195,0.13)]
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      group-hover:border-teal-200/80
                      group-hover:text-teal-100
                      group-hover:shadow-[0_0_40px_rgba(45,217,195,0.30)]
                    "
                  >
                    {step.num}

                    <span className="absolute inset-[-5px] rounded-full border border-teal-300/15 shadow-[0_0_15px_rgba(45,217,195,0.10)] transition-all duration-500 group-hover:border-teal-300/35 group-hover:shadow-[0_0_25px_rgba(45,217,195,0.22)]" />
                  </div>
                </div>

                {/* GLASS CARD */}

                <div
                  className="
                    relative
                    flex
                    h-[370px]
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    border
                    border-teal-300/20
                    bg-white/[0.025]
                    p-7
                    backdrop-blur-2xl
                    shadow-[0_0_25px_rgba(45,217,195,0.055),inset_0_0_25px_rgba(45,217,195,0.015)]
                    transition-all
                    duration-500
                    group-hover:-translate-y-2
                    group-hover:border-teal-300/55
                    group-hover:bg-teal-300/[0.035]
                    group-hover:shadow-[0_0_50px_rgba(45,217,195,0.18),inset_0_0_30px_rgba(45,217,195,0.025)]
                    sm:p-8
                  "
                >

                  {/* Top shine */}

                  <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/40 to-transparent" />

                  {/* Bottom shine */}

                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-300/10 to-transparent" />

                  {/* Internal glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-24
                      -top-24
                      h-56
                      w-56
                      rounded-full
                      bg-teal-300/0
                      blur-[80px]
                      transition-all
                      duration-700
                      group-hover:bg-teal-300/12
                    "
                  />

                  {/* Card content */}

                  <div className="relative z-10">
                    <span className="text-[8px] font-medium uppercase tracking-[0.32em] text-neutral-600">
                      PHASE {step.num}
                    </span>

                    <h3 className="mt-5 text-2xl font-light uppercase tracking-[0.08em] text-neutral-100 transition-colors duration-300 group-hover:text-teal-100">
                      {step.title}
                    </h3>

                    <div className="mt-5 h-px w-9 bg-teal-300/60 shadow-[0_0_8px_rgba(45,217,195,0.25)] transition-all duration-500 group-hover:w-16 group-hover:bg-teal-300 group-hover:shadow-[0_0_14px_rgba(45,217,195,0.65)]" />
                  </div>

                  {/* Body */}

                  <p className="relative z-10 mt-7 flex-1 text-xs font-light leading-6 tracking-wide text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
                    {step.body}
                  </p>

                  {/* Footer */}

                  <div className="relative z-10 mt-8 border-t border-teal-300/10 pt-5">
                    <span className="text-[8px] font-medium uppercase tracking-[0.30em] text-teal-300/75">
                      {step.time}
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <div className="mx-auto mt-16 max-w-2xl text-center sm:mt-20">

          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-teal-300/40" />

            <span className="h-1 w-1 rounded-full bg-teal-300 shadow-[0_0_12px_rgba(45,217,195,0.9)]" />

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-teal-300/40" />
          </div>

          <p className="mt-6 text-[10px] font-light uppercase tracking-[0.30em] text-neutral-600">
            One vision. One connected system.
          </p>

        </div>
      </div>
    </section>
  );
}