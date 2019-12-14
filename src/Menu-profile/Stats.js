import React, { Component } from "react";
import NewStoryBar from "./New-story-bar";
import "./Profile.css";

class Stats extends Component {
  render() {
    return (
      <div className="Stats">
        <NewStoryBar />
        <div id="Stats-contain">
          <div id="stats-title">
            <h1>Stats</h1>
            <p>Click story below to view detailed stats</p>
            <p id="learn-more">Learn more about using stats</p>
          </div>
          <hr style={{ width: "100%" }}></hr>
        </div>
      </div>
    );
  }
}

export default Stats;
