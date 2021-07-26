import GoogleMapReact from "google-map-react";
import React from "react";
import LocationMarker from "./LocationMarker";


export default function Map({sightings}) {

    return (
      <div
        style={{ height: "80vh", width: "90vw", margin: "20px auto 20px auto" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAbNcA9s_aEzSfXXDPc1CGnCJirwRdNvpo" }}
          defaultCenter={{ lat: 39.8283, lng: -98.5795 }}
          defaultZoom={3}
        >
          {sightings.map((sighting) => (
            <LocationMarker
              key={sighting._id}
              lat={sighting.latitude}
              lng={sighting.longitude}
            />
          ))}
          
        </GoogleMapReact>
        
      </div>
    );
  };


