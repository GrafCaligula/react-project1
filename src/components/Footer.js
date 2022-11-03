import twitter from "./images/Twitter Icon.png";
import facebook from "./images/Facebook Icon.png";
import insta from "./images/Instagram Icon.png";
import github from "./images/GitHub Icon.png";
import "./css/Footer.css";

export default function Footer() {
  return (
    <div className="footer-section">
      <ul>
        <li><img src={twitter} alt="twitter"/></li>
        <li><img src={facebook} alt="FB"/></li>
        <li><img src={insta} alt="Insta"/></li>
        <li><img src={github} alt="GitHub"/></li>
      </ul>
    </div>
  )
}
