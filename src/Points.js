import React from "react";
import TaskButton from "./TaskButton";

function Points({ taskList, todayPercent, changePercent, barColor }) {

  const tasks = taskList.map(e => <TaskButton 
    key={e.id} 
    item={e}
    changePercent={changePercent}
  />);

  return (
    <>
    <h3 className="headline">Did something? <br /> <div className="enhanced">THRASH that TASK!</div></h3>
    <div className="progress points">
      <p>Points: <span style={{
        fontSize: (todayPercent === 100) ? "30px" : "25px"}}>{todayPercent === 100 ? todayPercent + "!!!" : todayPercent}</span>
      </p>
      <div className="counter" style={{width: todayPercent + "%", backgroundColor: barColor()}}>
      </div>
    </div>
    <div className="task-list">
      {tasks}
    </div> 
    </>
  )
}

export default Points;