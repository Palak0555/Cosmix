"use client";

import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Software",
    description: "Custom platforms, dashboards & business tools.",
  },
  {
    number: "02",
    title: "Applications",
    description: "Web and mobile applications built around your users.",
  },
  {
    number: "03",
    title: "Websites",
    description: "Fast, premium digital experiences that convert.",
  },
  {
    number: "04",
    title: "AI Agents",
    description: "AI systems that reason, respond and take action.",
  },
  {
    number: "05",
    title: "Automation",
    description: "Connected workflows that remove repetitive work.",
  },
  {
    number: "06",
    title: "Intelligent Systems",
    description:
      "AI CRM, lead qualification, smart dashboards & orchestration.",
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      const nav = document.querySelector(".cosmix-nav");

      if (nav) {
        document.documentElement.style.setProperty(
          "--nav-h",
          `${nav.offsetHeight}px`
        );
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    updateHeight();
    handleScroll();

    window.addEventListener("resize", updateHeight);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
        setMobileServicesOpen(false);
      }
    };

    const handleOutsideClick = (event) => {
      if (!event.target.closest(".cosmix-nav")) {
        setServicesOpen(false);
        setMobileOpen(false);
        setMobileServicesOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const closeServices = () => {
    setServicesOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <nav
        className={`cosmix-nav ${
          scrolled ? "is-scrolled" : ""
        } ${servicesOpen ? "services-open" : ""}`}
      >
        <div className="cosmix-nav-inner">

          {/* =====================================================
              LOGO
          ===================================================== */}

          <a
            href="/"
            className="cosmix-logo"
            aria-label="Cosmix Home"
            onClick={closeServices}
          >
            <img
              src="/images/Cosmix.png"
              alt="Cosmix"
              className="cosmix-logo-image"
            />
          </a>


          {/* =====================================================
              MAIN NAVIGATION
          ===================================================== */}

          <div className="cosmix-links">

            <button
              type="button"
              className={`services-trigger ${
                servicesOpen ? "active" : ""
              }`}
              onClick={(event) => {
                event.stopPropagation();
                setServicesOpen((current) => !current);
              }}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              <span>Services</span>

              <span className="services-arrow">
                {servicesOpen ? "↑" : "↓"}
              </span>
            </button>


            <a
              href="#projects"
              onClick={closeServices}
            >
              Work
            </a>


            <a
              href="#process"
              onClick={closeServices}
            >
              Process
            </a>


            <a
              href="#about"
              onClick={closeServices}
            >
              About
            </a>


            <a
              href="/founder"
              onClick={closeServices}
            >
              Founder
            </a>


            <a
              href="#contact"
              onClick={closeServices}
            >
              Contact
            </a>

          </div>


          {/* =====================================================
              CTA
          ===================================================== */}

          <a
            href="#contact"
            className="cosmix-nav-cta"
            onClick={closeServices}
          >
            <span>Start a project</span>
            <span className="cta-arrow">↗</span>
          </a>

        </div>


        {/* =====================================================
            MOBILE TOGGLE
        ===================================================== */}

        <button
          type="button"
          className={`cosmix-mobile-toggle ${
            mobileOpen ? "active" : ""
          }`}
          onClick={(event) => {
            event.stopPropagation();

            setMobileOpen((current) => !current);
            setServicesOpen(false);
            setMobileServicesOpen(false);
          }}
          aria-label={
            mobileOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
        </button>


        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <div
          className={`cosmix-mobile-menu ${
            mobileOpen ? "show" : ""
          }`}
        >
          <div className="cosmix-mobile-menu-inner">

            <div className="mobile-menu-kicker">
              COSMIX / NAVIGATION
            </div>


            <div className="mobile-menu-links">

              {/* SERVICES */}

              <button
                type="button"
                className={`mobile-services-trigger ${
                  mobileServicesOpen ? "active" : ""
                }`}
                onClick={() =>
                  setMobileServicesOpen((current) => !current)
                }
              >
                <span>
                  <small>01</small>
                  Services
                </span>

                <b>
                  {mobileServicesOpen ? "↑" : "↓"}
                </b>
              </button>


              {/* MOBILE SERVICES */}

              <div
                className={`mobile-services-list ${
                  mobileServicesOpen ? "show" : ""
                }`}
              >
                <div className="mobile-services-list-inner">

                  {services.map((service) => (
                    <a
                      key={service.title}
                      href="#services"
                      onClick={closeServices}
                    >
                      <span>{service.number}</span>

                      <strong>
                        {service.title}
                      </strong>

                      <b>↗</b>
                    </a>
                  ))}

                </div>
              </div>


              {/* WORK */}

              <a
                href="#projects"
                onClick={closeServices}
              >
                <span>
                  <small>02</small>
                  Work
                </span>

                <b>↗</b>
              </a>


              {/* PROCESS */}

              <a
                href="#process"
                onClick={closeServices}
              >
                <span>
                  <small>03</small>
                  Process
                </span>

                <b>↗</b>
              </a>


              {/* ABOUT */}

              <a
                href="#about"
                onClick={closeServices}
              >
                <span>
                  <small>04</small>
                  About
                </span>

                <b>↗</b>
              </a>


              {/* FOUNDER */}

              <a
                href="/founder"
                onClick={closeServices}
              >
                <span>
                  <small>05</small>
                  Founder
                </span>

                <b>↗</b>
              </a>


              {/* CONTACT */}

              <a
                href="#contact"
                onClick={closeServices}
              >
                <span>
                  <small>06</small>
                  Contact
                </span>

                <b>↗</b>
              </a>

            </div>


            {/* MOBILE CTA */}

            <a
              href="#contact"
              className="mobile-menu-cta"
              onClick={closeServices}
            >
              <span>Start a project</span>
              <b>↗</b>
            </a>

          </div>
        </div>


        {/* =====================================================
            SERVICES DROPDOWN
        ===================================================== */}

        <div
          className={`services-dropdown ${
            servicesOpen ? "show" : ""
          }`}
        >

          <div className="services-card">

            {/* TEAL GLOW */}

            <div className="services-card-glow" />

            <div className="services-card-glow-2" />


            <div className="services-grid">

              {/* =================================================
                  LEFT
              ================================================= */}

              <div className="services-intro">

                <span className="services-label">
                  COSMIX / SERVICES
                </span>


                <h2>
                  What we
                  <br />
                  <span>build.</span>
                </h2>


                <p>
                  Digital products, intelligent systems
                  and automation engineered around the
                  way your business actually works.
                </p>


                <a
                  href="#services"
                  onClick={closeServices}
                  className="services-view-all"
                >
                  Explore all services

                  <span>↗</span>
                </a>

              </div>


              {/* =================================================
                  RIGHT
              ================================================= */}

              <div className="services-list">

                {services.map((service, index) => (
                  <a
                    href="#services"
                    key={service.title}
                    className="service-item"
                    style={{
                      "--delay": `${index * 45}ms`,
                    }}
                    onClick={closeServices}
                  >

                    <span className="service-number">
                      {service.number}
                    </span>


                    <div className="service-copy">

                      <strong>
                        {service.title}
                      </strong>

                      <span>
                        {service.description}
                      </span>

                    </div>


                    <span className="service-item-arrow">
                      ↗
                    </span>

                  </a>
                ))}

              </div>

            </div>


            {/* =================================================
                DROPDOWN FOOTER
            ================================================= */}

            <div className="services-bottom">

              <div className="services-system">

                <span>SOFTWARE</span>

                <i />

                <span>AI</span>

                <i />

                <span>AUTOMATION</span>

                <i />

                <span>SYSTEMS</span>

              </div>


              <span className="services-status">
                <b />
                BUILDING FORWARD
              </span>

            </div>

          </div>

        </div>

      </nav>


      {/* =======================================================
          STYLES
      ======================================================= */}

      <style jsx>{`

        /* =====================================================
           COSMIX NAVIGATION
        ===================================================== */

        .cosmix-nav {
          position: fixed;

          top: 0;
          left: 0;
          right: 0;

          z-index: 999;

          background: transparent;

          color: #f5f5f7;

          transition:
            background .35s ease,
            backdrop-filter .35s ease,
            box-shadow .35s ease;
        }


        .cosmix-nav.is-scrolled {
          background:
            rgba(2, 3, 4, .68);

          backdrop-filter:
            blur(20px);

          -webkit-backdrop-filter:
            blur(20px);

          box-shadow:
            0 1px 0
            rgba(255,255,255,.07);
        }


        /* =====================================================
           NAV INNER
        ===================================================== */

        .cosmix-nav-inner {
          position: relative;

          width:
            min(
              1280px,
              calc(100% - 64px)
            );

          height: 82px;

          margin: 0 auto;

          display: flex;

          align-items: center;

          justify-content: space-between;
        }


        /* =====================================================
           LOGO
        ===================================================== */

        .cosmix-logo {
          position: relative;

          z-index: 1001;

          display: flex;

          align-items: center;

          width: fit-content;

          text-decoration: none;
        }


        .cosmix-logo-image {
          display: block;

          width: 118px;

          height: auto;

          object-fit: contain;

          filter:
            drop-shadow(
              0 0 14px
              rgba(0,194,178,.08)
            );

          transition:
            transform .25s ease,
            filter .25s ease;
        }


        .cosmix-logo:hover
        .cosmix-logo-image {
          transform:
            translateY(-1px);

          filter:
            drop-shadow(
              0 0 18px
              rgba(0,194,178,.16)
            );
        }


        /* =====================================================
           LINKS
        ===================================================== */

        .cosmix-links {
          position: absolute;

          left: 50%;

          transform:
            translateX(-50%);

          display: flex;

          align-items: center;

          gap: 3px;

          white-space: nowrap;
        }


        .cosmix-links a,
        .services-trigger {
          appearance: none;

          border: 0;

          outline: none;

          background: transparent;

          color:
            rgba(
              245,
              245,
              247,
              .62
            );

          font-family:
            "Inter",
            Arial,
            sans-serif;

          font-size: 15px;

          font-weight: 500;

          letter-spacing:
            -.01em;

          text-decoration: none;

          padding:
            10px
            13px;

          border-radius: 9px;

          cursor: pointer;

          display: inline-flex;

          align-items: center;

          gap: 7px;

          transition:
            color .25s ease,
            background .25s ease;
        }


        .cosmix-links a:hover,
        .services-trigger:hover,
        .services-trigger.active {
          color: #fff;

          background:
            rgba(
              255,
              255,
              255,
              .065
            );
        }


        /* =====================================================
           SERVICES ARROW
        ===================================================== */

        .services-arrow {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          width: 15px;

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 9px;

          color:
            rgba(
              245,
              245,
              247,
              .42
            );

          transition:
            color .25s ease,
            transform .25s ease;
        }


        .services-trigger.active
        .services-arrow {
          color: #00c2b2;
        }


        /* =====================================================
           CTA
        ===================================================== */

        .cosmix-nav-cta {
          position: relative;

          z-index: 1001;

          display: inline-flex;

          align-items: center;

          gap: 10px;

          padding:
            11px
            17px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              .16
            );

          border-radius: 10px;

          color: #fff;

          background:
            rgba(
              255,
              255,
              255,
              .035
            );

          font-family:
            "Inter",
            Arial,
            sans-serif;

          font-size: 13px;

          font-weight: 500;

          letter-spacing:
            -.01em;

          text-decoration: none;

          transition:
            transform .25s ease,
            background .25s ease,
            border-color .25s ease;
        }


        .cosmix-nav-cta:hover {
          transform:
            translateY(-1px);

          background:
            rgba(
              0,
              194,
              178,
              .09
            );

          border-color:
            rgba(
              0,
              194,
              178,
              .32
            );
        }


        .cta-arrow {
          font-size: 14px;

          transition:
            transform .25s ease;
        }


        .cosmix-nav-cta:hover
        .cta-arrow {
          transform:
            translate(
              2px,
              -2px
            );
        }


        /* =====================================================
           DROPDOWN
        ===================================================== */

        .services-dropdown {
          position: absolute;

          top: 100%;

          left: 0;

          right: 0;

          padding:
            8px
            24px
            25px;

          opacity: 0;

          visibility: hidden;

          pointer-events: none;

          transform:
            translateY(-14px)
            scale(.985);

          transform-origin:
            top center;

          transition:
            opacity .25s ease,
            transform .4s
              cubic-bezier(
                .22,
                1,
                .36,
                1
              ),
            visibility .25s ease;
        }


        .services-dropdown.show {
          opacity: 1;

          visibility: visible;

          pointer-events: auto;

          transform:
            translateY(0)
            scale(1);
        }


        /* =====================================================
           SERVICES CARD
        ===================================================== */

        .services-card {
          position: relative;

          width:
            min(
              1120px,
              100%
            );

          margin: 0 auto;

          overflow: hidden;

          border:
            1px solid
            rgba(
              0,
              194,
              178,
              .22
            );

          border-radius: 18px;

          background:
            rgba(
              7,
              12,
              12,
              .97
            );

          box-shadow:
            0 30px 90px
            rgba(
              0,
              0,
              0,
              .6
            ),
            0 0 60px
            rgba(
              0,
              194,
              178,
              .06
            );

          backdrop-filter:
            blur(25px);

          -webkit-backdrop-filter:
            blur(25px);
        }


        /* =====================================================
           TEAL GLOW
        ===================================================== */

        .services-card-glow {
          position: absolute;

          width: 520px;

          height: 340px;

          top: -180px;

          left: -100px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(
                0,
                194,
                178,
                .22
              ) 0%,
              rgba(
                0,
                194,
                178,
                .08
              ) 38%,
              transparent 72%
            );

          filter:
            blur(70px);

          pointer-events: none;

          animation:
            servicesGlow 6s
            ease-in-out
            infinite;
        }


        .services-card-glow-2 {
          position: absolute;

          width: 420px;

          height: 260px;

          right: -150px;

          bottom: -180px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(
                0,
                194,
                178,
                .12
              ),
              transparent 70%
            );

          filter:
            blur(80px);

          pointer-events: none;
        }


        @keyframes servicesGlow {

          0%,
          100% {
            opacity: .7;

            transform:
              translate3d(
                0,
                0,
                0
              )
              scale(1);
          }

          50% {
            opacity: 1;

            transform:
              translate3d(
                35px,
                18px,
                0
              )
              scale(1.08);
          }

        }


        /* =====================================================
           GRID
        ===================================================== */

        .services-grid {
          position: relative;

          z-index: 1;

          display: grid;

          grid-template-columns:
            .82fr
            1.18fr;

          gap: 60px;

          padding:
            35px
            38px
            18px;
        }


        /* =====================================================
           INTRO
        ===================================================== */

        .services-intro {
          display: flex;

          flex-direction: column;

          justify-content: center;

          min-height: 390px;
        }


        .services-label {
          margin-bottom: 17px;

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 9px;

          letter-spacing:
            .2em;

          color:
            #00c2b2;
        }


        .services-intro h2 {
          margin: 0;

          font-family:
            "Space Grotesk",
            "Inter",
            sans-serif;

          font-size:
            clamp(
              44px,
              4.2vw,
              60px
            );

          line-height: .92;

          letter-spacing:
            -.06em;

          font-weight: 600;

          color:
            #f5f5f7;
        }


        .services-intro h2 span {
          color:
            #00c2b2;
        }


        .services-intro p {
          max-width: 350px;

          margin:
            23px
            0
            26px;

          font-family:
            "Inter",
            Arial,
            sans-serif;

          font-size: 12px;

          line-height: 1.7;

          color:
            rgba(
              245,
              245,
              247,
              .68
            );
        }


        .services-view-all {
          width: fit-content;

          display: inline-flex;

          align-items: center;

          gap: 9px;

          color: #fff;

          font-family:
            "Inter",
            Arial,
            sans-serif;

          font-size: 11px;

          font-weight: 600;

          text-decoration: none;

          transition:
            color .25s ease;
        }


        .services-view-all:hover {
          color: #00c2b2;
        }


        .services-view-all span {
          color: #00c2b2;

          transition:
            transform .25s ease;
        }


        .services-view-all:hover span {
          transform:
            translate(
              3px,
              -3px
            );
        }


        /* =====================================================
           SERVICE LIST
        ===================================================== */

        .services-list {
          position: relative;

          border-top:
            1px solid
            rgba(
              255,
              255,
              255,
              .09
            );
        }


        .service-item {
          position: relative;

          display: grid;

          grid-template-columns:
            40px
            1fr
            28px;

          align-items: center;

          min-height: 62px;

          gap: 10px;

          padding:
            11px
            5px;

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              .07
            );

          color: #fff;

          text-decoration: none;

          opacity: 0;

          transform:
            translateY(9px);

          transition:
            opacity .35s ease var(--delay),
            transform .45s
              cubic-bezier(
                .22,
                1,
                .36,
                1
              )
              var(--delay),
            background .25s ease,
            padding .25s ease,
            border-color .25s ease;
        }


        .services-dropdown.show
        .service-item {
          opacity: 1;

          transform:
            translateY(0);
        }


        .service-item::before {
          content: "";

          position: absolute;

          left: 0;

          top: 50%;

          width: 2px;

          height: 0;

          transform:
            translateY(-50%);

          border-radius: 999px;

          background:
            #00c2b2;

          box-shadow:
            0 0 12px
            rgba(
              0,
              194,
              178,
              .7
            );

          transition:
            height .25s ease;
        }


        .service-item:hover {
          padding-left: 13px;

          background:
            rgba(
              0,
              194,
              178,
              .045
            );

          border-color:
            rgba(
              0,
              194,
              178,
              .16
            );
        }


        .service-item:hover::before {
          height: 32px;
        }


        /* =====================================================
           NUMBER
        ===================================================== */

        .service-number {
          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 9px;

          color:
            rgba(
              0,
              194,
              178,
              .55
            );
        }


        /* =====================================================
           COPY
        ===================================================== */

        .service-copy {
          display: flex;

          flex-direction: column;

          gap: 4px;
        }


        .service-copy strong {
          font-family:
            "Space Grotesk",
            "Inter",
            sans-serif;

          font-size: 14px;

          font-weight: 600;

          letter-spacing:
            -.015em;

          color: #fff;
        }


        .service-copy span {
          font-family:
            "Inter",
            Arial,
            sans-serif;

          font-size: 10px;

          line-height: 1.45;

          color:
            rgba(
              245,
              245,
              247,
              .58
            );
        }


        /* =====================================================
           ARROW
        ===================================================== */

        .service-item-arrow {
          color:
            rgba(
              0,
              194,
              178,
              .45
            );

          transition:
            transform .25s ease,
            color .25s ease;
        }


        .service-item:hover
        .service-item-arrow {
          color:
            #00c2b2;

          transform:
            translate(
              3px,
              -3px
            );
        }


        /* =====================================================
           DROPDOWN FOOTER
        ===================================================== */

        .services-bottom {
          position: relative;

          z-index: 1;

          display: flex;

          align-items: center;

          justify-content: space-between;

          padding:
            12px
            38px
            17px;

          border-top:
            1px solid
            rgba(
              255,
              255,
              255,
              .05
            );

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 7px;

          letter-spacing:
            .15em;

          color:
            rgba(
              245,
              245,
              247,
              .3
            );
        }


        .services-system {
          display: flex;

          align-items: center;

          gap: 10px;
        }


        .services-system i {
          width: 3px;

          height: 3px;

          border-radius: 50%;

          background:
            rgba(
              0,
              194,
              178,
              .75
            );

          box-shadow:
            0 0 5px
            rgba(
              0,
              194,
              178,
              .5
            );
        }


        .services-status {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          color:
            rgba(
              0,
              194,
              178,
              .75
            );
        }


        .services-status b {
          width: 5px;

          height: 5px;

          border-radius: 50%;

          background:
            #00c2b2;

          box-shadow:
            0 0 9px
            rgba(
              0,
              194,
              178,
              .8
            );
        }


        /* =====================================================
           MOBILE TOGGLE
        ===================================================== */

        .cosmix-mobile-toggle {
          display: none;

          position: relative;

          z-index: 1002;

          width: 42px;

          height: 42px;

          padding: 0;

          border:
            1px solid
            rgba(
              0,
              194,
              178,
              .24
            );

          border-radius: 11px;

          background:
            rgba(
              255,
              255,
              255,
              .035
            );

          cursor: pointer;
        }


        .cosmix-mobile-toggle span {
          position: absolute;

          left: 12px;

          width: 17px;

          height: 1px;

          background:
            #00c2b2;

          transition:
            transform .3s ease,
            top .3s ease;
        }


        .cosmix-mobile-toggle span:first-child {
          top: 16px;
        }


        .cosmix-mobile-toggle span:last-child {
          top: 23px;
        }


        .cosmix-mobile-toggle.active
        span:first-child {
          top: 20px;

          transform:
            rotate(45deg);
        }


        .cosmix-mobile-toggle.active
        span:last-child {
          top: 20px;

          transform:
            rotate(-45deg);
        }


        /* =====================================================
           MOBILE MENU
        ===================================================== */

        .cosmix-mobile-menu {
          display: none;
        }


        .mobile-menu-kicker {
          margin-bottom: 18px;

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 8px;

          letter-spacing:
            .18em;

          color:
            rgba(
              0,
              194,
              178,
              .62
            );
        }


        .mobile-menu-links {
          display: flex;

          flex-direction: column;
        }


        .mobile-menu-links > a,
        .mobile-services-trigger {
          appearance: none;

          width: 100%;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 16px;

          padding:
            16px
            0;

          border: 0;

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              .08
            );

          background: transparent;

          color: #f5f5f7;

          text-decoration: none;

          font-family:
            "Space Grotesk",
            "Inter",
            sans-serif;

          font-size: 28px;

          line-height: 1;

          letter-spacing:
            -.045em;

          text-align: left;

          cursor: pointer;
        }


        .mobile-menu-links > a span,
        .mobile-services-trigger span {
          display: flex;

          align-items: center;

          gap: 16px;
        }


        .mobile-menu-links small {
          width: 24px;

          color:
            rgba(
              245,
              245,
              247,
              .28
            );

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 8px;

          letter-spacing:
            .05em;
        }


        .mobile-menu-links > a b,
        .mobile-services-trigger b {
          color:
            #00c2b2;

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 12px;

          font-weight: 400;
        }


        .mobile-services-trigger.active {
          color:
            #00c2b2;
        }


        /* =====================================================
           MOBILE SERVICES
        ===================================================== */

        .mobile-services-list {
          display: grid;

          grid-template-rows: 0fr;

          opacity: 0;

          overflow: hidden;

          transition:
            grid-template-rows .4s
              cubic-bezier(
                .22,
                1,
                .36,
                1
              ),
            opacity .25s ease;
        }


        .mobile-services-list.show {
          grid-template-rows: 1fr;

          opacity: 1;
        }


        .mobile-services-list-inner {
          min-height: 0;

          overflow: hidden;
        }


        .mobile-services-list a {
          min-height: 0;

          display: grid;

          grid-template-columns:
            28px
            1fr
            18px;

          align-items: center;

          gap: 10px;

          padding:
            9px
            4px
            9px
            40px;

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              .045
            );

          color:
            rgba(
              245,
              245,
              247,
              .62
            );

          text-decoration: none;

          font-family:
            "Inter",
            Arial,
            sans-serif;

          font-size: 11px;
        }


        .mobile-services-list span {
          color:
            rgba(
              0,
              194,
              178,
              .55
            );

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 8px;
        }


        .mobile-services-list strong {
          font-weight: 500;

          color:
            rgba(
              245,
              245,
              247,
              .78
            );
        }


        .mobile-services-list b {
          color:
            rgba(
              0,
              194,
              178,
              .72
            );

          font-weight: 400;
        }


        /* =====================================================
           MOBILE CTA
        ===================================================== */

        .mobile-menu-cta {
          margin-top: auto;

          display: flex;

          align-items: center;

          justify-content: space-between;

          padding:
            15px
            17px;

          border:
            1px solid
            rgba(
              0,
              194,
              178,
              .24
            );

          border-radius: 10px;

          background:
            rgba(
              0,
              194,
              178,
              .09
            );

          color:
            #ecfffa;

          text-decoration: none;

          font-family:
            "Inter",
            Arial,
            sans-serif;

          font-size: 12px;

          font-weight: 600;

          box-shadow:
            0 0 25px
            rgba(
              0,
              194,
              178,
              .05
            );
        }


        .mobile-menu-cta b {
          color:
            #00c2b2;

          font-weight: 400;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 850px) {

          .cosmix-nav-inner {
            width:
              calc(
                100% - 40px
              );
          }


          .cosmix-links {
            display: none;
          }


          .cosmix-mobile-toggle {
            display: block;
          }


          .cosmix-mobile-menu {
            position: absolute;

            top: 100%;

            left: 0;

            right: 0;

            height:
              calc(
                100vh - 82px
              );

            padding:
              18px
              24px
              24px;

            display: block;

            opacity: 0;

            visibility: hidden;

            pointer-events: none;

            transform:
              translateY(-12px);

            background:
              linear-gradient(
                180deg,
                rgba(
                  2,
                  3,
                  4,
                  .98
                ) 0%,
                rgba(
                  3,
                  8,
                  7,
                  .98
                ) 60%,
                rgba(
                  5,
                  18,
                  15,
                  .99
                ) 100%
              );

            border-top:
              1px solid
              rgba(
                255,
                255,
                255,
                .06
              );

            transition:
              opacity .3s ease,
              transform .4s
                cubic-bezier(
                  .22,
                  1,
                  .36,
                  1
                ),
              visibility .3s ease;

            overflow-y: auto;
          }


          .cosmix-mobile-menu.show {
            opacity: 1;

            visibility: visible;

            pointer-events: auto;

            transform:
              translateY(0);
          }


          .cosmix-mobile-menu-inner {
            min-height: 100%;

            display: flex;

            flex-direction: column;
          }


          .services-grid {
            grid-template-columns: 1fr;

            gap: 28px;

            padding:
              28px
              25px
              12px;
          }


          .services-intro {
            min-height: auto;
          }


          .services-intro h2 {
            font-size: 42px;
          }


          .service-item {
            min-height: 66px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 560px) {

          .cosmix-nav-inner {
            width:
              calc(
                100% - 28px
              );

            height: 72px;
          }


          .cosmix-logo-image {
            width: 100px;
          }


          .cosmix-nav-cta {
            display: none;
          }


          .cosmix-mobile-toggle {
            width: 40px;

            height: 40px;
          }


          .cosmix-mobile-menu {
            height:
              calc(
                100vh - 72px
              );

            padding:
              18px
              20px
              22px;
          }


          .mobile-menu-links > a,
          .mobile-services-trigger {
            font-size: 25px;

            padding:
              15px 0;
          }


          .services-dropdown {
            padding: 7px;
          }


          .services-card {
            border-radius: 16px;
          }


          .services-grid {
            padding:
              23px
              18px
              10px;
          }


          .services-intro h2 {
            font-size: 36px;
          }


          .services-intro p {
            font-size: 11px;
          }


          .service-item {
            grid-template-columns:
              28px
              1fr
              20px;
          }


          .service-copy strong {
            font-size: 13px;
          }


          .service-copy span {
            font-size: 9px;
          }


          .services-bottom {
            padding:
              10px
              18px
              15px;
          }


          .services-status {
            display: none;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .services-dropdown,
          .service-item,
          .cosmix-nav-cta,
          .service-item-arrow,
          .services-card-glow {
            transition: none;

            animation: none;
          }


          .service-item {
            opacity: 1;

            transform: none;
          }

        }

      `}</style>
    </>
  );
}