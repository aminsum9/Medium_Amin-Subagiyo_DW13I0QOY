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
          <Route path="/">
            <Signin />
          </Route>
        </Switch>
      </div>
    </Router>
   );
}

