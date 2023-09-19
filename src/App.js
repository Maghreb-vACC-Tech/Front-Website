import './App.css';
import './Styles/Mobile.css'
import './Styles/VerticalScreen.css'

import React , { useState, useEffect } from "react"




// Logo
import SmallLogo from "./Ressources/Images/Logo/logo.svg"
import BigLogo from "./Ressources/Images/Logo/logo-big.svg"

// Events
import event1 from "./Ressources/Images/Events/1.jpg"
import event2 from "./Ressources/Images/Events/2.jpg"
import event3 from "./Ressources/Images/Events/3.jpg"

// Staff
import RedaStaffPic from "./Ressources/Images/Staff/reda.png"
// Components
import Navbar from './Components/Navbar';
import Question from './Components/FAQ';
import DisplayedStaff from './Components/Displayed-Staff';





function App() {

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /////////////////////////////// Params////////////////////////////////

    // Staff 
    const StaffAnimationClass = "animate__fadeIn"
    const StaffAnimationRemovalDuration = 500


    // Join Code
    
    function JoinFormSliderBack(classes) {
        document.querySelector(classes).style.display="none"
        document.querySelector(".JoinForm-Question1").style.display="block"
    }

    function JoinFormSlider() {
        document.querySelector(".JoinForm-Question1").style.display="block"
        document.querySelector(".JoinForm-Question").style.display="none"
    }


    function JoinFormSliderTrue() {
        document.querySelector(".JoinForm-Question-true").style.display="block"
        document.querySelector(".JoinForm-Question1").style.display="none"
    }


    function JoinFormSliderFalse() {
        document.querySelector(".JoinForm-Question-false").style.display="block"
        document.querySelector(".JoinForm-Question1").style.display="none"
    }



        const [ScrollPositionY, setScrollPositionY] = useState(0);
        const [Logo, SetLogo] = useState(BigLogo);






    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Scroll Effect 
        useEffect(() => {
            const windowWidth = window.innerWidth;
            if(windowWidth > 768){
            window.addEventListener("scroll", () => {
            const scrollPosition = window.scrollY;
            setScrollPositionY(scrollPosition);

            
            //Scroll Animation For NavBar 
            if (scrollPosition > 100){
            document.querySelector(".Navbar").style.backgroundColor = "rgba(25 ,26 ,29 , 0.95)"
            document.querySelector(".Navbar").style.boxShadow = "0.1px 0.1px 1vw #0F1011"
            document.querySelector(".GetStarted").style.backgroundColor = "rgb(0,155,60)"
            document.querySelector(".Logo-Image").style.width = "4vw"
            document.querySelector(".Navbar").style.backdropFilter  = "contrast(90%) saturate(230%) blur(20px) brightness(110%)"
            SetLogo(SmallLogo)
            }
            if (scrollPosition < 100){
            document.querySelector(".Navbar").style.backgroundColor = "rgba(18, 19, 22, 0)"
            document.querySelector(".GetStarted").style.backgroundColor = "rgb(77,77,77)"
            document.querySelector(".Navbar").style.boxShadow = "none"
            document.querySelector(".Logo-Image").style.width = "7vw"
            document.querySelector(".Navbar").style.backdropFilter  = "contrast(100%) saturate(100%) blur(0px) brightness(100%)"
            SetLogo(BigLogo)
            } 
            
            //Scroll Animation For About 
            if (scrollPosition > 500){
            document.querySelector(".AboutText").style.visibility="visible"
            document.querySelector(".AboutText").classList.add("animate__fadeInLeft")
            }

            //Scroll Animation For About 
            //document.querySelectorAll(".event").style.visibility = 
            if (scrollPosition > 800){
            document.querySelector(".AboutText").style.visibility="visible"
            document.querySelector(".AboutText").classList.add("animate__fadeInLeft")
            }
            
            // if (scrollPosition > 1200){
            //   document.querySelectorAll(".event").style.visibility="visible"
            // }

            });
        }


        

        }, []);


          let PreviosScrollValue = 0;

            function hideNavBar() {

            if(PreviosScrollValue > window.scrollY) {
                // up
                document.querySelector(".Navbar").style.transform = "translateY(0vh)"
                console.log("up")
            }

            if(PreviosScrollValue < window.scrollY) {
                // down
                document.querySelector(".Navbar").style.transform = "translateY(-10vh)"
                console.log("down")
            }

            PreviosScrollValue = window.scrollY;

            }

            window.addEventListener('scroll', hideNavBar); 


    return(
        <div className="App">

        {/* Home */}
        <div className='Home'id='Home'>
            <div className='HomeOverlay'>

            <Navbar Logo={Logo}></Navbar>

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
                <h1>About</h1>
                <p>Maghreb vACC is a subdivision of VATMENA, which is the representative of the VATSIM net-
                    work in the MENA region. Maghreb vACC provides air traffic control service in the moroccan,

                    algerian and tunisian airspaces. Additionally, it has an active community of pilots, who togeth-
                    er with the controllers create one of the most realistic online flight and air traffic control envi-
                    ronments. Also, it is in charge of the development of online activity, events, ATC instruction

                    and providing its members with the corresponding services for their progress within the com-
                    munity.</p>
            </div>
            <div className='AboutText'>
            {/* <img src={} ></img> */}
            </div>
        </div>

        {/* Event */}
        <div className='Events' id='Events'>
            <div className=''>
            <h1>Upcoming Events</h1>
            </div>
            <div>
            <div className='event animate__fadeInLeft'>
                <img src={event1}></img>
            </div>
            <div className='event animate__fadeIn'>
                <img src={event2}></img>
            </div>
            <div className='event animate__fadeInRight'>
                <img src={event3}></img>
            </div>
            </div>
            <div className='animate__fadeInUp'>
            <a href='#'>Check More</a>
            </div>
            
        </div>

        {/* FAQ */}
        <div className='FAQ' id='FAQ'>
            <div className='FAQ-Title'><h1>Frequently Asked Questions</h1></div>
            
            <Question
            Question = "Who are we?"
            
            Answer = "MaghrebVACC is a volunteer-run organization that provides air traffic control services for virtual pilots in the Maghreb region of North Africa. It is part of the VATSIM network and is staffed by a team of passionate air traffic controllers who are committed to providing a realistic and enjoyable virtual flying experience. The organization operates using the same procedures and guidelines as real-world air traffic control, making it a valuable training ground for aspiring air traffic controllers. Through its services, MaghrebVACC helps to promote aviation and air traffic control knowledge among virtual pilots and enthusiasts."
            index = "false"
            number = "Q1"
            sign = "1"
            />

            <Question
            Question = "How to join?"
            Answer = {
                <div className="JoinForm" id="JoinForm" >
                {/* <div  className="JoinForm-Question animate__fadeInLeft">
                    <p onClick={()=>{JoinFormSlider()}}>Next</p>
                    
                </div> */}
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
            Question = "How to join?"
            Answer = "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
            index = "false"
            number = "Q3"
            sign = "3"
            />
            
            <Question
            Question = "How to join?"
            Answer = "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
            index = "false"
            number = "Q4"
            sign = "4"
            />
        </div>

        <div className='Staff' id="Staff">

            <div className='Staff-Title'><h1>Our Team</h1></div>

            <div className='Selected-Staff'>
                <div className='Selected-Staff-Container animate__fadeInLeft'>
                <div className='Selected-Staff-Container-1'>
                    <div className='Selected-Staff-Container-PDP'>
                    {/* <img src={RedaStaffPic}></img> */}
                    </div>
                    <div className='Selected-Staff-Container-TXT'><h1>Réda F.</h1><h2>ACCMA1</h2><p>1171306</p></div>
                </div>
                
                <div className='Selected-Staff-Container-2'>
                    <div className='Selected-Staff-Container-2-description'>
                    <h1>vACC Director : </h1>
                    <p>Leader of the team that runs the vACC and maintains the smooth operation of the Virtual airspace. </p>
                    </div>
                    <div className='Selected-Staff-Container-2-link'>
                    <a href='#'><i class="fa-regular fa-envelope"></i><span>Mail</span></a> 
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
            function="Deputy Director"
            name="Aymen S."
            id="Aymen"
            
            onClick={() => {
                setTimeout(()=>{
                document.querySelector(".Selected-Staff-Container").classList.remove(StaffAnimationClass)
                },StaffAnimationRemovalDuration)

                document.querySelector(".Selected-Staff-Container-TXT h1").innerHTML = "Aymen S."
                document.querySelector(".Selected-Staff-Container-TXT h2").innerHTML = "ACCMA2"
                document.querySelector(".Selected-Staff-Container-TXT p").innerHTML = "1356990"
                document.querySelector(".Selected-Staff-Container-2-description h1").innerHTML = "Deputy Director : "
                document.querySelector(".Selected-Staff-Container-2-description p").innerHTML = "Deputy Director of the Maghreb vACC, assisting the Director in managing the various departments and ensuring the smooth operation of the center"
                
            
                document.querySelector(".Selected-Staff-Container").classList.add(StaffAnimationClass)

                
            }}
            />
            <DisplayedStaff
                function="Special Advisor"
                name="Ali B."
                id="Ali"
                
                onClick={() => {

                setTimeout(()=>{
                    document.querySelector(".Selected-Staff-Container").classList.remove(StaffAnimationClass)
                },StaffAnimationRemovalDuration)

                document.querySelector(".Selected-Staff-Container-TXT h1").innerHTML = "Ali B."
                document.querySelector(".Selected-Staff-Container-TXT h2").innerHTML = "ACCMA3"
                document.querySelector(".Selected-Staff-Container-TXT p").innerHTML = "1448616"
                document.querySelector(".Selected-Staff-Container-2-description h1").innerHTML = "Head of ATM Training : "
                document.querySelector(".Selected-Staff-Container-2-description p").innerHTML = "Training Director of the Maghreb vACC, responsible for the training and development of air traffic controllers within MaghrebVACC."
                            
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
                document.querySelector(".Selected-Staff-Container-TXT h2").innerHTML = "ACCMA31"
                document.querySelector(".Selected-Staff-Container-TXT p").innerHTML = "1516924"
                document.querySelector(".Selected-Staff-Container-2-description h1").innerHTML = "ATC Training Deputy Director : "
                document.querySelector(".Selected-Staff-Container-2-description p").innerHTML = "Tech Director of the MaghrebVacc, assisting the Training Director in the training and development of air traffic controllers."
                            
                document.querySelector(".Selected-Staff-Container").classList.add(StaffAnimationClass)

                setTimeout(()=>{
                    document.querySelector(".Selected-Staff-Container").classList.remove(StaffAnimationClass)
                },StaffAnimationRemovalDuration)
                
                }}
            />
            {/* <DisplayedStaff
                function="Head of Membership"
                name="Shaun M."
                id="Shaun"
                onClick={() => {

                setTimeout(()=>{
                    document.querySelector(".Selected-Staff-Container").classList.remove(StaffAnimationClass)
                },StaffAnimationRemovalDuration)

                document.querySelector(".Selected-Staff-Container-TXT h1").innerHTML = "Shaun M."
                document.querySelector(".Selected-Staff-Container-TXT h2").innerHTML = "ACCMA41"
                document.querySelector(".Selected-Staff-Container-TXT p").innerHTML = "1081094"
                document.querySelector(".Selected-Staff-Container-2-description h1").innerHTML = "Local Membership Manager : "
                document.querySelector(".Selected-Staff-Container-2-description p").innerHTML = "Local Membership Manager of the MaghrebVacc, responsible for managing the membership of MaghrebVACC and ensuring that members comply with the organization's rules and regulations."
                            
                document.querySelector(".Selected-Staff-Container").classList.add(StaffAnimationClass)

                
                }}
            /> */}
            </div>
        </div>

        <div className='Footer' id="Footer">
            <div className='Footer-Container'>
            <div className='Footer-Links'>
                <div><img src={SmallLogo}></img></div>
                <div>
                <h1>Policies</h1>
                <a href='#'>General</a>
                <a href='#'>Training</a>
                <a href='#'>Membership</a>
                <a href='#'>Privacy</a>
                </div>
                <div>
                <h1>Resources</h1>
                <a href='#'>Briefings</a>
                <a href='#'>Charts</a>
                <a href='#'>Branding</a>
                </div>
                <div>
                <h1>Controllers</h1>
                <a href='#'>Roster</a>
                <a href='#'>Get Started</a>
                <a href='#'>Docs</a>
                </div>
                <div>
                <h1>Contact</h1>
                <a href='#'>Contact</a>
                <a href='#'>Pilot Feedback</a>
                <a href='#'>management@vatsim.ma</a>
                </div>
            </div>
            <div className='Footer-Foot'>
                <h1>© 2023 - Maghreb vACC. All Rights Reserved.</h1>
                <a href='#'><i class="fa-brands fa-instagram"></i></a>
                <a href='#'><i class="fa-brands fa-youtube"></i></a>
                <a href='#'><i class="fa-brands fa-discord"></i></a>
            </div>
            </div>
        </div>
        </div>
    )



}

export default App;