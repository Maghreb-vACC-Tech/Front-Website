import React ,{ useState } from "react"
import './index.css';

// Logos
import WhiteBigLogo from "../../Ressources/Images/Logo/Maghreb_vACC_Full_white_trans.png"

// Common Component
import Question from '../../Components/Common/FAQ';


function FAQ(props){


        
    function JoinFormSliderBack(classes) {
        document.querySelector(classes).style.display="none"
        document.querySelector(".JoinForm-Question1").style.display="block"
    }


    function JoinFormSliderTrue() {
        document.querySelector(".JoinForm-Question-true").style.display="block"
        document.querySelector(".JoinForm-Question1").style.display="none"
    }


    function JoinFormSliderFalse() {
        document.querySelector(".JoinForm-Question-false").style.display="block"
        document.querySelector(".JoinForm-Question1").style.display="none"
    }



    return(
        <div className='FAQ' id='FAQ'>
        <div className='FAQ-Title'><h1>Frequently Asked Questions</h1></div>
        
        <Question
            Question = "Who are we?"
            
            Answer = {
                <>
                    <p>MaghrebVACC is a volunteer-run organization that provides air traffic control services for virtual pilots in the Maghreb region of North Africa. It is part of the VATSIM network and is staffed by a team of passionate air traffic controllers who are committed to providing a realistic and enjoyable virtual flying experience. The organization operates using the same procedures and guidelines as real-world air traffic control, making it a valuable training ground for aspiring air traffic controllers. Through its services, MaghrebVACC helps to promote aviation and air traffic control knowledge among virtual pilots and enthusiasts.</p>
                    <p className="RedWarning">This website and its services are NOT affiliated with the actual Casablanca FIR, Alger FIR, Tunis FIR or any governing aviation body.</p>
                </>
            }
            index = "false"
            number = "Q1"
            sign = "1"
        />

        <Question
            Question = "How to join?"
            Answer = {
                <div className="JoinForm" id="JoinForm" >
                <div id="JoinForm-noscroll" className="JoinForm-Question1 animate__fadeInRight">
                    <p>Are Part of the Europe Middle East and Africa (EMEA) region?</p>
                    <a href="#JoinForm-noscroll" onClick={()=>{JoinFormSliderTrue()}}>Yes</a>
                    <a href="#JoinForm-noscroll" onClick={()=>{JoinFormSliderFalse()}}>No</a>
                </div>
                <div className="JoinForm-Question-true animate__fadeInRight">
                    <a href="https://helpdesk.vatsim.me/open.php" target='blank'>Open Ticket</a>
                    <p onClick={()=>{JoinFormSliderBack(".JoinForm-Question-true")}}>Back</p>
                </div>
                <div className="JoinForm-Question-false animate__fadeInRight">
                    <a href="https://my.vatsim.net/user/region" target='blank'>Change Region</a>
                    <p onClick={()=>{JoinFormSliderBack(".JoinForm-Question-false")}}>Back</p>
                </div>
                </div>
            }
            index = "false"
            number = "Q2"
            sign = "2"
        />

        <Question
            Question = "Why join our discord community ?"
            Answer = {
                <div className="JoinForm" id="JoinForm" >
                <div >
                    <p><br/><br/><br/><br/>As a VACC , we use our discord server often for communication, announcement, tickets , ... . <br/><br/>You can find the link to join our discord server in the Vatsim Community</p>
                </div>
                <div id="JoinForm-noscroll" className="JoinForm-Question1 animate__fadeInRight">
                    <p></p>
                    <a href="https://community.vatsim.net/" target='blank'>Vatsim Community</a>
                </div>
                
                </div>
            }
            index = "false"
            number = "Q3"
            sign = "3"
        />
        
    </div>
    )
}

export default FAQ;