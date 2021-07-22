// Importing a CSS file
import "../css/bot-nav.css";

export default function Navbot() {
  return (
    <nav className="botNav">
      <div className="bottomNav" id="bottomNav">
        <p>
          <b>SITE MAP</b>
        </p>
        <a href="#test">Home</a>
        <a href="#test">Info</a>
        <a href="#test">Sightings</a>
      </div>
      <div className="social">
        <p>
          <b>SOCIAL</b>
        </p>
        <p className="following">They're already following you!</p>
      </div>
    </nav>
  );
}
