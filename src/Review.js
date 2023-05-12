import React from "react";
import Day from "./Day";

function Review({ reviewList }) {

  const days = reviewList.map(e => 
    <div className="progress points day">
      <p><Day key={e.id} item={e} /></p>
      <div className="counter " style={{width: e.totalPoints + "%", backgroundColor: (e.totalPoints < 75) ? "rgba(180, 35, 55)" : "rgb(35, 65, 63)"}}>
      </div>
    </div>)
  
  return (
    <>
      <h3 className="headline">Check out this old stuff</h3>
      {days}
    </>
  )
}

export default Review;