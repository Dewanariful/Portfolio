import { education } from "../data";

export default function Education() {
  return (
    <section className="section education">
      <div className="section-top">
        <span className="eyebrow">05 / EDUCATION</span>
        <span className="section-number">FOUNDATIONS</span>
      </div>
      <div className="education-layout">
        <h2 className="display reveal">Always <em>learning.</em></h2>
        <div className="education-list">
          {education.map((e) => (
            <div className="edu-row reveal" key={e.year}>
              <span>{e.year}</span>
              <div><h3>{e.title}</h3><strong>{e.place}</strong><p>{e.text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
