import React, { Component } from "react";
import NewProfileBar from "./Menu-profile-bar";
import "./Profile.css";

class Stats extends Component {
  render() {
    return (
      <div>
        <NewProfileBar />
        <div id="Stats-contain">
          <div id="stats-title">
            <h1>Stats</h1>
            <p>Click story below to view detailed stats</p>
            <p id="learn-more">Learn more about using stats</p>
          </div>
          <hr style={{ width: "100%" }}></hr>
          <ul className="ChartTabs">
            <li>
              <p>Views</p>
            </li>
            <li>
              <p>Reads</p>
            </li>
            <li>
              <p>Fans</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Stats;
