const PACKAGES = [
  {
    name: "Launch",
    bestFor: "New or under-served businesses",
    price: "$600 – $1,500 one-time",
    items: [
      "Mobile-first website (React or Shopify)",
      "Booking / contact form built in",
      "Basic SEO setup",
      "Delivered in 5–7 days",
    ],
    cta: "Start with Launch",
    featured: false,
  },
  {
    name: "Grow",
    bestFor: "Ready for consistent leads",
    price: "$900 – $1,800 / month",
    items: [
      "Everything in Launch",
      "Monthly social media management",
      "Monthly performance report",
      "One accountable team, ongoing",
    ],
    cta: "Talk about Grow",
    featured: true,
  },
  {
    name: "Scale",
    bestFor: "Established teams scaling up",
    price: "$2,000 – $4,000+ / month",
    items: [
      "Everything in Grow",
      "Android app — bookings, loyalty, updates",
      "Paid ads management",
      "Quarterly strategy review",
    ],
    cta: "Discuss Scale",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="services" className="on-surface">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Packages</span>
          <h2>Three tiers. Each one is more growth engine, not just more features.</h2>
          <p>
            Most clients start with Launch or Grow. Scale is for teams ready to invest in a full
            engine, once trust and results exist.
          </p>
        </div>
        <div className="pkg-grid">
          {PACKAGES.map((pkg) => (
            <div className={`pkg${pkg.featured ? " featured" : ""}`} key={pkg.name}>
              {pkg.featured && <span className="tagline">MOST COMMON FIRST STEP</span>}
              <span className="best-for">{pkg.bestFor}</span>
              <h3>{pkg.name}</h3>
              <div className="price">{pkg.price}</div>
              <ul>
                {pkg.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn ${pkg.featured ? "btn-light" : "btn-ghost"}`}
                style={{ width: "100%" }}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
