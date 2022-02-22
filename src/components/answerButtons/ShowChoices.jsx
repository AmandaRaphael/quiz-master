import React from 'react'
import MyContext from "../../context/MyContext";
import { useContext,useState } from "react";

const ShowChoices = ({ question,setSelected}) => {

  const { nextQuestion, buttonClass, setButtonClass } = useContext(MyContext)
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
  return (
    <>
      
      {answerButtons}
      {/* <NextButton selected={selected} setSelected={setSelected }/> */}
    </>
  );
 
}
export default ShowChoices
