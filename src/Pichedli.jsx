import React from "react";
import hola1 from './assets/whatwedo.png'

function Pichedli() {
    return(
        <div className="Pichedli">
            <div className="holoimg">
            <img className="hola1" src={hola1 } alt="hola1" ></img>
            </div>
            <div className="discholo1">
                <div className="frst">
                <h2>From building a compelling brand story to executing multi-channel  </h2>
                <h2>campaigns, our services cover the entire spectrum of Digital Marketing &amp;  </h2>
                <h2>Branding.</h2>
                </div>
                <div className="frst1">
                <h2>our processis collaborative and client-focused we start by understanding</h2>
                <h2> your busuness ,your goals,and your challenges from there,we develop a</h2>
                <h2> tailored strategy that aligns with your objective. throughout the project,</h2>
                <h2> we maintain open lines of communication, ensuring you are involved and </h2>
                <h2>informed every step of the way.</h2>
                
                </div>
            </div>
        </div>
    )
}
export default Pichedli;