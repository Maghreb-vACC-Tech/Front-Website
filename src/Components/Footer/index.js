import React ,{ useState } from "react"
import './index.css';

// Logos
// import WhiteBigLogo from "../../Ressources/Images/Logo/Maghreb_vACC_Full_white_trans.png"
import SmallLogo from "../../Ressources/Images/Logo/logo.svg"
import BigLogo from "../../Ressources/Images/Logo/logo-big.svg"



function Footer(props){

    const [Logo, SetLogo] = useState(BigLogo);

    


    return(
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
    )
}

export default Footer;