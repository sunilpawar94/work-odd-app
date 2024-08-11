import React from "react";
import Spiritpic from './assets/odd2.png';

function Spiritpag() {
    return(
        <div className="Spiritpag">
            <div className="threepic">
            <img className="threepic " src={Spiritpic } alt="threepic " ></img>
            </div>
            <div className="picdisc">
                <h2>A SPIRITED TEAM OF DESIGNERS WHO</h2>
                <h2>ARE UNAFRAID TO THINK OUTSIDE</h2>
                <h2>THE BOX AND EXPRESS THEMSELVES</h2>
                <h2>AUTHENTICALLY</h2>
                <button id="picdisc1">KNOW US </button>
            </div>
        </div>
    )
}
export default Spiritpag;