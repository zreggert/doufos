import GoogleMapReact from "google-map-react";
import React, { Component } from "react";
import LocationMarker from "./LocationMarker";
import sightData from "./sightingData.json";

class Map extends Component {
  render() {
    return (
      <div
        style={{ height: "80vh", width: "90vw", margin: "0px auto 0px auto" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAbNcA9s_aEzSfXXDPc1CGnCJirwRdNvpo" }}
          defaultCenter={{ lat: 39.8283, lng: -98.5795 }}
          defaultZoom={3}
        >
          {sightData.map((location) => (
            <LocationMarker
              key={location.id}
              lat={location.latitude}
              lng={location.longitude}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
