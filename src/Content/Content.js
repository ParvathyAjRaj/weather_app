import React from "react";
import "./Content.css";
import {EnvironmentFilled,BellOutlined,SaveOutlined} from '@ant-design/icons'

function Content(
    {locationName , locationRegion , localTime , locationCondition , temperature , maxTemp , minTemp , isMoonUp , isSunUp}){
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
                <p className="tempRange"
                    style={ isMoonUp ? 
                        {backgroundColor:"#7a7adb", backgroundImage:"linear-gradient(315deg, #7a7adb 0%, #170e13 74%)"}
                        :
                        isSunUp ? 
                        {backgroundColor:"#182b3a", backgroundImage:"linear-gradient(315deg, #182b3a 0%, #20a4f3 74%)"}
                        :
                        null}
                > ↑ {maxTemp}°C ↓ {minTemp}°C</p>
            </div>
            <p style={{color:"white"}}>{locationCondition.text}</p>
            
        </div>
        
    )
}

export default Content;