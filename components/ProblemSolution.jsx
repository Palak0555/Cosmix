const COLUMNS = [
  {
    tag: "The problem",
    title: "What's visibly broken",
    items: [
      "Outdated or non-mobile site costing credibility",
      "No online booking — people just don't call",
      "Inconsistent social presence, wasted referrals",
      "No tracking of where leads actually come from",
    ],
  },
  {
    tag: "The need",
    title: "What you actually want",
    items: [
      'More qualified leads, not just "a nicer site"',
      "Less admin work chasing messages",
      "A presence that matches your in-person service",
      "One partner, not three disconnected vendors",
    ],
  },
  {
    tag: "The fix",
    title: "What Trine builds",
    items: [
      "Fast, mobile-first site — React or Shopify",
      "Built-in booking, click-to-call, SMS/WhatsApp",
      "A managed content calendar, run for you",
      "Optional app for loyalty, bookings, updates",
    ],
  },
];

export default function ProblemSolution() {
  return (
    <section id="problem">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Where clients lose customers</span>
          <h2>It&apos;s rarely the business. It&apos;s usually the front door.</h2>
          <p>
            Every engagement starts by naming the specific, visible thing that&apos;s costing you
            leads — not a generic &quot;your site needs a refresh.&quot;
          </p>
        </div>
        <div className="pns-grid">
          {COLUMNS.map((col) => (
            <div className="pns-card" key={col.tag}>
              <span className="tag">{col.tag}</span>
              <h3>{col.title}</h3>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
