import React, { useState } from "react";
import IndividualTask from "./IndivualTask";

function Tasks({ 
  taskList, 
  setTaskList, 
  getId, 
  getItem,
}) {

  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskImage, setNewTaskImage] = useState("");
  const [newTaskTime, setNewTaskTime] = useState("");
  const [newTaskPoints, setNewTaskPoints] = useState("");
  const [filterName, setFilterName] = useState("")

  const filteredTasks = taskList.filter(task => task.name.toLowerCase().includes(filterName.toLowerCase()))

  const editTaskList = filteredTasks.map(e => <IndividualTask getItem={getItem} getId={getId} key={e.id} item={e} />)

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
    if (newTaskName && newTaskImage && newTaskTime && newTaskPoints) {
      fetch(`http://localhost:3001/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newTaskName,
        image: newTaskImage,
        time: newTaskTime,
        points: Number(newTaskPoints)
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
  }

  function handleFilter(e) {
    setFilterName(e.target.value)
  }

  return (
    <div>
    <div className="filter">
      <h3 className="headline">LIMIT the EXCESS</h3>
      <input className="filter-input" type="text" placeholder="Filter..." value={filterName} onChange={handleFilter}/>
    </div>
      <h3 className="headline">CREATE the NEW</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-tasks">
            <label>Name:</label>
            <input type="text" placeholder="Task Name..." value={newTaskName} onChange={handleNameChange} />
          </div>
          <div className="input-tasks">
            <label>Image:</label>
            <input type="text" placeholder="Thumbnail URL..." value={newTaskImage} onChange={handleImageChange} />
          </div>
          <div className="input-tasks">
            <label>Time:</label>
            <input type="text" placeholder="Time per segment..." value={newTaskTime} onChange={handleTimeChange} />
          </div>
          <div className="input-tasks">
            <label>Points:</label>
            <input type="text" placeholder="Points per segment..." value={newTaskPoints} onChange={handlePointsChange} />
          </div>
          <div className="buttons">
            <button type="submt">SPAWN!</button>
          </div>
        </form>
      </div>
      <h3 className="headline">ALTER the OLD</h3>
      <div className="task-grid">
        {editTaskList}
      </div>
    </div>
  )
}

export default Tasks;