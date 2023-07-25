
import "./index.css"

function Navbar(props){
    return(
        <div className="Navbar animate__fadeInDown">
            <div className="Logo">
                <img className="Logo-Image" src={props.Logo}></img>
            </div>
            <div className="Links">
                <div>
                    <a href="#">Home</a>
                </div>
                <div>
                    <a href="#">Events</a>
                </div>
                <div>
                    <a href="#">Pilots</a>
                </div>
                <div>
                    <a href="#">Contact</a>
                </div>
            </div>
            <div className="Buttons">
                <div className="Login">
                    <a href="#">Login</a>
                </div>
                <div className="GetStarted">
                    <a href="#">Get Started</a>
                </div>

            </div>
        </div>
    )
}

export default Navbar