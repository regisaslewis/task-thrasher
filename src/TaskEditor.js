import React from "react";

function TaskEditor({ taskId, taskItem }) {
  
  return (
    <div>
      <p>{taskItem.name}</p>
    </div>
  )
}

export default TaskEditor;