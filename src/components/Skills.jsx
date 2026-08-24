import { skills } from "../data";

export default function Skills() {
  return (
    <section className="skills-band">
      <div className="marquee marquee-one">{skills.concat(skills).map((s, i) => <span key={i}>{s} <b>✦</b></span>)}</div>
      <div className="marquee marquee-two">{[...skills].reverse().concat([...skills].reverse()).map((s, i) => <span key={i}>{s} <b>✦</b></span>)}</div>
    </section>
  );
}
