import React ,{ useState } from "react"
import './index.css';

// Logos

import SmallLogo from "../../Ressources/Images/Logo/logo.svg"
import BigLogo from "../../Ressources/Images/Logo/logo-big.svg"
import WhiteBigLogo from "../../Ressources/Images/Logo/Maghreb_vACC_Full_white_trans.png"


// Common Components
import Navbar from '../Common/Navbar/';

function Home(props){

    const events = props.events
    const [Logo, SetLogo] = useState(BigLogo);
        
    let PreviousScrollValue = 0;
    function hideNavBar() {

        if(PreviousScrollValue > window.scrollY) {
            // up
            document.querySelector(".Navbar").style.transform = "translateY(0vh)"
            PreviousScrollValue = window.scrollY;
        }

        if(PreviousScrollValue < window.scrollY) {
            // down
            document.querySelector(".Navbar").style.transform = "translateY(-20vh)"
            PreviousScrollValue = window.scrollY;
        }


    }

    window.addEventListener('scroll', hideNavBar); 


    


    return(
        <div className='Home'id='Home'>
            <div className='HomeOverlay'>

            <Navbar 
                Event={
                    events.length > 0 ? (
                        <div>
                            <a href="#Events">Events</a>
                        </div>
                    ) : (
                        <>
                        </>
                    )
                }
                Logo={Logo}
            ></Navbar>

            <div className='HomeText animate__fadeIn'>
                <div>
                <h1>Maghreb vACC</h1>
                </div>
                <div>
                <p  onClick={()=>{hideNavBar()}}>Fly and control over the Atlas mountains</p>
                </div>
            </div>
            <div className='ScrollDown animate__fadeInUp'>
                <a href='#About'>Scroll down</a><i class="fa-solid fa-chevron-down"></i>
            </div>

            </div>
        </div>
    )
}

export default Home;