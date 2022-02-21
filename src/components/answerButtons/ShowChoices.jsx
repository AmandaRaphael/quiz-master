import React from 'react'
import MyContext from "../../context/MyContext";
import { useContext } from "react";
const ShowChoices = ({question}) => {
    const { nextQuestion, buttonClass,setButtonClass,setSelected } = useContext(MyContext)
     const answerButtonHandler = (e) => {
       setSelected(true); //BUG:when answer key is clicked for the first time next question is showed and this happens only for the first click.
       e.target.classList.add("selectedButton");
     };
    const answerButtons = question[nextQuestion - 1].answers
      .sort(() => 0.5 - Math.random())
      .map((ans, i) => {
        setButtonClass("button")
        return <button key={i} onClick={answerButtonHandler} className={buttonClass}>
            {ans}
          </button>
        
      });
    return answerButtons
}
export default ShowChoices
