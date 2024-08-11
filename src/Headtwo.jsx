import React from "react";
import oddimg1 from './assets/odd1.png'

function headtwo() {
    return(
        <div className="hedtwo1">
            <div className="oddpic1">
            <img className="oddimg1 " src={oddimg1 } alt="oddimg1 " ></img>
            </div>
            <div className="unlock1">
                <h2>A TEAM OF DESIGNERS ADDING</h2>
                <h2>BOLD FLAVORS INTO THE WORLD</h2>
                <h3><span>ONE</span> <a>COLOURFUL</a> DESIGN AT ATIME</h3>
            </div>
        </div>
    )
}
export default headtwo;