"use client";

import { useEffect } from "react";

const C = {
  bg: "#0a0e17",
  panel: "#111827",
  border: "rgba(255,255,255,.08)",
  text: "#eef2f7",
  muted: "#8791a2",
  teal: "#2dd4bf",
  blue: "#4c8dff",
  green: "#34d399",
  red: "#ff5c6c",
  amber: "#f5a623",
};

export default function InterviewAIDetails({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] bg-[#03060c]/70 p-2 backdrop-blur-sm md:p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto h-full w-full max-w-[1080px] overflow-hidden rounded-[18px] border bg-[#0a0e17] shadow-[0_30px_100px_rgba(0,0,0,.45)]"
        style={{ borderColor: C.border }}
      >
        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b px-5 py-4 md:px-7" style={{ borderColor: C.border }}>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf]" />
            <span className="font-mono text-[8px] tracking-[.18em] text-[#8791a2]">
              COSMIX / INTERVIEWAI
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-full border bg-white/[.03] text-lg text-white/60 transition hover:rotate-90 hover:text-white"
            style={{ borderColor: C.border }}
            aria-label="Close"
          >
            ×
          </button>
        </header>

        <div className="mi-scroll h-full overflow-y-auto px-5 pb-12 pt-20 md:px-8">
          <div className="mx-auto max-w-[960px]">
            <section className="grid items-center gap-8 lg:grid-cols-[.9fr_1.1fr]">
              <div className="reveal">
                <div className="mb-3 font-mono text-[8px] tracking-[.18em] text-[#4c8dff]">
                  CASE STUDY / ANDROID
                </div>

                <h1 className="max-w-[520px] text-[clamp(2.7rem,5.5vw,5.2rem)] font-medium leading-[.94] tracking-[-.06em] text-white">
                  We engineered an
                  <span className="text-[#2dd4bf]"> application for interview preparation</span>
                </h1>

                <p className="mt-5 max-w-[480px] text-[13px] leading-6 text-[#8791a2]">
                  InterviewAI reads a candidate’s resume, evaluates answers,
                  and turns practice into measurable progress.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["KOTLIN", "COMPOSE", "MVVM", "GEMINI AI"].map((x) => (
                    <span
                      key={x}
                      className="rounded-full border bg-white/[.02] px-3 py-1.5 font-mono text-[7px] tracking-[.08em] text-[#aeb7c5]"
                      style={{ borderColor: C.border }}
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>

              <PhoneResume />
            </section>

            <FeatureSection
              eyebrow="01 / RESUME ANALYSIS"
              title="Generic questions ignore the person behind the resume."
              body="The app reads the resume first, extracts role, skills, experience, and projects, then uses that context to shape interview practice."
              visual={<PhoneResume />}
              reverse
              accent={C.blue}
            />

            <FeatureSection
              eyebrow="02 / AI-POWERED FEEDBACK"
              title="A low score is only useful when you know why."
              body="Each answer is evaluated across confidence, grammar, relevance, and keyword coverage — then paired with direct feedback and an improved answer."
              visual={<PhoneFeedback />}
              accent={C.teal}
            />

            <FeatureSection
              eyebrow="03 / PROGRESS TRACKING"
              title="Practice becomes useful when improvement becomes visible."
              body="Score history, category performance, and streaks turn isolated sessions into a trend you can actually follow."
              visual={<PhoneProgress />}
              reverse
              accent={C.green}
            />

            <section className="mt-20 border-t pt-10 md:mt-24" style={{ borderColor: C.border }}>
              <div className="grid gap-6 md:grid-cols-[1fr_1.5fr] md:items-end">
                <div>
                  <div className="font-mono text-[8px] tracking-[.18em] text-[#8791a2]">
                    ENGINEERED STACK
                  </div>
                  <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,3rem)] font-medium leading-none tracking-[-.04em] text-white">
                    Mobile product,
                    <span className="text-[#2dd4bf]"> end to end.</span>
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Kotlin",
                    "Jetpack Compose",
                    "Clean Architecture",
                    "Hilt",
                    "Coroutines",
                    "StateFlow",
                    "Retrofit",
                    "Spring Boot",
                    "PostgreSQL",
                    "Gemini AI",
                  ].map((x) => (
                    <span
                      key={x}
                      className="rounded-md border px-3 py-2 text-[10px] text-[#9ea8b8]"
                      style={{ borderColor: C.border }}
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-16 text-center">
              <div className="mx-auto max-w-[620px] rounded-[16px] border bg-[#0f1522] p-8" style={{ borderColor: C.border }}>
                <div className="font-mono text-[8px] tracking-[.18em] text-[#2dd4bf]">
                  COSMIX / MOBILE SYSTEM
                </div>
                <h3 className="mt-3 text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-tight tracking-[-.04em] text-white">
                  Built to make interview practice measurable.
                </h3>
                <p className="mx-auto mt-3 max-w-[480px] text-[12px] leading-5 text-[#8791a2]">
                  From resume context to AI feedback to progress tracking —
                  one Android system, one feedback loop.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-6 rounded-full border bg-white px-5 py-2.5 text-[11px] font-semibold text-[#0a0e17] transition hover:-translate-y-0.5"
                  style={{ borderColor: "#d8dde6" }}
                >
                  ← Back to projects
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .mi-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
        }
        .mi-scroll::-webkit-scrollbar { display: none; }

        .reveal {
          opacity: 0;
          transform: translate3d(0,16px,0);
          animation: iaReveal .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .phone-enter {
          opacity: 0;
          transform: translate3d(0,18px,0) scale(.985);
          animation: iaPhone .7s cubic-bezier(.22,1,.36,1) .08s forwards;
        }

        .screen-glow {
          animation: iaGlow 4s ease-in-out infinite;
        }

        @keyframes iaReveal {
          to { opacity: 1; transform: translate3d(0,0,0); }
        }

        @keyframes iaPhone {
          to { opacity: 1; transform: translate3d(0,0,0) scale(1); }
        }

        @keyframes iaGlow {
          0%,100% { opacity: .18; }
          50% { opacity: .34; }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .phone-enter,
          .screen-glow {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}

function FeatureSection({ eyebrow, title, body, visual, reverse, accent }) {
  return (
    <section
      className={`mt-16 grid items-center gap-8 md:mt-20 md:grid-cols-2 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}
    >
      <div className="reveal">
        <div className="mb-3 font-mono text-[8px] tracking-[.18em]" style={{ color: accent }}>
          {eyebrow}
        </div>
        <h2 className="max-w-[460px] text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[.98] tracking-[-.055em] text-white">
          {title}
        </h2>
        <p className="mt-4 max-w-[440px] text-[12px] leading-5 text-[#8791a2]">
          {body}
        </p>
      </div>

      <div className="phone-enter">
        {visual}
      </div>
    </section>
  );
}

function PhoneShell({ children, glow = C.teal }) {
  return (
    <div className="relative mx-auto w-full max-w-[310px]">
      <div
        className="screen-glow pointer-events-none absolute inset-6 rounded-[42px] blur-2xl"
        style={{ background: glow }}
      />
      <div className="relative rounded-[32px] border bg-[#111722] p-2 shadow-[0_20px_50px_rgba(0,0,0,.28)]" style={{ borderColor: C.border }}>
        <div className="overflow-hidden rounded-[25px] border bg-[#05070b]" style={{ borderColor: C.border }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function PhoneResume() {
  return (
    <PhoneShell glow="#2dd4bf">
      <div className="min-h-[420px] p-4">
        <TopBar label="InterviewAI" />
        <div className="mt-3 rounded-[18px] border bg-[#0c121b] p-4" style={{ borderColor: C.border }}>
          <div className="mx-auto grid h-11 w-11 place-items-center rounded-full border-2 text-[#2dd4bf]" style={{ borderColor: C.teal }}>
            ✓
          </div>
          <div className="mt-3 text-center text-[17px] font-semibold text-white">
            Resume Analyzed
          </div>
          <div className="mt-1 text-center text-[9px] text-[#8791a2]">
            Amul_CV.pdf
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <MiniPhoneStat value="19" label="Skills" />
          <MiniPhoneStat value="1yr" label="Experience" />
          <MiniPhoneStat value="19" label="Projects" />
        </div>

        <div className="mt-3 rounded-[14px] border bg-[#0c121b] p-3" style={{ borderColor: C.border }}>
          <div className="text-[8px] text-[#8791a2]">Detected job title</div>
          <div className="mt-1 text-[14px] font-semibold text-white">Software Developer</div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Algorithms", "Android", "Compose", "Kotlin", "MVVM", "Retrofit", "Spring"].map((x) => (
            <span key={x} className="rounded-full border px-2.5 py-1 text-[8px] text-[#aeb7c5]" style={{ borderColor: "rgba(45,212,191,.28)" }}>
              {x}
            </span>
          ))}
        </div>
      </div>
    </PhoneShell>
  );
}

function PhoneFeedback() {
  return (
    <PhoneShell glow="#4c8dff">
      <div className="min-h-[420px] p-4">
        <TopBar label="Your Feedback" />

        <div className="mt-4 grid grid-cols-[120px_1fr] items-center gap-4">
          <div className="relative mx-auto h-[110px] w-[110px]">
            <svg viewBox="0 0 110 110" className="-rotate-90">
              <circle cx="55" cy="55" r="42" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="9" />
              <circle cx="55" cy="55" r="42" fill="none" stroke={C.teal} strokeWidth="9" strokeLinecap="round" strokeDasharray="264" strokeDashoffset="188" />
            </svg>
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="text-[25px] font-semibold text-white">29</div>
                <div className="text-[8px] text-[#8791a2]">/ 100</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-[15px] font-semibold text-white">Keep going!</div>
            <p className="mt-1 text-[9px] leading-4 text-[#8791a2]">
              Focus on the key areas to improve your score.
            </p>
          </div>
        </div>

        <div className="mt-5 text-[10px] font-semibold text-white">Score breakdown</div>

        <div className="mt-2 rounded-[14px] border bg-[#0c121b] p-3" style={{ borderColor: C.border }}>
          {[
            ["Confidence", "30%", "30%"],
            ["Grammar", "40%", "40%"],
            ["Relevance", "40%", "40%"],
            ["Keywords", "0%", "5%"],
          ].map(([label, value, width]) => (
            <div key={label} className="mb-3 last:mb-0">
              <div className="flex justify-between text-[8px] text-[#aeb7c5]">
                <span>{label}</span><span className="text-[#2dd4bf]">{value}</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-white/[.06]">
                <div className="h-full rounded-full bg-[#2dd4bf]" style={{ width }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-[14px] border bg-[#0c121b] p-3" style={{ borderColor: C.border }}>
          <div className="text-[8px] font-semibold text-[#2dd4bf]">AI Feedback</div>
          <p className="mt-1 text-[9px] leading-4 text-[#8791a2]">
            Focus on recomposition, state, observable, and side-effect.
          </p>
        </div>
      </div>
    </PhoneShell>
  );
}

function PhoneProgress() {
  return (
    <PhoneShell glow="#34d399">
      <div className="min-h-[420px] p-4">
        <TopBar label="Your Progress" />

        <div className="mt-3 text-[9px] text-[#8791a2]">
          🔥 <span className="text-[#2dd4bf]">3 day streak</span> · 27 total sessions
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <MiniPhoneStat value="15%" label="Avg Score" />
          <MiniPhoneStat value="42%" label="Best Score" />
          <MiniPhoneStat value="27" label="This Week" />
        </div>

        <div className="mt-3 rounded-[14px] border bg-[#0c121b] p-3" style={{ borderColor: C.border }}>
          <div className="flex items-center justify-between">
            <div className="text-[9px] font-semibold text-white">Score History</div>
            <div className="rounded-full border px-2 py-1 text-[7px] text-[#8791a2]" style={{ borderColor: C.border }}>
              Last 20
            </div>
          </div>

          <div className="mt-3 h-[120px]">
            <ProgressChart />
          </div>
        </div>

        <div className="mt-3 rounded-[14px] border bg-[#0c121b] p-3" style={{ borderColor: C.border }}>
          <div className="text-[9px] font-semibold text-white">Category Performance</div>
          {[
            ["Android", "15%"],
            ["Data Structures", "32%"],
            ["Algorithms", "48%"],
            ["System Design", "28%"],
          ].map(([label, value]) => (
            <div key={label} className="mt-2.5">
              <div className="flex justify-between text-[8px] text-[#aeb7c5]">
                <span>{label}</span><span className="text-[#2dd4bf]">{value}</span>
              </div>
              <div className="mt-1 h-1 rounded-full bg-white/[.06]">
                <div className="h-full rounded-full bg-[#2dd4bf]" style={{ width: value }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </PhoneShell>
  );
}

function TopBar({ label }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[11px] font-semibold text-white">{label}</span>
      <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf]" />
    </div>
  );
}

function MiniPhoneStat({ value, label }) {
  return (
    <div className="rounded-[10px] border bg-[#0c121b] p-2.5" style={{ borderColor: C.border }}>
      <div className="text-[16px] font-semibold text-[#2dd4bf]">{value}</div>
      <div className="mt-0.5 text-[7px] uppercase tracking-wide text-[#8791a2]">{label}</div>
    </div>
  );
}

function ProgressChart() {
  return (
    <svg viewBox="0 0 320 120" className="h-full w-full" preserveAspectRatio="none">
      {[25, 50, 75, 100].map((y) => (
        <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="rgba(255,255,255,.06)" />
      ))}

      <path
        d="M4 102 Q35 102 50 100 T95 100 Q112 100 122 50 Q132 20 142 78 Q152 105 168 102 Q190 102 205 60 Q215 24 225 76 Q235 105 252 103 Q273 103 286 55 Q298 25 316 72"
        fill="none"
        stroke={C.teal}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}