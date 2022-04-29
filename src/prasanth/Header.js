import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div id="content"  >

            <div class="row">
                <div id="content_nav" >
                    <div >
                        <label for="search"><i class="fa fa-search"></i></label>
                        <li className='mark1'>
                            <i class="fa fa-plus"></i> Add
                        </li>
                        <li className='mark2'>
                            <i class="fa fa-envelope"></i>
                        </li>
                        <li className='mark3'>
                            <span>Mark Henry &nbsp;</span>
                            <i class="fa fa-caret-down"></i>
                        </li>
                        <li className='mark4'>
                            <i class="fa fa-bell"></i>
                        </li>
                    </div>


                </div>
            </div>
        </div>



    )
}

export default Header