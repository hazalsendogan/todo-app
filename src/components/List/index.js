import React, { useEffect, useState } from "react";

export default function List({ tasks }) {
  const [property, setProperty] = useState("todo");
  useEffect(() => {
  }, [property]);

  const handleChecked = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setProperty("done");
    } else {
      setProperty("todo");
    }
  }

  
  return (
    <div>
      <div className="card">
        <div className="card-header">Todo List</div>
        <ul className="list-group list-group-flush">
          {
            tasks.map((todo,key) => (
              <li key={key} property={property} className={property === "done" ? "list-group-item completed": "list-group-item"}>
                <input property={property} type="checkbox" onChange={handleChecked}/>
                <span >{todo}</span>
                {/* <label htmlFor="addedTask">
                  <input type="text" name="addedTask" value={todo} className="form-control editable"></input>
                </label> */}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
