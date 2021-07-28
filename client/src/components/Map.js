import GoogleMapReact from "google-map-react";
import React, { useRef, useState } from "react";
import useSupercluster from "use-supercluster";
import alienImage from "../images/alien_16px.png"
import "../css/markers.css"


const Marker = ({ children }) => children;

export default function Map({sightings}) {

  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);

  const points = sightings.map(sighting => ({
    type: "Feature",
    properties: { cluster: false, sightingId: sighting._id },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(sighting.longitude),
        parseFloat(sighting.latitude)
      ]
    }
  }));

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 }
  });

// console.log(clusters)
  return (
    <div style={{ height: "80vh", width: "80vw", margin: "0px auto 0px auto"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
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
                    width: `${10 + (pointCount / points.length) * 40}px`,
                    height: `${10 + (pointCount / points.length) * 40}px`
                  }}
                  onClick={() => {
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
              >
              <div className='location-marker' style={{backgroundColor: "#FF0000"}}>
               <img src={alienImage} alt='they are out there'></img>
              </div>
           
            </Marker>
          );
          }
        })}
      
      </GoogleMapReact>
    </div>
  );
};
 

