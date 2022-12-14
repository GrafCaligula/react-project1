import logo from "./images/portrait.png";
import mail from "./images/Mail.png";
import linkedin from "./images/linkedin.png";
import "./css/Info.css"

export default function Info() {
  return (
    <div className="info-section">
      <img className="info-img" src={logo} alt="Logo" />
      <h1 className="info-name">Marko Klöder</h1>
      <p className="info-job">Umschüler Anwendungsentwicklung</p>
      <p className="info-link">
        <small>websiteLink</small>
      </p>
      <div className="info-btn-wrapper">
        <button className="info-btn1">
          <img src={mail} alt="mail" />
          Email
        </button>
        <button className="info-btn2">
        <img src={linkedin} alt="linkedin"/>Linkedin</button>
      </div>
    </div>
  );
}
