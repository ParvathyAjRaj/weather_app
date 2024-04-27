import React from "react";
import UV from "../components/UV/UV";
import "./Header.css";
import Rain from "../components/Rain/Rain";
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

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
                    {/* <button onClick={handleClickButton}>
                        <img src="assets/side arrow button.png" style={{width:20 , backgroundColor:"skyblue"}}></img>
                    </button> */}
                    <div style={{backgroundColor:'skyblue',opacity:0.5,borderRadius:10,height:90,marginTop:3,width:30,marginRight:3}}>
                        <RightOutlined 
                            style={{color:'white',display:'flex',flexDirection:"column",justifyContent:'center',marginTop:35}}
                            onClick={handleClickButton}
                            />
                    </div>
                    
                </> : 
                <>
                    <div style={{backgroundColor:'skyblue',opacity:0.5,borderRadius:10,height:90,marginTop:3,width:30,marginRight:3,marginLeft:145}}>
                        <LeftOutlined 
                            style={{color:'white',display:'flex',flexDirection:"column",justifyContent:'center',marginTop:35}}
                            onClick={handleClickButton}
                            />
                    </div>
                </>
                }            
            </div>
            {/* <img className="conditionIcon" src={locationCondition.icon}></img> */}
            {/* <p style={{color:"white"}}>{locationCondition.text}</p> */}
        </div>
        
    );
        
        
}

export default Header;