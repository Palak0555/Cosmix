"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* ============================================================
   DESIGN TOKENS — light, Stripe-adjacent, high-contrast
============================================================ */

const TOKENS = {
  bg: "#f6f7f9",
  surface: "#ffffff",
  surfaceAlt: "#eef0f3",
  line: "#e4e7ec",
  ink: "#0d1321",
  muted: "#5c6673",
  teal: "#0ea89a",
  tealDeep: "#0a7d73",
  violet: "#6f5ff0",
  amber: "#e8912f",
};

const IMG = {
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  website: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
  crm: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  app: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
};

const SECTIONS = [
  { id: "hero", label: "The signal" },
  { id: "questions", label: "What breaks" },
  { id: "solution", label: "The fix" },
  { id: "products", label: "The system" },
  { id: "connected", label: "How it connects" },
  { id: "automation", label: "In motion" },
  { id: "impact", label: "The result" },
  { id: "cta", label: "Start" },
  { id: "home", label: "Back home" },
];

const QUESTIONS = [
  { number: "01", question: "How fast does a new enquiry get a response?", signal: ["ENQUIRY RECEIVED", "09:42:18", "RESPONSE", "— — —"] },
  { number: "02", question: "What happens when the buyer doesn't reply?", signal: ["MESSAGE SENT", "NO REPLY", "FOLLOW-UP", "?"] },
  { number: "03", question: "Who knows which lead needs attention next?", signal: ["12 LEADS WAITING", "OWNER", "—", "PRIORITY UNKNOWN"] },
];

const PRODUCTS = [
  { id: "website", accent: TOKENS.teal, kicker: "Real estate website", stat: "< 2s", statLabel: "load time", title: "Where interest turns into an enquiry", description: "A fast, mobile-first site built to show inventory clearly and capture every enquiry — no lead ever lands in a form nobody checks.", features: ["Live, verified listings", "Loads instantly on mobile data", "Every enquiry routed automatically"], img: IMG.website },
  { id: "crm", accent: TOKENS.violet, kicker: "CRM", stat: "100%", statLabel: "leads logged", title: "Where every lead has a home", description: "The moment someone enquires, they exist in the system — with a status, an owner, and a next action. Nothing lives in someone's head or inbox.", features: ["Auto-logged from every channel", "Follow-ups assigned in seconds", "Full visibility into every deal stage"], img: IMG.crm },
  { id: "app", accent: TOKENS.amber, kicker: "Agent mobile app", stat: "1 tap", statLabel: "to respond", title: "Where the team actually acts", description: "Your sales team gets the lead on their phone the second it arrives — not at their desk an hour later. Call or message in one tap.", features: ["Instant push alerts on new leads", "Call / WhatsApp in a single tap", "Works the same on-site or off"], img: IMG.app },
];

const AUTOMATION_STEPS = [
  { number: "01", title: "New enquiry", description: "A visitor submits an enquiry on the website." },
  { number: "02", title: "Property matched", description: "The right listing and owner are identified." },
  { number: "03", title: "Lead captured", description: "Customer details land in the CRM instantly." },
  { number: "04", title: "Agent notified", description: "The right person gets it on their phone." },
  { number: "05", title: "Follow-up sent", description: "A response goes out automatically." },
  { number: "06", title: "Visit scheduled", description: "The journey keeps moving toward a close." },
];

const IMPACT_STATS = [
  { value: 92, suffix: "%", label: "Faster first response", description: "From hours to under two minutes." },
  { value: 3, suffix: "x", label: "More follow-ups completed", description: "Nothing slips through once it's automatic." },
  { value: 100, suffix: "%", label: "Enquiries reach the CRM", description: "No lead lost between channels." },
  { value: 24, suffix: "/7", label: "Always capturing leads", description: "The system doesn't clock out." },
];

/* ============================================================
   HOOKS
============================================================ */

function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setInView(true); }, { threshold: 0.2, ...options });
    observer.observe(el);
    return () => observer.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return [ref, inView];
}

function useActiveSection(count) {
  const refs = useRef([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setActive(i); }, { threshold: 0, rootMargin: "-42% 0px -42% 0px" });
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, [count]);
  return [refs, active];
}

/* ============================================================
   ROOT
============================================================ */

export default function LivmetroDetails({ onClose, onContact }) {
  const scrollRef = useRef(null);
  const [sectionRefs, activeSection] = useActiveSection(SECTIONS.length);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    setScrollProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
  }, []);

  const goToSection = (index) => sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <div className="fixed inset-0 z-[9999] bg-[#0d1321]/40 p-2 backdrop-blur-md md:p-4" onClick={onClose}>
        <div
          className="relative mx-auto h-full w-full max-w-[1180px] overflow-hidden rounded-[22px] border border-black/[0.06] shadow-[0_40px_140px_rgba(13,19,33,.35)]"
          style={{ background: TOKENS.bg, color: TOKENS.ink }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-x-0 -top-1/4 h-[720px]" style={{ background: `radial-gradient(60% 60% at 50% 0%, ${TOKENS.teal}26, transparent 70%)` }} />
            <div className="absolute inset-x-0 top-0 h-[720px]" style={{ background: `linear-gradient(180deg, ${TOKENS.teal}0d, transparent 55%)` }} />
            <div className="absolute -right-32 top-[50%] h-[420px] w-[420px] rounded-full blur-[130px]" style={{ background: `${TOKENS.tealDeep}12` }} />
            <FloatDots />
          </div>

          <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-5 md:px-8">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: TOKENS.teal, boxShadow: `0 0 10px ${TOKENS.teal}88` }} />
              <span className="font-mono text-[9px] tracking-[.17em]" style={{ color: TOKENS.muted }}>COSMIX × LIVMETRO</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden font-mono text-[8px] tracking-[.14em] md:block" style={{ color: "#8b93a0" }}>{SECTIONS[activeSection].label.toUpperCase()}</span>
              <button type="button" aria-label="Close project" onClick={onClose}
                className="grid h-9 w-9 place-items-center rounded-full border border-black/[0.08] bg-white text-[#5c6673] shadow-sm transition-all duration-300 hover:rotate-90 hover:text-[#0d1321]">
                ×
              </button>
            </div>
          </header>

          <div className="absolute left-0 right-0 top-0 z-40 h-px bg-black/[0.05]">
            <div className="h-full transition-[width] duration-150" style={{ width: `${scrollProgress * 100}%`, background: TOKENS.teal }} />
          </div>

          <nav className="absolute left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-start gap-5 lg:flex">
            <div className="absolute bottom-0 left-[3px] top-0 w-px bg-black/[0.08]" />
            <div className="absolute left-[3px] top-0 w-px transition-[height] duration-300" style={{ height: `${((activeSection + 1) / SECTIONS.length) * 100}%`, background: TOKENS.teal }} />
            {SECTIONS.map((s, i) => (
              <button key={s.id} type="button" onClick={() => goToSection(i)} className="group relative z-10 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full transition-all duration-300" style={{ background: i === activeSection ? TOKENS.teal : "#c7cdd6", boxShadow: i === activeSection ? `0 0 8px ${TOKENS.teal}88` : "none", transform: i === activeSection ? "scale(1.6)" : "scale(1)" }} />
                <span className={`font-mono text-[8px] tracking-[.12em] transition-all duration-300 ${i === activeSection ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} style={{ color: i === activeSection ? TOKENS.ink : TOKENS.muted }}>
                  0{i + 1} · {s.label}
                </span>
              </button>
            ))}
          </nav>

          <div ref={scrollRef} onScroll={handleScroll} className="no-scrollbar relative z-10 h-full overflow-y-auto scroll-smooth px-5 pb-14 pt-20 md:px-9 lg:pl-28">
            <div className="mx-auto flex max-w-[1040px] flex-col gap-11 md:gap-14">
              <HeroSection reg={(el) => (sectionRefs.current[0] = el)} />
              <ParticleDivider />
              <QuestionsSection reg={(el) => (sectionRefs.current[1] = el)} />
              <SolutionSection reg={(el) => (sectionRefs.current[2] = el)} />
              <ProductsSection reg={(el) => (sectionRefs.current[3] = el)} />
              <ParticleDivider />
              <ConnectedSection reg={(el) => (sectionRefs.current[4] = el)} />
              <AutomationSection reg={(el) => (sectionRefs.current[5] = el)} />
              <ParticleDivider />
              <ImpactSection reg={(el) => (sectionRefs.current[6] = el)} />
              <CtaSection reg={(el) => (sectionRefs.current[7] = el)} onContact={onContact} />
              <HomeSection reg={(el) => (sectionRefs.current[8] = el)} onClose={onClose} />
            </div>
          </div>

          <div className="absolute bottom-4 left-5 right-5 z-50 flex items-center justify-between md:left-8 md:right-8">
            <span className="font-mono text-[8px] tracking-[.12em]" style={{ color: "#a6acb6" }}>LIVMETRO / DIGITAL EXPERIENCE</span>
            <span className="font-mono text-[8px] tracking-[.12em]" style={{ color: "#a6acb6" }}>0{activeSection + 1} / 0{SECTIONS.length}</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes lmReveal { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes lmGraphDraw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
        @keyframes lmScan { from { transform: translateY(-20px); } to { transform: translateY(420px); } }
        @keyframes lmPulse { 0%, 100% { opacity: .5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.3); } }
        @keyframes lmDataFlow { 0% { stroke-dashoffset: 1; opacity: 0; } 15% { opacity: 1; } 75% { opacity: 1; } 100% { stroke-dashoffset: -1; opacity: 0; } }
        @keyframes lmParticle { 0% { opacity: 0; transform: translate3d(0,0,0); } 20% { opacity: 1; } 80% { opacity: 1; } 100% { opacity: 0; transform: translate3d(60px,-32px,0); } }
        @keyframes lmOrbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes lmNode { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        @keyframes lmDriftA { 0%,100% { transform: translate(0,0); opacity:.5; } 50% { transform: translate(14px,-10px); opacity:1; } }
        @keyframes lmDriftB { 0%,100% { transform: translate(0,0); opacity:.35; } 50% { transform: translate(-18px,12px); opacity:.9; } }
        .architecture-paused *, .architecture-paused *::before, .architecture-paused *::after { animation-play-state: paused !important; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: .01ms !important; animation-delay: 0ms !important; transition-duration: .01ms !important; }
        }
      `}</style>
    </>
  );
}

/* ============================================================
   REVEAL — cheap, transform/opacity only
============================================================ */

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className}
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: `opacity .6s ease ${delay}ms, transform .6s ease ${delay}ms`, willChange: "opacity, transform" }}>
      {children}
    </div>
  );
}

function FloatDots() {
  const dots = [
    { l: "8%", t: "18%", s: 5, c: TOKENS.teal, a: "lmDriftA 7s ease-in-out infinite" },
    { l: "22%", t: "55%", s: 3, c: TOKENS.violet, a: "lmDriftB 9s ease-in-out infinite" },
    { l: "88%", t: "22%", s: 4, c: TOKENS.amber, a: "lmDriftA 8s ease-in-out infinite 1s" },
    { l: "92%", t: "60%", s: 3, c: TOKENS.teal, a: "lmDriftB 6s ease-in-out infinite .5s" },
    { l: "50%", t: "10%", s: 3, c: TOKENS.violet, a: "lmDriftA 10s ease-in-out infinite" },
  ];
  return dots.map((d, i) => (
    <span key={i} className="absolute rounded-full" style={{ left: d.l, top: d.t, width: d.s, height: d.s, background: d.c, boxShadow: `0 0 10px ${d.c}88`, animation: d.a }} />
  ));
}

function ParticleBurst({ count = 14 }) {
  const seeds = Array.from({ length: count }, (_, i) => ({
    l: 6 + ((i * 37) % 92),
    t: 8 + ((i * 53) % 84),
    s: 2 + (i % 3),
    d: (i % 6) * 0.35,
    dur: 3.2 + (i % 4) * 0.6,
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {seeds.map((p, i) => (
        <span key={i} className="absolute rounded-full" style={{ left: `${p.l}%`, top: `${p.t}%`, width: p.s, height: p.s, background: TOKENS.teal, boxShadow: `0 0 8px ${TOKENS.teal}aa`, opacity: 0.7, animation: `lmParticle ${p.dur}s ease-in-out ${p.d}s infinite` }} />
      ))}
    </div>
  );
}

function ParticleDivider() {
  const pts = [10, 24, 38, 52, 66, 80, 94];
  return (
    <div className="relative h-10 w-full overflow-hidden">
      <div className="absolute left-0 right-0 top-1/2 h-px" style={{ background: TOKENS.line }} />
      {pts.map((l, i) => (
        <span key={i} className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full"
          style={{ left: `${l}%`, background: i % 2 ? TOKENS.violet : TOKENS.teal, opacity: 0.7, animation: `lmDriftA ${5 + i}s ease-in-out infinite ${i * 0.3}s` }} />
      ))}
    </div>
  );
}

/* ============================================================
   01 — HERO (kept: "why is your graph going down")
============================================================ */

function HeroSection({ reg }) {
  return (
    <section ref={reg} id="hero" className="w-full pt-4">
      <Reveal>
        <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 font-mono text-[9px] tracking-[.2em]" style={{ color: TOKENS.tealDeep }}>LIVMETRO / PERFORMANCE SIGNAL</div>
            <h1 className="max-w-[760px] text-[clamp(2.5rem,6vw,5.2rem)] font-medium leading-[.94] tracking-[-.065em]">
              Why is your graph<span style={{ color: TOKENS.teal }}> going down?</span>
            </h1>
          </div>
          <div className="font-mono text-[8px] leading-5" style={{ color: TOKENS.muted }}>PERFORMANCE<br />ANALYSIS<br />SIGNAL / ACTIVE</div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="relative overflow-hidden rounded-[20px] border p-4 shadow-[0_1px_2px_rgba(13,19,33,.04),0_20px_50px_rgba(13,19,33,.08)] md:p-7" style={{ borderColor: TOKENS.line, background: TOKENS.surface }}>
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px animate-[lmScan_3s_linear_infinite] opacity-60" style={{ background: `linear-gradient(90deg, transparent, ${TOKENS.teal}, transparent)` }} />
          <div className="relative h-[260px] sm:h-[310px] md:h-[380px]">
            {[20, 40, 60, 80].map((y) => <div key={y} className="absolute left-0 right-0 border-t" style={{ top: `${y}%`, borderColor: "#eef1f4" }} />)}
            {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((x) => <div key={x} className="absolute bottom-0 top-0 border-l" style={{ left: `${x}%`, borderColor: "#f2f4f6" }} />)}
            <svg viewBox="0 0 1000 400" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
              <path d="M0 105 L100 108 L200 98 L300 110 L400 103 L500 115" fill="none" stroke="#c7cdd6" strokeWidth="2" />
              <path d="M500 115 L560 126 L620 142 L680 160 L735 190 L790 210 L835 245 L885 270 L930 315 L1000 350" fill="none" stroke={TOKENS.teal} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength="1" style={{ strokeDasharray: 1, strokeDashoffset: 0, animation: "lmGraphDraw 3.2s cubic-bezier(.22,1,.36,1)" }} />
              <path d="M0 225 L180 218 L350 228 L520 218 L700 232 L850 220 L1000 238" fill="none" stroke="#dfe3e8" strokeWidth="1" strokeDasharray="5 8" />
            </svg>
            <div className="absolute bottom-[7%] right-[7%]">
              <div className="animate-[lmPulse_1.5s_ease-in-out_infinite] rounded-full p-1" style={{ background: TOKENS.teal, boxShadow: `0 0 16px ${TOKENS.teal}66` }}>
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>
              <div className="absolute bottom-6 right-0 whitespace-nowrap rounded-full border bg-white px-2.5 py-1 font-mono text-[8px] shadow-sm" style={{ borderColor: TOKENS.line, color: TOKENS.tealDeep }}>DROP DETECTED</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-3 border-t pt-4 font-mono text-[7px] tracking-[.08em]" style={{ borderColor: TOKENS.line, color: TOKENS.muted }}>
            <span>INTEREST</span><span>ENQUIRY</span><span>RESPONSE</span><span>FOLLOW-UP</span><span>CONVERSION</span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-6 max-w-[520px] text-xs leading-5 md:text-sm" style={{ color: TOKENS.muted }}>Scroll down. This is the exact system we built to fix it — start to finish, no jargon.</p>
      </Reveal>
    </section>
  );
}

/* ============================================================
   02 — QUESTIONS
============================================================ */

function QuestionsSection({ reg }) {
  return (
    <section ref={reg} id="questions" className="relative w-full">
      <ParticleBurst count={10} />
      <Reveal>
        <div className="mb-5 flex items-center gap-3 font-mono text-[8px] tracking-[.18em]" style={{ color: TOKENS.muted }}>
          <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: TOKENS.teal }} />LOOK CLOSER
        </div>
      </Reveal>
      <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3">
        {QUESTIONS.map((q, i) => (
          <Reveal key={q.number} delay={i * 80}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-[18px] border bg-white p-5 transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: TOKENS.line, boxShadow: "0 1px 2px rgba(13,19,33,.04), 0 10px 24px rgba(13,19,33,.05)" }}>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ background: `linear-gradient(90deg, transparent, ${TOKENS.teal}, transparent)` }} />
              <div className="mb-3 flex items-center justify-between">
                <span className="grid h-7 w-7 place-items-center rounded-full font-mono text-[9px] font-semibold" style={{ background: "#eefaf8", color: TOKENS.tealDeep }}>{q.number}</span>
                <svg viewBox="0 0 60 20" className="h-4 w-14 opacity-70">
                  <polyline points="0,14 10,10 18,15 28,6 38,12 48,4 60,9" fill="none" stroke={TOKENS.teal} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" pathLength="1" style={{ strokeDasharray: 1, strokeDashoffset: 0, animation: "lmGraphDraw 2.4s ease-out" }} />
                </svg>
              </div>
              <h3 className="text-[1.1rem] font-medium leading-tight tracking-[-.02em] md:text-[1.22rem]">{q.question}</h3>
              <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1.5 rounded-lg border px-3 py-2 font-mono text-[8px] tracking-[.06em]" style={{ borderColor: TOKENS.line, background: TOKENS.surfaceAlt, color: TOKENS.muted }}>
                {q.signal.map((v, j) => <span key={j} className={v === "?" ? "animate-pulse" : ""} style={v === "?" ? { color: TOKENS.teal, fontWeight: 700 } : undefined}>{v}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   03 — SOLUTION
============================================================ */

function SolutionSection({ reg }) {
  return (
    <section ref={reg} id="solution" className="w-full text-center">
      <Reveal>
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm" style={{ borderColor: TOKENS.line }}>
          <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: TOKENS.teal }} />
          <span className="font-mono text-[8px] tracking-[.15em]" style={{ color: TOKENS.muted }}>THE FIX</span>
        </div>
        <h2 className="mx-auto mt-7 max-w-[720px] text-[clamp(2.4rem,5.5vw,5rem)] font-medium leading-[.95] tracking-[-.06em]">
          One system, built from<br /><span style={{ color: TOKENS.teal }}>three connected parts.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[480px] text-sm leading-6 md:text-base" style={{ color: TOKENS.muted }}>
          A website that captures interest, a CRM that never forgets it, and an app that puts it in front of the right person — instantly.
        </p>
      </Reveal>
    </section>
  );
}

/* ============================================================
   04 — PRODUCTS
============================================================ */

function ProductsSection({ reg }) {
  return (
    <section ref={reg} id="products" className="w-full">
      <Reveal>
        <div className="mb-3 font-mono text-[9px] tracking-[.18em]" style={{ color: TOKENS.tealDeep }}>WHAT WE BUILT</div>
        <h2 className="max-w-[700px] text-[clamp(2.2rem,5vw,4.4rem)] font-medium leading-[.95] tracking-[-.06em]">Three products. One journey.</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {["Capture every enquiry", "Never lose a lead", "Respond in real time"].map((t) => (
            <span key={t} className="rounded-full border px-3.5 py-1.5 text-[12px] font-medium" style={{ borderColor: TOKENS.line, background: "#fff", color: "#3d4550" }}>{t}</span>
          ))}
        </div>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.id} delay={i * 100}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ "--accent": product.accent, transform: hover ? "translateY(-6px)" : "translateY(0)", transition: "transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease", boxShadow: hover ? "0 24px 48px rgba(13,19,33,.12)" : "0 1px 2px rgba(13,19,33,.04), 0 10px 24px rgba(13,19,33,.05)" }}
      className="group flex h-full flex-col overflow-hidden rounded-[20px] border bg-white"
    >
      <div className="relative h-36 w-full overflow-hidden">
        <img src={product.img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ transform: hover ? "scale(1.06)" : "scale(1)" }} loading="lazy" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 40%, rgba(13,19,33,.55) 100%)` }} />
        <span className="absolute left-3 top-3 rounded-full px-2.5 py-1 font-mono text-[8px] tracking-[.12em] text-white backdrop-blur-sm" style={{ background: "color-mix(in srgb, var(--accent) 80%, transparent)" }}>
          {product.kicker.toUpperCase()}
        </span>
        <div className="absolute bottom-3 right-3 rounded-xl bg-white/95 px-3 py-1.5 text-right shadow-sm backdrop-blur-sm">
          <div className="text-sm font-semibold leading-none" style={{ color: "var(--accent)" }}>{product.stat}</div>
          <div className="mt-0.5 text-[8px] leading-none" style={{ color: TOKENS.muted }}>{product.statLabel}</div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5" style={{ borderTop: `1px solid ${TOKENS.line}` }}>
        <h3 className="text-lg font-medium leading-tight">{product.title}</h3>
        <p className="mt-2 text-[13px] leading-5" style={{ color: TOKENS.muted }}>{product.description}</p>
        <ul className="mt-5 space-y-2.5 border-t pt-4" style={{ borderColor: TOKENS.line }}>
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-[12px]" style={{ color: "#3d4550" }}>
              <svg viewBox="0 0 24 24" fill="none" className="mt-[3px] h-3 w-3 shrink-0" style={{ color: "var(--accent)" }}>
                <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ============================================================
   05 — CONNECTED SYSTEM
============================================================ */

function ConnectedSection({ reg }) {
  const [paused, setPaused] = useState(false);
  const [activeNode, setActiveNode] = useState("automation");

  const nodes = [
    { id: "website", label: "Website", description: "Where enquiries begin", icon: <GlobeIcon />, position: "left-[3%] top-[8%] md:left-[7%]", accent: TOKENS.teal },
    { id: "properties", label: "Properties", description: "Live inventory", icon: <BuildingIcon />, position: "right-[3%] top-[8%] md:right-[7%]", accent: TOKENS.teal },
    { id: "crm", label: "CRM", description: "Customer intelligence", icon: <UserDatabaseIcon />, position: "left-[3%] bottom-[10%] md:left-[7%]", accent: TOKENS.tealDeep },
    { id: "communication", label: "Communication", description: "Instant conversations", icon: <MessageIcon />, position: "right-[3%] bottom-[10%] md:right-[7%]", accent: TOKENS.tealDeep },
    { id: "followup", label: "Follow-up", description: "Next action", icon: <RefreshIcon />, position: "left-1/2 bottom-[3%] -translate-x-1/2", accent: TOKENS.tealDeep },
    { id: "app", label: "Agent App", description: "Where the team acts", icon: <PhoneIcon />, position: "left-1/2 top-[4%] -translate-x-1/2", accent: TOKENS.amber },
  ];

  return (
    <section ref={reg} id="connected" className={`relative w-full ${paused ? "architecture-paused" : ""}`}>
      <Reveal>
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 font-mono text-[8px] tracking-[.18em]" style={{ color: TOKENS.tealDeep }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: TOKENS.teal, boxShadow: `0 0 10px ${TOKENS.teal}66` }} />HOW IT CONNECTS
            </div>
            <h2 className="text-[clamp(2.2rem,5vw,4.6rem)] font-medium leading-[.94] tracking-[-.065em]">One connected <span style={{ color: "#9aa2ae" }}>system.</span></h2>
            <p className="mt-3 max-w-[560px] text-xs leading-5 md:text-sm md:leading-6" style={{ color: TOKENS.muted }}>Every part of the customer journey works together instead of living in separate places.</p>
          </div>
          <button type="button" aria-label={paused ? "Resume system animation" : "Pause system animation"} onClick={() => setPaused((v) => !v)}
            className="relative z-50 flex w-fit shrink-0 items-center gap-3 rounded-full border bg-white px-4 py-2.5 font-mono text-[8px] tracking-[.12em] shadow-sm transition-all duration-300 hover:shadow-md active:scale-95"
            style={{ borderColor: TOKENS.line, color: TOKENS.muted }}>
            <span className="h-1.5 w-1.5 rounded-full" style={paused ? { background: "#c7cdd6" } : { background: TOKENS.teal, boxShadow: `0 0 8px ${TOKENS.teal}66` }} />
            <span>{paused ? "SYSTEM PAUSED" : "SYSTEM ACTIVE"}</span>
            <span style={{ color: TOKENS.teal }}>{paused ? "▶" : "Ⅱ"}</span>
          </button>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="relative h-[470px] overflow-hidden rounded-[24px] border shadow-[0_1px_2px_rgba(13,19,33,.04),0_24px_60px_rgba(13,19,33,.08)] sm:h-[520px] md:h-[560px]" style={{ borderColor: TOKENS.line, background: TOKENS.surface }}>
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]" style={{ background: `${TOKENS.teal}12` }} />

          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 560" preserveAspectRatio="none">
            <NetworkLine d="M145 95 C290 100 370 220 500 280" paused={paused} delay="0s" active={activeNode === "website" || activeNode === "automation"} />
            <NetworkLine d="M855 95 C710 100 630 220 500 280" paused={paused} delay=".3s" active={activeNode === "properties" || activeNode === "automation"} />
            <NetworkLine d="M145 475 C290 430 390 350 500 280" paused={paused} delay=".7s" active={activeNode === "crm" || activeNode === "automation"} />
            <NetworkLine d="M855 475 C710 430 610 350 500 280" paused={paused} delay=".9s" active={activeNode === "communication" || activeNode === "automation"} />
            <NetworkLine d="M500 280 L500 500" paused={paused} delay="1.1s" active={activeNode === "followup" || activeNode === "automation"} />
            <NetworkLine d="M500 500 C500 430 500 160 500 65" paused={paused} delay="1.3s" active={activeNode === "app" || activeNode === "followup"} />
          </svg>

          {!paused && (
            <div className="pointer-events-none absolute inset-0">
              <Particle className="left-[17%] top-[24%]" delay="0s" />
              <Particle className="left-[28%] top-[31%]" delay=".8s" />
              <Particle className="left-[73%] top-[24%]" delay="1.2s" />
              <Particle className="left-[65%] top-[38%]" delay="2s" />
              <Particle className="left-[37%] top-[59%]" delay="1.7s" />
              <Particle className="left-[63%] top-[59%]" delay="2.5s" />
            </div>
          )}

          <button type="button" onMouseEnter={() => setActiveNode("automation")} onFocus={() => setActiveNode("automation")} onClick={() => setActiveNode("automation")}
            className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 outline-none">
            <div className={`absolute -inset-10 rounded-full border ${paused ? "" : "animate-[lmOrbit_8s_linear_infinite]"}`} style={{ borderColor: `${TOKENS.teal}22` }} />
            <div className="absolute -inset-7 rounded-full blur-xl" style={{ background: `${TOKENS.teal}14` }} />
            <div className="relative grid h-[112px] w-[112px] place-items-center rounded-[27px] border shadow-[0_10px_40px_rgba(14,168,154,.18)] transition-transform duration-500 hover:scale-105 sm:h-[130px] sm:w-[130px] md:h-[145px] md:w-[145px]"
              style={{ borderColor: `${TOKENS.teal}55`, background: "#f0fbfa" }}>
              <div className="absolute inset-2 rounded-[21px] border" style={{ borderColor: `${TOKENS.teal}22` }} />
              <div className="relative text-center">
                <div className="mx-auto grid h-10 w-10 place-items-center rounded-xl text-white shadow-[0_8px_20px_rgba(14,168,154,.35)] sm:h-11 sm:w-11" style={{ background: TOKENS.teal }}>
                  <ZapIcon />
                </div>
                <div className="mt-3 text-xs font-semibold tracking-wide sm:text-sm">AUTOMATION</div>
                <div className="mt-1 font-mono text-[6px] tracking-[.14em] sm:text-[7px]" style={{ color: TOKENS.tealDeep }}>CONNECT / TRIGGER / RESPOND</div>
              </div>
            </div>
          </button>

          {nodes.map((node, index) => {
            const isActive = activeNode === node.id;
            return (
              <button key={node.id} type="button" onMouseEnter={() => setActiveNode(node.id)} onFocus={() => setActiveNode(node.id)} onClick={() => setActiveNode(node.id)}
                style={{ "--accent": node.accent }}
                className={`absolute z-30 ${node.position} group w-[130px] outline-none sm:w-[155px] md:w-[175px] animate-[lmNode_.5s_ease_${index * 80}ms_both]`}>
                <div className="relative rounded-[16px] border p-3.5 text-left transition-all duration-300 sm:p-4"
                  style={isActive ? { borderColor: "color-mix(in srgb, var(--accent) 45%, transparent)", background: "#fff", boxShadow: "0 16px 32px rgba(13,19,33,.1)" } : { borderColor: TOKENS.line, background: "#fbfbfc" }}>
                  <div className="grid h-9 w-9 place-items-center rounded-lg border transition-all duration-300 sm:h-10 sm:w-10"
                    style={isActive ? { borderColor: "color-mix(in srgb, var(--accent) 30%, transparent)", background: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)" } : { borderColor: TOKENS.line, background: "#f1f2f5", color: TOKENS.muted }}>
                    {node.icon}
                  </div>
                  <div className="mt-2.5 text-[12px] font-semibold sm:text-[13px]" style={{ color: isActive ? TOKENS.ink : "#5c6673" }}>{node.label}</div>
                  <div className="mt-1 text-[10px] leading-4" style={{ color: TOKENS.muted }}>{node.description}</div>
                  <span className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full" style={isActive ? { background: "var(--accent)" } : { background: "#d3d8de" }} />
                </div>
              </button>
            );
          })}

          <div className="absolute bottom-3 left-3 z-40 rounded-lg border bg-white/90 px-2.5 py-1.5 font-mono text-[6px] tracking-[.1em] backdrop-blur-md sm:bottom-4 sm:left-4 sm:px-3 sm:py-2 sm:text-[7px]" style={{ borderColor: TOKENS.line, color: TOKENS.muted }}>
            <span style={{ color: TOKENS.teal }}>●</span> DATA FLOW / {paused ? "PAUSED" : "LIVE"}
          </div>
          <div className="absolute bottom-3 right-3 z-40 rounded-lg border bg-white/90 px-2.5 py-1.5 font-mono text-[6px] tracking-[.08em] backdrop-blur-md sm:bottom-4 sm:right-4 sm:px-3 sm:py-2 sm:text-[7px]" style={{ borderColor: TOKENS.line, color: TOKENS.muted }}>
            {activeNode.toUpperCase()}
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between font-mono text-[7px] tracking-[.1em]" style={{ color: "#a6acb6" }}>
          <span>HOVER / CLICK NODES TO INSPECT</span>
          <span style={{ color: TOKENS.tealDeep }}>{paused ? "MOTION PAUSED" : "LIVE DATA FLOW"}</span>
        </div>
      </Reveal>
    </section>
  );
}

function NetworkLine({ d, paused, delay, active }) {
  return (
    <>
      <path d={d} fill="none" stroke={active ? "rgba(14,168,154,.45)" : "rgba(203,209,217,.9)"} strokeWidth={active ? "2" : "1"} className="transition-all duration-500" />
      {!paused && <path d={d} fill="none" stroke="#0ea89a" strokeWidth="2" strokeLinecap="round" pathLength="1" strokeDasharray=".02 .98" className="animate-[lmDataFlow_2.8s_linear_infinite]" style={{ animationDelay: delay }} />}
    </>
  );
}

function Particle({ className, delay }) {
  return <span className={`absolute h-1 w-1 rounded-full bg-[#0ea89a] shadow-[0_0_10px_rgba(14,168,154,.6)] animate-[lmParticle_3.5s_ease-in-out_infinite] ${className}`} style={{ animationDelay: delay }} />;
}

/* ============================================================
   06 — AUTOMATION (de-janked: opacity/transform only, no border/shadow transition)
============================================================ */

function AutomationSection({ reg }) {
  const [viewRef, inView] = useInView({ threshold: 0.35 });
  const STEP_MS = 900;
  const TOTAL_MS = STEP_MS * AUTOMATION_STEPS.length;
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const rafRef = useRef(null);
  const startRef = useRef(0);

  const play = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    startRef.current = performance.now();
    setRunning(true);
    setElapsed(0);
    const tick = (now) => {
      const e = now - startRef.current;
      if (e >= TOTAL_MS) { setElapsed(TOTAL_MS); setRunning(false); return; }
      setElapsed(e);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [TOTAL_MS]);

  useEffect(() => {
    if (inView && elapsed === 0 && !running) play();
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  const step = Math.min(AUTOMATION_STEPS.length - 1, Math.floor(elapsed / STEP_MS));
  const complete = elapsed >= TOTAL_MS;
  const progress = Math.min(100, (elapsed / TOTAL_MS) * 100);

  return (
    <section ref={(el) => { reg(el); viewRef.current = el; }} id="automation" className="relative w-full">
      <Reveal>
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 font-mono text-[9px] tracking-[.18em]" style={{ color: TOKENS.tealDeep }}>LIVE AUTOMATION</div>
            <h2 className="max-w-[850px] text-[clamp(1.9rem,4.5vw,3.6rem)] font-medium leading-[.98] tracking-[-.055em]">One enquiry. <span style={{ color: "#9aa2ae" }}>The system takes it from there.</span></h2>
          </div>
          <button type="button" onClick={play} className="flex w-fit shrink-0 items-center gap-2 rounded-full border bg-white px-4 py-2.5 font-mono text-[8px] tracking-[.12em] shadow-sm transition-all duration-300 hover:shadow-md active:scale-95" style={{ borderColor: TOKENS.line, color: TOKENS.muted }}>
            REPLAY<span style={{ color: TOKENS.teal }}>↻</span>
          </button>
        </div>

        <div className="relative overflow-hidden rounded-[20px] border p-4 shadow-[0_1px_2px_rgba(13,19,33,.04),0_16px_40px_rgba(13,19,33,.06)] md:p-6" style={{ borderColor: TOKENS.line, background: TOKENS.surface }}>
          {complete && <ParticleBurst count={16} />}
          <div className="relative mb-5 h-1 w-full overflow-hidden rounded-full" style={{ background: TOKENS.surfaceAlt }}>
            <div className="h-full rounded-full" style={{ width: `${progress}%`, background: TOKENS.teal, transition: "width 120ms linear" }} />
          </div>

          <div className="relative grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            {AUTOMATION_STEPS.map((s, i) => {
              const active = i <= step;
              const current = i === step && !complete;
              return (
                <div key={s.number} className="flex items-start gap-2.5 rounded-[14px] border p-3"
                  style={{ background: current ? "#eefaf8" : active ? "#fbfdfd" : "#f7f8fa", borderColor: current ? TOKENS.teal : active ? "#cdeeea" : TOKENS.line, transform: current ? "translateY(-2px)" : "translateY(0)", boxShadow: current ? "0 8px 20px rgba(14,168,154,.18)" : "none", transition: "background-color .35s ease, border-color .35s ease, transform .35s ease, box-shadow .35s ease" }}>
                  <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full font-mono text-[8px]" style={{ background: active ? TOKENS.teal : "#e4e7ec", color: active ? "#fff" : TOKENS.muted, transition: "background-color .35s ease" }}>
                    {s.number}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] font-medium leading-tight" style={{ color: active ? TOKENS.ink : "#8b93a0" }}>{s.title}</div>
                    <div className="mt-0.5 text-[10.5px] leading-4" style={{ color: TOKENS.muted }}>{s.description}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {complete && (
            <div className="relative mt-4 animate-[lmReveal_.5s_ease-out] rounded-[14px] px-5 py-3.5 text-center" style={{ background: "#eefaf8" }}>
              <div className="text-sm font-medium" style={{ color: TOKENS.tealDeep }}>The journey keeps moving.</div>
              <div className="mt-1 text-xs" style={{ color: TOKENS.muted }}>Less manual work. Faster responses. Better follow-through.</div>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}

/* ============================================================
   07 — IMPACT
============================================================ */

function AnimatedCounter({ value, suffix = "", duration = 1100 }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);
  return <span ref={ref}>{display}{suffix}</span>;
}

function ImpactSection({ reg }) {
  return (
    <section ref={reg} id="impact" className="w-full">
      <Reveal>
        <div className="mb-3 font-mono text-[9px] tracking-[.18em]" style={{ color: TOKENS.tealDeep }}>THE RESULT</div>
        <h2 className="max-w-[700px] text-[clamp(2.2rem,5vw,4.4rem)] font-medium leading-[.95] tracking-[-.06em]">What "connected" actually changes.</h2>
        <p className="mt-3 max-w-[520px] text-xs leading-5 md:text-sm" style={{ color: TOKENS.muted }}>Placeholder figures — swap in your real numbers once the system is live.</p>
      </Reveal>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {IMPACT_STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="h-full rounded-[18px] border bg-white p-4 shadow-[0_1px_2px_rgba(13,19,33,.04),0_10px_24px_rgba(13,19,33,.05)] md:p-5" style={{ borderColor: TOKENS.line }}>
              <div className="text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-none tracking-[-.03em]" style={{ color: TOKENS.teal }}>
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-xs font-medium md:text-sm">{s.label}</div>
              <div className="mt-1 text-[11px] leading-4" style={{ color: TOKENS.muted }}>{s.description}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   08 — CTA
============================================================ */

function CtaSection({ reg, onContact }) {
  return (
    <section ref={reg} id="cta" className="w-full text-center">
      <Reveal>
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm" style={{ borderColor: TOKENS.line }}>
          <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: TOKENS.teal }} />
          <span className="font-mono text-[8px] tracking-[.15em]" style={{ color: TOKENS.muted }}>READY WHEN YOU ARE</span>
        </div>
        <h2 className="mx-auto mt-7 max-w-[640px] text-[clamp(2.4rem,5.5vw,5rem)] font-medium leading-[.94] tracking-[-.06em]">
          Every business we build for<br />gets this <span style={{ color: TOKENS.teal }}>connected system.</span>
        </h2>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href={onContact ? undefined : "#"} onClick={onContact}
            className="group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1"
            style={{ background: TOKENS.teal, boxShadow: "0 12px 30px rgba(14,168,154,.28)" }}>
            Build this for my business
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ============================================================
   09 — BACK HOME (new closing section)
============================================================ */

function HomeSection({ reg, onClose }) {
  return (
    <section ref={reg} id="home" className="w-full pb-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-[24px] border p-8 text-center shadow-[0_1px_2px_rgba(13,19,33,.04),0_20px_50px_rgba(13,19,33,.07)] md:p-14" style={{ borderColor: TOKENS.line, background: `linear-gradient(135deg, #f0fbfa, #ffffff 60%)` }}>
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-[80px]" style={{ background: `${TOKENS.violet}14` }} />
          <div className="mb-3 font-mono text-[9px] tracking-[.18em]" style={{ color: TOKENS.tealDeep }}>END OF WALKTHROUGH</div>
          <h3 className="mx-auto max-w-[520px] text-[clamp(1.6rem,3.5vw,2.6rem)] font-medium leading-[1.05] tracking-[-.03em]">That's the full Livmetro system.</h3>
          <p className="mx-auto mt-3 max-w-[420px] text-sm leading-6" style={{ color: TOKENS.muted }}>Head back to explore more of the portfolio.</p>
          <button type="button" onClick={onClose}
            className="group relative z-10 mt-8 inline-flex items-center gap-2 rounded-full border bg-white px-6 py-3.5 text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            style={{ borderColor: TOKENS.line, color: TOKENS.ink }}>
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Back to home
          </button>
        </div>
      </Reveal>
    </section>
  );
}

/* ============================================================
   ICONS
============================================================ */

function GlobeIcon() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9" /><path d="M12 3c-2.4 2.5-3.6 5.5-3.6 9s1.2 6.5 3.6 9" /></svg>); }
function BuildingIcon() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><path d="M4 21V6l8-3v18" /><path d="M12 9h8v12" /><path d="M7 8h2" /><path d="M7 12h2" /><path d="M7 16h2" /><path d="M15 13h2" /><path d="M15 17h2" /><path d="M9 21v-3h3v3" /></svg>); }
function UserDatabaseIcon() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><circle cx="9" cy="8" r="3" /><path d="M3.5 19c.7-3 2.5-4.5 5.5-4.5s4.8 1.5 5.5 4.5" /><ellipse cx="18" cy="8" rx="3" ry="1.5" /><path d="M15 8v3c0 .8 1.3 1.5 3 1.5s3-.7 3-1.5V8" /><path d="M15 11v3c0 .8 1.3 1.5 3 1.5s3-.7 3-1.5v-3" /></svg>); }
function MessageIcon() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H7l-4 2 1.5-4A7.5 7.5 0 1 1 20 11.5Z" /><path d="M8 11.5h.01" /><path d="M12 11.5h.01" /><path d="M16 11.5h.01" /></svg>); }
function RefreshIcon() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><path d="M20 7v5h-5" /><path d="M4 17v-5h5" /><path d="M6.2 9A7 7 0 0 1 20 12" /><path d="M17.8 15A7 7 0 0 1 4 12" /></svg>); }
function PhoneIcon() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><rect x="7" y="2" width="10" height="20" rx="2.5" /><path d="M11 18h2" /></svg>); }
function ZapIcon() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" strokeLinecap="round" strokeLinejoin="round" /></svg>); }