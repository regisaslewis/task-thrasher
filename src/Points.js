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
    <div className="progress points">
      <p>Points: <span style={{
        fontSize: (todayPercent === 100) ? "30px" : "25px"}}>{todayPercent === 100 ? todayPercent + "!!!" : todayPercent}</span>
      </p>
      <div className="counter" style={{width: todayPercent + "%", backgroundColor: (todayPercent < 75) ? "rgba(180, 35, 55)" : "rgb(35, 65, 63)"}}>
      </div>
    </div> 
    </>
  )
}

export default Points;