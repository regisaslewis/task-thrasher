import React from "react";
import { NavLink } from "react-router-dom";

function IndividualTask({ item, getId, getItem }) {

  const { id, name, image, points, time} = item;

  function handleClick() {
    getId(id);
    getItem(item);
  }

  return (
    <NavLink to={`/tasks/${id}`}>
      <div className="task-item task-grid-task" onClick={handleClick}>
        <img className="small-image" alt={name} src={image} />
        <p className="task-name">{name} ({time})</p>
        <p className="task-points">Point Value: { points}</p>
      </div>
    </NavLink>
  )
}

export default IndividualTask;