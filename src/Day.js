import React from "react";

function Days({ item }) {

  const { date, totalPoints} = item;
  return (
    <div>
      <div>Date: {date.slice(0, 5)}</div> 
      <div>{totalPoints} points</div>
    </div>
  )
}

export default Days; 