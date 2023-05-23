import React from "react";
import Day from "./Day";

function Review({ reviewList }) {
  const mostRecentFirst = [...reviewList].reverse();
  
  const days = mostRecentFirst.map(e => 
    <div className="day-layout">
      <div className="day-number">Day {e.id}</div>
      <div className="progress day">
        <p><Day key={e.id} item={e} /></p>
        <div className="counter " style={{width: e.totalPoints + "%", backgroundColor: (e.totalPoints < 75) ? "rgb(218, 40, 96)" : "rgb(3, 120, 120)"}}>
        </div>
      </div>
    </div>
  )
  
  return (
    <>
      <h3 className="headline">Check out this old stuff</h3>
      {days}
    </>
  )
}

export default Review;