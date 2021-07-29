import GoogleMapReact from "google-map-react";
import React, { useRef, useState } from "react";
import useSupercluster from "use-supercluster";
import alienImage from "../images/alien_16px.png"
import LocationInfo from "./LocationInfo"
import "../css/markers.css"


const Marker = ({ children }) => children;

export default function Map({sightings}) {
//need reference to the map itself for later use
  const mapRef = useRef();
//using state for zoom and bounds needed for the supercluster package
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);
//using state for location info box when icon is clicked
  const [locationInfo, setLocationInfo] = useState(null)

//formatting sighting data for usage by supercluster package. Needs to read in a GeoJSON format with features with properties and geometry with lat/lng coordinates
  const points = sightings.map(sighting => ({
    type: "Feature",
    properties: { cluster: false, sightingId: sighting._id, text: sighting.text },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(sighting.longitude),
        parseFloat(sighting.latitude)
      ]
    }
  }));
//retrieving clusters with the useSupercluster hook. Destructured object providing array of clusters
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 }
  });

// console.log(clusters)
  return (
    <div style={{ height: "70vh", width: "96vw",minHeight:'600px', margin: "20px auto 20px auto"}} id='googleMap'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY}}
        defaultCenter={{ lat: 39.8283, lng: -98.5795 }}
        defaultZoom={4}
        options={{styles: [
          {
              "featureType": "administrative.locality",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#AFFFA0"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#EAFFE5"
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.government",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#59A499"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#F0FF8D"
                  },
                  {
                      "weight": 2.2
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#1A87D6"
                  }
              ]
          },
      ]}}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
          ]);
        }}
      >
        {clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            sightingId,
            text,
            point_count: pointCount
          } = cluster.properties;

          if (isCluster) {
            return (
              
              <Marker
                key={`cluster-${cluster.id}`}
                lat={latitude}
                lng={longitude}
                >
                <div
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 50}px`, //changing size of the cluster in px with a calc based on how many points in the cluster.
                    height: `${10 + (pointCount / points.length) * 50}px`
                  }}
                  onClick={() => {
  //allows for animated zoom transition into a cluster
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }
          else {
            // console.log(cluster)
          return (
            
            <Marker
              key={`sighting-${cluster.properties.sightingId}`}
              lat={latitude}
              lng={longitude}
              onClick= {console.log('click')}
              >
                <div className='location-marker' id='location-marker' style={{backgroundColor: "#FF0000"}}>
                  <img src={alienImage} alt='they are out there' onMouseOver={() => setLocationInfo({ id: sightingId, text: text})} onMouseOut={()=> setLocationInfo(null)}></img>
                </div>
                
            </Marker>
          );
          }
        })}
        {locationInfo && <LocationInfo info={locationInfo} />}
      </GoogleMapReact>
    </div>
  );
};