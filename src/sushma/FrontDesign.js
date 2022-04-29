import React from "react";
import './design.css';

import bal2 from './bal2.png'

function FrontDesign(){
    return(
        <>
        <div className="infnRight">
    <div className="information">
        <div className="infn">
        <h1 className="logo">MH</h1>
        <p className="name">Mike Huston</p>
        <p className="designation">Project Manager@ FlatCRM Management</p>
        </div>
        <table className="table">
            <tr>
                <td className="table-head" style={{width:'150px'}}>Full Name:</td>
                <td className="table-value">Mike Huston</td>
            </tr>
            <tr>
                <td className="table-head" >Email:</td>
                <td className="table-value">mikehuston@live.com</td>
            </tr>
            <tr>
                <td className="table-head">Phone:</td>
                <td className="table-value">+(069)2384587</td>
            </tr>
            <tr>
                <td className="table-head">Company:</td>
                <td className="table-value">No information provided</td>
            </tr>
            <tr>
                <td className="table-head">Address:</td>
                <td className="table-value">47,west shewrapara pirebag road mirour,dhaka</td>
            </tr>
        </table>
    </div>
    <div className="notice">
        <table>
            <tr className="subdetails">
                <td style={{width:'75px'}}><img src={bal2} style={{width:'50px',height:'50px'}}></img></td>
                <td style={{width:'190px'}}>Tax Evasion & Payout Notice
                    <p className="subinfn">Date 7 Mar 2017 - 10am</p>
                </td>
                <td style={{width:'20px'}}>
                <label className="dot" >...</label></td>
            </tr>
        </table>
    </div>
    </div>
    </>
    );
}
export default FrontDesign;