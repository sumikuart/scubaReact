import React from 'react';
import { NavLink} from 'react-router-dom';
import './css/nav.css'

// IMG

import logo from '../assets/ScubaLiving_logo_small.svg';
import login from '../assets/lock-icon-300x300.png'

const Navbar = () => {

return(
<header>

    <img src={logo} alt=""/>
    
            <nav>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">DYKKERUDSTYR</a></li>
                    <li><a href="#">DYKKERREJSER</a></li>
                    <li><a href="#">DYKKERKURSER</a></li>
                    <li><a href="#">KONTAKT</a></li>
                    <li><a href="#">OM OS</a></li>
                </ul>
            </nav>

            <div id="search">
                <input type="text" />
                <button>Søg</button>
            </div>

            
            <div id="login">
                <img src={login} alt="" />
                <p>LOGIN</p>
            </div>

</header>
)

}

export default Navbar