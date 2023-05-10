import React from "react"
import { useRouteMatch } from "react-router-dom";

function TaskEditor({ taskId, taskItem }) {

  const match = useRouteMatch();
  console.log(taskItem)
  
  return (
    <div>
      <p>{taskItem.name}</p>
    </div>
  )
}

export default TaskEditor;