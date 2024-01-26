// import { learnerData } from "../data/learnerData.js";
import Score from "./Score.js";
import { useState } from "react";

function Learner({ learnerData, index }) {
  // Current Value based on current Index
  let learner = learnerData[index];
  return (
    <div>
      <h3>
        ({index + 1} of {learnerData.length})
      </h3>
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      <Score report={learner.scores} />
    </div>
  );
}

export default Learner;
