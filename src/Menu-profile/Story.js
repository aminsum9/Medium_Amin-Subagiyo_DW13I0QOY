import React, { Component } from "react";
import "./Profile.css";
import MenuProfileBar from "./Menu-profile-bar";

class Story extends Component {
  render() {
    return (
      <div className="Story">
        <MenuProfileBar />
        <div className="Story-contain">
          <h1 id="Story-title">Your stories</h1>
        </div>
      </div>
    );
  }
}

export default Story;
