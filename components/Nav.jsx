"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

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
      }
    };

    const handleOutsideClick = (event) => {
      if (!event.target.closest(".cosmix-nav")) {
        setServicesOpen(false);
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
  };

  return (
    <>
      <nav
        className={`cosmix-nav ${
          scrolled ? "is-scrolled" : ""
        } ${servicesOpen ? "services-open" : ""}`}
      >
        <div className="cosmix-nav-inner">

          {/* LOGO */}

          <div className="cosmix-logo">
            <Logo />
          </div>


          {/* MAIN NAVIGATION */}

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
              href="#contact"
              onClick={closeServices}
            >
              Contact
            </a>

          </div>


          {/* CTA */}

          <a
            href="#contact"
            className="cosmix-nav-cta"
            onClick={closeServices}
          >
            <span>Start a project</span>
            <span className="cta-arrow">↗</span>
          </a>

        </div>


        {/* =========================================
            SERVICES DROPDOWN
        ========================================= */}

        <div
          className={`services-dropdown ${
            servicesOpen ? "show" : ""
          }`}
        >

          <div className="services-card">

            <div className="services-card-glow" />


            <div className="services-grid">

              {/* LEFT SIDE */}

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


              {/* RIGHT SIDE */}

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


            {/* DROPDOWN FOOTER */}

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
              255,
              255,
              255,
              .08
            );

          border-color:
            rgba(
              255,
              255,
              255,
              .28
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
           DROPDOWN CARD
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
              255,
              255,
              255,
              .12
            );

          border-radius: 18px;

          background:
            rgba(
              8,
              9,
              11,
              .96
            );

          box-shadow:
            0 30px 90px
            rgba(
              0,
              0,
              0,
              .6
            );

          backdrop-filter:
            blur(25px);

          -webkit-backdrop-filter:
            blur(25px);
        }


        /* =====================================================
           GLOW
        ===================================================== */

        .services-card-glow {
          position: absolute;

          width: 430px;
          height: 280px;

          top: -170px;
          left: -130px;

          border-radius: 50%;

          background:
            rgba(
              0,
              194,
              178,
              .065
            );

          filter: blur(80px);

          pointer-events: none;
        }


        /* =====================================================
           GRID
        ===================================================== */

        .services-grid {
          position: relative;

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
            rgba(
              245,
              245,
              247,
              .3
            );
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
              .56
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
        }


        .services-view-all span {
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
            padding .25s ease;
        }


        .services-dropdown.show
        .service-item {
          opacity: 1;

          transform:
            translateY(0);
        }


        .service-item:hover {
          padding-left: 13px;

          background:
            rgba(
              255,
              255,
              255,
              .035
            );
        }


        /* NUMBER */

        .service-number {
          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 9px;

          color:
            rgba(
              245,
              245,
              247,
              .3
            );
        }


        /* COPY */

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
              .5
            );
        }


        /* ARROW */

        .service-item-arrow {
          color:
            rgba(
              245,
              245,
              247,
              .3
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
              .25
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
              .65
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


          .cosmix-nav-cta {
            width: 40px;
            height: 40px;

            padding: 0;

            justify-content: center;

            border-radius: 10px;
          }


          .cosmix-nav-cta
          span:first-child {
            display: none;
          }


          .services-dropdown {
            padding:
              7px;
            }
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
          .service-item-arrow {
            transition: none;
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