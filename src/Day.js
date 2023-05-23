import React from "react";

function Days({ item }) {

  const { date, totalPoints} = item;
  const shortDate = date.slice(0, 5) + "/" + date.slice(8, 10);

  return (
    <div>
      <div>Date: {shortDate}</div> 
      <div>{totalPoints} {totalPoints === 1 ? "point" : "points"}</div>
    </div>
  )
}

export default Days; 