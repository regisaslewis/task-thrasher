import React from "react"
import { useRouteMatch } from "react-router-dom";

function TaskEditor() {

  const match = useRouteMatch();
  
  return (
    <div>
      <p>Please Help</p>
      <p>Url: {match.url}</p>
    </div>
  )
}

export default TaskEditor;