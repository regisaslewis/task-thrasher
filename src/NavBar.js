import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() { 
  return (
    <>
      <div className="title">
        <h1>The Task Thrasher</h1>
        <h2 className="squash">get things done <span className="lil">with</span> big, meaty clicks</h2>
      </div>
      <h3 className="name-card">by Regis Lewis</h3>
      <div className="button-lineup">
        <NavLink to="/" exact>
          <button className="nav-button">Update Today</button>
        </NavLink>
        <NavLink to="/points" exact>
          <button className="nav-button">Add Points</button>
        </NavLink>
        <NavLink to="/tasks" exact>
          <button className="nav-button">Manage Tasks</button>
        </NavLink>
        <NavLink to="/review" exact>
          <button className="nav-button">View Records</button>
        </NavLink>
      </div>
    </>
  )
}

export default NavBar;