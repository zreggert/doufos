import { Link } from "react-router-dom";
// Importing a CSS file
import "../css/insight.css";

export default function Navbot() {
  return (
    <section className="insight-section" id="insight">
      <div className="exit">
        <Link className="exit-link" to="/">
          &#10006;
        </Link>
      </div>
      <div className="insight-text">
        <h3>I.N.F.O</h3>
        <p>
          In 1947, the United States had its first verified crash landing of a
          non terrestrial vehicle that was later covered up by our federal
          government as a weather balloon gone astray. Ever since, the mystery
          surrounding our otherworldly visitors in the skies has grown ever more
          complex. With tens of thousands of sightings each year of unexplained
          phenomena, D.O.U.F.O.S made it their life’s mission to log sightings
          of our distant neighbors. All of these sightings connect hundreds of
          cultures, leaving the heaviest of burning questions - Who are they?
          And what do they want?
        </p>
      </div>
      <div className="insight-image">
        <img src="images/insight/insight-image.jpg" alt="aliens" />
      </div>
    </section>
  );
}
