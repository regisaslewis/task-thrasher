import React, { useState } from "react";
import Task from "./Task";

function Points({ taskList, todayPercent, changePercent }) {

  const tasks = taskList.map(e => <Task 
    key={e.id} 
    item={e}
    changePercent={changePercent}
  />)
  return (
    <>
      <h3>Did something? Click it!</h3>
      <div className="task-list">
        {tasks}
      </div>
      <h4>Total: {todayPercent <= 100 ? todayPercent : 100}%</h4>
    </>
  )
}

export default Points;