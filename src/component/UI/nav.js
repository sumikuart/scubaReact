import React from 'react';
import { NavLink} from 'react-router-dom';
import './css/nav.css'

// IMG

import logo from '../../assets/ScubaLiving_logo_small.svg';
import login from '../../assets/lock-icon-300x300.png'

const Navbar = () => {

return(
<header>


    <img src={logo} alt=""/>
    
            <nav>
                <ul>
                    <li><NavLink to="/Home" >HOME</NavLink></li>
                    <li><NavLink to="/Shop" >DYKKERUDSTYR</NavLink></li>
                    <li><NavLink to="/Rejser">DYKKERREJSER</NavLink></li>
                    <li><NavLink to="/Kurser">DYKKERKURSER</NavLink></li>
                    <li><NavLink to="/Contact">KONTAKT</NavLink></li>
                    <li><NavLink to="/About">OM OS</NavLink></li>
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