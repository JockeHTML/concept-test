import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

const Task = ({ title, id }) => {
  //import the removeTask from context that takes one input
  const { removeTask, findItem } = useContext(TaskListContext);

  return (
    <li className="list-item">
      <span>{title}</span>
      <div>
        <button onClick={() => removeTask(id)} className="btn-delete task-btn">
          DELETE
        </button>
        <br />
        <button onClick={() => findItem(id)} className="btn-edit task-btn">
          EDIT
        </button>
      </div>
    </li>
  );
};

export default Task;
