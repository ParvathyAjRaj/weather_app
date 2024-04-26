import React from "react";
import UV from "../UV/UV";
import "./Header.css";
import Rain from "../Rain/Rain";
import { useState } from "react";

function Header({uvValue , humidityValue}){
    const [isDetailsVisible,setIsDetailsVisible] = useState(true);

    function handleClickButton(){
        const newValue = !isDetailsVisible;
        setIsDetailsVisible(newValue);
    }
    
    return(
        <div className="headerCard">
            {isDetailsVisible ? 
            <>
                <UV uvValue={uvValue}/>
                <Rain humidityValue={humidityValue}/>
                <button onClick={handleClickButton}>
                    <img src="assets/side arrow button.png" style={{width:20 , backgroundColor:"skyblue"}}></img>
                </button>
            </> : 
            <button onClick={handleClickButton}>
                <img src="assets/side arrow button.png" style={{width:20 , backgroundColor:"skyblue"}}></img>
            </button>}            
        </div>
    
);
        
        
}

export default Header;