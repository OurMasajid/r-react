import React from 'react';
import { Link, useHistory } from "react-router-dom";

export default function AppHeader(params) {
  let history = useHistory();
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <div className="navbar-nav">
          <button className="btn text-secondary pl-0" id="btnBack"
            onClick={()=>history.goBack()}>&lt; back</button>
        </div>
        <span className="lead text-secondary mx-auto">Our Masajid</span>
        <div className="">
          <button style={{fontSize: "1rem"}} className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse mt-4" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" style={{fontSize: "large"}}>
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/prayer-tv1">Create/Manage</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
