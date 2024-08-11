import React from "react";
import projectphoto4 from './assets/projectphoto4.png';
import projectphoto5 from './assets/projectphoto5.png';
import projectphoto6 from './assets/projectphoto6.png';

function projepic1() {
    return(
        <div className="projectpic1">
            <div className="projectphoto1">
            <img className="projectphoto4" src={projectphoto4} alt="projectphoto4"></img>
            <button id="btn1">VARSEY</button>
            </div>
            <div className="projectphoto2">
            <img className="projectphoto5" src={projectphoto5} alt="projectphoto5"></img>
            <button id="btn2">SEE CASE STUDY</button>
            </div>
            <div className="projectphoto3">
            <img className="projectphoto6" src={projectphoto6} alt="projectphoto6"></img>
            <button id="btn3" >SEE CASE STUDY</button>
            </div>
        </div>
    )
}
export default projepic1;