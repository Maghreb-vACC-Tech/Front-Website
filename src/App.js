import './App.css';
import './Styles/Mobile.css'
import './Styles/VerticalScreen.css'

import React , { useState, useEffect } from "react"

// Logo
    import SmallLogo from "./Ressources/Images/Logo/logo.svg"
    import BigLogo from "./Ressources/Images/Logo/logo-big.svg"
    // import WhiteBigLogo from "./Ressources/Images/Logo/Maghreb_vACC_Full_white_trans.png"


// Components
    import Home from "./Components/Home"
    import About from "./Components/About"
    import Partners from "./Components/Partners"
    import FAQ from "./Components/FAQ"
    import TimeLapse from "./Components/TimeLapse"
    import Staff from "./Components/Staff"
    import Footer from "./Components/Footer"


function App() {
    const [events, setEvents] = useState([]);
    const [ipAddress, setIpAddress] = useState('');
    const [Logo, SetLogo] = useState(BigLogo);
    
    const appEnv = process.env.REACT_APP_APP_ENV;

    // function Setupurl(){
    //     if (appEnv === "DEV") {
    //         setAPIURL("http://localhost:1000");
    //     } else {
    //         setAPIURL("https://api.vatsim.ma");
    //     }
    // }

    function getIPaddress() {
        const getIpAddress = () => {
          return new Promise((resolve, reject) => {
            const pc = new window.RTCPeerConnection({ iceServers: [] });
            pc.createDataChannel('');
            pc.createOffer(pc.setLocalDescription.bind(pc), reject);
            pc.addEventListener('icecandidate', event => {
              if (event.candidate && event.candidate.candidate) {
                const ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
                const ip_address = event.candidate.candidate.match(ip_regex)?.[1];
                if (ip_address) {
                  resolve(ip_address);
                  pc.onicecandidate = null;
                }
              }
            });
          });
        };
      
        getIpAddress().then(setIpAddress);
      }

    
    
    function Log(data) {
        const apiLink = (appEnv === "DEV")?  "http://localhost:1000":  "https://api.vatsim.ma" 

        const url = `${apiLink}/Log`;
        fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            credentials: "include"
        })
        .then((response) => {
        if (response.ok) {
            console.log("Log entry added successfully");
        } else {
            console.error(
            "Error logging data:",
            response.status,
            response.statusText
            );
            // Additional error handling, such as displaying a message to the user
        }
        })
        .catch((error) => {
        console.error("Error logging data:", error);
        // Additional error handling, such as displaying a message to the user
        });
      }



      
    
    function MaghrebEvents(){
        // Fetch
        const apiLink = (appEnv === "DEV")?  "http://localhost:1000":  "https://api.vatsim.ma" 
        fetch(`${apiLink}/MaghrebEvents`)
        .then(res => res.json())
        .then(data => {
            setEvents(data);
        })
        .catch(error => {
            console.error("HandledError ", error);
            
            // const message = `${ipAddress} : was prompted this message [${error}]`
            // Log(message)
        })}
    function ScrollingTriggers(){
        // Scroll
        const windowWidth = window.innerWidth;
        
        if(windowWidth > 768){
            window.addEventListener("scroll", () => {
                const scrollPosition = window.scrollY;

                function NavBarEffect1(){
                    document.querySelector(".Navbar").style.backgroundColor = "rgba(25 ,26 ,29 , 0.95)"
                    document.querySelector(".Navbar").style.boxShadow = "0.1px 0.1px 1vw #0F1011"
                    document.querySelector(".GetStarted").style.backgroundColor = "rgb(0, 155, 60)"
                    document.querySelector(".Logo-Image").style.width = "4vw"
                    document.querySelector(".Navbar").style.backdropFilter  = "contrast(90%) saturate(230%) blur(20px) brightness(110%)"
                    SetLogo(SmallLogo)
                }
                function NavBarEffect2(){
                    document.querySelector(".Navbar").style.backgroundColor = "rgba(18, 19, 22, 0)"
                    document.querySelector(".GetStarted").style.backgroundColor = "rgb(0, 155, 60)"
                    document.querySelector(".Navbar").style.boxShadow = "none"
                    document.querySelector(".Logo-Image").style.width = "7vw"
                    document.querySelector(".Navbar").style.backdropFilter  = "contrast(100%) saturate(100%) blur(0px) brightness(100%)"
                    SetLogo(BigLogo)
                }
                
                //Scroll Animation For NavBar 
                if (scrollPosition > 100){NavBarEffect1()}
                if (scrollPosition < 100){NavBarEffect2()} 
            

            });
        }}
      

    
    
    
    useEffect(() => {
        getIPaddress();
        MaghrebEvents();
        ScrollingTriggers();
        // Log(`${ipAddress} : Accessed The Frontend`);
    }, []);


    


    return(
        <div className="App">
            {/* Home */}
                <Home events = {events}></Home>

            {/* About */}
                <About></About>
            {/* Event */}
                {events.length > 0 && (
                    <div className='Events' id='Events'>
                        <div>
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
                <Partners></Partners>

            {/* FAQ */}
                <FAQ></FAQ>

            {/* Timelapses */}
                <TimeLapse></TimeLapse>

            {/* Staff */}
                <Staff></Staff>
            {/* Footer */}
                <Footer></Footer>
        
        
        
        </div>
    )



}

export default App;
