import React from "react";
import projectphoto1 from './assets/projectphoto1.png';
import projectphoto2 from './assets/projectphoto2.png';
import projectphoto3 from './assets/projectphoto3.png';

function projepic() {
    return(
        <div className="projectpic">
            <div className="projectphoto1">
            <img className="projectphoto1" src={projectphoto1} alt="projectphoto1"></img>
            <button id="btn1">VARSEY</button>
            </div>
            <div className="projectphoto2">
            <img className="projectphoto2" src={projectphoto2} alt="projectphoto2"></img>
            <button id="btn2">SEE CASE STUDY</button>
            </div>
            <div className="projectphoto3">
            <img className="projectphoto3" src={projectphoto3} alt="projectphoto3"></img>
            <button id="btn3" >SEE CASE STUDY</button>
            </div>
        </div>
    )
}
export default projepic;