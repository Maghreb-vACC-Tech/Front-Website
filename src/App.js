import './App.css';
import './Styles/Mobile.css'
import './Styles/VerticalScreen.css'

import React , { useState, useEffect } from "react"

// Logo
import SmallLogo from "./Ressources/Images/Logo/logo.svg"
import BigLogo from "./Ressources/Images/Logo/logo-big.svg"
import WhiteBigLogo from "./Ressources/Images/Logo/Maghreb_vACC_Full_white_trans.png"

// Partners
import vAFR from "./Ressources/Images/Partners/AFR.png"
import vRAM from "./Ressources/Images/Partners/vRAM.png"
import vABY from "./Ressources/Images/Partners/vABY.png"

// Staff

// Components
import Navbar from './Components/Navbar';
import Question from './Components/FAQ';
import DisplayedStaff from './Components/Displayed-Staff';


// import Data from './MaghrebSetup'


function App() {
    const [events, setEvents] = useState([]);
    // Staff 
    const StaffAnimationClass = "animate__fadeIn"
    const StaffAnimationRemovalDuration = 500

    // For HeaderBar
    const [Logo, SetLogo] = useState(BigLogo);
    let PreviousScrollValue = 0;
    
    const appEnv = process.env.REACT_APP_APP_ENV;
    
    useEffect(() => {

        // Events
        if(appEnv=="DEV"){
            fetch("http://localhost:1000/MaghrebEvents")
            .then(res => res.json())
            .then(data => {
                setEvents(data);
            })
            .catch(error => {
                console.error("HandledError ", error);
            });
        }
        else{
            fetch("https://api.vatsim.ma/MaghrebEvents")
            .then(res => res.json())
            .then(data => {
                setEvents(data);
            })
            .catch(error => {
                console.error("HandledError :", error);
            });

        }






        // Scroll
        const windowWidth = window.innerWidth;
        if(windowWidth > 768){
        window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;

        
        //Scroll Animation For NavBar 
        if (scrollPosition > 100){
            document.querySelector(".Navbar").style.backgroundColor = "rgba(25 ,26 ,29 , 0.95)"
            document.querySelector(".Navbar").style.boxShadow = "0.1px 0.1px 1vw #0F1011"
            document.querySelector(".GetStarted").style.backgroundColor = "rgb(0, 155, 60)"
            document.querySelector(".Logo-Image").style.width = "4vw"
            document.querySelector(".Navbar").style.backdropFilter  = "contrast(90%) saturate(230%) blur(20px) brightness(110%)"
            SetLogo(SmallLogo)
        }
        if (scrollPosition < 100){
            document.querySelector(".Navbar").style.backgroundColor = "rgba(18, 19, 22, 0)"
            document.querySelector(".GetStarted").style.backgroundColor = "rgb(0, 155, 60)"
            document.querySelector(".Navbar").style.boxShadow = "none"
            document.querySelector(".Logo-Image").style.width = "7vw"
            document.querySelector(".Navbar").style.backdropFilter  = "contrast(100%) saturate(100%) blur(0px) brightness(100%)"
            SetLogo(BigLogo)
        } 
        

        });
    }}, []);

    
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
        <div className="App">

        {/* Home */}
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

        {/* About */}
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

        {/* Event */}
        {events.length > 0 && (
            <div className='Events' id='Events'>
                <div className=''>
                    <h1>Upcoming Events</h1>
                </div>
                <div>
                    {events.map((event) => (
                        <div className='event animate__fadeInLeft'>
                            <a href={event.link}>
                                <img src={event.banner} alt="Event" />
                            </a>
                        </div>
                    ))}
                </div>
                <div className='animate__fadeInUp'>
                    <a href='https://vatsim.net/events/'>Check More</a>
                </div>
            </div>
            )}
        
        
        
        
        {/* Partners */}
        <div className='Partners' id='Partners'>
            <div><h1>Our partners</h1></div>
            <div className='PartnersContainer'>
                <a href="https://airfrancevirtuel.com/"><img alt="" src={vAFR}></img></a>
                <a href="https://royalairmarocvirtual.com/"><img alt="" src={vRAM}></img></a>
                <a href="https://abyvirtual.com/"><img alt="" src={vABY}></img></a>
            </div>
        </div>

        {/* FAQ */}
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

        {/* Timelapses */}
        <div className='Timelapses' id='Timelapses'>
            <div><h1>Timelapse</h1></div>
            <div className='TimelapsesContainer'>
            <iframe
                width="90%"
                height="643"
                src="https://www.youtube.com/embed/Te0vxdyxwRY?autoplay=1&mute=1"
                title="Time Lapse - Cross The Pond Westbound 2024 (Ground/Radar)┃CASABLANCA [GMMN]"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
            </div>
        </div>

        {/* Staff */}
        <div className='Staff' id="Staff">

            <div className='Staff-Title'><h1>Our Team</h1></div>

            <div className='Selected-Staff'>
                <div className='Selected-Staff-Container animate__fadeInLeft'>
                <div className='Selected-Staff-Container-1'>
                    <div className='Selected-Staff-Container-PDP'>
                    </div>
                    <div className='Selected-Staff-Container-TXT'><h1>Réda F.</h1><h2>ACCMA1</h2><p>1171306</p></div>
                </div>
                
                <div className='Selected-Staff-Container-2'>
                    <div className='Selected-Staff-Container-2-description'>
                    <h1>vACC Director : </h1>
                    <p>Leader of the team that runs the vACC and maintains the smooth operation of the Virtual airspace. </p>
                    </div>
                    <div className='Selected-Staff-Container-2-link'>
                    <a href='#General'><i class="fa-regular fa-envelope"></i><span>Mail</span></a> 
                    </div>
                </div>
                </div>
                
            </div>
            <div className='Displayed-Staff'>
            
            <DisplayedStaff
                function="Director"
                name="Réda F."
                id="Reda"
                onClick={() => {
                    setTimeout(()=>{
                    document.querySelector(".Selected-Staff-Container").classList.remove(StaffAnimationClass)
                    },StaffAnimationRemovalDuration)

                    document.querySelector(".Selected-Staff-Container-TXT h1").innerHTML = "Réda F."
                    document.querySelector(".Selected-Staff-Container-TXT h2").innerHTML = "ACCMA1"
                    document.querySelector(".Selected-Staff-Container-TXT p").innerHTML = "1171306"
                    document.querySelector(".Selected-Staff-Container-2-description h1").innerHTML = "Director : "
                    document.querySelector(".Selected-Staff-Container-2-description p").innerHTML = "Leader of the Maghreb vACC, responsible for overseeing the overall operation of the Virtual Area Control Center."
                    
                            
                    document.querySelector(".Selected-Staff-Container").classList.add(StaffAnimationClass)

                    
                }}
            />
            
            <DisplayedStaff
                function="Head of Operations"
                name="Bobbie C."
                id="Bobbie"
                            
                onClick={() => {
                    document.querySelector(".Selected-Staff-Container-TXT h1").innerHTML = "Bobbie C."
                    document.querySelector(".Selected-Staff-Container-TXT h2").innerHTML = "ACCMA6"
                    document.querySelector(".Selected-Staff-Container-TXT p").innerHTML = "1444138"
                    document.querySelector(".Selected-Staff-Container-2-description h1").innerHTML = "Head of Operations : "
                    document.querySelector(".Selected-Staff-Container-2-description p").innerHTML = "Operations Director of the MaghrebVacc, overseeing the day-to-day operations of the center and ensuring the efficient management of resources."
                    document.querySelector(".Selected-Staff-Container").classList.add(StaffAnimationClass)

                    setTimeout(()=>{
                        document.querySelector(".Selected-Staff-Container").classList.remove(StaffAnimationClass)
                    },StaffAnimationRemovalDuration)
                
                }}
            />
            <DisplayedStaff
                function="Technology Director"
                name="Ilyass B."
                id="Ilyass"

                onClick={() => {

                setTimeout(()=>{
                        document.querySelector(".Selected-Staff-Container").classList.remove(StaffAnimationClass)
                    },StaffAnimationRemovalDuration)

                    document.querySelector(".Selected-Staff-Container-TXT h1").innerHTML = "Ilyass B."
                    document.querySelector(".Selected-Staff-Container-TXT h2").innerHTML = "ACCMA8"
                    document.querySelector(".Selected-Staff-Container-TXT p").innerHTML = "1674212"
                    document.querySelector(".Selected-Staff-Container-2-description h1").innerHTML = "Technology Director : "
                    document.querySelector(".Selected-Staff-Container-2-description p").innerHTML = "Technology Director of the MaghrebVacc, responsible for the technical infrastructure and systems used by MaghrebVACC."
                                
                    document.querySelector(".Selected-Staff-Container").classList.add(StaffAnimationClass)

                
                }}
            />
            <DisplayedStaff
                function="Head of ATM Training"
                name="Emir D."
                id="Emir"     

                onClick={() => {
                    document.querySelector(".Selected-Staff-Container-TXT h1").innerHTML = "Emir D."
                    document.querySelector(".Selected-Staff-Container-TXT h2").innerHTML = "ACCMA3"
                    document.querySelector(".Selected-Staff-Container-TXT p").innerHTML = "1516924"
                    document.querySelector(".Selected-Staff-Container-2-description h1").innerHTML = "ATC Training Deputy Director : "
                    document.querySelector(".Selected-Staff-Container-2-description p").innerHTML = "Tech Director of the MaghrebVacc, assisting the Training Director in the training and development of air traffic controllers."
                                
                    document.querySelector(".Selected-Staff-Container").classList.add(StaffAnimationClass)

                    setTimeout(()=>{
                        document.querySelector(".Selected-Staff-Container").classList.remove(StaffAnimationClass)
                    },StaffAnimationRemovalDuration)
                
                }}
            />
            <DisplayedStaff
                function="Deputy Director"
                name="Hayder"
                id="Hayder"
                
                onClick={() => {
                    setTimeout(()=>{
                    document.querySelector(".Selected-Staff-Container").classList.remove(StaffAnimationClass)
                    },StaffAnimationRemovalDuration)

                    document.querySelector(".Selected-Staff-Container-TXT h1").innerHTML = "Hayder "
                    document.querySelector(".Selected-Staff-Container-TXT h2").innerHTML = "ACCMA52"
                    document.querySelector(".Selected-Staff-Container-TXT p").innerHTML = "xxxxxxx"
                    document.querySelector(".Selected-Staff-Container-2-description h1").innerHTML = "Deputy Director : "
                    document.querySelector(".Selected-Staff-Container-2-description p").innerHTML = "Deputy Director of the Maghreb vACC, assisting the Director in managing the various departments and ensuring the smooth operation of the center"
                    
                
                    document.querySelector(".Selected-Staff-Container").classList.add(StaffAnimationClass)

                    
                }}
            />
            <DisplayedStaff
                function="Special Advisor"
                name="Luan W."
                id="Luan"
                
                onClick={() => {

                    setTimeout(()=>{
                        document.querySelector(".Selected-Staff-Container").classList.remove(StaffAnimationClass)
                    },StaffAnimationRemovalDuration)

                    document.querySelector(".Selected-Staff-Container-TXT h1").innerHTML = "Luan W."
                    document.querySelector(".Selected-Staff-Container-TXT h2").innerHTML = "ACCMA41"
                    document.querySelector(".Selected-Staff-Container-TXT p").innerHTML = "1448616"
                    document.querySelector(".Selected-Staff-Container-2-description h1").innerHTML = "Head of ATM Training : "
                    document.querySelector(".Selected-Staff-Container-2-description p").innerHTML = "Training Director of the Maghreb vACC, responsible for the training and development of air traffic controllers within MaghrebVACC."
                                
                    document.querySelector(".Selected-Staff-Container").classList.add(StaffAnimationClass)

                
                }}
            />
            
            <DisplayedStaff
                function="Head of Operations"
                name="Ali B."
                id="Ali"
                            
                onClick={() => {
                    document.querySelector(".Selected-Staff-Container-TXT h1").innerHTML = "Ali B."
                    document.querySelector(".Selected-Staff-Container-TXT h2").innerHTML = "ACCMA2"
                    document.querySelector(".Selected-Staff-Container-TXT p").innerHTML = "xxxxxxx"
                    document.querySelector(".Selected-Staff-Container-2-description h1").innerHTML = "Deputy Director : "
                    document.querySelector(".Selected-Staff-Container-2-description p").innerHTML = "Lorem ipsum Deputy Director free text test test Lorem ipsum Deputy Director free text test test."
                    document.querySelector(".Selected-Staff-Container").classList.add(StaffAnimationClass)

                    setTimeout(()=>{
                        document.querySelector(".Selected-Staff-Container").classList.remove(StaffAnimationClass)
                    },StaffAnimationRemovalDuration)
                
                }}
            />
            </div>
        </div>

        <div className='Footer' id="Footer">
            <div className='Footer-Container'>
            <div className='Footer-Links'>
                <div><img alt="" src={SmallLogo}/></div>
                <div>
                <h1>Policies</h1>
                <a href='https://vats.im/gen-pol'>Vacc Policies</a>
                <a href='https://drive.google.com/file/d/1M9qXrwYq0uWSRU61MbCD0KEw8APYzwrM/view'>ATC Policy</a>
                <a href='https://drive.google.com/file/d/1pND_VHfaur3CK1iIRZgXWwDz626PDLMI/view'>Membership Policy</a>
                <a href='https://drive.google.com/file/d/1PVu8XezrvSjD8InwmuVx4PNZiOy5oBqm/view'>Privacy Policy</a>
                </div>
                <div>
                <h1>Resources</h1>
                <a href='https://drive.google.com/file/d/1J1jqpe-ZWGi2yAjUDGEMNPA4T6hcaUWE/view'>Training Program</a>
                <a href='https://drive.google.com/drive/folders/1Gx_LheOEufbLFOX43pYPlukyYhAyEUWs'>Charts</a>
                <a href='https://drive.google.com/drive/folders/1mp-3ELOHUdaOs_W_uMAq5agw1pwcguhc?usp=sharing'>Branding</a>
                </div>
                <div>
                <h1>Controllers</h1>
                <a href='https://docs.google.com/spreadsheets/d/1hj-tY4BsXH9AuWTwvmyqb5JEXekRTOy0/edit?usp=sharing&ouid=106937283952007297729&rtpof=true&sd=true'>Roster</a>
                {/* <a href='#General'>Get Started</a> */}
                <a href='https://docs.vatsim.ma/'>Docs</a>
                </div>
                <div>
                <h1>Contact</h1>
                <a href='https://community.vatsim.net/login'>Vatsim community</a>
                <a href='mailto:management@vatsim.ma'>Pilot Feedback</a>
                {/* <a href='mailto:management@vatsim.ma'>management@vatsim.ma</a> */}
                </div>
            </div>
            <div className='Footer-Foot'>
                <h1>© 2024 - Maghreb vACC. All Rights Reserved.</h1>
                <a href='https://www.instagram.com/maghrebvacc'><i class="fa-brands fa-instagram"></i></a>
                <a href='https://www.youtube.com/@MaghrebvACC'><i class="fa-brands fa-youtube"></i></a>
                <a href='https://community.vatsim.net/'><i class="fa-brands fa-discord"></i></a>
            </div>
            </div>
        </div>
        </div>
    )



}

export default App;