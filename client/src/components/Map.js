import GoogleMapReact from "google-map-react";
import React, { Component } from "react";
import LocationMarker from "./LocationMarker";
import sightData from "./sightingData.json";

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 39.8283,
      lng: -98.5795,
    },
    zoom: 3,
  };

  render() {
    return (
      <div style={{ height: "80vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAbNcA9s_aEzSfXXDPc1CGnCJirwRdNvpo" }} //need to hide key in .env file.
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {sightData.sighting.map((location) => (
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
