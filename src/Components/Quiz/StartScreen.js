import React, { useContext } from "react";
import { TaskListContext } from "../../context/TaskListContext";

const StartScreen = () => {
  const { setSaveName, setStartQuiz, startQuiz, inputText, setInputText } =
    useContext(TaskListContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputText("");
    setStartQuiz("first");
    setSaveName(inputText);
    console.log(startQuiz);
    console.log(inputText);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="quiz-container">
      <form onSubmit={handleSubmit} className="first-question">
        <h1 style={{ margin: "1rem" }}>START THE QUIZ!</h1>
        <input
          value={inputText}
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Start Quiz
        </button>
      </form>
    </div>
  );
};

export default StartScreen;
