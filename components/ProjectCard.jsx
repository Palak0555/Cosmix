"use client";

export default function ProjectCard({
  index,
  category,
  title,
  tagline,
  status = "Live",
  specs = [],
  metric = "+18%",
  visual = "real-estate",
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
      {/* =========================================================
          TOP REVEAL LINE
      ========================================================= */}

      <span
        aria-hidden
        className="
          absolute inset-x-0 top-0 h-px
          origin-left scale-x-0
          bg-gradient-to-r
          from-transparent via-[#2dd4bf] to-transparent
          transition-transform duration-700
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:scale-x-100
        "
      />

      {/* =========================================================
          RETICLE CORNERS
      ========================================================= */}

      <span
        aria-hidden
        className="
          pointer-events-none absolute left-3 top-3
          h-4 w-4 border-l-2 border-t-2
          border-[#2dd4bf] opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      <span
        aria-hidden
        className="
          pointer-events-none absolute right-3 top-3
          h-4 w-4 border-r-2 border-t-2
          border-[#2dd4bf] opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      <span
        aria-hidden
        className="
          pointer-events-none absolute bottom-3 left-3
          h-4 w-4 border-b-2 border-l-2
          border-[#2dd4bf] opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      <span
        aria-hidden
        className="
          pointer-events-none absolute bottom-3 right-3
          h-4 w-4 border-b-2 border-r-2
          border-[#2dd4bf] opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {/* =========================================================
          META ROW
      ========================================================= */}

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

      {/* =========================================================
          GRAPHIC PANEL
          real-estate = original
          market      = bull
          android     = InterviewAI
      ========================================================= */}

      <div className="relative mx-5 mt-4 aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.06] bg-[#0d0e10]">
        {/* faint grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        {/* category */}
        <span className="absolute left-3 top-3 z-10 rounded-full bg-black/50 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
          {category}
        </span>

        {/* =======================================================
            VISUAL SWITCH
        ======================================================== */}

        {visual === "market" ? (
          <MarketGraphic metric={metric} />
        ) : visual === "android" ? (
          <AndroidGraphic />
        ) : (
          /* =====================================================
             REAL ESTATE
             ORIGINAL VISUAL — UNCHANGED
          ====================================================== */

          <div className="relative flex h-full items-stretch">
            {/* building */}
            <div className="flex flex-[1.2] items-center justify-center px-4">
              <svg
                viewBox="0 0 140 160"
                className="h-[78%] w-auto overflow-visible"
              >
                <path
                  d="M20 150 V90 H45 V60 H70 V30 H95 V150 H20 Z"
                  fill="none"
                  strokeWidth="2"
                  className="
                    stroke-white/25
                    transition-colors duration-700
                    group-hover:stroke-[#2dd4bf]
                    [filter:drop-shadow(0_0_0_rgba(45,212,191,0))]
                    group-hover:[filter:drop-shadow(0_0_6px_rgba(45,212,191,0.55))]
                  "
                />

                {[110, 130].map((y, i) => (
                  <line
                    key={y}
                    x1="20"
                    x2="95"
                    y1={y}
                    y2={y}
                    strokeWidth="1"
                    className="
                      stroke-white/10
                      transition-colors duration-700
                      group-hover:stroke-[#2dd4bf]/40
                    "
                    style={{
                      transitionDelay: `${i * 100}ms`,
                    }}
                  />
                ))}

                {[
                  [28, 100],
                  [40, 100],
                  [55, 100],
                  [66, 100],
                  [50, 70],
                  [62, 70],
                  [78, 100],
                  [86, 100],
                  [78, 40],
                  [86, 40],
                ].map(([x, y], i) => (
                  <rect
                    key={`${x}-${y}`}
                    x={x}
                    y={y}
                    width="6"
                    height="8"
                    rx="1"
                    className="
                      fill-[#2dd4bf]
                      opacity-0
                      transition-opacity duration-500
                      group-hover:opacity-90
                    "
                    style={{
                      transitionDelay: `${250 + i * 45}ms`,
                    }}
                  />
                ))}

                <line
                  x1="12"
                  x2="103"
                  y1="150"
                  y2="150"
                  strokeWidth="2"
                  className="stroke-white/15"
                />
              </svg>
            </div>

            {/* divider */}
            <div className="w-px bg-white/[0.06]" />

            {/* graph */}
            <div className="flex flex-1 flex-col justify-center gap-2 px-4">
              <span className="font-mono text-[10px] tracking-[0.06em] text-[#55585f] transition-colors duration-500 group-hover:text-[#2dd4bf]">
                {metric}
              </span>

              <svg
                viewBox="0 0 100 60"
                className="w-full overflow-visible"
              >
                <line
                  x1="0"
                  x2="100"
                  y1="55"
                  y2="55"
                  strokeWidth="1"
                  className="stroke-white/10"
                />

                <polyline
                  points="4,45 24,38 44,42 64,20 84,25 96,8"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="
                    stroke-white/25
                    transition-colors duration-700
                    group-hover:stroke-[#2dd4bf]
                  "
                />

                <circle
                  cx="96"
                  cy="8"
                  r="2.5"
                  className="fill-[#2dd4bf]"
                />

                <circle
                  cx="96"
                  cy="8"
                  r="2.5"
                  className="fill-[#2dd4bf] opacity-60 animate-ping"
                />
              </svg>
            </div>
          </div>
        )}

        {/* =========================================================
            SPEC CHIPS
        ========================================================= */}

        {specs.length > 0 && (
          <div className="absolute inset-x-3 bottom-3 z-10 flex flex-wrap gap-1.5">
            {specs.map((spec, i) => (
              <span
                key={spec}
                style={{
                  transitionDelay: `${300 + i * 90}ms`,
                }}
                className="
                  translate-y-2 rounded-md
                  border border-white/10
                  bg-black/60
                  px-2 py-1
                  font-mono text-[10px]
                  tracking-[0.04em]
                  text-[#d7f9f3]
                  opacity-0
                  backdrop-blur-md
                  transition-all duration-500
                  ease-[cubic-bezier(.22,1,.36,1)]
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                {spec}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

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
            grid h-9 w-9 shrink-0
            place-items-center
            rounded-full
            border border-white/15
            text-[#2dd4bf]
            transition-all duration-500
            ease-[cubic-bezier(.22,1,.36,1)]
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:border-[#2dd4bf]
            group-hover:bg-[#2dd4bf]
            group-hover:text-black
          "
        >
          ↗
        </span>
      </div>
    </button>
  );
}

/* ============================================================
   MARKET GRAPHIC
   EXISTING BULL — LEFT UNCHANGED
============================================================ */

function MarketGraphic({ metric }) {
  return (
    <div className="relative flex h-full items-stretch">
      {/* bull */}
      <div className="flex flex-[1.2] items-center justify-center px-4">
        <svg
          viewBox="0 0 140 160"
          className="h-[78%] w-auto overflow-visible"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="70"
            cy="72"
            r="51"
            stroke="rgba(255,255,255,.035)"
            strokeWidth="1"
          />

          {/* left horn */}
          <path
            d="
              M58 50
              C45 51 34 45 29 36
              C25 28 27 19 35 13
              C32 23 36 30 43 32
              C49 34 54 31 59 27
            "
            stroke="rgba(255,255,255,.28)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-700 group-hover:stroke-[#2dd4bf]"
          />

          {/* right horn */}
          <path
            d="
              M82 50
              C95 51 106 45 111 36
              C115 28 113 19 105 13
              C108 23 104 30 97 32
              C91 34 86 31 81 27
            "
            stroke="rgba(255,255,255,.28)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-700 group-hover:stroke-[#2dd4bf]"
          />

          {/* ears */}
          <path
            d="M43 43 C33 40 27 43 23 50 C30 50 37 48 44 46"
            stroke="rgba(255,255,255,.20)"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-700 group-hover:stroke-[#2dd4bf]"
          />

          <path
            d="M97 43 C107 40 113 43 117 50 C110 50 103 48 96 46"
            stroke="rgba(255,255,255,.20)"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-700 group-hover:stroke-[#2dd4bf]"
          />

          {/* forehead */}
          <path
            d="M58 44 C63 37 67 34 70 34 C73 34 77 37 82 44"
            stroke="rgba(255,255,255,.27)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-700 group-hover:stroke-[#2dd4bf]"
          />

          <path
            d="M70 34 V88"
            stroke="rgba(255,255,255,.16)"
            strokeWidth="1.4"
            className="transition-colors duration-700 group-hover:stroke-[#2dd4bf]/60"
          />

          {/* face */}
          <path
            d="
              M58 43
              C48 48 43 59 44 73
              C45 88 51 101 59 110
              L70 129
              L81 110
              C89 101 95 88 96 73
              C97 59 92 48 82 43
            "
            stroke="rgba(255,255,255,.25)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-700 group-hover:stroke-[#2dd4bf]"
          />

          {/* eyes */}
          <path
            d="M51 67 C55 63 60 63 64 66"
            stroke="rgba(255,255,255,.25)"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="transition-colors duration-700 group-hover:stroke-[#2dd4bf]"
          />

          <path
            d="M89 67 C85 63 80 63 76 66"
            stroke="rgba(255,255,255,.25)"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="transition-colors duration-700 group-hover:stroke-[#2dd4bf]"
          />

          <circle
            cx="58"
            cy="68"
            r="2"
            fill="#2dd4bf"
          />

          <circle
            cx="82"
            cy="68"
            r="2"
            fill="#2dd4bf"
          />

          {/* muzzle */}
          <path
            d="M57 86 C57 97 62 104 70 107 C78 104 83 97 83 86"
            stroke="rgba(255,255,255,.25)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-700 group-hover:stroke-[#2dd4bf]"
          />

          <path
            d="
              M58 92
              C53 97 53 105 58 110
              C62 114 66 115 70 115
              C74 115 78 114 82 110
              C87 105 87 97 82 92
              C77 88 63 88 58 92
              Z
            "
            fill="rgba(255,255,255,.025)"
            stroke="rgba(255,255,255,.27)"
            strokeWidth="1.8"
            strokeLinejoin="round"
            className="transition-all duration-700 group-hover:stroke-[#2dd4bf]"
          />

          {/* nostrils */}
          <ellipse
            cx="64"
            cy="103"
            rx="2.6"
            ry="1.8"
            fill="rgba(255,255,255,.22)"
            className="transition-colors duration-700 group-hover:fill-[#2dd4bf]"
          />

          <ellipse
            cx="76"
            cy="103"
            rx="2.6"
            ry="1.8"
            fill="rgba(255,255,255,.22)"
            className="transition-colors duration-700 group-hover:fill-[#2dd4bf]"
          />

          {/* mouth */}
          <path
            d="M62 111 C66 114 74 114 78 111"
            stroke="rgba(255,255,255,.22)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="transition-colors duration-700 group-hover:stroke-[#2dd4bf]"
          />

          {/* lower point */}
          <path
            d="M59 111 L70 137 L81 111"
            stroke="rgba(255,255,255,.17)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-700 group-hover:stroke-[#2dd4bf]/60"
          />

          <line
            x1="22"
            x2="118"
            y1="150"
            y2="150"
            stroke="rgba(255,255,255,.10)"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* divider */}
      <div className="w-px bg-white/[0.06]" />

      {/* graph */}
      <div className="flex flex-1 flex-col justify-center gap-2 px-4">
        <span className="font-mono text-[10px] tracking-[0.06em] text-[#55585f] transition-colors duration-500 group-hover:text-[#2dd4bf]">
          {metric}
        </span>

        <svg
          viewBox="0 0 100 60"
          className="w-full overflow-visible"
          aria-hidden="true"
        >
          <line
            x1="0"
            x2="100"
            y1="55"
            y2="55"
            strokeWidth="1"
            className="stroke-white/10"
          />

          <polyline
            points="
              4,46
              18,42
              30,44
              43,31
              55,36
              68,23
              82,27
              96,8
            "
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-white/25 transition-colors duration-700 group-hover:stroke-[#2dd4bf]"
          />

          <circle
            cx="96"
            cy="8"
            r="2.5"
            className="fill-[#2dd4bf]"
          />

          <circle
            cx="96"
            cy="8"
            r="2.5"
            className="fill-[#2dd4bf] opacity-60 animate-ping"
          />
        </svg>
      </div>
    </div>
  );
}

/* ============================================================
   ANDROID GRAPHIC
   ONLY USED BY visual="android"
============================================================ */

function AndroidGraphic() {
  return (
    <div className="relative flex h-full items-stretch">
      {/* phone */}
      <div className="flex flex-[1.2] items-center justify-center px-4">
        <div
          className="
            relative
            h-[78%]
            w-[72px]
            rounded-[15px]
            border
            border-white/15
            bg-[#101316]
            p-[5px]
            transition-all duration-500
            group-hover:-translate-y-1
            group-hover:border-[#2dd4bf]/70
            group-hover:[filter:drop-shadow(0_0_10px_rgba(45,212,191,.22))]
          "
        >
          {/* speaker */}
          <div className="absolute left-1/2 top-1.5 h-1 w-5 -translate-x-1/2 rounded-full bg-white/10" />

          {/* screen */}
          <div className="relative h-full overflow-hidden rounded-[10px] bg-[#090c0f]">
            {/* header */}
            <div className="flex items-center justify-between px-2.5 pt-4">
              <span className="font-mono text-[5px] tracking-[.08em] text-white/45">
                INTERVIEWAI
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf] shadow-[0_0_7px_rgba(45,212,191,.8)]" />
            </div>

            {/* score */}
            <div className="mx-2.5 mt-3 rounded-[5px] border border-white/[.07] bg-white/[.03] p-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[5px] text-white/40">
                  SCORE
                </span>

                <span className="font-mono text-[6px] text-[#2dd4bf]">
                  84%
                </span>
              </div>

              <div className="mt-2 h-1 rounded-full bg-white/[.06]">
                <div className="h-full w-[84%] rounded-full bg-[#2dd4bf]" />
              </div>
            </div>

            {/* progress */}
            <div className="mx-2.5 mt-2 rounded-[5px] border border-white/[.07] bg-white/[.03] p-2">
              <span className="font-mono text-[5px] text-white/40">
                PROGRESS
              </span>

              <svg
                viewBox="0 0 90 32"
                className="mt-2 h-[30px] w-full"
                aria-hidden="true"
              >
                <polyline
                  points="2,25 14,22 25,24 37,16 48,19 60,10 72,13 88,5"
                  fill="none"
                  stroke="#2dd4bf"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* feedback */}
            <div className="mx-2.5 mt-2 rounded-[5px] border border-white/[.07] bg-white/[.03] p-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[5px] text-white/40">
                  AI FEEDBACK
                </span>

                <span className="font-mono text-[5px] text-[#6f5ff0]">
                  READY
                </span>
              </div>

              <div className="mt-2 space-y-1">
                <div className="h-1 w-[86%] rounded-full bg-white/[.07]" />
                <div className="h-1 w-[64%] rounded-full bg-white/[.05]" />
                <div className="h-1 w-[74%] rounded-full bg-white/[.05]" />
              </div>
            </div>

            {/* nav */}
            <div className="absolute inset-x-2 bottom-2 flex justify-center gap-3 border-t border-white/[.06] pt-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf]" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            </div>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="w-px bg-white/[0.06]" />

      {/* metrics */}
      <div className="flex flex-1 flex-col justify-center gap-3 px-4">
        <span className="font-mono text-[10px] tracking-[0.06em] text-[#55585f] transition-colors duration-500 group-hover:text-[#2dd4bf]">
          AI COACH
        </span>

        <AndroidMetric
          label="PRACTICE"
          value="27"
          width="74%"
        />

        <AndroidMetric
          label="SCORE"
          value="84%"
          width="84%"
          accent="#6f5ff0"
        />

        <AndroidMetric
          label="FEEDBACK"
          value="LIVE"
          width="90%"
        />
      </div>
    </div>
  );
}

function AndroidMetric({
  label,
  value,
  width,
  accent = "#2dd4bf",
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8px] text-white/35">
          {label}
        </span>

        <span
          className="font-mono text-[8px]"
          style={{ color: accent }}
        >
          {value}
        </span>
      </div>

      <div className="mt-1 h-1 rounded-full bg-white/[.06]">
        <div
          className="h-full rounded-full"
          style={{
            width,
            background: accent,
          }}
        />
      </div>
    </div>
  );
}