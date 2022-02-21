import { useContext } from "react";
import MyContext from "../context/MyContext";
const StartButton = () => {
    const { setQShow } = useContext(MyContext);
    const startButtonHandle = () => {
      setQShow(true);
    };
  console.log("startbutton")
    return (
      <>
        <button onClick={startButtonHandle}>Start New Quiz</button>
      </>
    );
}

export default StartButton
