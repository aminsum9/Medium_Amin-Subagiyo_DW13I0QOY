import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Start from "./Start";
import Home from "./Home";
import Mobile from "./Category/Mobile";
import Network from "./Category/Network";
import Web from "./Category/Web";
import Article from "./Article";
import Comment from "./Article-part/Comment";
import Newstory from "./Menu-profile/New-story";
import NewStoryBar from "./Menu-profile/New-story-bar";
import Stats from "./Menu-profile/Stats";
import Bookmark from "./Menu-profile/Bookmark";
import Profile from "./Menu-profile/Profile";
import HomeBar from "./Home-bar";
import Story from "./Menu-profile/Story";
import DraftPublished from "./Menu-profile/draft-publihed";
import "./App.css";
import * as serviceWorker from "./serviceWorker";

export default function App() {

  var token = localStorage.getItem('token');

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Start">
            <Start />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Mobile">
            <Mobile />
          </Route>
          <Route path="/Network">
            <Network />
          </Route>
          <Route path="/Web">
            <Web />
          </Route>
          <Route path="/Article">
            <Article />
          </Route>
          <Route path="/Comment">
            <Comment />
          </Route>
          <Route path="/New-story">
            <Newstory />
          </Route>
          <Route path="/New-story-bar">
            <NewStoryBar />
          </Route>
          <Route path="/Stats">
            <Stats />
          </Route>
          <Route path="/Bookmark">
            <Bookmark />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/HomeBar">
            <HomeBar />
          </Route>
          <Route path="/Story">
            <Story />
          </Route>
          <Route path="/DraftPublished">
            <DraftPublished />
          </Route>
          {token ? (
          <Route path="/">
            <Home />
          </Route>
          ):(
          <Route path="/">
            <Start />
          </Route>
          )}
        </Switch>
      </div>
    </Router>
  );
}
