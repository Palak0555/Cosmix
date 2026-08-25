"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import LivmetroDetails from "./LivmetroDetails";

const projects = [
  {
    id: "livmetro",
    category: "Real Estate",
    title: "Livmetro",
    tagline: "Interior design packages engineered for new-home buyers.",
    status: "Live",
    specs: ["2,400 SQFT", "94% OCCUPANCY", "6WK DELIVERY"],
    metric: "+18% YOY",
  },
  // add more projects here — grid and card scale automatically
];

export default function CosmixProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="relative w-full overflow-hidden bg-[#08090b] py-24 md:py-32">
      {/* ambient drifting gradient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="orb orb-teal absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#2dd4bf] opacity-[0.10] blur-[120px]" />
        <div className="orb orb-grey absolute -right-10 bottom-0 h-[380px] w-[380px] rounded-full bg-[#3a3f47] opacity-[0.35] blur-[120px]" />
      </div>

      {/* faint blueprint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto w-[min(1200px,calc(100%-40px))]">
        <header className="mb-14 md:mb-16">
          <div className="mb-5 flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-[#2dd4bf]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf]" />
            SELECTED WORK
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-[760px] text-[42px] font-medium leading-[0.98] tracking-[-0.045em] text-[#f5f6f7] md:text-[56px]">
              Systems built to move
              <span className="text-[#6b7078]"> business forward.</span>
            </h2>

            <p className="max-w-[200px] pb-1 text-sm leading-[1.5] text-[#8b8f98]">
              Explore what we've engineered.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              index={i + 1}
              category={project.category}
              title={project.title}
              tagline={project.tagline}
              image={project.image}
              imageAlt={project.imageAlt}
              status={project.status}
              onClick={() => setSelectedProject(project.id)}
            />
          ))}
        </div>
      </div>

      {selectedProject === "livmetro" && (
        <LivmetroDetails onClose={() => setSelectedProject(null)} />
      )}

      <style jsx>{`
        .orb-teal {
          animation: drift1 18s ease-in-out infinite;
        }
        .orb-grey {
          animation: drift2 22s ease-in-out infinite;
        }
        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, -40px) scale(1.1); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 40px) scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          .orb-teal, .orb-grey { animation: none; }
        }
      `}</style>
    </section>
  );
}