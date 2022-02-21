import { useState } from "react";
import MyContext from "./MyContext";
const MyProvider = ({ children }) => {
  const [selected, setSelected] = useState(false);
  const [nextQuestion, setNextQuestion] = useState(1);
  const [buttonClass, setButtonClass] = useState("button");
  const [showQ, setQShow] = useState(false);
  const [selectNoQ, setSelectNoQ] = useState("5");
  // const randomQuestionsArray = questionsArray.sort(() => 0.5 - Math.random());

  // const answerButtonHandler = (e) => {
  //   setSelected(true); //BUG:when answer key is clicked for the first time next question is showed and this happens only for the first click.
  //   e.target.classList.add("selectedButton");
  // };

  // const answerButtons = randomQuestionsArray[nextQuestion - 1].answers
  //   .sort(() => 0.5 - Math.random())
  //   .map((ans, i) => {
  //     return (
  //       <button key={i} onClick={answerButtonHandler} className={buttonClass}>
  //         {ans}
  //       </button>
  //     );
  //   });
  // const showQuestion = (
  //   <div>
  //     <p className="padding">
  //       {randomQuestionsArray[nextQuestion - 1].question}
  //       {nextQuestion}
  //     </p>
  //     <div className="answerButton flex">{answerButtons}</div>
  //   </div>
  // );

  // const nextQHandler = () => {
  //   console.log("bext");
  //   if (nextQuestion < randomQuestionsArray.length) {
  //     setNextQuestion((nextQuestion) => nextQuestion + 1);
  //     setSelected(false);
  //     //answerButtons.map((button) => setButtonClass("button"));
  //     setButtonClass("button"); //this didnt work the way i expected
  //   }
  // };
  return (
    <MyContext.Provider
      value={{
        selectNoQ,
        setSelectNoQ,
        nextQuestion,
        setNextQuestion,
        buttonClass,
        setButtonClass,
        selected,
        setSelected,
        showQ,
        setQShow,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
