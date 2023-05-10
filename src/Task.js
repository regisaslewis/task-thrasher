import React from "react";

function Task({ item }) {

  const { name, image, points, time} = item;
  return (
    <div className="task-item">
      <h3>{name}</h3>
      <img alt={name} src={image} />
      <p>Percent: {points}</p>
      <p>{time}</p>
    </div>
  )
}

export default Task;