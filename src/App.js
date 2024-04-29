import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Header/Header';
import Content from './Content/Content';
import NextDaysForecast from './components/NextDaysForecast/NextDaysForecast';
import HourlyForecast from './components/HourlyForecast/HourlyForecast';
import {Spin} from "antd";
import Bargraph from './components/Bargraph/Bargraph';

function App() {
  const api_key = process.env.REACT_APP_API_KEY;

  const forecast_base_url = `https://api.weatherapi.com/v1/forecast.json?key=${api_key}`;
  const days = 5;

  const [locationName,setLocationName] = useState("London");
  const [locationRegion,setLocationRegion] = useState("");
  const [localTime,setLocalTime] = useState("");
  const [locationCondition,setLocationCondition] = useState({text:"",icon:""});
  const [uvValue,setUVValue] = useState(0);
  const [humidityValue,setHumidityValue] = useState(0);
  const [temperature,setTemperature] = useState(0);
  const [maxTemp,setMaxTemp] = useState(0);
  const [minTemp,setMinTemp] = useState(0);
  const [isMoonUp,setIsMoonUp] = useState(false);
  const [isSunUp,setIsSunUp] = useState(true);
  const [nextDaysForecast,setNextDaysForecast] = useState([]);
  const [loading,setLoading] = useState(false);
  const [isUserLocationAllowed,setIsUserLocationAllowed] = useState(false);

  useEffect(()=>{
         
      // If location access is accepted by user
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          async function getDefaultWeatherDetails(){
            setLoading(true);
            setIsUserLocationAllowed(true);
            const response = await axios.get(`${forecast_base_url}&q=${lat},${lon}&days=${days}&aqi=no&alerts=no`);
            console.log(response.data);
            setLoading(false);
            LocationWeatherDetails(response);
            }
            getDefaultWeatherDetails();
          
        },
        (error)=>{
          if(error.message === "User denied Geolocation"){
            console.log("yes user denied");
            setLoading(true);

            getNewLocationWeatherDetails();
          }
          });

          async function getNewLocationWeatherDetails(){
            console.log("New"+locationName);
            setLoading(true);
            const response = await axios.get(`${forecast_base_url}&q=${locationName}&days=3&aqi=no&alerts=no`);
            console.log(response.data);
            setLoading(false);
            LocationWeatherDetails(response);
        }
    }
  ,[locationName])

  

  function LocationWeatherDetails(response){
    console.log("entered the locationdetails function");
    const locationConditionText = response.data.current.condition.text;
    const locationConditionIcon = response.data.current.condition.icon; 
    const maximumTempinC = response.data.forecast.forecastday[0].day.maxtemp_c;
    const minimumTempinC = response.data.forecast.forecastday[0].day.mintemp_c;
    const forecastforThreeDays = response.data.forecast.forecastday;

    // if(response.data.forecast.forecastday[0].astro.is_moon_up === 1){
    //   setIsMoonUp(true);
    //   setIsSunUp(false);
    // }else if(response.data.forecast.forecastday[0].astro.is_sun_up === 1){
    //   setIsSunUp(true);
    //   setIsMoonUp(false);
    // }

    setLocationName(response.data.location.name);
    setLocationRegion(response.data.location.region);
    setLocalTime(response.data.location.localtime);
    setLocationCondition({...locationCondition,text:locationConditionText,icon:locationConditionIcon});
    setUVValue(response.data.current.uv);
    setHumidityValue(response.data.current.humidity);
    setTemperature(response.data.current.temp_c);
    setMaxTemp(maximumTempinC);
    setMinTemp(minimumTempinC);

    const prevForecast = nextDaysForecast;
    prevForecast[0] = forecastforThreeDays;
    setNextDaysForecast(prevForecast);
  }

  return (
    <div className='App' 
      style={ isMoonUp ? 
        {backgroundColor:"#7a7adb", backgroundImage:"linear-gradient(315deg, #7a7adb 0%, #170e13 74%)"}
        :
        isSunUp ? 
        {backgroundColor:"#182b3a", backgroundImage:"linear-gradient(315deg, #182b3a 0%, #20a4f3 74%)"}
        :
        null}>
        {!loading 
          ? 
          <>
            {!isUserLocationAllowed ? <h3 style={{color:"white"}}>Please allow your location access for better performace.</h3> : null}
            <Header uvValue={uvValue} humidityValue={humidityValue} locationCondition={locationCondition}/>
            <Content 
              setLocationName={setLocationName}
              locationName={locationName} 
              locationRegion={locationRegion} 
              localTime={localTime}
              temperature={temperature}
              maxTemp={maxTemp}
              minTemp={minTemp}
              forecast_base_url={forecast_base_url}
              days={days}
              LocationWeatherDetails={LocationWeatherDetails}
            />  
            <HourlyForecast nextDaysForecast={nextDaysForecast}/>
            {/* <Bargraph  nextDaysForecast={nextDaysForecast}/> */}
            <NextDaysForecast nextDaysForecast={nextDaysForecast}/>
          </>
          :
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:100}}>
            <Spin size='large'></Spin>
          </div>
        }
    </div>
  );
}

export default App;
