import React ,{ useState } from "react"
import './index.css';

function TimeLapse(props){
    return(
        <div className='Timelapses' id='Timelapses'>
            <div><h1>Timelapse</h1></div>
            <div className='TimelapsesContainer'>
            <iframe
                width="90%"
                height="643"
                src="https://www.youtube.com/embed/Te0vxdyxwRY?autoplay=1&mute=1"
                title="Time Lapse - Cross The Pond Westbound 2024 (Ground/Radar)┃CASABLANCA [GMMN]"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>

            </div>
        </div>
    )
}

export default TimeLapse;