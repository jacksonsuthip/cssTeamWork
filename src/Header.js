import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div id="content"  >

            <div class="row">
                <div id="content_nav" >
                    <form>
                        <div class="input-field">
                            {/* <input id="search" type="search" /> */}
                            <label for="search"><i class="fa fa-search"></i></label>
                        </div>
                    </form>

                    <div class="nav_header ">
                        <li>
                            <i class="fa fa-plus"></i> Add
                        </li>
                        <li>
                            <i class="fa fa-envelope"></i>
                        </li>
                        <li>
                            <span>Mark Henry</span>
                            <i class="fa fa-caret-down"></i>
                        </li>
                        <li>
                            <i class="fa fa-bell"></i>
                        </li>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Header