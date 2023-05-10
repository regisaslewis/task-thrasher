import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() { 
  return (
    <>
      <div className="title">
        <h1>The Task Thrasher</h1>
        <h2 className="squash">self-motivation <span className="lil">through</span> data management</h2>
      </div>
        <div className="button-lineup">
          <NavLink to="/" exact>
            <button className="nav-button">Home</button>
          </NavLink>
          <NavLink to="/points" exact>
            <button className="nav-button">Points</button>
          </NavLink>
          <NavLink to="/review" exact>
            <button className="nav-button">Review</button>
          </NavLink>
          <NavLink to="/tasks" exact>
            <button className="nav-button">Tasks</button>
          </NavLink>
        </div>
    </>
  )
}

export default NavBar;