// Importing a CSS file
import "../css/bot-nav.css";

export default function Navbot() {
  return (
    <nav class="botNav">
      <div class="bottomNav" id="bottomNav">
        <p>
          <b>SITE MAP</b>
        </p>
        <a href="#test">Home</a>
        <a href="#test">Info</a>
        <a href="#test">Map</a>
      </div>
      <div class="social">
        <p>
          <b>SOCIAL</b>
        </p>
        <p class="following">They're already following you!</p>
      </div>
    </nav>
  );
}
