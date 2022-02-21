import React from 'react'
import { useContext } from "react";
import MyContext from '../context/MyContext';
import questionsArray from "../data/questions";
const NextButton = () => {
    const { selected,nextQuestion,setNextQuestion,setSelected,setButtonClass } = useContext(MyContext)
    const nextQHandler = () => {
      console.log("next");
      if (nextQuestion < questionsArray.length) {
        setNextQuestion((nextQuestion) => nextQuestion + 1);
        setSelected(false);
        //answerButtons.map((button) => setButtonClass("button"));
        setButtonClass("button"); //this didnt work the way i expected
      }
    };
    return (
      <div className="paddingTop flex">
        <button disabled={!selected} onClick={nextQHandler}>
          Next
        </button>
      </div>
    );
}

export default NextButton
