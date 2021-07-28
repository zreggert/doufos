import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client"
import { ADD_SIGHTING } from "../utils/mutations"
import { QUERY_USERS } from "../utils/queries";
import "../css/sightings-form.css";

function SightingsForm() {
  const [location, setLocation] = useState("");
  const [date_time, setDate] = useState("");
  const [text, setText] = useState("");
  const [addSighting] = useMutation(ADD_SIGHTING);
  

  async function handleSubmit(e) {
    e.preventDefault();
    let latitude, longitude;
    await axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=sk.eyJ1Ijoic2luZXVzdyIsImEiOiJja3JmNzFhMnMwczhkMnBsampyd3J3c3oxIn0.tFe_kPK6gdvki2VgtXDiAg`
      )
      .then(({ data }) => {
        latitude = data.features[0].center[1];
        longitude = data.features[0].center[0];
        addSighting({ variables: {
          location,
          latitude,
          longitude,
          date_time,
          text
        }})
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <section className="sightings-form">
      <div className="exit">
        <Link className="exit-link" to="/">
          &#10006;
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>U.F.O Sighting</h3>

        <div className="form-group">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Encounter text</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Encounter text"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default SightingsForm;
