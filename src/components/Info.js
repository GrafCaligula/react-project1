import logo from "./portrait.png";

export default function Info() {
  return (
    <div className="info-section">
      <img className="info-img" src={logo} alt="Logo" />;
      <h1 className="info-name">Marko Klöder</h1>
      <p className="info-job">Umschüler Anwendungsentwicklung</p>
      <p className="info-link"><small>websiteLink</small></p>
      <div className="info-btn-wrapper">
        <button className="info-btn1">Email</button>
        <button className="info-btn2">Linkedin</button>
      </div>
    </div>
  );
}
