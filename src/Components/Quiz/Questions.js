import React, { useContext } from "react";
import {
  firstQuestionData,
  secondQuestionData,
  thirdQuestionData,
} from "../data/data";
import { TaskListContext } from "../../context/TaskListContext";

export const FirstQuestion = () => {
  const { setStartQuiz, startQuiz, saveName, answer, setAnswer } =
    useContext(TaskListContext);

  const checkName = (rightAnswer) => {
    if (answer === rightAnswer) {
      setStartQuiz("second");
    } else {
      return alert("Try again!");
    }
  };

  return (
    <div className="quiz-container">
      {firstQuestionData.map((values, index) => {
        return (
          <div key={index} className="first-question">
            <h2>Quiz 2</h2>
            <h1>Welcome {saveName}</h1>
            <h1>What is my name?</h1>
            <button
              value={values.optionA}
              onClick={() => setAnswer(values.optionA)}
              id={values.optionA}
              className="btn"
            >
              {values.optionA}
            </button>

            <button
              value={values.optionB}
              onClick={() => setAnswer(values.optionB)}
              id={values.optionB}
              className="btn"
            >
              {values.optionB}
            </button>

            <button
              value={values.optionC}
              onClick={() => setAnswer(values.optionC)}
              className="btn"
            >
              {values.optionC}
            </button>
            <button
              value={values.answer}
              style={{ backgroundColor: "orange" }}
              onClick={() => checkName(values.answer)}
              className="btn"
            >
              Next
            </button>
          </div>
        );
      })}
    </div>
  );
};

export const SecondQuestion = () => {
  const { setStartQuiz, startQuiz, saveName, answer, setAnswer } =
    useContext(TaskListContext);

  const checkLastName = (rightAnswer) => {
    if (answer === rightAnswer) {
      setStartQuiz("third");
    } else {
      return alert("Try again!");
    }
  };

  return (
    <div className="quiz-container">
      {secondQuestionData.map((values, index) => {
        return (
          <div key={index} className="first-question">
            <h2>Quiz 2</h2>
            <h1>Welcome {saveName}</h1>
            <h1>{values.question}</h1>
            <button
              value={values.optionA}
              onClick={() => setAnswer(values.optionA)}
              className="btn"
            >
              {values.optionA}
            </button>

            <button
              value={values.optionB}
              onClick={() => setAnswer(values.optionB)}
              className="btn"
            >
              {values.optionB}
            </button>

            <button
              value={values.optionC}
              onClick={() => setAnswer(values.optionC)}
              className="btn"
            >
              {values.optionC}
            </button>
            <button
              style={{ backgroundColor: "orange" }}
              value={values.answer}
              onClick={() => checkLastName(values.answer)}
              className="btn"
            >
              Finish Quiz
            </button>
          </div>
        );
      })}
    </div>
  );
};

export const ThirdQuestion = () => {
  const { setStartQuiz, startQuiz, saveName, answer, setAnswer } =
    useContext(TaskListContext);

  const finishQuiz = (rightAnswer) => {
    if (answer === rightAnswer) {
      setStartQuiz("final");
    } else {
      return alert("Try again!");
    }
  };

  return (
    <div className="quiz-container">
      {thirdQuestionData.map((values, index) => {
        return (
          <div key={index} className="first-question">
            <h2>Quiz 3</h2>
            <h1>Welcome {saveName}</h1>
            <h1>{values.question}</h1>
            <button
              value={values.optionA}
              onClick={() => setAnswer(values.optionA)}
              className="btn"
            >
              {values.optionA}
            </button>

            <button
              value={values.optionB}
              onClick={() => setAnswer(values.optionB)}
              className="btn"
            >
              {values.optionB}
            </button>

            <button
              value={values.optionC}
              onClick={() => setAnswer(values.optionC)}
              className="btn"
            >
              {values.optionC}
            </button>
            <button
              style={{ backgroundColor: "orange" }}
              value={values.answer}
              onClick={() => finishQuiz(values.answer)}
              className="btn"
            >
              Finish Quiz
            </button>
          </div>
        );
      })}
    </div>
  );
};
