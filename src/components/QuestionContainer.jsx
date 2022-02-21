import React from "react";
import NextButton from "./NextButton";
import ShowQuestion from "./ShowQuestion";
const QuestionContainer = () => {

  return (
    <div className="questionContainer flex">
      <div className="questionBox ">
        <ShowQuestion/>
        < NextButton/>
      </div>
    </div>
  );
};

export default QuestionContainer;
