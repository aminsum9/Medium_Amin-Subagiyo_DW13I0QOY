import React, { Component } from "react";
import NewStoryBar from "./New-story-bar";

class Bookmark extends Component {
  render() {
    return (
      <div className="Bookmark">
        <NewStoryBar />
        <div className="Bookmark-container">
          <p>Bookmarks</p>
          <div className="Bookmark-contain">
            <div id="Bookmark-mark-image">
              <img src="https://image.flaticon.com/icons/png/512/16/16714.png"></img>
            </div>
            <div id="Bookmark-reading-here">
              <p>Offline reading is here</p>
            </div>
            <div id="Bookmark-upgrade">
              <div>
                <p>Upgrade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookmark;
