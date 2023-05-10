import React from "react";
import Day from "./Day";

function Review({ reviewList }) {

  const days = reviewList.map(e => <Day key={e.id} item={e} />)
  return (
    <div>
      <h3>Review Component</h3>
      {days}
    </div>
  )
}

export default Review;