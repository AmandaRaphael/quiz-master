import questionsArray from "../data/questions";
import { useContext } from "react";
import MyContext from '../context/MyContext';
import ShowChoices from './answerButtons/ShowChoices';
const ShowQuestion = () => {
    const{nextQuestion}=useContext(MyContext)
    const randomQuestionsArray = questionsArray.sort(() => 0.5 - Math.random());
  console.log(`randomArray`,randomQuestionsArray)  
  return (
      <div>
        <p className="padding">
          {randomQuestionsArray[nextQuestion - 1].question}
          {nextQuestion}
      </p>
      <div className="answerButton">< ShowChoices question={randomQuestionsArray}/></div>
        
      </div>
    );
}

export default ShowQuestion
