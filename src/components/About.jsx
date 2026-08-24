import { profile, stats, principles } from "../data";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-top">
        <span className="eyebrow">01 / ABOUT</span>
        <span className="section-number">A LITTLE CONTEXT</span>
      </div>
      <div className="about-layout">
        <h2 className="display reveal">A developer who thinks beyond the <em>code.</em></h2>
        <div className="about-body reveal">
          <p className="lead">{profile.tagline}</p>
          <p>I work at the intersection of software, design and real-world operations. My day can move from writing a React component to fixing an infrastructure issue, shaping institutional content or helping a team turn an idea into something people can actually use.</p>
          <p>That mix has taught me to care about the complete experience — not only how a product looks, but how it performs, scales, communicates and survives after launch.</p>
          <a className="text-link" href={`mailto:${profile.email}`}>EMAIL ME <span>↗</span></a>
        </div>
      </div>

      <div className="stats-grid reveal">
        {stats.map((s) => <div className="stat" key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}
      </div>

      <div className="principles reveal">
        <div className="mini-title">HOW I WORK</div>
        <div className="principle-list">
          {principles.map((p, i) => <div key={p}><span>0{i + 1}</span><p>{p}</p></div>)}
        </div>
      </div>
    </section>
  );
}
