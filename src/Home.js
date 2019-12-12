import React, { Component } from "react";

import MainArticle from "./Home/Mainarticle";
import Post from "./Home/Post";
import Categorybar from "./Category-bar";
import "./App.css";

class Category extends Component {
  render() {
    return (
      <div>
        <Categorybar />
        <div className="popular-post">
          <div className="main-article">
            <MainArticle />
          </div>
          <br></br>
          <br></br>
          <hr></hr>
          <Post />
        </div>
      </div>
    );
  }
}

export default Category;
