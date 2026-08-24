import { capabilities } from "../data";

export default function Capabilities() {
  return (
    <section id="capabilities" className="section capabilities">
      <div className="section-top">
        <span className="eyebrow">04 / CAPABILITIES</span>
        <span className="section-number">WHAT I BRING</span>
      </div>
      <div className="cap-head">
        <h2 className="display reveal">From idea to <em>interface</em> to production.</h2>
        <p className="reveal">I like owning the whole journey. That means fewer hand-offs, clearer decisions and products that feel coherent from the first click to the backend.</p>
      </div>
      <div className="cap-grid">
        {capabilities.map((c, i) => (
          <article className="cap-card reveal" key={c.title}>
            <span className="cap-no">0{i + 1}</span>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <div className="cap-items">{c.items.map((x) => <span key={x}>{x}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
