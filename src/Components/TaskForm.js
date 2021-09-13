import React, { useContext, useState } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  //import function from context
  const { addTask, clearList } = useContext(TaskListContext);

  //save whats typed in input and save in state
  const [title, setTitle] = useState("");

  //picking up the value through event and saving it to state
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  //preventing rerender when submit, and calling the add task function through context and pushing the new title to it
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} action="" className="form">
      <input
        value={title}
        onChange={handleChange}
        type="text"
        className="task-input"
        placeholder="add task..."
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          Add a task
        </button>
        <button onClick={clearList} type="submit" className="btn clear-btn">
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
