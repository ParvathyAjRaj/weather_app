import React from "react";
import UV from "../components/UV/UV";
import "./Header.css";
import Rain from "../components/Rain/Rain";
import { useState } from "react";

function Header({uvValue , humidityValue , locationCondition}){
    const [isDetailsVisible,setIsDetailsVisible] = useState(true);

    function handleClickButton(){
        const newValue = !isDetailsVisible;
        setIsDetailsVisible(newValue);
    }

    return(
        <div className="header">
            <img className="conditionIcon" src={locationCondition.icon}></img> 
            <div className="headerCard">
                {isDetailsVisible ? 
                <>
                    <UV uvValue={uvValue}/>
                    <Rain humidityValue={humidityValue}/>
                    <button onClick={handleClickButton}>
                        <img src="assets/side arrow button.png" style={{width:20 , backgroundColor:"skyblue"}}></img>
                    </button>
                </> : 
                <>
                    <button onClick={handleClickButton} style={{marginTop:25,marginLeft:150}}>
                        <img src="assets/side arrow button.png" style={{width:20 , backgroundColor:"skyblue"}}></img>
                    </button>
                </>
                }            
            </div>
            {/* <img className="conditionIcon" src={locationCondition.icon}></img> */}
            {/* <p style={{color:"white"}}>{locationCondition.text}</p> */}
        </div>
        
    );
        
        
}

export default Header;