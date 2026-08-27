"use client";

import { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const TESTIMONIALS = [
  {
    quote:
      "Cosmix understood what we were trying to build and turned the idea into something that actually worked for the business.",
    name: "Founding Client",
    role: "Business Owner",
  },
  {
    quote:
      "What stood out was the thinking behind the product. It wasn't just about making something look good. Everything had a purpose.",
    name: "Client",
    role: "Founder",
  },
  {
    quote:
      "The process felt different from working with a typical agency. There was a clear system from the first conversation to the final build.",
    name: "Client",
    role: "Business Owner",
  },
];

const STATS = [
  {
    value: "100+",
    label: "Customers served",
  },
  {
    value: "5–7",
    label: "Days to first launch",
  },
  {
    value: "24/7",
    label: "Systems that keep working",
  },
];

export default function Proof() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = TESTIMONIALS[active];

  return (
    <section
      id="proof"
      className={`${montserrat.className} relative overflow-hidden bg-[#020807] py-10 text-white sm:py-14`}
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,217,195,0.13) 0%, rgba(45,217,195,0.035) 42%, transparent 72%)",
            animation: "proofGlow 8s ease-in-out infinite",
          }}
        />

        <div className="absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-teal-400/[0.045] blur-[130px]" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-teal-300/[0.04] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ================= ANIMATIONS ================= */}

      <style jsx>{`
        @keyframes proofGlow {
          0%,
          100% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(0.92);
          }

          50% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1.07);
          }
        }

        @keyframes quoteFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes starGlow {
          0%,
          100% {
            opacity: 0.72;
            text-shadow: 0 0 5px rgba(214, 168, 79, 0.25);
          }

          50% {
            opacity: 1;
            text-shadow: 0 0 13px rgba(214, 168, 79, 0.7);
          }
        }

        .quote-content {
          animation: quoteFade 500ms ease-out both;
        }

        .gold-star {
          animation: starGlow 2.8s ease-in-out infinite;
        }

        .gold-star:nth-child(2) {
          animation-delay: 100ms;
        }

        .gold-star:nth-child(3) {
          animation-delay: 200ms;
        }

        .gold-star:nth-child(4) {
          animation-delay: 300ms;
        }

        .gold-star:nth-child(5) {
          animation-delay: 400ms;
        }
      `}</style>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}

        <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-10">

          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-7 bg-teal-300/60" />

            <span className="text-[9px] font-medium uppercase tracking-[0.42em] text-teal-300">
              Testimonials
            </span>

            <span className="h-px w-7 bg-teal-300/60" />
          </div>

          <h2 className="whitespace-nowrap text-[clamp(1.1rem,3.4vw,3.2rem)] font-light uppercase leading-none tracking-[0.045em] text-white">
            TRUST BUILT THROUGH{" "}
            <span className="text-teal-300 drop-shadow-[0_0_22px_rgba(45,217,195,0.35)]">
              RESULTS
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-xs font-light leading-6 tracking-wide text-neutral-300 sm:text-sm">
            Real businesses. Real systems. Real outcomes.
          </p>
        </div>

        {/* ================= TESTIMONIAL ================= */}

        <div className="relative mx-auto max-w-5xl">

          {/* glow */}

          <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-teal-300/[0.025] blur-[55px]" />

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[26px]
              border
              border-teal-300/25
              bg-white/[0.035]
              backdrop-blur-2xl
              shadow-[0_0_45px_rgba(45,217,195,0.07),inset_0_0_35px_rgba(45,217,195,0.018)]
              transition-all
              duration-700
              hover:-translate-y-1
              hover:border-teal-300/45
              hover:shadow-[0_0_65px_rgba(45,217,195,0.13),inset_0_0_40px_rgba(45,217,195,0.025)]
            "
          >

            {/* glowing top line */}

            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/80 to-transparent shadow-[0_0_14px_rgba(45,217,195,0.6)]" />

            {/* inner glow */}

            <div className="pointer-events-none absolute -right-32 -top-32 h-[350px] w-[350px] rounded-full bg-teal-300/[0.045] blur-[100px] transition-all duration-700 group-hover:bg-teal-300/[0.07]" />

            <div className="grid lg:grid-cols-[1fr_270px]">

              {/* ================= QUOTE ================= */}

              <div className="relative p-7 sm:p-10 lg:p-12">

                {/* stars */}

                <div className="mb-6 flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="gold-star text-[16px] text-[#D6A84F]"
                    >
                      ★
                    </span>
                  ))}

                  <span className="ml-2 text-[8px] font-medium uppercase tracking-[0.25em] text-neutral-400">
                    Client experience
                  </span>
                </div>

                {/* quote mark */}

                <div className="mb-2 text-5xl font-light leading-none text-teal-300/25">
                  “
                </div>

                {/* dynamic testimonial */}

                <div key={active} className="quote-content">

                  <blockquote className="max-w-3xl text-lg font-light leading-relaxed tracking-wide text-white sm:text-xl lg:text-[25px] lg:leading-[1.55]">
                    {testimonial.quote}
                  </blockquote>

                  <div className="mt-8 flex items-center gap-4">

                    <div className="h-px w-9 bg-teal-300/70 shadow-[0_0_9px_rgba(45,217,195,0.45)]" />

                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white">
                        {testimonial.name}
                      </p>

                      <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-neutral-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* testimonial controls */}

                <div className="mt-8 flex items-center gap-2">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActive(index)}
                      aria-label={`Show testimonial ${index + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        index === active
                          ? "w-8 bg-teal-300 shadow-[0_0_13px_rgba(45,217,195,0.8)]"
                          : "w-1.5 bg-neutral-600 hover:bg-neutral-300"
                      }`}
                    />
                  ))}

                  <span className="ml-3 text-[8px] uppercase tracking-[0.2em] text-neutral-600">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(TESTIMONIALS.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* ================= CUSTOMER PROOF ================= */}

              <div className="group/stat relative flex flex-col justify-center border-t border-teal-300/15 bg-teal-300/[0.025] p-7 transition-all duration-500 hover:bg-teal-300/[0.045] lg:border-l lg:border-t-0 lg:p-8">

                <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-teal-300">
                  Trusted by
                </span>

                <div className="mt-2 text-6xl font-light tracking-[-0.05em] text-white transition-all duration-500 group-hover/stat:text-teal-100 group-hover/stat:drop-shadow-[0_0_18px_rgba(45,217,195,0.3)]">
                  100<span className="text-teal-300">+</span>
                </div>

                <p className="mt-2 max-w-[185px] text-[11px] font-light leading-5 text-neutral-300">
                  customers and businesses choosing better digital systems.
                </p>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-teal-300/40 to-transparent" />

                <span className="mt-4 text-[8px] uppercase tracking-[0.28em] text-neutral-500">
                  COSMIX NETWORK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STATS ================= */}

        <div className="mx-auto mt-4 grid max-w-5xl grid-cols-1 overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.02] backdrop-blur-xl sm:grid-cols-3">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`group p-5 text-center transition-all duration-500 hover:bg-teal-300/[0.025] sm:p-6 ${
                index !== 0
                  ? "border-t border-white/[0.08] sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              <div className="text-2xl font-light tracking-tight text-white transition-all duration-300 group-hover:text-teal-200 group-hover:drop-shadow-[0_0_12px_rgba(45,217,195,0.25)]">
                {stat.value}
              </div>

              <div className="mt-1.5 text-[8px] uppercase tracking-[0.25em] text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mt-7 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-teal-300/40" />

            <span className="h-1 w-1 rounded-full bg-teal-300 shadow-[0_0_12px_rgba(45,217,195,0.9)]" />

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-teal-300/40" />
          </div>

          <p className="mt-4 text-[8px] font-light uppercase tracking-[0.32em] text-neutral-500">
            More than a service. A system built around your business.
          </p>
        </div>
      </div>
    </section>
  );
}