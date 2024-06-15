import React ,{ useState } from "react"
import './index.css';

// Commun component
import DisplayedStaff from '../../Components/Common/Displayed-Staff';

function Staff(props){

    
    const StaffAnimationClass = "animate__fadeIn"
    const StaffAnimationRemovalDuration = 500

    return(
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
    )
}

export default Staff;