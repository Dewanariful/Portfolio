import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Capabilities from "./components/Capabilities";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function App() {
  const [active, setActive] = useState("home");
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const moveCursor = (e) => {
        gsap.to(cursor.current, { x: e.clientX, y: e.clientY, duration: 0.35, ease: "power3.out" });
      };
      window.addEventListener("pointermove", moveCursor);

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 55 }, {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true }
        });
      });

      gsap.utils.toArray(".line-reveal").forEach((el) => {
        gsap.fromTo(el, { clipPath: "inset(0 0 100% 0)" }, {
          clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true }
        });
      });

      gsap.utils.toArray("[data-float]").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 ? -18 : 18, duration: 2.8 + i * .3, repeat: -1, yoyo: true,
          ease: "sine.inOut"
        });
      });

      ["home","about","work","experience","capabilities","contact"].forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        ScrollTrigger.create({
          trigger: el, start: "top 45%", end: "bottom 45%",
          onEnter: () => setActive(id), onEnterBack: () => setActive(id)
        });
      });

      const magnetic = (e) => {
        const target = e.currentTarget;
        const r = target.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * .15;
        const y = (e.clientY - r.top - r.height / 2) * .15;
        gsap.to(target, { x, y, duration: .35, ease: "power3.out" });
      };
      const resetMagnetic = (e) => gsap.to(e.currentTarget, { x: 0, y: 0, duration: .45, ease: "elastic.out(1, .5)" });
      document.querySelectorAll("[data-magnetic]").forEach((el) => {
        el.addEventListener("pointermove", magnetic);
        el.addEventListener("pointerleave", resetMagnetic);
      });

      return () => {
        window.removeEventListener("pointermove", moveCursor);
      };
    });
    return () => ctx.revert();
  }, []);

  const cursorIn = (label) => {
    gsap.to(cursor.current, { scale: 3.8, duration: .25 });
    gsap.to(cursorLabel.current, { opacity: 1, scale: 1, duration: .2 });
    cursorLabel.current.textContent = label;
  };
  const cursorOut = () => {
    gsap.to(cursor.current, { scale: 1, duration: .25 });
    gsap.to(cursorLabel.current, { opacity: 0, scale: .5, duration: .2 });
  };

  return (
    <>
      <div className="cursor" ref={cursor}>
        <span ref={cursorLabel}>VIEW</span>
      </div>
      <Nav active={active} />
      <main>
        <Hero />
        <About />
        <Projects onCursorIn={cursorIn} onCursorOut={cursorOut} />
        <Experience />
        <Capabilities />
        <Skills />
        <Education />
        <Gallery />
        <Contact onCursorIn={cursorIn} onCursorOut={cursorOut} />
      </main>
      <Footer />
    </>
  );
}
