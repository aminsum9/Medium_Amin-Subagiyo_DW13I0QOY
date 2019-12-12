import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import "../App.css";

class Claps extends Component {
  render() {
    return (
      <div class="claps">
        <Fab id="clap">
          <img src="https://static.thenounproject.com/png/1085294-200.png"></img>
        </Fab>
      </div>
    );
  }
}

export default Claps;
