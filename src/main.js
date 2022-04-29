import React from "react";
import CssTask from "./anto/cssTask";
import Design from "./greeshma/Design";
import './mainStyle.css';
import Header from "./prasanth/Header";
import Design1 from "./sakthi/Design1";
import FrontDesign from "./sushma/FrontDesign";

function Main() {
    return (
        <>
            {/* <div className="headermain"><Header /></div>
            <div className="design1main"><Design1 /></div>
            <div className="csstaskmain"><CssTask /></div>
            <div className="designmain"><Design /></div>
            <div className="fdmain"><FrontDesign /></div> */}
            
            <div className="headermain"><Header /></div>

            <div className="frow">
                <div className="design1main" ><Design1 /></div>
                <div className="csstaskmain" ><CssTask /> <Design /></div>
                <div className="fdmain"><FrontDesign /></div>
            </div>
        </>
    );
}
export default Main;