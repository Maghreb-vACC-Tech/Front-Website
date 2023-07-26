
import "./index.css"
import { useState } from "react";

function Question(props){

    function QuestionAccordianAnimation(id , sign){
        //
        let answer = document.getElementById(id);
        let index = answer.dataset.index;
        if (index === "true") {
          answer.classList.add("hidden");
          answer.dataset.index = 'false';
          document.getElementById(sign).classList.add("fa-plus");
          document.getElementById(sign).classList.remove("fa-minus");
        } else {
          answer.classList.remove("hidden");
          answer.dataset.index = 'true';
          document.getElementById(sign).classList.remove("fa-plus");
          document.getElementById(sign).classList.add("fa-minus");
        }
      }

    return(
        <div className="Question">
            <div className="Question-Container"  onClick={()=>{QuestionAccordianAnimation(props.number , props.sign)}}>
                <div className="Question-Title"><p>{props.Question}</p></div>
                <div className="Question-sign"><i class="fa-solid fa-plus" id={props.sign}></i></div>
            </div>

            <div  className="Question-Answer hidden" id={props.number} data-index={props.index}>
                <p>{props.Answer}</p>
            </div>
        </div>
    )
}

export default Question