import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Signin from "./Signin";
import Home from "./Home";
import "./App.css";

class Signup extends Component{
    render(){
      return(
        <div>
          <nav className="app-nav">
              <h1>MasterCode</h1>
              <Link to="/Signin" className="nav-link">Sign In</Link>
              <Link to="/Signup" className="nav-link">Sign Up</Link>
          </nav>
          <div className="signup regist">
          <h1>Sign Up</h1>
              <form action="" method="">
                    <ul>
                       <li>
                          <label for="name">Full Name</label>
                       </li>
                       <li>
                          <input type="text" name="name" id="name" placeholder="  fill your full name..."></input>
                       </li>
                       <br></br>
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
                          <button type="button"><Link to="./Home">Sign Up</Link></button>
                       </li>
                       <li>
                          <p>Sudah punya akun?<Link to="./Signin">Sign In</Link></p>
                       </li>
                    </ul>
                 </form>
          </div>
        </div>
      )
    };
  }

export default Signup;