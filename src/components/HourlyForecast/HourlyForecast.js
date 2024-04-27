import React from "react";
import "./HourlyForecast.css";

function HourlyForecast({nextDaysForecast}){
    return(
        <div className="hourlyForecastContainer">
            <p style={{fontWeight:"bold"}}>Hourly Forecast</p>
            {nextDaysForecast.map((eachForecast) => {
                return(
                    <div className="DateCard">
                        <div key={eachForecast[0]} className="eachHour">
                            <img src={eachForecast[0].hour[3].condition.icon} style={{width:35}}></img>
                            <p style={{color:"gray", fontSize:10, marginTop:1}}>{eachForecast[0].hour[3].time.split(" ")[1]}</p>
                            <p style={{fontSize:12}}>{eachForecast[0].hour[3].temp_c}°C </p>
                        </div>
                        <div key={eachForecast[0]} className="eachHour">
                            <img src={eachForecast[0].hour[8].condition.icon} style={{width:35}}></img>
                            <p style={{color:"gray", fontSize:10, marginTop:1}}>{eachForecast[0].hour[8].time.split(" ")[1]}</p>
                            <p style={{fontSize:12}}>{eachForecast[0].hour[8].temp_c}°C </p>
                        </div>
                        <div key={eachForecast[0]} className="eachHour">
                            <img src={eachForecast[0].hour[13].condition.icon} style={{width:35}}></img>
                            <p style={{color:"gray", fontSize:10, marginTop:1}}>{eachForecast[0].hour[13].time.split(" ")[1]}</p>
                            <p style={{fontSize:12}}>{eachForecast[0].hour[13].temp_c}°C </p>
                        </div>
                        <div key={eachForecast[0].hour} className="eachHour">
                            <img src={eachForecast[0].hour[18].condition.icon} style={{width:35}}></img>
                            <p style={{color:"gray", fontSize:10, marginTop:1}}>{eachForecast[0].hour[18].time.split(" ")[1]}</p>
                            <p style={{fontSize:12}}>{eachForecast[0].hour[18].temp_c}°C </p>
                        </div>
                        <div key={eachForecast[0].hour} className="eachHour">
                            <img src={eachForecast[0].hour[23].condition.icon} style={{width:35}}></img>
                            <p style={{color:"gray", fontSize:10, marginTop:1}}>{eachForecast[0].hour[23].time.split(" ")[1]}</p>
                            <p style={{fontSize:12}}>{eachForecast[0].hour[23].temp_c}°C </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HourlyForecast;