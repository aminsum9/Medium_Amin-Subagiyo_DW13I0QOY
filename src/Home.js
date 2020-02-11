import React from "react";

import MainArticle from "./Home/Mainarticle";
import Post from "./Home/Post";
import { makeStyles } from "@material-ui/core/styles";
import Categorybar from "./Category-bar";
import HomeBar from "./Home-bar";
import "./App.css";

const useStyle = makeStyles({
  topPost: {
    padding: "20px"
  }
});

export default function Category() {
  const classes = useStyle();
  return (
    <div>
      <div>
        <HomeBar />
        <Categorybar />
      </div>
      <div className={classes.topPost}>
        <div className="main-article">
          <MainArticle />
        </div>
        <div style={{ maxWidth: "1400px", margin: "auto" }}>
          <Post />
        </div>
      </div>
    </div>
  );
}
