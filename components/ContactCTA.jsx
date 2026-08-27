"use client";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020807] py-16 text-white sm:py-20"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main teal glow */}
        <div
          className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,217,195,0.13) 0%, rgba(45,217,195,0.045) 42%, transparent 72%)",
            animation: "ctaGlow 7s ease-in-out infinite",
          }}
        />

        {/* Side glows */}
        <div className="absolute -left-40 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-teal-400/[0.035] blur-[130px]" />

        <div className="absolute -right-40 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-teal-400/[0.035] blur-[130px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.016]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* ================= ANIMATIONS ================= */}

      <style jsx>{`
        @keyframes ctaGlow {
          0%,
          100% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(0.94);
          }

          50% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1.07);
          }
        }

        @keyframes ctaWave {
          0% {
            transform: translateX(-50%) translateY(0) scaleX(1);
            opacity: 0.3;
          }

          50% {
            transform: translateX(-50%) translateY(-8px) scaleX(1.08);
            opacity: 0.7;
          }

          100% {
            transform: translateX(-50%) translateY(0) scaleX(1);
            opacity: 0.3;
          }
        }
      `}</style>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-8">

        {/* Eyebrow */}

        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-9 bg-gradient-to-r from-transparent to-teal-300/60" />

          <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-teal-300">
            Let&apos;s talk
          </span>

          <span className="h-px w-9 bg-gradient-to-l from-transparent to-teal-300/60" />
        </div>

        {/* Main text */}

        <p className="mx-auto max-w-3xl text-xl font-light leading-8 tracking-wide text-neutral-100 sm:text-2xl lg:text-[28px] lg:leading-[1.45]">
          Have an idea, a problem, or a system you want to build?
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-7 tracking-wide text-neutral-300 sm:text-base">
          Start a conversation with Cosmix. No complicated process.
          Just tell us what you&apos;re building.
        </p>

        {/* ================= ACTIONS ================= */}

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

          {/* CALL */}

          <a
            href="tel:+919214185625"
            className="
              group
              flex
              min-w-[210px]
              items-center
              justify-center
              gap-3
              rounded-full
              bg-teal-300
              px-8
              py-4
              text-xs
              font-medium
              uppercase
              tracking-[0.16em]
              text-[#02100e]
              shadow-[0_0_28px_rgba(45,217,195,0.18)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-teal-200
              hover:shadow-[0_0_42px_rgba(45,217,195,0.38)]
            "
          >
            <span>Call us</span>

            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          {/* WHATSAPP */}

          <a
            href="https://wa.me/919214185625"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              min-w-[210px]
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-teal-300/30
              bg-white/[0.025]
              px-8
              py-4
              text-xs
              font-medium
              uppercase
              tracking-[0.16em]
              text-teal-200
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-teal-300/65
              hover:bg-teal-300/[0.07]
              hover:text-teal-100
              hover:shadow-[0_0_32px_rgba(45,217,195,0.16)]
            "
          >
            <span>WhatsApp</span>

            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>

        {/* ================= GLOWING WAVE ================= */}

        <div className="relative mx-auto mt-12 h-14 max-w-4xl overflow-hidden">

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[45px]
              w-[120%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%]
              border-t
              border-teal-300/40
              blur-[1px]
            "
            style={{
              boxShadow: "0 -10px 32px rgba(45,217,195,0.18)",
              animation: "ctaWave 5s ease-in-out infinite",
            }}
          />

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[32px]
              w-[95%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%]
              border-t
              border-teal-300/20
            "
            style={{
              animation: "ctaWave 6s ease-in-out infinite reverse",
            }}
          />

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[20px]
              w-[65%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%]
              border-t
              border-teal-200/10
            "
          />
        </div>

        {/* Bottom text */}

        <p className="mt-2 text-[9px] font-light uppercase tracking-[0.34em] text-neutral-500">
          Built for the visionaries
        </p>
      </div>
    </section>
  );
}