import React from "react";

function TaskButton({ item, changePercent }) {

  const { name, image, points, time} = item;

  function handleClick() {
    changePercent(points)
  }
  return (
    <div onClick={handleClick} className="task-item">
      <h3>{name}</h3>
      <p>{time}</p>
      <img alt={name} src={image} />
      <p>Point Value: {points}</p>
    </div>
  )
}

export default TaskButton;