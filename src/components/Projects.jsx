// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { projects } from "../data";

// export default function Projects({ onCursorIn, onCursorOut }) {
//   const track = useRef(null);

//   useEffect(() => {
//     const el = track.current;
//     if (!el) return;
//     const cards = gsap.utils.toArray(".project-card", el);
//     const tween = gsap.to(el, {
//       x: () => -(el.scrollWidth - window.innerWidth + 80),
//       ease: "none",
//       scrollTrigger: {
//         trigger: "#work",
//         pin: true,
//         scrub: 1,
//         start: "top top",
//         end: () => `+=${el.scrollWidth - window.innerWidth + 160}`,
//         invalidateOnRefresh: true,
//       }
//     });
//     cards.forEach((card) => {
//       gsap.from(card.querySelector(".project-no"), {
//         opacity: 0, y: 20, duration: .7,
//         scrollTrigger: { trigger: card, containerAnimation: tween, start: "left 80%", once: true }
//       });
//     });
//     return () => tween.scrollTrigger?.kill();
//   }, []);

//   return (
//     <section id="work" className="work-section">
//       <div className="work-heading">
//         <span className="eyebrow">02 / SELECTED WORK</span>
//         <h2 className="display">Things I’ve <em>shipped.</em></h2>
//         <p>Real projects, real constraints, real outcomes. A selection of work across institutional web, full-stack systems and hardware.</p>
//       </div>
//       <div className="project-track" ref={track}>
//         {projects.map((p) => (
//           <article className="project-card" key={p.number}
//             onMouseEnter={() => onCursorIn("OPEN")}
//             onMouseLeave={onCursorOut}>
//             <div className="project-card-top">
//               <span className="project-no">{p.number}</span>
//               <span>{p.type}</span>
//             </div>
//             <div className="project-content">
//               <div>
//                 <h3>{p.title}</h3>
//                 <p>{p.desc}</p>
//                 <div className="tags">{p.stack.map((x) => <span key={x}>{x}</span>)}</div>
//               </div>
//               <div className="project-bottom">
//                 <span>{p.impact}</span>
//                 <a href={p.url} target={p.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer">VIEW PROJECT ↗</a>
//               </div>
//             </div>
//           </article>
//         ))}
//         <div className="project-end">
//           <span>MORE IS<br/><em>COMING.</em></span>
//           <a href="#contact">HAVE A PROJECT? ↗</a>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data";

export default function Projects({ onCursorIn, onCursorOut }) {
  const viewport = useRef(null);
  const track = useRef(null);

  useEffect(() => {
    const viewportEl = viewport.current;
    const trackEl = track.current;

    if (!viewportEl || !trackEl) return;

    const tween = gsap.to(trackEl, {
      x: () => -(trackEl.scrollWidth - viewportEl.clientWidth + 80),
      ease: "none",

      scrollTrigger: {
        trigger: viewportEl,

        // ONLY THE CARDS ARE PINNED
        pin: true,

        scrub: 1,

        start: "top top",

        end: () =>
          `+=${Math.max(
            500,
            trackEl.scrollWidth - viewportEl.clientWidth + 160
          )}`,

        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section id="work" className="work-section">

      {/* HEADING - THIS SCROLLS AWAY NORMALLY */}
      <div className="work-heading">
        <span className="eyebrow">
          02 / SELECTED WORK
        </span>

        <h2 className="display reveal">
          Things I’ve <em>shipped.</em>
        </h2>

        <p className="reveal">
          Real projects, real constraints, real outcomes.
          A selection of work across institutional web,
          full-stack systems and hardware.
        </p>
      </div>


      {/* ONLY THIS PART WILL PIN */}
      <div
        className="project-viewport"
        ref={viewport}
      >
        <div
          className="project-track"
          ref={track}
        >

          {projects.map((p) => (
            <article
              className="project-card"
              key={p.number}
              onMouseEnter={() => onCursorIn("OPEN")}
              onMouseLeave={onCursorOut}
            >

              <div className="project-card-top">

                <span className="project-no">
                  {p.number}
                </span>

                <span>
                  {p.type}
                </span>

              </div>


              <div className="project-content">

                <div>

                  <h3>
                    {p.title}
                  </h3>

                  <p>
                    {p.desc}
                  </p>

                  <div className="tags">

                    {p.stack.map((x) => (
                      <span key={x}>
                        {x}
                      </span>
                    ))}

                  </div>

                </div>


                <div className="project-bottom">

                  <span>
                    {p.impact}
                  </span>

                  <a
                    href={p.url}
                    target={
                      p.url.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel="noreferrer"
                  >
                    VIEW PROJECT ↗
                  </a>

                </div>

              </div>

            </article>
          ))}


          {/* LAST CARD */}

          <div className="project-end">

            <span>
              MORE IS
              <br />
              <em>COMING.</em>
            </span>

            <a href="#contact">
              HAVE A PROJECT? ↗
            </a>

          </div>

        </div>
      </div>

    </section>
  );
}