import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../reducers/userReducer.js";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((state) => state.user);
  // const fullName = `${user.firstName} ${user.lastName}`;
const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setLogout());

    navigate("/");
}
  return (
    <nav className ="navbar ">
      <div className ="container-fluid">
        <div className ="navbar-header">
            <a className ="navbar-brand" href="#">Journey</a>
        </div>
        <form className="navbar-form navbar-left" action="/action_page.php">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search" name="search"/>
        <div className="input-group-btn">
          <button className="btn btn-default" type="submit">
            <i className="glyphicon glyphicon-search"></i>
          </button>
        </div>
      </div>
    </form>
        
        <ul className ="nav navbar-nav navbar-right">
          <li><button className="nav-item btn btn-link" role="button"><span className="glyphicon glyphicon-globe"></span></button></li>
          <li><button className="nav-item btn btn-link" role="button"><span className="glyphicon glyphicon-user"></span>  </button></li>
          <li><button type="submit" className="nav-item btn btn-link logout" role="button" onClick={(e) => handleSubmit(e)}> <span className="glyphicon glyphicon-log-in"></span> Logout</button></li>
            
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;