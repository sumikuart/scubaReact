import React from 'react';
import './css/eventyr.css'
import { NavLink} from 'react-router-dom';

// IMG
import malta from '../../assets/malta.jpg'
import norge from '../../assets/norge.JPG'


const Eventyr = () => {

return(
  
            <section id="eventyr">

<div id="eventyrheadling">
    <p>DYK UD I VERDEN</p>
    <div id="backlogeventyr"></div>
</div>

<div id="eventyrcontent">

    <div className="eventyrbox">
        <div className="eventyrpadding">
            <img src={malta} alt="" />
        </div>

        <div className="buttomeventyr">
            <h2>MALTA</h2>
            <p>Oplev skønne malta og det helt fantastiske dyreliv og sammehold. Vi arrgerer
                dykkerrejser til malta hele året rundt
            </p>
        </div>

    </div>

    <div className="eventyrbox">
        <div className="eventyrpadding">
            <img src={norge} alt="" />
        </div>

        <div className="buttomeventyr">
            <h2>NORGE</h2>
            <p>NordeEuropas bedste dykkerspots ligger i Norge. Vi har 25 års erfaring med dyk i Norge.
                Oplev det klareste vand i verden!</p>
        </div>
    </div>

</div>
<div id="eventyrend">
        <NavLink to="/Rejser">SE FLERE DESTINATIONER OG MULIGHEDER HER!</NavLink>
    </div>


</section>

)

}

export default Eventyr