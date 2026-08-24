import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-top">
        <span className="eyebrow">03 / EXPERIENCE</span>
        <span className="section-number">THE JOURNEY</span>
      </div>
      <div className="experience-head">
        <h2 className="display reveal">Different roles.<br/><em>One direction.</em></h2>
        <p className="reveal">My background is intentionally multidisciplinary. Software engineering taught me to build; operations taught me to own the outcome.</p>
      </div>
      <div className="timeline">
        {experience.map((job, i) => (
          <article className="experience-item reveal" key={`${job.org}-${job.period}`}>
            <span className="exp-index">0{i + 1}</span>
            <div className="exp-period">{job.period}</div>
            <div className="exp-main">
              <span className="exp-org">{job.org}</span>
              <h3>{job.role}</h3>
              <p>{job.text}</p>
              <div className="tags">{job.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
