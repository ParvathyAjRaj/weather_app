import React from "react";
import { Card } from "antd";
import "./Rain.css";

function Rain({humidityValue}){
    let comments;
    if(humidityValue < 40){
        comments="No chance of rain."
    }
    else if(humidityValue >= 40 && humidityValue <=70){
        comments="Slight chance of rain."
    }
    else if(humidityValue >70){
        comments = "High chance of rain."
    }
 return(
    <div className="Rain">
        <Card className="UVCard" style={{ width:70,height:90 ,padding:1,paddingBottom:5}}>
            <img src="./assets/rain_2.png" style={{width:20}}></img>
            <h5 style={{margin:1}}>{humidityValue}</h5>
            <p style={{color:"grey",fontSize:9,marginTop:0.01}}>{comments}</p>
        </Card>
    </div>
    
 )
}

export default Rain