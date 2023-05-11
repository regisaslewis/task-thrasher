import React, { useState } from "react";
import IndividualTask from "./IndivualTask";

function Tasks({ taskList, setTaskList, getId, getItem }) {

  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskImage, setNewTaskImage] = useState("");
  const [newTaskTime, setNewTaskTime] = useState("");
  const [newTaskPoints, setNewTaskPoints] = useState("");
  const editTaskList = taskList.map(e => <IndividualTask getItem={getItem} getId={getId} key={e.id} item={e} />)

  function handleNameChange(e) {
    setNewTaskName(e.target.value)    
  }

  function handleImageChange(e) {
    setNewTaskImage(e.target.value)    
  }

  function handleTimeChange(e) {
    setNewTaskTime(e.target.value)    
  }

  function handlePointsChange(e) {
    setNewTaskPoints(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newTaskName,
        image: newTaskImage,
        time: newTaskTime,
        points: newTaskPoints
      })
    })
      .then(resp => resp.json())
      .then(data => {
        const updatedList = [...taskList, data];
        setTaskList(updatedList);
        setNewTaskName("");
        setNewTaskImage("");
        setNewTaskTime("");
        setNewTaskPoints("");
      })
  }

  return (
    <div>
      <h3 className="headline">SPAWN a New Task!</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Task Name..." value={newTaskName} onChange={handleNameChange} />
          <input type="text" placeholder="Thumbnail URL..." value={newTaskImage} onChange={handleImageChange} />
          <input type="text" placeholder="Time per segment..." value={newTaskTime} onChange={handleTimeChange} />
          <input type="text" placeholder="Points per segment..." value={newTaskPoints} onChange={handlePointsChange} />
          <button type="submt">SEND FORTH!</button>
        </form>
      </div>
      <h3 className="headline">EDIT the old!</h3>
      <div className="task-grid">
        {editTaskList}
      </div>
    </div>
  )
}

export default Tasks;