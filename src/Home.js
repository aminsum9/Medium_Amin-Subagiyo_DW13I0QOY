import React from "react";

import MainArticle from "./Home/Mainarticle";
import Post from "./Home/Post";
import { makeStyles } from "@material-ui/core/styles";
import Categorybar from "./Category-bar";
import HomeBar from "./Home-bar";
import "./App.css";

const useStyle = makeStyles({
  hr: {
    backgroundColor: "lightgrey"
  }
});

export default function Category() {
  const classes = useStyle();
  return (
    <div>
      <HomeBar />
      <Categorybar />
      <div className="popular-post">
        <div className="main-article">
          <MainArticle />
        </div>
        <br />
        <hr className={classes.hr}></hr>
        <Post />
      </div>
    </div>
  );
}
