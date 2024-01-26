import { useState } from "react";
import { learnerData } from "./data/learnerData.js";
import Learner from "./components/Learner.js";

import "./App.css";

function App() {
  // Create a new state passing the learnerData

  // const [learners, setLearners] = useState(learnerData);
  const [index, setIndex] = useState(0);

  function handleNextClick() {
    // If `index greater than last item in array` --> `set new index to first index of array - which is an index of zero`
    // If `index is not greater than last item in array` --> `update current index by 1`
    if (index < learnerData.length - 1) setIndex(index + 1);
    else setIndex(0);
  }

  function handlePrevClick() {
    // If `index greater than zero` --> `set new index to one index prior`
    // Else if `index is zero` --> `set new index to last item in array`
    if (index > 0) setIndex(index - 1);
    else setIndex(learnerData.length - 1);
  }

  return (
    <div className="App">
      <h1>Learner App</h1>
      <div>
        <button onClick={handlePrevClick}>prev</button>

        <button onClick={handleNextClick}>next</button>
      </div>
      <Learner learnerData={learnerData} index={index} />
    </div>
  );
}

export default App;
