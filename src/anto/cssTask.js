import './csstask.css';
import conPng from './contactPNG.png';
import React from 'react';
import serSVG from './searchSVG.svg';

// var placeHol = ""
function CssTask() {
    return (
        <>
            {/* <div className='s1'>
                <table>
                    <tr>
                        <td style={{ width: '30px' }} rowspan="2">
                            <img src={conPng} style={{ height: '25px' }} />
                        </td>
                        <td style={{ width: '230px' }}>
                            <p style={{ fontSize: '26px', marginBottom: '0px' }}><b>Contacts</b></p>
                            <p style={{ marginTop: '-7px',fontSize:'12px' }}>Welcome to FlatCRM Contact Page</p>
                        </td>
                        <td>
                            <p>Sort by:<select style={{ border: 'none', fontWeight: 'bolder' }}><option>Date Created</option></select></p>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: '290px' }}>
                            <p style={{ marginTop: '0px' }}>
                                <input type="search" className='txtBox' placeholder='Search contact'/>
                                <img src={serSVG} style={{ height: '15px' }} alt='...' />
                            </p>
                        </td>
                        <td>
                            <div >
                                <button className="contact">+ Add Contact</button>
                            </div>
                        </td>
                    </tr>
                </table> 
        </div> */}
            <div className='s2'>
                <div className='conPNG'><img src={conPng} style={{ height: '25px' }} /></div>
                <div className='ContactsBB'>
                    <p style={{ fontSize: '26px', marginBottom: '0px' }}><b>Contacts</b></p>
                    <p style={{ marginTop: '-7px', fontSize: '12px', color: 'rgb(116 116 116)',paddingTop:'5px' }}>Welcome to FlatCRM Contact Page</p>
                </div>
                <div className='SortBy'>
                    <p style={{color: 'rgb(116 116 116)',fontSize:'12px'}}>Sort by :<select style={{ border: 'none', fontWeight: 'bolder' }}><option>Date Created</option></select></p>
                </div>
            </div>
            <div className='s3'>
                <div className='searchBTN'>
                    <p style={{ marginTop: '0px' }}>
                        <input type="text" className='txtBox' placeholder='Search contact' />
                        <img src={serSVG} style={{ height: '12px', marginLeft: '-25px' }} alt='...' />
                    </p>
                </div >
                <div className='addConBtn'><button className="contact">+ Add Contact</button></div>
            </div>

        </>
    );
}
export default CssTask;