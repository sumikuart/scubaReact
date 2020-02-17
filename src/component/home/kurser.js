import React from 'react';
import './css/kurser.css'
import { NavLink} from 'react-router-dom';

// IMG
import padi from '../../assets/padi.jpg'

const Kurser = () => {

return(
 
    
            <section id="kurser">
                <div id="KurserHeadline">
                    <p>PADI - DYKKERCERIFIKAT</p>
                    <div id="backlogkurser"></div>
                </div>

                <div id="kursercontent">

                    <div id="kusertekst">
                        <h2>TAG ET INTERNATIONALT ANERKENDT DYKKERCERIFIKAT</h2>
                        <p>Her finder du et stort udvalg af dykkerkurser lige fra begynder til professionel. Vi er et af Danmarks førende dykkercentre.
                            Som uddanner fra PADI organisationen. Når du vælger  at tage et dykkercerifikat hos os, får du ikke kun et internationalt
                            anerkendt dykkercerifikat til markedets bedste priser, du får også et  dykkerkursus, hvor kvaliteten er i top
                        </p>
                        <p>Vi har kompetente instruktører på vores dykkerkurser. Erfaring, tillid og sikkerhed er vigtigt. når du dykker med os. derfor
                            står vi klar med et stort hold af kompetente instruktører
                        </p>
                    </div>
                    <div id="kurserbilled">
                        <img src={padi} alt="" />
                    </div>

                </div>

                <div id="kurserend">
                    <NavLink to="/Kurser">SE ALLE KURSER OG CERFIKATER HER!</NavLink>
                </div>

            </section>

    
)

}

export default Kurser