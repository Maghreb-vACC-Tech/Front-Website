import './App.css';


import React , { useState, useEffect } from "react"
// import "bootstrap/dist/css/bootstrap.css"

// Logo
import SmallLogo from "./Ressources/Images/Logo/logo.svg"
import BigLogo from "./Ressources/Images/Logo/logo-big.svg"

// Events
import event1 from "./Ressources/Images/Events/1.jpg"
import event2 from "./Ressources/Images/Events/2.jpg"
import event3 from "./Ressources/Images/Events/3.jpg"
// Components
import Navbar from './Components/Navbar';
import Question from './Components/FAQ';


function App() {


  const [ScrollPositionY, setScrollPositionY] = useState(0);
  const [Logo, SetLogo] = useState(BigLogo);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      setScrollPositionY(scrollPosition);

      

    if (scrollPosition > 100){
      document.querySelector(".Navbar").style.backgroundColor = "rgba(25 ,26 ,29 , 0.95)"
      document.querySelector(".Navbar").style.boxShadow = "0.1px 0.1px 2vw rgba(0, 0, 0)"
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
    });

  }, []);


  return (
    <div className="App">

      <div className='Home'>
        <div className='HomeOverlay'>

          <Navbar Logo={Logo}></Navbar>

          <div className='HomeText animate__fadeIn'>
            <div>
              <h1>Maghreb vACC</h1>
            </div>
            <div>
              <p>Fly and control over the Atlas mountains</p>
            </div>
          </div>
          <div className='ScrollDown'>
            <a href='#About'>Scroll down</a><i class="fa-solid fa-chevron-down"></i>
          </div>

        </div>
      </div>

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

      <div className='Events' id='Events'>
        <div>
          <h1>Upcoming Events</h1>
        </div>
        <div>
          <div>
            <img src={event1}></img>
          </div>
          <div>
            <img src={event2}></img>
          </div>
          <div>
            <img src={event3}></img>
          </div>
        </div>
        <div>
          <a href='#'>Check More</a>
        </div>
        
      </div>

      <div className='FAQ' id='FAQ'>
        <div className='FAQ-Title'><h1>Frequently Asked Questions</h1></div>
        
          <Question
          Question = "How to join?"
          Answer = "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
          index = "false"
          number = "Q1"
          sign = "1"
          />

          <Question
          Question = "How to join?"
          Answer = "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
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
    </div>
  );
}

export default App;
