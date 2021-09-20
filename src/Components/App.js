import React, { useContext } from "react";
import "./App.css";
import { TaskListContextProvider } from "../context/TaskListContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Header from "./Header";
import TextList from "./TextList";
import SearchBar from "./SearchBar";
import SecondSearchBar from "./SecondSearchBar";
import Calc from "./Calc";
import Reduce from "./Reduce";
import Quiz from "./Quiz/Quiz";
import NewQuestions from "./Quiz/NewQuestions";

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        {/*<div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
        <TextList />
        <SearchBar />
        <SecondSearchBar />
        <Calc />
        <Reduce />
         <Quiz />*/}
        <NewQuestions />
      </div>
    </TaskListContextProvider>
  );
}

export default App;
