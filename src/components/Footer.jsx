import { profile } from "../data";

export default function Footer() {
  return (
    <footer>
      <div className="footer-marquee">DEWAN ARIFUL HUSSAIN <span>✦</span> FULL-STACK DEVELOPER <span>✦</span></div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React + GSAP</span>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
