import React, { useState, useEffect } from "react";

function Home({ 
  todayPercent,
  reviewList, 
  setSearchOn,
  setReviewList, 
  todayDate,
  barColor
}) {

  const [congratulate, setCongratulate] = useState(null);

  useEffect(() => {
    setSearchOn(false);
  }, [setSearchOn])

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
        setCongratulate(<p className="grats spun">WHAT A BEAST</p>)
      } else if (todayPercent >= 85) {
        setCongratulate(<p className="grats">Almost Got It</p>)
      } else if (todayPercent >= 70) {
        setCongratulate(<p className="grats">Just a little more effort</p>)
      } else if (todayPercent >= 50) {
        setCongratulate(<p className="grats">come on, dude...</p>)
      } else {
        setCongratulate(<p className="grats">Be. Better.</p>)
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
    <h3 className="headline"><span className="underline">Here's how things look for</span> <br /> ||{todayDate}||</h3>
    <div className="progress home">
      <p>Total Points: <span style={{
        fontSize: (todayPercent === 100) ? "30px" : "25px"}}>{todayPercent === 100 ? todayPercent + "!!!" : todayPercent}</span>
      </p>
      <div className="counter home" style={{height: todayPercent + "%", backgroundColor: barColor()}}>
    </div>
    
  </div> 
    <div className="destroyer">
      <button onClick={handlePost}>Post Today's Points</button>
      {congratulate}
    </div>
  </div>
  )
}

export default Home;