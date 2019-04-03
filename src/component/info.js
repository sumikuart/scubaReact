import React from 'react';
import './css/info.css'


// IMG
import backdropinfoimg from '../assets/scuba2.jpg'


const InfoSection = () => {

return(

    
        <section id="info">

<img src={backdropinfoimg} alt="" />

<div id="infotekstbox">
    <p>THE BEST WAY TO OBSERVE A FISH IS TO BECOME A FISH</p>
    <p id="infotekstboxsmall"> JACQUES COUSTEAU</p>
</div>
</section>
)

}

export default InfoSection