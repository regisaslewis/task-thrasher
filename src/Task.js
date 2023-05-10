import React from "react";

function Task({ item, changePercent }) {

  const { name, image, points, time} = item;

  function handleClick() {
    changePercent(points)
  }
  return (
    <div onClick={handleClick} className="task-item">
      <h3>{name}</h3>
      <img alt={name} src={image} />
      <p>Percent: {points}</p>
      <p>{time}</p>
    </div>
  )
}

export default Task;