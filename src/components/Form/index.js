import React, { useEffect, useState } from "react";

const initVal = "";
export default function Form({ addTasks, tasks }) {
  const [newTask, setNewTask] = useState(initVal);
  useEffect(() => {}, [newTask]);

  const handleChange = (e) => {
    setNewTask(e.target.value);
    console.log(newTask);
  };
  const onSubmitInput = (e) => {
    e.preventDefault();
    if (newTask === "") {
      return false;
    }
    addTasks([...tasks, newTask]);
    console.log(newTask);
  };
  return (
    <form onSubmit={onSubmitInput}>
      <div className="row">
        <div className="form-floating col-md-10">
          <input
            type="text"
            className="form-control"
            name="task"
            value={newTask}
            onChange={handleChange}
          />

          <label htmlFor="task">Add new to-do</label>
        </div>
        <button className="btn btn-outline-info col-md-2">Add To-Do</button>
      </div>
    </form>
  );
}
