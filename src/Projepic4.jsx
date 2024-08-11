import React from "react";
import projectphoto12 from './assets/projectphoto12.png';
import projectphoto13 from './assets/projectphoto13.png';
import projectphoto14 from './assets/projectphoto14.png';

function projepic4() {
    return(
        <div className="projectpic1">
            <div className="projectphoto1">
            <img className="projectphoto12" src={projectphoto12} alt="projectphoto12"></img>
            <button id="btn1">VARSEY</button>
            </div>
            <div className="projectphoto2">
            <img className="projectphoto13" src={projectphoto13} alt="projectphoto13"></img>
            <button id="btn2">SEE CASE STUDY</button>
            </div>
            <div className="projectphoto3">
            <img className="projectphoto14" src={projectphoto14} alt="projectphoto14"></img>
            <button id="btn3" >SEE CASE STUDY</button>
            </div>
        </div>
    )
}
export default projepic4;