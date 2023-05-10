import React from "react";

function Days({ item }) {

  const { date, totalPoints} = item;
  return (
    <div>
      <p>{date}: {totalPoints}% Complete</p>
    </div>
  )
}

export default Days; 