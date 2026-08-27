"use client";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#020807] text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Main teal glow */}
        <div
          className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,217,195,0.10) 0%, rgba(45,217,195,0.035) 42%, transparent 72%)",
          }}
        />

        {/* Bottom glow */}
        <div
          className="absolute bottom-[-200px] left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,217,195,0.065), transparent 70%)",
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>


      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-[1.55fr_1fr_1fr_1fr]">


          {/* ================= BRAND ================= */}

          <div className="flex flex-col items-start">

            <a href="/" className="block">
              <img
                src="/images/Cosmix.png"
                alt="Cosmix"
                className="w-[145px] object-contain"
              />
            </a>

            <p className="mt-4 max-w-[370px] text-sm font-light leading-6 tracking-wide text-neutral-300">
              We build intelligent digital systems that turn ambitious ideas
              into scalable businesses.
            </p>

            <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.3em] text-teal-300/80">
              Technology × Business × Intelligence
            </p>

          </div>


          {/* ================= EXPLORE ================= */}

          <div>

            <h3 className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500">
              Explore
            </h3>

            <nav className="flex flex-col gap-3">

              <a href="#services" className="footer-link">
                Services
              </a>

              <a href="#process" className="footer-link">
                Our Process
              </a>

              <a href="#proof" className="footer-link">
                Testimonials
              </a>

              <a href="#pricing" className="footer-link">
                Pricing
              </a>

              <a href="#contact" className="footer-link">
                Contact
              </a>

            </nav>

          </div>


          {/* ================= WHAT WE BUILD ================= */}

          <div>

            <h3 className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500">
              What we build
            </h3>

            <div className="flex flex-col gap-3">

              <span className="footer-text">
                Software
              </span>

              <span className="footer-text">
                Applications
              </span>

              <span className="footer-text">
                Websites
              </span>

              <span className="footer-text">
                Intelligent Systems
              </span>

              <span className="footer-text">
                Automation
              </span>

            </div>

          </div>


          {/* ================= CONNECT ================= */}

          <div>

            <h3 className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500">
              Connect
            </h3>

            <div className="flex flex-col gap-3">

              <a
                href="tel:+919214185625"
                className="footer-link"
              >
                Call Cosmix
              </a>

              <a
                href="https://wa.me/919214185625"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                WhatsApp
              </a>

              <a
                href="#contact"
                className="footer-link"
              >
                Start a project
              </a>

            </div>


            {/* Small CTA */}

            <a
              href="#contact"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-3
                rounded-full
                border border-teal-300/30
                bg-teal-300/[0.045]
                px-5
                py-2.5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-teal-200
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-teal-300/60
                hover:bg-teal-300/[0.09]
                hover:shadow-[0_0_28px_rgba(45,217,195,0.16)]
              "
            >
              Let&apos;s build

              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </div>


        {/* ================= DIVIDER ================= */}

        <div className="relative my-10 h-px w-full bg-white/[0.07]">

          <div
            className="
              absolute
              left-0
              top-0
              h-px
              w-32
              bg-gradient-to-r
              from-teal-400/70
              to-transparent
              shadow-[0_0_10px_rgba(45,217,195,0.25)]
            "
          />

        </div>


        {/* ================= BOTTOM ================= */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[10px] font-light uppercase tracking-[0.2em] text-neutral-600">
            © 2026 Cosmix. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">

            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.18em] text-neutral-600 transition-colors duration-200 hover:text-teal-300"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.18em] text-neutral-600 transition-colors duration-200 hover:text-teal-300"
            >
              Terms
            </a>

            <span className="h-1 w-1 rounded-full bg-teal-400/50" />

            <span className="text-[10px] uppercase tracking-[0.18em] text-teal-300/65">
              Built for the visionaries
            </span>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM GLOW ================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-px
          w-[55%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-teal-300/35
          to-transparent
          shadow-[0_0_20px_rgba(45,217,195,0.4)]
        "
      />


      {/* ================= STYLES ================= */}

      <style jsx>{`

        .footer-link {
          width: fit-content;
          color: rgb(212 212 216);
          font-size: 0.875rem;
          font-weight: 300;
          transition: color 200ms ease;
        }

        .footer-link:hover {
          color: rgb(94 234 212);
        }

        .footer-text {
          color: rgb(212 212 216);
          font-size: 0.875rem;
          font-weight: 300;
        }

      `}</style>

    </footer>
  );
}