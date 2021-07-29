import React from 'react'
import "../css/sightingInfoBox.css"

const LocationInfo = ({ info }) => {
        return (
            <div className='sightingInfo' id='sightingInfo'>
                <div className='exit-link'>
                    <button className='exit-link-box'>&#10006;</button>
                </div>
                <h2>Sighting Location Info</h2>
                <ul>
                    <li><strong>DESCRIPTION: </strong>{info.text}</li>
                </ul>
                
            </div>
        )
    }

export default LocationInfo
