import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Start from "./Start";
import Home from "./Home";
import Mobile from "./Category/Mobile";
import Network from "./Category/Network";
import Web from "./Category/Web";
import Article from "./Article";
import Comment from "./Article-part/Comment";
import "./App.css";

export default function App() {
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
          <Route path="/">
            <Start />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
