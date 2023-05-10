import React from "react"

function IndividualTask({ item }) {

  const { name, image, points, time} = item;

  return (
    <div className="task-item task-grid-task">
      <img className="small-image" alt={name} src={image} />
      <p className="task-name">{name} ({time})</p>
      <p className="task-points">Point Value: { points}</p>
    </div>
  )
}

export default IndividualTask;