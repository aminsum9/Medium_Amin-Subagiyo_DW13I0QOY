import React, { Component } from "react";
import NewStoryBar from "./New-story-bar";
import "./New-story.css";

class Newstory extends Component {
  render() {
    return (
      <div>
        <NewStoryBar />
        <h1>This is New Story</h1>
      </div>
    );
  }
}

export default Newstory;
