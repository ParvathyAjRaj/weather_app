import React from "react";
import "./NextDaysForecast.css";

function NextDaysForecast({nextDaysForecast}){

    function getDate(fullDate){
        const [yyyy,mm,dd] = fullDate.split("-");
        let month;
        switch(mm){
            case("01"):
                month="Jan";
                break;
            case("02"):
                month="Feb";
                break;
            case("03"):
                month="Mar";
                break;
            case("04"):
                month="Apr";
                break;
            case("05"):
                month="May";
                break;
            case("06"):
                month="Jun";
                break;
            case("07"):
                month="Jul";
                break;
            case("08"):
                month="Aug";
                break;
            case("09"):
                month="Sep";
                break;
            case("10"):
                month="Oct";
                break;
            case("11"):
                month="Nov";
                break;
            case("12"):
                month="Dec";
                break;
        }
        let date = dd + " " + month;
        return(date);
    }

    return(
        <div className="forecastContainer">
            <p style={{fontWeight:"bold"}}>Next days forecast</p>
            {nextDaysForecast.map((eachForecast) => {
            return(
                <div className="DateCard">
                    <div key={eachForecast[0].date} className="eachDate">
                        <p>{getDate(eachForecast[0].date)}</p>
                        <img src={eachForecast[0].day.condition.icon} className="conditionIconForecast"></img>
                        <p>Avg temp {eachForecast[0].day.avgtemp_c}°C</p>
                    </div>
                    <div key={eachForecast[1].date} className="eachDate">
                        <p>{getDate(eachForecast[1].date)}</p>
                        <img src={eachForecast[1].day.condition.icon} className="conditionIconForecast"></img>
                        <p>Avg temp {eachForecast[1].day.avgtemp_c}°C</p>
                    </div>
                    <div key={eachForecast[2].date} className="eachDate">
                        <p>{getDate(eachForecast[2].date)}</p>
                        <img src={eachForecast[2].day.condition.icon} className="conditionIconForecast"></img>
                        <p>Avg temp {eachForecast[2].day.avgtemp_c}°C</p>
                    </div>
                </div>
            )
            })}
        </div>
    )
}

export default NextDaysForecast;