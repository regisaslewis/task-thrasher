import React, { useState } from "react";

function Home({ todayPercent, setTodayPercent, reviewList, setReviewList, todayDate }) {

  const [congratulate, setCongratulate] = useState(null);

  function handlePost() {
    if (!(reviewList[reviewList.length - 1].date === todayDate)) {
      fetch(`http://localhost:3001/days`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          date: todayDate,
          totalPoints: todayPercent
        })
      })
      .then(resp => resp.json())
      .then(data => {
        if (todayPercent === 100) {
          setCongratulate(<p>WHAT A BEAST</p>)
        } else if (todayPercent >= 85) {
          setCongratulate(<p>Almost Got It</p>)
        } else if (todayPercent >= 70) {
          setCongratulate(<p>Maybe next time...</p>)
        } else if (todayPercent >= 50) {
          setCongratulate(<p>come on, dude...</p>)
        } else {
          setCongratulate(<p>Stop wasting my time, bro.</p>)
        };
        setReviewList([...reviewList, data])
      })
    } else {fetch(`http://localhost:3001/days/${reviewList.length}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: todayDate,
        totalPoints: todayPercent
      })
    })
    .then(resp => resp.json())
    .then(data => {
      if (todayPercent >= 100) {
        setCongratulate(<p>WHAT A BEAST</p>)
      } else if (todayPercent >= 85) {
        setCongratulate(<p>Almost Got It</p>)
      } else if (todayPercent >= 70) {
        setCongratulate(<p>Maybe next time...</p>)
      } else if (todayPercent >= 50) {
        setCongratulate(<p>come on, dude...</p>)
      } else {
        setCongratulate(<p>Stop wasting my time, bro.</p>)
      };
      const edittedReviewList = reviewList.map(e => {
        if (e.id === data.id) {
          return data;
        } else {
          return e;
        }
      })
      setReviewList(edittedReviewList);
    })
    }
  }

  return(
  <div className="today">
    <p>
      Points for today, {todayDate}: {todayPercent <= 100 ? todayPercent : 100}/100
    </p>
    <button onClick={handlePost}>Post Today's Points</button>
    <div>
      {congratulate}
    </div>
  </div>
  )
}

export default Home;