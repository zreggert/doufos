import {useState} from 'react';
import './App.css';
import axios from 'axios'
function App() {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('')
  const [description, setDescription] = useState(''); 
  
  async function handleSubmit(e){
    e.preventDefault(); 
    let latitude, longitude; 
   await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=sk.eyJ1Ijoic2luZXVzdyIsImEiOiJja3JmNzFhMnMwczhkMnBsampyd3J3c3oxIn0.tFe_kPK6gdvki2VgtXDiAg`)
    .then(({data}) => {
      latitude = data.features[0].center[1]; 
      longitude = data.features[0].center[0]; 
    }); 

    const info = {
      latitude, 
      longitude, 
      date, 
      description
    }
    console.log(info)
  }

  return (
    <form onSubmit={handleSubmit}> 
        <h3>UFO Sighting</h3>

        <div className="form-group">
         <label>Location</label>
            <input type="text" className="form-control" placeholder="Location" onChange={e => setLocation(e.target.value)} />
        </div>

        <div className="form-group">
         <label>Date</label>
            <input type="date" className="form-control" placeholder="Date" onChange={e =>  setDate(e.target.value)} />
        </div>

        <div className="form-group">
         <label>Encounter Description</label>
            <input type="text" className="form-control" placeholder="Encounter Description" onChange={e => setDescription(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
    </form>
)
}

export default App;
