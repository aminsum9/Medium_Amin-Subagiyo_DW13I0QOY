import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Signup from "./Signup";
import "./App.css";

class Signin extends Component{
    render(){
      return(
        <div>
          <nav className="app-nav">
              <Link to="/Signin" className="nav-link">Sign In</Link>
              <Link to="/Signup" className="nav-link">Sign Up</Link>
          </nav>
          <div className="signin regist">
          <h1>Sign In</h1>
              <form action="" method="">
                    <ul>
                       <li>
                          <label for="email">Username</label>
                       </li>
                       <li>
                          <input type="text" name="email" id="email" placeholder="  fill your email..."></input>
                       </li>
                       <br></br>
                       <li>
                          <label for="password">Password</label>
                       </li>
                       <li>
                          <input type="password" name="password" id="password" placeholder="  create new password..."></input>
                       </li>
                       <br></br>
                       <li>
                          <button type="button">Sign In</button>
                       </li>
                       <li>
                          <p>Belum punya akun?<Link to="/Signup">Sign Up</Link></p>
                       </li>
                    </ul>
                 </form>
          </div>
        </div>
      )
    };
  }

export default Signin;