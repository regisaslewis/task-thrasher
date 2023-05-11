import React, { useState} from "react";
import { useHistory } from "react-router-dom";

function TaskEditor({ taskId, taskItem, taskList, setTaskList }) {

  const history = useHistory();

  const [editTaskName, setEditTaskName] = useState(taskItem.name);
  const [editTaskImage, setEditTaskImage] = useState(taskItem.image);
  const [editTaskTime, setEditTaskTime] = useState(taskItem.time);
  const [editTaskPoints, setEditTaskPoints] = useState(taskItem.points);

  function handleNameEdit(e) {
    setEditTaskName(e.target.value)    
  }

  function handleImageEdit(e) {
    setEditTaskImage(e.target.value)    
  }

  function handleTimeEdit(e) {
    setEditTaskTime(e.target.value)    
  }

  function handlePointsEdit(e) {
    setEditTaskPoints(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: editTaskName,
        image: editTaskImage,
        time: editTaskTime,
        points: editTaskPoints
      })
    })
      .then(resp => resp.json())
      .then(data => {
        const edittedList = taskList.map(e => {
          if (e.id === data.id) {
            return data;
          } else {
            return e;
          }
        })
        setTaskList(edittedList);
        history.push(`/tasks`);
      })
  }
  
  return (
    <div>
      <p>{taskItem.name}</p>
      <form onSubmit={handleSubmit}>
          <input type="text" value={editTaskName} onChange={handleNameEdit} />
          <input type="text" value={editTaskImage} onChange={handleImageEdit} />
          <input type="text" value={editTaskTime} onChange={handleTimeEdit} />
          <input type="text" value={editTaskPoints} onChange={handlePointsEdit} />
          <button type="submt">Transmogrify!</button>
        </form>
    </div>
  )
}

export default TaskEditor;