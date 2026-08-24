import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { profile } from "../data";

export default function Hero() {
  const title = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: .15 });
      tl.from(".hero-kicker", { opacity: 0, y: 20, duration: .7 })
        .from(".hero-title .word", { opacity: 0, yPercent: 110, stagger: .09, duration: 1.05, ease: "power4.out" }, "-=.35")
        .from(".hero-copy", { opacity: 0, y: 25, duration: .8 }, "-=.55")
        .from(".hero-actions", { opacity: 0, y: 25, duration: .7 }, "-=.5")
        .from(".hero-orb", { opacity: 0, scale: .7, rotate: -20, duration: 1.2, ease: "power3.out" }, "-=.8");
    }, title);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero" ref={title}>
      <div className="hero-grid-bg" />
      <div className="hero-inner">
        <div className="hero-kicker"><span className="pulse" /> {profile.availability}</div>
        <h1 className="hero-title">
          <span className="word">Building</span>
          <span className="word accent">digital</span>
          <span className="word">things</span>
          <span className="word">with</span>
          <span className="word">purpose.</span>
        </h1>
        <p className="hero-copy">{profile.subhead}</p>
        <div className="hero-actions">
          <a href="#work" className="pill pill-solid" data-magnetic>EXPLORE MY WORK <span>↘</span></a>
          <a href="#contact" className="pill pill-line" data-magnetic>START A CONVERSATION <span>↗</span></a>
        </div>
      </div>

      <div className="hero-orb" data-float>
        <div className="orb-ring ring-a" />
        <div className="orb-ring ring-b" />
        <div className="orb-core">DA</div>
        <span className="orb-label">FULL-STACK<br/>DEVELOPER</span>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line" />
        <span>26°N · 91°E</span>
      </div>
    </section>
  );
}
