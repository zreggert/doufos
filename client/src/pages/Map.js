import React from "react";
import Map from "../components/Map";
import { useQuery } from "@apollo/client";
import { QUERY_SIGHTINGS } from "../utils/queries";
import { Link } from "react-router-dom";
// Importing a CSS file
import "../css/modal.css";
import "../css/map.css";

export default function MapPage() {
  const { data } = useQuery(QUERY_SIGHTINGS);
  const sightings = data?.sightings || [];

  return (
    <div className="modal-frame">
      <section className="map-section">
        <div className="map-title">
          <h4>M.a.p</h4>
        </div>
        <div className="exit-map">
          <Link className="exit-link-map" to="/">
            &#10006;
          </Link>
        </div>
        <Map sightings={sightings} />
      </section>
    </div>
  );
}
