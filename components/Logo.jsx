export default function Logo({ size = 19 }) {
  return (
    <a href="#" className="logo" style={{ fontSize: size }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L21 20 L3 20 Z" stroke="url(#trineGrad)" strokeWidth="2" strokeLinejoin="round" />
        <defs>
          <linearGradient id="trineGrad" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0" stopColor="#3f3df2" />
            <stop offset="1" stopColor="#00c2b2" />
          </linearGradient>
        </defs>
      </svg>
      Trine
    </a>
  );
}
