import React from "react";
import "./HourlyForecast.css";

function HourlyForecast({nextDaysForecast}){
    return(
        <div className="hourlyForecastContainer">
            <p style={{fontWeight:"bold"}}>Hourly Forecast</p>
            {nextDaysForecast.map((eachForecast) => {
                return(
                    <div className="DateCard">
                        <div key={eachForecast[0].hour} className="eachHour">
                            <p style={{color:"gray", fontSize:10}}>{eachForecast[0].hour[3].time.split(" ")[1]}</p>
                            <img src={eachForecast[0].hour[3].condition.icon} style={{width:50}}></img>
                            <p style={{fontSize:12}}>{eachForecast[0].hour[3].condition.text} </p>
                        </div>
                        <div key={eachForecast[0].hour} className="eachHour">
                            <p style={{color:"gray", fontSize:10}}>{eachForecast[0].hour[8].time.split(" ")[1]}</p>
                            <img src={eachForecast[0].hour[8].condition.icon} style={{width:50}}></img>
                            <p style={{fontSize:12}}>{eachForecast[0].hour[8].condition.text} </p>
                        </div>
                        <div key={eachForecast[0].hour} className="eachHour">
                            <p style={{color:"gray", fontSize:10}}>{eachForecast[0].hour[13].time.split(" ")[1]}</p>
                            <img src={eachForecast[0].hour[13].condition.icon} style={{width:50}}></img>
                            <p style={{fontSize:12}}>{eachForecast[0].hour[13].condition.text} </p>
                        </div>
                        <div key={eachForecast[0].hour} className="eachHour">
                            <p style={{color:"gray", fontSize:10}}>{eachForecast[0].hour[18].time.split(" ")[1]}</p>
                            <img src={eachForecast[0].hour[18].condition.icon} style={{width:50}}></img>
                            <p style={{fontSize:12}}>{eachForecast[0].hour[18].condition.text} </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HourlyForecast;