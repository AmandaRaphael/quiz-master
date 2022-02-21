import { useContext } from "react";
import MyContext from "../context/MyContext";

const SelectNumberOfQuestions = () => {
    const {selectNoQ,setSelectNoQ}=useContext(MyContext)
    return <div>
        Ask
        <select value={selectNoQ} onChange={(e) => setSelectNoQ(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
        questions
  </div>;
};

export default SelectNumberOfQuestions;
