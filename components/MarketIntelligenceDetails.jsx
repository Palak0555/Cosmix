"use client";

import { useEffect } from "react";

const C = {
  bg: "#f6f7f9",
  white: "#fff",
  line: "#e5e8ed",
  ink: "#0d1321",
  muted: "#667180",
  teal: "#0ea89a",
  tealDark: "#087c72",
  violet: "#6f5ff0",
  green: "#10b981",
  red: "#ef476f",
};

export default function MarketIntelligenceDetails({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const jump = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0d1321]/35 p-2 backdrop-blur-md md:p-4" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto h-full w-full max-w-[1080px] overflow-hidden rounded-[20px] border bg-[#f6f7f9] shadow-[0_24px_80px_rgba(13,19,33,.20)]"
        style={{ borderColor: "rgba(13,19,33,.07)" }}
      >
        <div className="absolute left-0 right-0 top-0 z-30 h-[2px] bg-[#0ea89a]" />

        <header className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-5 py-4 md:px-7">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0ea89a] shadow-[0_0_10px_rgba(14,168,154,.7)]" />
            <span className="font-mono text-[8px] tracking-[.16em] text-[#667180]">
              COSMIX / MARKET INTELLIGENCE
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid h-8 w-8 place-items-center rounded-full border bg-white text-lg text-[#667180] transition hover:rotate-90"
            style={{ borderColor: C.line }}
          >
            ×
          </button>
        </header>

        <div className="mi-scroll h-full overflow-y-auto px-5 pb-8 pt-16 md:px-7">
          <div className="mx-auto max-w-[920px]">
            <Hero jump={jump} />
            <Engine />
            <Signal />
            <Finish onClose={onClose} />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .mi-scroll { scrollbar-width: none; -ms-overflow-style: none; overscroll-behavior: contain; -webkit-overflow-scrolling: touch; }
        .mi-scroll::-webkit-scrollbar { display: none; }
        .mi-rise { animation: miRise .55s cubic-bezier(.22,1,.36,1) both; }
        .mi-rise-2 { animation-delay: 90ms; }
        .mi-rise-3 { animation-delay: 160ms; }
        @keyframes miRise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes miDraw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
        @media (prefers-reduced-motion: reduce) { .mi-rise { animation: none !important; } }
      `}</style>
    </div>
  );
}

function Hero({ jump }) {
  return (
    <section className="pt-3">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-12">
        <div className="mi-rise">
          <div className="mb-3 font-mono text-[8px] tracking-[.18em] text-[#6f5ff0]">THE PROBLEM</div>
          <h1 className="max-w-[500px] text-[clamp(2.4rem,5vw,4.6rem)] font-medium leading-[.92] tracking-[-.06em] text-[#0d1321]">
            Understand your portfolio.
            <span className="block text-[#0ea89a]">Before the market does.</span>
          </h1>
          <p className="mt-5 max-w-[430px] text-[13px] leading-5 text-[#667180]">
            We built an intelligent system that analyses your portfolio, reads relevant market news, and turns the combined signals into predictive intelligence.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <button onClick={() => jump("engine")} className="rounded-[5px] bg-[#6f5ff0] px-4 py-2.5 text-[11px] font-semibold text-white transition hover:-translate-y-0.5">Explore the engine →</button>
            <button onClick={() => jump("signal")} className="rounded-[5px] border bg-white px-4 py-2.5 text-[11px] font-semibold text-[#6f5ff0]" style={{ borderColor: "#c7c1ff" }}>See the signal</button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {['PORTFOLIO','NEWS','ML SIGNAL'].map((t) => <span key={t} className="rounded-full border bg-white px-2.5 py-1 font-mono text-[7px] tracking-[.1em] text-[#667180]" style={{ borderColor: C.line }}>{t}</span>)}
          </div>
        </div>

        <div className="mi-rise mi-rise-2"><PortfolioDashboard /></div>
      </div>

      <div className="mt-7 grid grid-cols-1 gap-6 border-t pt-6 sm:grid-cols-3" style={{ borderColor: C.line }}>
        <Feature title="Portfolio intelligence" text="See what is moving your portfolio." />
        <Feature title="News sentiment" text="Surface the market context behind the move." />
        <Feature title="ML prediction" text="Generate an intelligent forward-looking signal." />
      </div>
    </section>
  );
}

function PortfolioDashboard() {
  return (
    <div className="rounded-[12px] bg-[#efeffa] p-2.5 md:p-3">
      <div className="overflow-hidden rounded-[10px] border bg-white shadow-[0_10px_30px_rgba(13,19,33,.07)]" style={{ borderColor: C.line }}>
        <div className="flex items-center justify-between border-b px-4 py-3" style={{ borderColor: C.line }}>
          <div>
            <div className="text-[10px] font-semibold text-[#0d1321]">Portfolio Intelligence</div>
            <div className="mt-0.5 font-mono text-[7px] text-[#89919c]">LIVE ANALYSIS</div>
          </div>
          <span className="rounded-full bg-[#eefaf8] px-2 py-1 font-mono text-[7px] text-[#087c72]">ACTIVE</span>
        </div>
        <div className="grid grid-cols-3 border-b" style={{ borderColor: C.line }}>
          <Stat label="PORTFOLIO" value="$128.4K" />
          <Stat label="SENTIMENT" value="68" green />
          <Stat label="SIGNAL" value="BULLISH" green />
        </div>
        <div className="p-4">
          <div className="flex justify-between font-mono text-[7px] tracking-[.1em] text-[#667180]">
            <span>PORTFOLIO TREND</span>
            <span className="font-semibold text-[#10b981]">+4.82%</span>
          </div>
          <div className="mt-3 h-[165px]"><PortfolioChart /></div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Mini title="NEWS SENTIMENT" value="Positive" green />
            <Mini title="MODEL CONFIDENCE" value="72%" violet />
          </div>
        </div>
      </div>
    </div>
  );
}

function Engine() {
  return (
    <section id="engine" className="mt-20 md:mt-24">
      <div className="mb-6">
        <div className="font-mono text-[8px] tracking-[.18em] text-[#087c72]">THE ENGINE</div>
        <h2 className="mt-2 max-w-[680px] text-[clamp(2rem,4vw,3.7rem)] font-medium leading-[.95] tracking-[-.06em] text-[#0d1321]">
          Algorithm meets <span className="text-[#0ea89a]">topology.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <AlgorithmCard />
        <TopologyCard />
      </div>
    </section>
  );
}

function AlgorithmCard() {
  return (
    <div className="rounded-[14px] border bg-white p-5 shadow-[0_8px_26px_rgba(13,19,33,.05)]" style={{ borderColor: C.line }}>
      <div className="flex justify-between">
        <div>
          <div className="font-mono text-[7px] tracking-[.16em] text-[#087c72]">01 / ALGORITHM</div>
          <h3 className="mt-2 text-[19px] font-medium">Signal engine</h3>
        </div>
        <span className="rounded-full bg-[#eefaf8] px-2 py-1 font-mono text-[7px] text-[#087c72]">ML</span>
      </div>
      <p className="mt-3 text-[11px] leading-5 text-[#667180]">Portfolio behaviour, price history and news sentiment combine into a model-generated signal.</p>
      <div className="mt-5 rounded-[10px] bg-[#fafbfc] p-4">
        <div className="grid grid-cols-4 gap-2">
          {['PRICE','NEWS','SENTIMENT','MODEL'].map((x, i) => (
            <div key={x} className="rounded-lg border bg-white px-1.5 py-2 text-center" style={{ borderColor: i === 3 ? '#bce9e3' : C.line }}>
              <span className="mx-auto block h-2 w-2 rounded-full" style={{ background: i === 3 ? C.teal : '#cbd1d8' }} />
              <span className="mt-1 block text-[6px] font-semibold text-[#667180]">{x}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 h-1 rounded-full bg-[#e7eaee]"><div className="h-full w-[82%] rounded-full bg-[#0ea89a]" /></div>
      </div>
    </div>
  );
}

function TopologyCard() {
  return (
    <div className="rounded-[14px] border bg-white p-5 shadow-[0_8px_26px_rgba(13,19,33,.05)]" style={{ borderColor: C.line }}>
      <div className="flex justify-between">
        <div>
          <div className="font-mono text-[7px] tracking-[.16em] text-[#087c72]">02 / TOPOLOGY</div>
          <h3 className="mt-2 text-[19px] font-medium">Market relationships</h3>
        </div>
        <span className="rounded-full bg-[#f3f1ff] px-2 py-1 font-mono text-[7px] text-[#6f5ff0]">NETWORK</span>
      </div>
      <p className="mt-3 text-[11px] leading-5 text-[#667180]">The system maps relationships between assets, sentiment, news and market movement.</p>
      <TopologyGraphic />
    </div>
  );
}

function TopologyGraphic() {
  return (
    <div className="mt-4 h-[165px] rounded-[10px] bg-[#fafbfc]">
      <svg viewBox="0 0 300 165" className="h-full w-full">
        <g stroke="#dfe4e9" strokeWidth="1">
          <line x1="150" y1="42" x2="75" y2="90" /><line x1="150" y1="42" x2="225" y2="90" />
          <line x1="75" y1="90" x2="120" y2="132" /><line x1="225" y1="90" x2="180" y2="132" />
          <line x1="75" y1="90" x2="180" y2="132" />
        </g>
        {[[150,42,C.teal,11],[75,90,C.violet,8],[225,90,C.green,8],[120,132,'#aab2bc',7],[180,132,'#aab2bc',7]].map(([x,y,c,r],i)=><g key={i}><circle cx={x} cy={y} r={r} fill="#fff" stroke={c} strokeWidth="2"/><circle cx={x} cy={y} r="3" fill={c}/></g>)}
        <text x="150" y="18" textAnchor="middle" fontSize="7" fontFamily="monospace" fill={C.muted}>MARKET</text>
      </svg>
    </div>
  );
}

function Signal() {
  return (
    <section id="signal" className="mt-20 md:mt-24">
      <div className="mb-6">
        <div className="font-mono text-[8px] tracking-[.18em] text-[#087c72]">THE SIGNAL</div>
        <h2 className="mt-2 max-w-[680px] text-[clamp(2rem,4vw,3.7rem)] font-medium leading-[.95] tracking-[-.06em] text-[#0d1321]">
          Three inputs. <span className="text-[#9aa2ae]">One prediction.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <SignalCard n="01" title="Portfolio" text="Analyse the assets and exposure already in your portfolio." color={C.violet} />
        <SignalCard n="02" title="News" text="Read relevant financial news and market sentiment." color={C.teal} />
        <SignalCard n="03" title="Prediction" text="Combine both layers into a model-generated signal." color={C.green} />
      </div>
    </section>
  );
}

function SignalCard({ n, title, text, color }) {
  return (
    <div className="rounded-[14px] border bg-white p-4" style={{ borderColor: C.line }}>
      <div className="grid h-7 w-7 place-items-center rounded-full text-[8px] font-bold" style={{ color, background: `${color}12` }}>{n}</div>
      <h3 className="mt-5 text-[15px] font-semibold">{title}</h3>
      <p className="mt-1.5 text-[11px] leading-5 text-[#667180]">{text}</p>
    </div>
  );
}

function Finish({ onClose }) {
  return (
    <section className="mt-20 pb-6 md:mt-24">
      <div className="rounded-[18px] border bg-gradient-to-br from-[#eefaf8] to-white p-7 text-center md:p-10" style={{ borderColor: C.line }}>
        <div className="font-mono text-[8px] tracking-[.18em] text-[#087c72]">COSMIX / MARKET INTELLIGENCE</div>
        <h2 className="mx-auto mt-3 max-w-[600px] text-[clamp(1.7rem,3.5vw,2.7rem)] font-medium leading-[1] tracking-[-.045em] text-[#0d1321]">
          Intelligent systems for the <span className="text-[#0ea89a]">stock market.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-[480px] text-sm leading-6 text-[#667180]">Portfolio data, market news, and machine learning — engineered into one intelligent view.</p>
        <button onClick={onClose} className="mt-6 rounded-full border bg-white px-5 py-2.5 text-[11px] font-semibold shadow-sm" style={{ borderColor: C.line }}>← Back to projects</button>
      </div>
    </section>
  );
}

function Feature({ title, text }) {
  return <div><div className="h-1.5 w-5 bg-[#0ea89a]" /><h3 className="mt-3 text-[13px] font-semibold">{title}</h3><p className="mt-1 max-w-[230px] text-[12px] leading-5 text-[#667180]">{text}</p></div>;
}

function Stat({ label, value, green }) {
  return <div className="bg-white px-3 py-2.5"><div className="font-mono text-[6px] tracking-[.08em] text-[#89919c]">{label}</div><div className="mt-1 text-[11px] font-semibold" style={{ color: green ? C.green : C.ink }}>{value}</div></div>;
}

function Mini({ title, value, green, violet }) {
  return <div className="rounded-lg border p-2.5" style={{ borderColor: C.line }}><div className="font-mono text-[6px] tracking-[.08em] text-[#89919c]">{title}</div><div className="mt-1.5 text-[10px] font-semibold" style={{ color: green ? C.green : violet ? C.violet : C.ink }}>{value}</div></div>;
}

function PortfolioChart() {
  return <svg viewBox="0 0 600 200" className="h-full w-full" preserveAspectRatio="none"><line x1="0" x2="600" y1="70" y2="70" stroke="#f0f2f5"/><line x1="0" x2="600" y1="135" y2="135" stroke="#f0f2f5"/><polyline points="5,150 60,142 95,148 140,125 180,132 220,108 260,116 305,98 345,112 385,83 425,94 470,68 510,78 550,48 590,32" fill="none" stroke={C.teal} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" style={{ animation: "miDraw 1.8s cubic-bezier(.22,1,.36,1)" }}/><circle cx="590" cy="32" r="4" fill={C.teal}/></svg>;
}

function ProblemIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/></svg>;
}