import React from "react";

function Days({ item }) {

  const { date, totalPoints} = item;
  return (
    <div>
      <p>Date: {date} || {totalPoints} points</p>
    </div>
  )
}

export default Days; 