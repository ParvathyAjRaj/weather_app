import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';

function App() {
  const api_key = process.env.REACT_APP_API_KEY;

  const base_url = `http://api.weatherapi.com/v1/current.json?key=${api_key}`;

  const [locationName,setLocationName] = useState("");
  const [locationCondition,setLocationCondition] = useState({text:"",icon:""});
  const [uvValue,setUVValue] = useState(0);
  const [humidityValue,setHumidityValue] = useState(0);

  useEffect(()=>{
      // If the location access is denied by user
      if (!navigator.geolocation) {
        console.log('Geolocation is not supported by your browser');
        return;
      }
    
      // If location access is accepted by user
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          async function getCurrentLocationWeather(){
            const response = await axios.get(`${base_url}&q=${lat},${lon}&aqi=yes`);
            console.log(response.data);
          
            const locationConditionText = response.data.current.condition.text;
            const locationConditionIcon = response.data.current.condition.icon; 

            setLocationName(response.data.location.name);
            setLocationCondition({...locationCondition,text:locationConditionText,icon:locationConditionIcon});
            setUVValue(response.data.current.uv);
            setHumidityValue(response.data.current.humidity);
          }
          getCurrentLocationWeather();
        },
        (error)=>{
          console.log(error)
          });
    }
  ,[])

  return (
    <div className='App'>
      <Header uvValue={uvValue} humidityValue={humidityValue}/>
      <h2>{locationName}</h2>
      <h2>{locationCondition.text}</h2>
      <img src={locationCondition.icon}></img>
    </div>
  );
}

export default App;
