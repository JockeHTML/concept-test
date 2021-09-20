import React, { useState } from "react";
import { Questions } from "../data/data";

const NewQuestions = () => {
  const [whatQuestion, setWhatQuestion] = useState(1);

  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <h2>my question</h2>
      <p>{Questions[whatQuestion].optionA}</p>
      <p>{Questions[whatQuestion].optionB}</p>
      <p>{Questions[whatQuestion].optionC}</p>
      <p>{Questions[whatQuestion].answer}</p>
      <button>next question</button>
    </div>
  );
};

export default NewQuestions;
