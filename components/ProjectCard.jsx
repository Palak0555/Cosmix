"use client";

export default function ProjectCard({
  index,
  category,
  title,
  tagline,
  status = "Live",
  specs = [],
  metric = "+18%",
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group relative flex w-full flex-col
        overflow-hidden rounded-[20px]
        border border-white/[0.08] bg-[#131417]
        text-left outline-none
        transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
        hover:-translate-y-1 hover:border-[#2dd4bf]/40
        hover:shadow-[0_24px_60px_-20px_rgba(45,212,191,0.25)]
        focus-visible:ring-2 focus-visible:ring-[#2dd4bf]
        focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090b]
      "
    >
      {/* top reveal line */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#2dd4bf] to-transparent transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100"
      />

      {/* reticle corners */}
      <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-[#2dd4bf] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span aria-hidden className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-[#2dd4bf] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span aria-hidden className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-[#2dd4bf] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-[#2dd4bf] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* meta row */}
      <div className="relative flex items-center justify-between px-5 pt-5">
        <span className="font-mono text-[11px] tracking-[0.08em] text-[#55585f]">
          SYS/{String(index).padStart(2, "0")}
        </span>

        <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2dd4bf] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#2dd4bf]" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.08em] text-[#9ca0a8]">
            {status.toUpperCase()}
          </span>
        </span>
      </div>

      {/* graphic panel — replaces the photo */}
      <div className="relative mx-5 mt-4 aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.06] bg-[#0d0e10]">
        {/* faint grid backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        <span className="absolute left-3 top-3 z-10 rounded-full bg-black/50 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
          {category}
        </span>

        <div className="relative flex h-full items-stretch">
          {/* building silhouette */}
          <div className="flex flex-[1.2] items-center justify-center px-4">
            <svg viewBox="0 0 140 160" className="h-[78%] w-auto overflow-visible">
              {/* stepped tower outline */}
              <path
                d="M20 150 V90 H45 V60 H70 V30 H95 V150 H20 Z"
                fill="none"
                strokeWidth="2"
                className="stroke-white/25 transition-colors duration-700 group-hover:stroke-[#2dd4bf] [filter:drop-shadow(0_0_0_rgba(45,212,191,0))] group-hover:[filter:drop-shadow(0_0_6px_rgba(45,212,191,0.55))]"
              />
              {/* floor divider ticks */}
              {[110, 130].map((y, i) => (
                <line
                  key={y}
                  x1="20" x2="95" y1={y} y2={y}
                  strokeWidth="1"
                  className="stroke-white/10 transition-colors duration-700 group-hover:stroke-[#2dd4bf]/40"
                  style={{ transitionDelay: `${i * 100}ms` }}
                />
              ))}
              {/* windows — light up on hover, staggered */}
              {[
                [28, 100], [40, 100], [55, 100], [66, 100],
                [50, 70], [62, 70], [78, 100], [86, 100],
                [78, 40], [86, 40],
              ].map(([x, y], i) => (
                <rect
                  key={`${x}-${y}`}
                  x={x} y={y} width="6" height="8" rx="1"
                  className="fill-[#2dd4bf] opacity-0 transition-opacity duration-500 group-hover:opacity-90"
                  style={{ transitionDelay: `${250 + i * 45}ms` }}
                />
              ))}
              <line x1="12" x2="103" y1="150" y2="150" strokeWidth="2" className="stroke-white/15" />
            </svg>
          </div>

          {/* divider */}
          <div className="w-px bg-white/[0.06]" />

          {/* growth graph */}
          <div className="flex flex-1 flex-col justify-center gap-2 px-4">
            <span className="font-mono text-[10px] tracking-[0.06em] text-[#55585f] transition-colors duration-500 group-hover:text-[#2dd4bf]">
              {metric}
            </span>
            <svg viewBox="0 0 100 60" className="w-full overflow-visible">
              <line x1="0" x2="100" y1="55" y2="55" strokeWidth="1" className="stroke-white/10" />
              <polyline
                points="4,45 24,38 44,42 64,20 84,25 96,8"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-white/25 transition-colors duration-700 group-hover:stroke-[#2dd4bf]"
              />
              <circle cx="96" cy="8" r="2.5" className="fill-[#2dd4bf]" />
              <circle cx="96" cy="8" r="2.5" className="fill-[#2dd4bf] opacity-60 animate-ping" />
            </svg>
          </div>
        </div>

        {/* spec chips */}
        {specs.length > 0 && (
          <div className="absolute inset-x-3 bottom-3 z-10 flex flex-wrap gap-1.5">
            {specs.map((spec, i) => (
              <span
                key={spec}
                style={{ transitionDelay: `${300 + i * 90}ms` }}
                className="
                  translate-y-2 rounded-md border border-white/10 bg-black/60
                  px-2 py-1 font-mono text-[10px] tracking-[0.04em] text-[#d7f9f3]
                  opacity-0 backdrop-blur-md
                  transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
                  group-hover:translate-y-0 group-hover:opacity-100
                "
              >
                {spec}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* content */}
      <div className="relative flex items-end justify-between gap-4 px-5 py-5">
        <div>
          <h3 className="text-[22px] font-medium leading-none tracking-[-0.03em] text-[#f5f6f7]">
            {title}
          </h3>
          <p className="mt-2 max-w-[240px] text-[13px] leading-[1.5] text-[#8b8f98]">
            {tagline}
          </p>
        </div>

        <span
          className="
            grid h-9 w-9 shrink-0 place-items-center rounded-full
            border border-white/15 text-[#2dd4bf]
            transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
            group-hover:-translate-y-0.5 group-hover:translate-x-0.5
            group-hover:border-[#2dd4bf] group-hover:bg-[#2dd4bf] group-hover:text-black
          "
        >
          ↗
        </span>
      </div>
    </button>
  );
}