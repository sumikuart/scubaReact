import React from 'react';
import './css/shop.css'
import { NavLink} from 'react-router-dom';

// IMG
import reg from '../../assets/reg.jpg'
import finde from '../../assets/finde.jpg'
import hanske from '../../assets/hanske.jpg'

const Shop = () => {

return(
   <section id="Shop">

<div id="shopheadline">
    <p>MEST POPULÆRE DYKKERUDSTYR</p>
    <div id="backlogshop"></div>

</div>

<div id="shopcatalog">

    <div className="shopbox">
        <figure>
            <img src={reg} alt="" />
            <figcaption>REGUALTOR MED RESIST <span>KR.899.-</span></figcaption>
        </figure>

    </div>
    <div className="shopbox">
        <figure>
            <img src={finde} alt="" />
            <figcaption>REJSEFINNE <span>KR.999.-</span></figcaption>
        </figure>
    </div>
    <div className="shopbox">
        <figure>
        <img src={finde} alt="" />
            <figcaption>REJSEFINNE <span>KR.999.-</span></figcaption>
        </figure>
    </div>
    <div className="shopbox">
        <figure>
            <img src={hanske} alt="" />
            <figcaption>COLDWATER GLOVS <span>KR.1499.-</span></figcaption>
        </figure>
    </div>

</div>

<div id="shopend">
    <NavLink to="/Shop">SE MERE LÆKKERT UDSTYR HER!</NavLink>
</div>

</section>
    
)

}

export default Shop