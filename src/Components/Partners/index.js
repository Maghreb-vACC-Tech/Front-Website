import React ,{ useState } from "react"
import './index.css';


// Partners Logo
import vAFR from "../../Ressources/Images/Partners/AFR.png"
import vRAM from "../../Ressources/Images/Partners/vRAM.png"
import vABY from "../../Ressources/Images/Partners/vABY.png"



function Partners(props){
    return(
        <div className='Partners' id='Partners'>
            <div><h1>Our partners</h1></div>
            <div className='PartnersContainer'>
                <a href="https://airfrancevirtuel.com/"><img alt="" src={vAFR}></img></a>
                <a href="https://royalairmarocvirtual.com/"><img alt="" src={vRAM}></img></a>
                <a href="https://abyvirtual.com/"><img alt="" src={vABY}></img></a>
            </div>
        </div>
    )
}

export default Partners;