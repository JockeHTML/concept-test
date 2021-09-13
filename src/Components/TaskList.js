//import useContext hook and the actual contextList
import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  //picking out the task state array and importing it in my useContext
  const { tasks } = useContext(TaskListContext);

  //renders list if there is one, otherwise the div with message
  return (
    <ul className="list">
      {tasks.length ? (
        tasks.map((task) => {
          return <Task {...task} />;
        })
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </ul>
  );
};

export default TaskList;
