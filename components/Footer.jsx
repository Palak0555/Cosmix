import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <Logo size={16} />
        <div className="foot-links">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <span className="copy">© 2026 Trine Studio</span>
      </div>
    </footer>
  );
}
