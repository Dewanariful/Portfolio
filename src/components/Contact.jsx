import { useState } from "react";
import { profile } from "../data";

export default function Contact({ onCursorIn, onCursorOut }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" />
      <div className="section contact-inner">
        <div className="section-top">
          <span className="eyebrow">06 / CONTACT</span>
          <span className="section-number">LET'S MAKE SOMETHING</span>
        </div>
        <div className="contact-head">
          <h2 className="display reveal">Have an idea?<br/><em>Let’s build it.</em></h2>
          <p className="reveal">Tell me what you’re working on, what’s not working, or simply what you want to explore. I’ll get back to you.</p>
        </div>
        <div className="contact-layout">
          <div className="contact-side reveal">
            <span className="mini-title">DIRECT</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={"https://github.com/Dewanariful"} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={"https://www.sitmguwahati.ac.in/"} target="_blank" rel="noreferrer">Current web work ↗</a>
          </div>
          {/* <form className="contact-form reveal" onSubmit={submit}>
            <label>YOUR NAME<input required value={form.name} onChange={(e) => setForm({...form,name:e.target.value})} placeholder="Dewan..." /></label>
            <label>EMAIL<input required type="email" value={form.email} onChange={(e) => setForm({...form,email:e.target.value})} placeholder="you@company.com" /></label>
            <label>MESSAGE<textarea required value={form.message} onChange={(e) => setForm({...form,message:e.target.value})} placeholder="Tell me about the project..." /></label>
            <button type="submit" className="submit-button" data-magnetic onMouseEnter={() => onCursorIn("SEND")} onMouseLeave={onCursorOut}>
              {status === "sending" ? "SENDING..." : status === "sent" ? "MESSAGE SENT ✓" : "SEND MESSAGE ↗"}
            </button>
            {status === "error" && <span className="form-error">Couldn’t send the message. Please email me directly.</span>}
          </form> */}
        </div>
      </div>
    </section>
  );
}
