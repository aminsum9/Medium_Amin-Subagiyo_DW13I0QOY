import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.js";

class Categorybar extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Medium</h1>
        <nav className="app-nav-home">
          <Link to="/Home" className="nav-link-home">
            Home
          </Link>
          <Link to="/Web" className="nav-link-home">
            Web Programming
          </Link>
          <Link to="/Network" className="nav-link-home">
            Network
          </Link>
          <Link to="/Mobile" className="nav-link-home">
            Mobile
          </Link>
        </nav>
      </div>
    );
  }
}

export default Categorybar;
