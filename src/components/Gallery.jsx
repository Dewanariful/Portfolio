import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const photos = [
  {
    src: "/images/me-1.jpg",
    title: "The Developer",
    category: "WORK",
    large: true,
  },
  {
    src: "/images/me-2.jpg",
    title: "Building Things",
    category: "CREATIVE",
  },
  {
    src: "/images/me-3.jpg",
    title: "Campus Life",
    category: "LIFE",
  },
  {
    src: "/images/me-4.jpg",
    title: "Behind The Screen",
    category: "WORK",
  },
  {
    src: "/images/me-5.jpg",
    title: "Beyond Code",
    category: "LIFE",
  },
];

export default function Gallery() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        y: 80,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 80%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const openImage = (src) => {
    const overlay = document.createElement("div");

    overlay.className = "gallery-lightbox";

    overlay.innerHTML = `
      <button class="gallery-close">CLOSE ×</button>
      <img src="${src}" alt="Dewan Ariful Hussain" />
    `;

    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.classList.add("show");
    });

    overlay.addEventListener("click", (e) => {
      if (
        e.target === overlay ||
        e.target.classList.contains("gallery-close")
      ) {
        overlay.classList.remove("show");

        setTimeout(() => {
          overlay.remove();
        }, 300);
      }
    });
  };

  return (
    <section id="gallery" className="gallery-section">

      <div className="section">

        <div className="section-top">
          <span className="eyebrow">
            03 / GALLERY
          </span>

          <span className="section-number">
            BEHIND THE WORK
          </span>
        </div>


        <div className="gallery-heading">

          <h2 className="display reveal">
            A little bit of
            <br />
            <em>life.</em>
          </h2>

          <p className="reveal">
            Not everything happens behind a screen.
            A few moments from the person behind the
            code, projects and ideas.
          </p>

        </div>


        <div className="gallery-grid">

          {photos.map((photo, index) => (

            <article
              key={photo.src}
              className={`gallery-item ${
                photo.large ? "gallery-large" : ""
              }`}
              onClick={() => openImage(photo.src)}
            >

              <div className="gallery-image">

                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                />

                <div className="gallery-overlay">

                  <span>
                    {photo.category}
                  </span>

                  <strong>
                    {photo.title}
                  </strong>

                  <i>
                    ↗
                  </i>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}