import { education, volunteer, hobbies } from "../data";

export default function EducationVolunteer() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="split">
          <div>
            <div className="section-head reveal">
              <div className="eyebrow">education — release notes</div>
              <h2>Learning, versioned.</h2>
            </div>
            <div className="reveal">
              {education.map((e) => (
                <div className="tag-item" key={e.ver}>
                  <div className="top">
                    <h4>{e.degree}</h4>
                    <span className="ver">{e.ver}</span>
                  </div>
                  <span className="yr">{e.year}</span>
                  <p>{e.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="section-head reveal">
              <div className="eyebrow">beyond the desk</div>
              <h2>Volunteering &amp; hobbies.</h2>
            </div>
            <div className="reveal">
              {volunteer.map((v) => (
                <div className="vol-item" key={v.title}>
                  <span className="vol-mark">▸</span>
                  <div>
                    <h4>{v.title}</h4>
                    <p>{v.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hobby-row reveal">
              {hobbies.map((h) => (
                <span className="hobby" key={h}>
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
