const STEPS = [
  {
    num: "01",
    title: "Discovery call",
    body: "10 minutes. We look at your current site and reviews together and name the one or two things costing you the most leads.",
    time: "Day 0",
  },
  {
    num: "02",
    title: "Build",
    body: "We build on a proven starter template for your stack — React for booking-driven sites, Shopify for storefronts — so nothing starts from zero.",
    time: "Days 1–5",
  },
  {
    num: "03",
    title: "Review & launch",
    body: "You get a working link to react to, not a mockup. Changes, then it goes live on your domain.",
    time: "Days 6–7",
  },
  {
    num: "04",
    title: "Grow, if you continue",
    body: "Ongoing plans add managed social content, monthly reporting, and — later — an app or paid ads once the base is working.",
    time: "Month 2+",
  },
];

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How a project runs</span>
          <h2>A documented process, so quality doesn&apos;t depend on luck.</h2>
        </div>
        <div className="process-list">
          {STEPS.map((step) => (
            <div className="process-item" key={step.num}>
              <span className="process-num">{step.num}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <span className="process-time">{step.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
