import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import Points from "./Points";
import Review from "./Review";
import Tasks from "./Tasks"

function App() {
  
  const [todayPercent, setTodayPercent] = useState(0);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/tasks`)
      .then(resp => resp.json())
      .then(data => setTaskList(data))
  }, [])

  function increasePercent() {
    if (todayPercent < 100) {
      setTodayPercent(todayPercent + 10)
    };
  }

  return (
    <div>
      <NavBar todayPercent={todayPercent} setTodayPercent={setTodayPercent} />
      <Switch>
        <Route exact path="/">
          <Home todayPercent={todayPercent} increasePercent={increasePercent}/>
        </Route>
        <Route path="/points">
          <Points taskList={taskList} />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/tasks">
          <Tasks />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
