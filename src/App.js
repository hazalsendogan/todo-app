import Form from "./components/Form";
import List from "./components/List";
import React, { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="container">
      <div className="content">
        <Form addTasks={setTasks} tasks={tasks} />
        <List setTasks={setTasks} tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
