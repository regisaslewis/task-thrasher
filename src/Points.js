import React from "react";
import Task from "./Task";

function Points({ taskList }) {
  const tasks = taskList.map(e => <Task key={e.id} item={e} />)
  return (
    <>
      <div className="task-list">
        {tasks}
      </div>
    </>
  )
}

export default Points;