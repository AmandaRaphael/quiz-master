import { useContext } from "react";
import MyContext from "../context/MyContext";
import QuestionContainer from "./QuestionContainer";
import SelectNumberOfQuestions from "./SelectNumberOfQuestions";
import StartButton from "./StartButton";

const Quiz = () => {

  console.log("Quiz")
  const {showQ}=useContext(MyContext)
  return (
    <div className="container flex">
      <div className={showQ? "flex padding" :"flex"}>
       
        <SelectNumberOfQuestions />
        <StartButton/>
      </div>

      {!showQ && <p>Choose how many questions you want to answer</p>}
      {showQ && <QuestionContainer />}
    </div>
  );
};

export default Quiz;
