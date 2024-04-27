import React, { useState , useRef, useEffect} from "react";
import "./Content.css";
import {EnvironmentFilled,BellOutlined,SaveOutlined,EditOutlined} from '@ant-design/icons';
import axios from 'axios';

function Content(
    {setLocationName , locationName , locationRegion , localTime , temperature , maxTemp , minTemp , isMoonUp , isSunUp}){
    const [localDate,localTimeDetails] = localTime.split(" ");
    const [yyyy,mm,dd] = localDate.split("-");
    const [isLocationEditable,setLocationEditable] = useState(false);
    const newLocationRef = useRef();
    const [isNotificationOn,setIsNotificationOn] = useState(false);

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

    function handleEditLocation(newLocationRef){
        console.log("Edit button clicked");
        setLocationEditable(true);
    }

    function handleSaveLocation(newLocationRef){
        console.log("Save button clicked");
        setLocationEditable(false);
        setLocationName(newLocationRef.current.value);
    }

    function handleNotification(){
        setIsNotificationOn((prev) => !prev);
    }

    return(
        <div>
            <div className="locationDetails">
                <EnvironmentFilled style={{color:"white", paddingBottom:5}}/> 
                {isLocationEditable 
                ? 
                <>
                    <input id="locationEntryId" className="locationEntry" ref={newLocationRef}></input>
                    <SaveOutlined className="notification" onClick={() => handleSaveLocation(newLocationRef)}/>
                </>  
                : 
                <>
                    <p className="locationNameAndRegion">{locationName},{locationRegion}</p>
                    <EditOutlined className="notification" onClick={handleEditLocation}/>
                </>
                }
                <BellOutlined className="notification" onClick={handleNotification}/> 
                {isNotificationOn ? <p className="notificationNote">Notification turned on</p> : <p className="notificationNote">Notification turned off</p>}
                
            </div>
            <p className="date"> Today, {month} {dd} {localTimeDetails} </p>
            <div className="temperatureContainer">
                <span className="temperature">{Math.round(temperature)}</span>
                <span className="degree">°C</span>
                <p className="tempRange">↑ {maxTemp}°C ↓ {minTemp}°C</p>
            </div>
            <p style={{color:"white",marginTop:15}}>Maximum temperature reached upto {maxTemp}°C</p>
            <p style={{color:"white"}}>Minimum temperature fell upto {minTemp}°C</p>
        </div>
    )
}

export default Content;