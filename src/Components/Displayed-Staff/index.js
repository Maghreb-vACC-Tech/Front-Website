
import { useEffect } from "react"
import "./index.css"

function DisplayedStaff(props){

    useEffect(()=>{

        if (props.state === "selected"){
            document.getElementById(props.id).classList.add("selected")
        }
    },[])
    return(
        
        <div className='Displayed-Staff-Container' id={props.id} onClick={props.onClick}>
            <div className='Displayed-Staff-Container-PDP'></div>
            <div className='Displayed-Staff-Container-TXT'><h1>{props.name}</h1><p>{props.function}</p></div>
        </div>
    )
}

export default DisplayedStaff