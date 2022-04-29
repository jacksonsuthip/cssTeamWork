import React from "react";
import profile1 from './profile1.png';
import profile2 from './profile2.png';
import profile3 from './profile3.png';
import profile4 from './profile4.png';
import profile5 from './profile5.png';
import profile6 from './profile6.png';
import profile7 from './profile7.png';
import profile8 from './profile8.png';
import align from './align.png';

import './Style1.css';
function Design1() {
    return (

        <div class="container1">
            <div className="box">
                <img src={align} width="20" height="20" />
            </div>
            <div>
                <br></br>
                <br></br>
            </div>
            <div className="box">
                <img src={profile1} width="20" height="20" />
            </div>
            <div className="box">
                <div className="sidLine">
                    <div className="old"></div>
                    <div className="old1"><img src={profile2} width="20" height="20" /></div>
                </div>
            </div>
            <div className="box">
                <img src={profile3} width="20" height="20" />
            </div>
            <div className="box">
                <img src={profile4} width="20" height="20" />
            </div>
            <div className="box">
                <img src={profile5} width="20" height="20" />
            </div>
            <div className="box">
                <img src={profile6} width="20" height="20" />
            </div>
            <div className="box">
                <img src={profile7} width="20" height="20" />
            </div>
            <div className="box">
                <img src={profile8} width="20" height="20" />
            </div>

        </div>
    );
}

export default Design1;