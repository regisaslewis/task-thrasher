import React from "react";
import IndividualTask from "./IndivualTask";

function Tasks({ taskList, getId, getItem }) {

  const editTaskList = taskList.map(e => <IndividualTask getItem={getItem} getId={getId} key={e.id} item={e} />)

  return (
    <div>
      <h3 className="headline">SPAWN a New Task!</h3>
      <div>temp</div>
      <h3 className="headline">EDIT the old!</h3>
      <div className="task-grid">
        {editTaskList}
      </div>
    </div>
  )
}

export default Tasks;