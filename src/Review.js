import React, { useEffect } from "react";
import Day from "./Day";

function Review({ reviewList, setSearchOn }) {
  const mostRecentFirst = [...reviewList].reverse();

  useEffect(() => {
    setSearchOn(false);
  }, [setSearchOn])
  
  const days = mostRecentFirst.map(e => 
    <div className="day-layout">
      <div className="day-number">Day {e.id}</div>
      <div className="progress day">
        <p><Day key={e.id} item={e} /></p>
        <div className="counter " style={{width: e.totalPoints + "%", backgroundColor: barColor(e)}}>
        </div>
      </div>
    </div>
  )

  function barColor(e) {
    if (e.totalPoints < 75) {
      return "rgb(218, 40, 96)";
    } else if (e.totalPoints < 100) {
      return "rgb(3, 120, 120)";
    } else {
      return "gold";
    }
  }
  
  return (
    <>
      <h3 className="headline">Check out this old stuff</h3>
      {days}
    </>
  )
}

export default Review;