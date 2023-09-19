import LoginBtn from "./LoginBtn"

import "./index.css"

function Navbar(props){
    let i = true;
    function LinksMenuMobileAnimation(){
        if ( i ){
            document.querySelector(".Links-Menu").style.display = "block"
            document.querySelector(".Links-Menu").classList.add("animate__fadeInRight")
            i = false
            // alert(i)
            console.log(i)
        }
        else{
            document.querySelector(".Links-Menu").style.display = "none"
            //animate__fadeInRight
            document.querySelector(".Links-Menu").classList.remove("animate__fadeInRight")
            i = true
            console.log(i)
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