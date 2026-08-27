"use client";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const PACKAGES = [
  {
    name: "LAUNCH",
    bestFor: "New or under-served businesses",
    price: "$100 – $500",
    period: "one-time",
    items: [
      "Mobile-first website (React or Shopify)",
      "Booking / contact form built in",
      "Basic SEO setup",
      "Delivered in 5–7 days",
    ],
    cta: "Start with Launch",
    featured: false,
  },
  {
    name: "GROW",
    bestFor: "Ready for consistent leads",
    price: "$800 – $1,500",
    period: "/ month",
    items: [
      "Everything in Launch",
      "Monthly social media management",
      "Monthly performance report",
      "One accountable team, ongoing",
    ],
    cta: "Talk about Grow",
    featured: true,
  },
  {
    name: "SCALE",
    bestFor: "Established teams scaling up",
    price: "$2,000 – $4,000+",
    period: "/ month",
    items: [
      "Everything in Grow",
      "Android app — bookings, loyalty, updates",
      "Paid ads management",
      "Quarterly strategy review",
    ],
    cta: "Discuss Scale",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="services"
      className={`${montserrat.className} relative overflow-hidden bg-[#020807] pt-12 pb-28 text-white sm:pt-16 sm:pb-36`}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main teal atmosphere */}
        <div
          className="absolute left-1/2 top-[35%] h-[650px] w-[650px] -translate-x-1/2 rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,217,195,0.13) 0%, rgba(45,217,195,0.045) 35%, transparent 70%)",
            animation: "pricingGlow 8s ease-in-out infinite",
          }}
        />

        {/* Top-left glow */}
        <div
          className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(20,184,166,0.10), transparent 70%)",
            animation: "pricingFloat 10s ease-in-out infinite",
          }}
        />

        {/* Bottom-right glow */}
        <div
          className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,217,195,0.09), transparent 70%)",
            animation: "pricingFloatReverse 12s ease-in-out infinite",
          }}
        />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
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
          ANIMATIONS
      ===================================================== */}

      <style jsx>{`
        @keyframes pricingGlow {
          0%,
          100% {
            opacity: 0.65;
            transform: translateX(-50%) scale(0.9);
          }

          50% {
            opacity: 1;
            transform: translateX(-50%) scale(1.08);
          }
        }

        @keyframes pricingFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(80px, 40px, 0);
          }
        }

        @keyframes pricingFloatReverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-70px, -50px, 0);
          }
        }

        @keyframes pricingReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pricing-card {
          animation: pricingReveal 800ms ease-out both;
        }

        .pricing-card:nth-child(1) {
          animation-delay: 100ms;
        }

        .pricing-card:nth-child(2) {
          animation-delay: 200ms;
        }

        .pricing-card:nth-child(3) {
          animation-delay: 300ms;
        }
      `}</style>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          {/* Eyebrow */}

          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-teal-300/60" />

            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-teal-300">
              Packages
            </span>

            <span className="h-px w-8 bg-teal-300/60" />
          </div>

          {/* Heading */}

          <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-light uppercase leading-[1.12] tracking-[0.08em] text-neutral-100">
            Built for{" "}
            <span className="text-teal-300 drop-shadow-[0_0_20px_rgba(45,217,195,0.25)]">
              growth
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm font-light leading-7 tracking-wide text-neutral-400 sm:text-base">
            Three tiers. Each one is more growth engine, not just more
            features.
          </p>

          <p className="mx-auto mt-3 max-w-xl text-xs font-light leading-6 tracking-wide text-neutral-600">
            Most clients start with Launch or Grow Scale is designed for
            teams ready to invest in the full engine.
          </p>
        </div>

        {/* ===================================================
            PACKAGE GRID
        =================================================== */}

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`pricing-card group relative flex flex-col overflow-hidden rounded-2xl border p-7 backdrop-blur-2xl transition-all duration-500 sm:p-8 ${
                pkg.featured
                  ? "border-teal-300/35 bg-teal-300/[0.075] shadow-[0_0_60px_rgba(45,217,195,0.08)] lg:-translate-y-3"
                  : "border-white/[0.09] bg-white/[0.025]"
              }`}
            >
              {/* Card inner glow */}

              <div
                className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-[80px] transition-opacity duration-500 ${
                  pkg.featured
                    ? "bg-teal-300/15 opacity-100"
                    : "bg-teal-300/0 opacity-0 group-hover:bg-teal-300/10 group-hover:opacity-100"
                }`}
              />

              {/* Glass shine */}

              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Featured badge */}

              {pkg.featured && (
                <div className="absolute right-6 top-6">
                  <span className="rounded-full border border-teal-300/25 bg-teal-300/10 px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.22em] text-teal-300 shadow-[0_0_20px_rgba(45,217,195,0.08)]">
                    Most Common
                  </span>
                </div>
              )}

              {/* =================================================
                  CARD HEADER
              ================================================= */}

              <div className="relative z-10">
                <span className="text-[9px] font-normal uppercase tracking-[0.28em] text-neutral-500">
                  {pkg.bestFor}
                </span>

                <h3
                  className={`mt-5 text-3xl font-light tracking-[0.08em] ${
                    pkg.featured ? "text-teal-100" : "text-neutral-100"
                  }`}
                >
                  {pkg.name}
                </h3>

                {/* Small line */}

                <div
                  className={`mt-5 h-px w-10 transition-all duration-500 group-hover:w-20 ${
                    pkg.featured
                      ? "bg-teal-300 shadow-[0_0_10px_rgba(45,217,195,0.5)]"
                      : "bg-neutral-600 group-hover:bg-teal-300"
                  }`}
                />
              </div>

              {/* =================================================
                  PRICE
              ================================================= */}

              <div className="relative z-10 mt-9">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span
                    className={`text-[clamp(1.65rem,3vw,2.25rem)] font-light tracking-tight ${
                      pkg.featured ? "text-white" : "text-neutral-100"
                    }`}
                  >
                    {pkg.price}
                  </span>

                  <span className="text-[10px] font-light uppercase tracking-[0.18em] text-neutral-500">
                    {pkg.period}
                  </span>
                </div>
              </div>

              {/* =================================================
                  DIVIDER
              ================================================= */}

              <div className="my-8 h-px bg-gradient-to-r from-white/[0.10] via-white/[0.06] to-transparent" />

              {/* =================================================
                  FEATURES
              ================================================= */}

              <ul className="relative z-10 flex flex-1 flex-col gap-5">
                {pkg.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-xs font-light leading-5 tracking-wide text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300"
                  >
                    <span
                      className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${
                        pkg.featured
                          ? "bg-teal-300 shadow-[0_0_8px_rgba(45,217,195,0.8)]"
                          : "bg-neutral-600 group-hover:bg-teal-300"
                      }`}
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* =================================================
                  CTA
              ================================================= */}

              <a
                href="#contact"
                className={`group/button relative z-10 mt-10 flex w-full items-center justify-center gap-4 overflow-hidden rounded-xl border px-5 py-4 text-[9px] font-medium uppercase tracking-[0.25em] transition-all duration-300 ${
                  pkg.featured
                    ? "border-teal-300/50 bg-teal-300 text-[#02100e] shadow-[0_0_30px_rgba(45,217,195,0.12)] hover:bg-teal-200 hover:shadow-[0_0_40px_rgba(45,217,195,0.25)]"
                    : "border-white/[0.12] bg-white/[0.025] text-neutral-300 hover:border-teal-300/40 hover:bg-teal-300/[0.06] hover:text-teal-200"
                }`}
              >
                <span>{pkg.cta}</span>

                <span className="text-base font-light transition-transform duration-300 group-hover/button:translate-x-1">
                  →
                </span>

                {/* Button shine */}

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/button:translate-x-full" />
              </a>
            </div>
          ))}
        </div>

        {/* ===================================================
            BOTTOM NOTE
        =================================================== */}

        <div className="mt-12 flex items-center justify-center gap-3 text-center">
          <span className="h-px w-5 bg-neutral-800" />

          <p className="text-[9px] font-light uppercase tracking-[0.25em] text-neutral-600">
            Every engagement starts with a conversation
          </p>

          <span className="h-px w-5 bg-neutral-800" />
        </div>
      </div>
    </section>
  );
}