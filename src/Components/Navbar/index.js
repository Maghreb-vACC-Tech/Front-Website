import LoginBtn from "./LoginBtn"

import "./index.css"

function Navbar(props){
    let i = true;
    function LinksMenuMobileAnimation(){
        if ( i == true){
            document.querySelector(".Links-Menu").style.display = "none"
            document.querySelector(".Links-Menu").classList.add("animate__fadeOutRight")
            i = false
            // alert(i)
        }
        else{
            document.querySelector(".Links-Menu").style.display = "block"
            document.querySelector(".Links-Menu").classList.add("animate__fadeInRight")
            //animate__fadeInRight
            i = true
        }
    }
    return(
        <div className="Navbar animate__fadeInDown">
            <div className="Logo">
                <img className="Logo-Image" src={props.Logo}></img>
            </div>

            <div className="Links">
                <div>
                    <a href="#Home">Home</a>
                </div>
                <div>
                    <a href="#Events">Events</a>
                </div>
                <div>
                    <a href="#FAQ">FAQ</a>
                </div>
                <div>
                    <a href="#Staff">Our Team</a>
                </div>
                <div>
                    <a href="#">Contact</a>
                </div>
            </div>

            <div className="Buttons">
                <div className="Login">
                    <LoginBtn/>
                </div>
                <div className="GetStarted">
                    <a href="#">Get Started</a>
                </div>

            </div>

            <div className="Menu" onClick={LinksMenuMobileAnimation}>
                <i class="fa-solid fa-bars"></i>
            </div>

            <div className="Links-Menu">
                <div>
                    <a href="#Home">Home</a>
                </div>
                <div>
                    <a href="#Events">Events</a>
                </div>
                <div>
                    <a href="#FAQ">FAQ</a>
                </div>
                <div>
                    <a href="#Staff">Our Team</a>
                </div>
                <div>
                    <a href="#">Contact</a>
                </div>
                <div className="Login">
                    <LoginBtn/>
                </div>
                <div className="GetStarted">
                    <a href="#">Get Started</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar