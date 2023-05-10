import React from "react";
import Task from "./Task";

function Points({ taskList }) {
  const tasks = taskList.map(e => <Task key={e.id} item={e} />)
  return (
    <>
      <h3>Points Component</h3>
      <div className="task-list">
        {tasks}
      </div>
    </>
  )
}

export default Points;