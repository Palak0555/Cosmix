"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import LivmetroDetails from "./LivmetroDetails";
import MarketIntelligenceDetails from "./MarketIntelligenceDetails";
import InterviewAIDetails from "./InterviewAIDetails";

const projects = [
  {
    id: "livmetro",
    category: "Real Estate",
    title: "REAL ESTATE",
    tagline:
      "Interior design packages engineered for new-home buyers.",
    status: "Live",
    specs: [
      "2,400 SQFT",
      "94% OCCUPANCY",
      "6WK DELIVERY",
    ],
    metric: "+18% YOY",
    visual: "real-estate",
  },

  {
    id: "market-intelligence",
    category: "AI / FINANCE",
    title: "MARKET INTELLIGENCE",
    tagline:
      "AI-powered sentiment analysis and market prediction system built to turn financial noise into actionable signals.",
    status: "Built",
    specs: [
      "REACT",
      "PYTHON + ML",
      "YAHOO FINANCE",
    ],
    metric: "AI SIGNALS",
    visual: "market",
  },

  {
    id: "interview-ai",
    category: "ANDROID / AI",
    title: "ANDROID APPLICATION",
    tagline:
      "An AI interview coach that turns practice into measurable progress.",
    status: "Built",
    specs: [
      "KOTLIN",
      "JETPACK COMPOSE",
      "GEMINI AI",
    ],
    metric: "AI COACH",
    visual: "android",
  },
];

export default function CosmixProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-[#020807] py-20 text-white md:py-24"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Primary teal atmosphere */}
        <div
          className="projects-glow projects-glow-primary absolute -left-[180px] top-[-180px] h-[620px] w-[620px] rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,217,195,0.105) 0%, rgba(45,217,195,0.035) 42%, transparent 72%)",
          }}
        />

        {/* Secondary atmosphere */}
        <div
          className="projects-glow projects-glow-secondary absolute -right-[180px] bottom-[-180px] h-[600px] w-[600px] rounded-full blur-[160px]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,217,195,0.065) 0%, rgba(40,45,50,0.14) 42%, transparent 72%)",
          }}
        />

        {/* Subtle central depth */}
        <div
          className="absolute left-1/2 top-[48%] h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[190px]"
          style={{
            background:
              "radial-gradient(circle, rgba(45,217,195,0.018), transparent 68%)",
          }}
        />
      </div>

      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.75) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.75) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative mx-auto w-[min(1200px,calc(100%-40px))]">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <header className="projects-header mb-12 md:mb-14">
          {/* Eyebrow */}

          <div className="projects-eyebrow mb-5">
            <span
              aria-hidden="true"
              className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#2dd4bf] shadow-[0_0_10px_rgba(45,212,191,0.65)]"
            />

            <span>SELECTED WORK</span>
          </div>

          {/* Heading */}

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="projects-heading max-w-[850px]">
              Systems built to move{" "}
              <span>business forward</span>
            </h2>
          </div>

          {/* Supporting divider */}

          <div className="projects-divider mt-8" />
        </header>

        {/* =====================================================
            PROJECT GRID

            FUNCTIONALITY UNCHANGED
            CARD COMPONENT UNCHANGED
        ===================================================== */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index + 1}
              category={project.category}
              title={project.title}
              tagline={project.tagline}
              status={project.status}
              specs={project.specs}
              metric={project.metric}
              visual={project.visual}
              onClick={() => {
                setSelectedProject(project.id);
              }}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          PROJECT DETAILS

          FUNCTIONALITY UNCHANGED
      ===================================================== */}

      {selectedProject === "livmetro" && (
        <LivmetroDetails
          onClose={() => {
            setSelectedProject(null);
          }}
        />
      )}

      {selectedProject === "market-intelligence" && (
        <MarketIntelligenceDetails
          onClose={() => {
            setSelectedProject(null);
          }}
        />
      )}

      {selectedProject === "interview-ai" && (
        <InterviewAIDetails
          onClose={() => {
            setSelectedProject(null);
          }}
        />
      )}

      {/* =====================================================
          SECTION MOTION
      ===================================================== */}

      <style jsx>{`
        .projects-header {
          opacity: 0;
          transform: translate3d(0, 14px, 0);
          animation: projectsHeaderReveal 700ms
            cubic-bezier(.22, 1, .36, 1) forwards;
        }

        .projects-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;

          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;

          color: #2dd4bf;
        }

        .projects-heading {
          margin: 0;

          font-size: clamp(2.35rem, 5vw, 4rem);
          font-weight: 500;
          line-height: 1.02;
          letter-spacing: -0.045em;

          color: #f5f6f7;
        }

        .projects-heading span {
          color: #2dd4bf;
        }

        .projects-divider {
          height: 1px;
          width: 80px;

          background: linear-gradient(
            90deg,
            rgba(45, 212, 191, 0.8),
            transparent
          );

          box-shadow: 0 0 12px rgba(45, 212, 191, 0.18);
        }

        .projects-glow-primary {
          animation: projectsDriftPrimary 18s ease-in-out infinite;
        }

        .projects-glow-secondary {
          animation: projectsDriftSecondary 22s ease-in-out infinite;
        }

        @keyframes projectsHeaderReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 14px, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes projectsDriftPrimary {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(45px, -30px, 0) scale(1.07);
          }
        }

        @keyframes projectsDriftSecondary {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-40px, 30px, 0) scale(1.06);
          }
        }

        @media (max-width: 640px) {
          .projects-heading {
            font-size: clamp(2.15rem, 10.5vw, 3.35rem);
            line-height: 0.98;
          }

          .projects-eyebrow {
            font-size: 9px;
            letter-spacing: 0.24em;
          }

          .projects-divider {
            margin-top: 26px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .projects-header,
          .projects-glow-primary,
          .projects-glow-secondary {
            animation: none !important;
          }

          .projects-header {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}