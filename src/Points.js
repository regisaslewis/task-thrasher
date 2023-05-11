import React from "react";
import TaskButton from "./TaskButton";

function Points({ taskList, todayPercent, changePercent }) {

  const tasks = taskList.map(e => <TaskButton 
    key={e.id} 
    item={e}
    changePercent={changePercent}
  />)
  return (
    <>
      <h3 className="headline">Did something? THRASH IT!</h3>
      <div className="task-list">
        {tasks}
      </div>
      <h4>Total: {todayPercent}%</h4>
    </>
  )
}

export default Points;