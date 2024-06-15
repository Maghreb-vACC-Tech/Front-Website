import React ,{ useState } from "react"
import './index.css';

// Logos
import WhiteBigLogo from "../../Ressources/Images/Logo/Maghreb_vACC_Full_white_trans.png"




function About(props){


    


    return(
        <div className='About' id='About'>
            <div className='AboutText'>
                <div>
                    <h1>About</h1>
                
                    <p>Maghreb vACC is a subdivision of VATMENA, which is the representative of the VATSIM network in the MENA region. Maghreb vACC provides air traffic control service in the moroccan,

                        algerian and tunisian airspaces. Additionally, it has an active community of pilots, who togeth-
                        er with the controllers create one of the most realistic online flight and air traffic control envi-
                        ronments. Also, it is in charge of the development of online activity, events, ATC instruction

                        and providing its members with the corresponding services for their progress within the community.</p>
                </div>
                
                
            </div>
            <div className='AboutImage'>
                <img alt="" src={WhiteBigLogo}></img>
            </div>
        </div>
    )
}

export default About;