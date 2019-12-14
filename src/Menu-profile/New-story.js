import React, { Component } from "react";
import NewStoryBar from "./New-story-bar";
import "./Profile.css";

class Newstory extends Component {
  render() {
    return (
      <div>
        <NewStoryBar />
        <div id="Section-content">
          <h1>Title</h1>
          <div id="New-story-content">
            <div id="New-story-add">
              <img src="https://cdn4.iconfinder.com/data/icons/ios7-essence/22/add_plus-512.png"></img>
            </div>
            <input type="text"></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Newstory;
