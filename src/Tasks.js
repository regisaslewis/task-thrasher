import React from "react";
import IndividualTask from "./IndivualTask";

function Tasks({ taskList }) {

  const editTaskList = taskList.map(e => <IndividualTask key={e.id} item={e} />)

  return (
    <div>
      <h3 className="headline">SPAWN a New Task!</h3>
      <di>temp</di>
      <h3 className="headline">EDIT the old!</h3>
      <div className="task-grid">
        {editTaskList}
      </div>
    </div>
  )
}

export default Tasks;