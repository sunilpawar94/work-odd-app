import React from "react";
import projectphoto1 from './assets/projectphoto1.png';
import projectphoto7 from './assets/projectphoto7.png';
import projectphoto8 from './assets/projectphoto8.png';

function projepic2() {
    return(
        <div className="projectpic1">
            <div className="projectphoto1">
            <img className="projectphoto7" src={projectphoto7} alt="projectphoto7"></img>
            <button id="btn1">VARSEY</button>
            </div>
            <div className="projectphoto2">
            <img className="projectphoto8" src={projectphoto8} alt="projectphoto8"></img>
            <button id="btn2">SEE CASE STUDY</button>
            </div>
        </div>
    )
}
export default projepic2;