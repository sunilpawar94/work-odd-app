import React from "react";
import pichedl from './assets/pichedl.png'

function storydwn() {
    return(
        <div className="Pichedli">
            <div className="piconly">
            <img className="pichedl " src={pichedl} alt="pichedl" ></img>
            </div> 
            <div className="piconly2">
            <h1>LET'S GROW</h1>
            <h1>TOGETHER</h1>
            <button id="pichedbtn">WORK WITH US</button>
            </div>
        </div>
    )
}
export default storydwn;