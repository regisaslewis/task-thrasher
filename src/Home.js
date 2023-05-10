import React from "react";

function Home({ todayPercent, increasePercent }) {
  
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  return(
  <div className="today">
    <p>
      Percent complete for {month}/{day}/{year}: {todayPercent <= 100 ? todayPercent : 100}%
    </p>
    <button onClick={increasePercent}>Increase today's percent</button>
  </div>
  )
}

export default Home;