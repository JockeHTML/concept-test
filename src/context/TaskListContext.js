import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

//create and export context
export const TaskListContext = createContext();

//create and export context provider
export const TaskListContextProvider = (props) => {
  //defaultState
  const [tasks, setTasks] = useState([
    { title: "Read the book", id: 1 },
    { title: "Wash the car", id: 2 },
    { title: "Write some code", id: 3 },
  ]);

  //add new task function, by defining title and id and add new task to our state and update it.
  //getting id from uuid package
  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuidv4() }]);
  };

  //remove task function through filter method and keeps the task that dont match with the id passed in
  const removeTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  //function who gets the id from the button edit, that then finds the the matching id
  const findItem = (id) => {
    const item = tasks.find((task) => id === task.id);
    console.log(item);
  };

  //clear whole list by setting state to an empty array
  const clearList = () => {
    setTasks([]);
  };

  //sharing my context through contextProvider and pushing my values through it to all the children that it wraps
  return (
    <TaskListContext.Provider value={{ clearList, tasks, addTask, removeTask }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
