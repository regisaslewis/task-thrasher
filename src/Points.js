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
    <h3 className="headline">Did something? <br /> <div className="enhanced">THRASH that TASK!</div></h3>
    <div className="task-list">
      {tasks}
    </div>
    <div className="progress">
      <div className="counter" style={{width: (todayPercent >= 15) ? todayPercent + "%" : "15%", fontSize: (todayPercent >= 30) ? .3 * todayPercent + "px" : "10px"}}>
        Total Points: <span style={{
  webkitTextStroke: (todayPercent === 100 ? ".5px aqua" : "none"), fontWeight: "bold"}}>{todayPercent === 100 ? todayPercent + "!!!" : todayPercent}</span>
      </div>
    </div> 
    </>
  )
}

export default Points;