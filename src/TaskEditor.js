import React, { useState} from "react";
import { useHistory } from "react-router-dom";

function TaskEditor({ 
  taskId, 
  taskItem, 
  taskList, 
  setTaskList, 
  handleDelete 
}) {

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
        points: Number(editTaskPoints)
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

  function destroyTask() {
    fetch(`http://localhost:3001/tasks/${taskId}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then(() => {
        handleDelete(taskId);
        history.push(`/tasks`);
      });
  }
  
  return (
    <div>
      <h3 className="headline">|| {taskItem.name} || Edit Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-editor">
          <label>Name:</label>
          <input type="text" name="taskName" value={editTaskName} onChange={handleNameEdit} />
        </div>
        <div className="input-editor">
          <label>Image:</label>
          <input type="text" name="taskImage" value={editTaskImage} onChange={handleImageEdit} />
        </div>
        <div className="input-editor">
          <label>Time per Segment:</label>
          <input type="text" name="taskTime" value={editTaskTime} onChange={handleTimeEdit} />
        </div>
        <div className="input-editor">
          <label>Points per Segment:</label>
          <input type="text" name="taskPoints" value={editTaskPoints} onChange={handlePointsEdit} />
        </div>
        <div className="buttons">
          <button type="submt">EDIT the BROKEN</button>
        </div>
      </form>
      <div className="destroyer">
        <h3 className="headline">Or...</h3>
        <button  onClick={destroyTask}>DESTROY the USELESS</button>
      </div>
    </div>
  )
}

export default TaskEditor;