
import "./index.css"

function Navbar(props){
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