import { gsap } from "gsap";

const items = [
  ["about", "About"], ["work", "Work"], ["experience", "Experience"],
  ["capabilities", "Capabilities"], ["gallery", "Gallery"], ["contact", "Contact"]
];

export default function Nav({ active }) {
  const go = (id) => gsap.to(window, {
    duration: 1.1, ease: "power4.inOut", scrollTo: { y: `#${id}`, offsetY: 76 }
  });

  return (
    <header className="site-nav">
      <button className="logo" onClick={() => go("home")} data-magnetic>
        <span className="logo-mark">DA</span><span>DEWAN<span className="muted">.</span></span>
      </button>
      <div className="nav-links">
        {items.map(([id, label]) => (
          <button key={id} className={active === id ? "active" : ""} onClick={() => go(id)}>
            <span>{label}</span><i />
          </button>
        ))}
      </div>
      <a
            href="/Dewan-Ariful-Hussain-CV.pdf"
            download="Dewan-Ariful-Hussain-CV.pdf"
            className="nav-cta"
            data-magnetic
          >
            DOWNLOAD CV <span>↓</span>
      </a>
    </header>
  );
}
