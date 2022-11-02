import twitter from "./Twitter Icon.png";
import facebook from "./Facebook Icon.png";
import insta from "./Instagram Icon.png";
import github from "./GitHub Icon.png";

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
