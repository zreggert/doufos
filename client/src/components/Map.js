import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react'
// import './myMap.css'
// import sightingData from './new_NUFORC_edited'
export class myMap extends Component {
  render() {
    return (
      <div className='mapWrap'>
        <Map className='myMap'
          google={this.props.google}
          zoom={8}
          initialCenter={{ 
            lat: 39.8283, 
            lng: -98.5795
          }}
        >
          <Marker position={{lat: 39.8283, lng: -98.5795}} />
        </Map>
      </div>
    );
  }
}
  export default GoogleApiWrapper({ 
    apiKey: 'AIzaSyAbNcA9s_aEzSfXXDPc1CGnCJirwRdNvpo'
  })(myMap)