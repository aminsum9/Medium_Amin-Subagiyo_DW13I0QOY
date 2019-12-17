import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import MenuProfileBar from "./Menu-profile-bar";
import DraftPublished from "./draft-publihed";
import "./Profile.css";

class Story extends Component {
  render() {
    return (
      <div className="Story">
        <MenuProfileBar />
        <div className="Story-contain">
          <h1 id="Story-title">Your stories</h1>
          <div className="Story-button">
            <Button variant="outlined">Import a story</Button>
            <Button variant="outlined">Write a story</Button>
          </div>
          <DraftPublished />
        </div>
      </div>
    );
  }
}

export default Story;
