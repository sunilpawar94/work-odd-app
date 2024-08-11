import React from "react";
import oddimg from './assets/odd.png'

function hedmain() {
    return(
        <div className="hedmain">
            <div className="oddpic">
            <img className="oddimg " src={oddimg } alt="oddimg " ></img>
            </div>
            <div className="nav">
                <div className="home">
                    <h3>HOME</h3>
                </div>
                <div className="ABOUT">
                    <h3>ABOUT</h3>
                </div>
                <div className="WORK">
                    <h3>WORK</h3>
                </div>
                <div className="SERVICES">
                    <h3>SERVICES</h3>
                </div>
                <div className="CONTACT">
                    <h3>CONTACT</h3>
                </div>
            </div>
        </div>
    )
}
export default hedmain;