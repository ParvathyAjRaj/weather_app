import React from "react";
import "./Content.css";
import {EnvironmentFilled,BellOutlined,SaveOutlined} from '@ant-design/icons'

function Content({locationName , locationRegion , localTime , locationCondition , temperature}){
    const [localDate,localTimeDetails] = localTime.split(" ");
    const [yyyy,mm,dd] = localDate.split("-");
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
    return(
        <div>
            <div className="locationDetails">
                <EnvironmentFilled style={{color:"white", paddingBottom:5}}/> 
                <p className="locationNameAndRegion">{locationName} , {locationRegion}</p>
                <BellOutlined className="notification"/> 
                <SaveOutlined className="notification" />
            </div>
            <p className="date"> Today, {month} {dd} {localTimeDetails} </p>
            <div className="temperatureContainer">
                <span className="temperature">{temperature}</span>
                <span className="degree">°C</span>
                <p className="tempRange"> ↑ 17°C ↓ 5°C</p>
            </div>
            
            <h2>{locationCondition.text}</h2>
            <img src={locationCondition.icon}></img>
        </div>
        
    )
}

export default Content;