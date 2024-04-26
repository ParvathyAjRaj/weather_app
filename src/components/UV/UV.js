import React from "react";
import { Card } from "antd";
import "./UV.css";

function UV({uvValue}){
    let comments;
    if (uvValue >= 0 && uvValue <=2){
        comments="low risk of harm."
    }else if (uvValue > 2 && uvValue <= 5){
        comments="moderate risk of harm."
    }else if(uvValue > 5 && uvValue <= 7){
        comments="high risk of harm."
    }else if(uvValue > 7 && uvValue <= 10){
        comments="very hight risk of harm."
    }else if(uvValue > 11){
        comments="Extreme risk of harm."
    }
 return(
    <div className="UV">
        <Card className="UVCard" style={{ width:60, height: 80,padding:1,border:"2px solid red", paddingBottom:5}}>
            <img src="./assets/uv image.png" style={{width:20}}></img>
            <h5 style={{margin:1}}>UVI : {uvValue}</h5>
            <p style={{color:"grey",fontSize:7,marginTop:0.01}}>{comments}</p>
        </Card>
    </div>
    
 )
}

export default UV