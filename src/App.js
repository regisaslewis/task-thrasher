import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import Points from "./Points";
import Review from "./Review";
import Tasks from "./Tasks";
import TaskEditor from "./TaskEditor";

function App() {
  
  const [todayPercent, setTodayPercent] = useState(0);
  const [taskList, setTaskList] = useState([]);
  const [taskId, setTaskId] = useState(1);
  const [taskItem, setTaskItem] = useState({})
  const [reviewList, setReviewList] = useState([]);

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  
  const todayDate = `${month.toString().length === 1 ? "0" + month : month}/${day.toString().length === 1 ? "0" + day : day }/${year}`

  useEffect(() => {
    fetch(`http://localhost:3001/tasks`)
      .then(resp => resp.json())
      .then(data => setTaskList(data))
      .catch(error => console.log(error.message))
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/days`)
      .then(resp => resp.json())
      .then(data => setReviewList(data))
      .catch(error => console.log(error.message))
  }, [])

  useEffect(() => {
    if (reviewList.length > 0) {
      fetch(`http://localhost:3001/days/${reviewList.length}`)
        .then(resp => resp.json())
        .then(data => {
          if (data.date === todayDate) {
          setTodayPercent(data.totalPoints);
          }
        })
    }
  }, [reviewList, todayDate])

  function changePercent(amount) {
    if (todayPercent + amount < 100) {
      setTodayPercent(todayPercent + amount)
    } else {
      setTodayPercent(100);
    }
  }

  function handleDelete(id) {
    const reducedList = taskList.filter(e => e.id !== id);
    setTaskList(reducedList);
  }

  function barColor() {
    if (todayPercent < 75) {
      return "rgb(218, 40, 96)";
    } else if (todayPercent < 100) {
      return "rgb(3, 120, 120)";
    } else {
      return "gold";
    }
  }
  
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home 
            todayPercent={todayPercent}
            setTodayPercent={setTodayPercent} 
            reviewList={reviewList} 
            setReviewList={setReviewList}
            todayDate={todayDate}
            barColor={barColor}
          />
        </Route>
        <Route path="/points">
          <Points 
            taskList={taskList}
            todayPercent={todayPercent}
            changePercent={changePercent}
            barColor={barColor}
          />
        </Route>
        <Route path="/review">
          <Review reviewList={reviewList} />
        </Route>
        <Route exact path="/tasks">
          <Tasks 
            getItem={setTaskItem} 
            getId={setTaskId}
            taskList={taskList} 
            setTaskList={setTaskList}
          />
        </Route>
        <Route exact path={`/tasks/${taskId}`}>
          <TaskEditor 
            taskId={taskId} 
            taskItem={taskItem} 
            setTaskList={setTaskList}
            handleDelete={handleDelete}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
