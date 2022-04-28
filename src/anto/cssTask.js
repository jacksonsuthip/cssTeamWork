import './csstask.css';
import conPng from './contactPNG.png';
import React from 'react';
import serSVG from './searchSVG.svg';

function CssTask() {
    return (
        <>
            <div className='s1'>
                <table>
                    <tr>
                        <td style={{ width: '30px' }}>
                            <img src={conPng} style={{ height: '20px' }} />
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
                        <td></td>
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
                <div className='s2'>
                    <div>
                        <div className='add'>

                        </div>

                    </div>
                </div>

            </div>

        </>
    );
}
export default CssTask;