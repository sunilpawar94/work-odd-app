import React from "react";
import projectphoto9 from './assets/projectphoto9.png';
import projectphoto10 from './assets/projectphoto10.png';
import projectphoto11 from './assets/projectphoto11.png';

function projepic3() {
    return(
        <div className="projectpic1">
            <div className="projectphoto1">
            <img className="projectphoto9" src={projectphoto9} alt="projectphoto9"></img>
            <button id="btn1">VARSEY</button>
            </div>
            <div className="projectphoto2">
            <img className="projectphoto10" src={projectphoto10} alt="projectphoto10"></img>
            <button id="btn2">SEE CASE STUDY</button>
            </div>
            <div className="projectphoto3">
            <img className="projectphoto11" src={projectphoto11} alt="projectphoto11"></img>
            <button id="btn3" >SEE CASE STUDY</button>
            </div>
        </div>
    )
}
export default projepic3;