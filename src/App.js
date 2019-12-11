import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";
import Mobile from "./Category/Mobile";
import Network from "./Category/Network";
import Web from "./Category/Web";
import Article from "./Article";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Signin">
            <Signin />
          </Route>
          <Route path="/Signup">
            <Signup />
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
          <Route path="/">
            <Signin />
          </Route>
        </Switch>
      </div>
    </Router>
   );
}

