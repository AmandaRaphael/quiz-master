import {useState} from "react";
import NextButton from "./NextButton";
import ShowQuestion from "./ShowQuestion";


const QuestionContainer = () => {
const [selected, setSelected] = useState(false);
  return (
    <div className="questionContainer flex">
      <div className="questionBox ">
        <ShowQuestion selected={selected} setSelected={setSelected} />
        <NextButton selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
};

export default QuestionContainer;
