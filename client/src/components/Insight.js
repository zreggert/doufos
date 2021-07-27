import { Link } from "react-router-dom";
import React, { useState } from "react";
// Importing a CSS file
import "../css/insight.css";

export default function Navbot() {
  const insightImagesobj = {
    alien1: "images/insight/alien1.png",
    alien2: "images/insight/alien2.png",
  };
  
  const [insightImages, setinsightImages] = useState(insightImagesobj.alien1);

  const handleMouseOverAliens = () => {
    setinsightImages(insightImagesobj.alien2);
  };

  const handleMouseOutAliens = () => {
    setinsightImages(insightImagesobj.alien1);
  };

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
        <img
          onMouseOver={handleMouseOverAliens}
          onMouseOut={handleMouseOutAliens}
          src={insightImages}
          alt="aliens"
        />
      </div>
    </section>
  );
}
