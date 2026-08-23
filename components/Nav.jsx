import Logo from "./Logo";

export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <Logo />
        <div className="navlinks">
          <a href="#compare">See the difference</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="btn btn-primary">Book a call</a>
      </div>
    </nav>
  );
}
