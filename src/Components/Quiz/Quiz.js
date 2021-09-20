import React, { useContext } from "react";
import "./quiz.css";
import StartScreen from "./StartScreen";
import { TaskListContext } from "../../context/TaskListContext";
import { FirstQuestion, SecondQuestion, ThirdQuestion } from "./Questions";
import Final from "./Final";

const Quiz = () => {
  const { startQuiz } = useContext(TaskListContext);

  return (
    <div className="quiz-container">
      {startQuiz === "menu" ? <StartScreen /> : null}
      {startQuiz === "first" ? <FirstQuestion /> : null}
      {startQuiz === "second" ? <SecondQuestion /> : null}
      {startQuiz === "third" ? <ThirdQuestion /> : null}
      {startQuiz === "final" ? <Final /> : null}
    </div>
  );
};

export default Quiz;
