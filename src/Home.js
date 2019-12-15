import React, { Component } from "react";

import MainArticle from "./Home/Mainarticle";
import Post from "./Home/Post";
import Categorybar from "./Category-bar";
import HomeBar from "./Home-bar";
import "./App.css";

class Category extends Component {
  render() {
    return (
      <div>
        <HomeBar />
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
