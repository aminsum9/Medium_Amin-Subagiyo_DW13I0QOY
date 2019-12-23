import React, { Component } from "react";
import Homebar from "../Home-bar";
import Contain from "./Category-contain";

class Mobile extends Component {
  render() {
    return (
      <div>
        <Homebar />
        <Contain />
      </div>
    );
  }
}

export default Mobile;
