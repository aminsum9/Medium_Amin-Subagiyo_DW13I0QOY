import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios, { post } from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./App.css";

export default function Start() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [regOpen, setRegOpen] = useState(false);
  //Sign In
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("failed");
  //Sign Up
  const [regFullname, setRegFullname] = useState();
  const [regUsername, setRegUsername] = useState();
  const [regEmail, setRegEmail] = useState();
  const [regPassword, setRegPassword] = useState();
  //message
  const [regMessage, setMessage] = useState();

  //function Sign In
  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
    if (password == null || email == null) {
      setPassword("failed");
    }
  };

  const onClickLogin = () => {
    const data = {
      email: email,
      password: password
    };
    console.log(data);
    return post(`http://localhost:5000/api/v1/login`, data).then(response => {
      if (response.data.user != null) {
        window.location = "/Home";
      } else {
        setMessage(response.data.message);
      }
    });
  };

  //function Sign Up
  const onRegFullname = e => {
    setRegFullname(e.target.value);
  };

  const onRegUsername = e => {
    setRegUsername(e.target.value);
  };

  const onRegEmail = e => {
    setRegEmail(e.target.value);
  };

  const onRegPassword = e => {
    setRegPassword(e.target.value);
  };

  const onSignUp = () => {
    const data = {
      fullname: regFullname,
      username: regUsername,
      email: regEmail,
      password: regPassword,
      is_active: 1
    };
    return post(`http://localhost:5000/api/v1/register`, data).then(
      response => {
        const res = response.data;
        if (res.message == "success") {
          alert(res.message);
          window.location = "/Home";
        } else {
          setMessage(res.message);
        }
      }
    );
  };

  //control modal
  const signinOpen = () => {
    setLoginOpen(true);
  };

  const signupOpen = () => {
    setRegOpen(true);
  };

  const signinLinkOpen = () => {
    setMessage("");
    setLoginOpen(false);
    setRegOpen(true);
  };

  const signupLinkOpen = () => {
    setMessage("");
    setRegOpen(false);
    setLoginOpen(true);
  };

  const handleClose = type => {
    if (type == "login") {
      setLoginOpen(false);
      setMessage("");
    } else {
      setRegOpen(false);
      setMessage("");
    }
  };

  return (
    <div>
      <nav className="app-nav">
        <h1>Medium</h1>
        <Link to="/Signin" className="nav-link">
          <button type="button" onClick={signinOpen}>
            Sign In
          </button>
        </Link>
        <Link to="/Signin" className="nav-link" id="get-started">
          <button type="button" onClick={signupOpen}>
            Get Started
          </button>
        </Link>
      </nav>
      <div class="start-page">
        <h1>Get smarter about what matters to you.</h1>
      </div>
      {/* Log In */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modalStart"
        open={loginOpen}
        onClose={() => handleClose("login")}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={loginOpen}>
          <div className="signin regist">
            <h1>Sign In</h1>
            {regMessage != null && (
              <p style={{ color: "red", fontSize: "17px" }}>{regMessage}</p>
            )}
            <form /*onSubmit={this.onSubmit}*/>
              <div>
                <label for="email">Username</label>
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={onChangeEmail}
                  placeholder="  fill your email..."
                ></input>
              </div>
              <br></br>
              <div>
                <label for="password">Password</label>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={onChangePassword}
                  placeholder="  fill new password..."
                ></input>
              </div>
              <br></br>
              <div>
                <button type="button" onClick={onClickLogin}>
                  {/* <Link to="/Home" className="start"> */}
                  Sign In
                  {/* </Link> */}
                </button>
              </div>
              <div>
                <p>
                  Don't have an account yet?
                  <div onClick={signinLinkOpen} className="sign">
                    Sign Up
                  </div>
                </p>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
      {/* Registration */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modalStart"
        open={regOpen}
        onClose={() => handleClose("register")}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={regOpen}>
          <div className="signup regist">
            <h1>Sign Up</h1>
            {regMessage != null && (
              <p style={{ color: "red", fontSize: "17px" }}>{regMessage}</p>
            )}
            <form action="" method="">
              <div>
                <label for="fullname">Full Name</label>
              </div>
              <div>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="  fill your full name..."
                  onChange={onRegFullname}
                ></input>
              </div>
              <br></br>
              <div>
                <label for="username">Username</label>
              </div>
              <div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="  fill your username..."
                  onChange={onRegUsername}
                ></input>
              </div>
              <br></br>
              <div>
                <label for="email">Email</label>
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="  fill your email..."
                  onChange={onRegEmail}
                ></input>
              </div>
              <br></br>
              <div>
                <label for="password">Password</label>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="  create new password..."
                  onChange={onRegPassword}
                ></input>
              </div>
              <br></br>
              <div>
                <button type="button" onClick={onSignUp}>
                  {/* <Link to="./Home" className="start"> */}
                  Sign Up
                  {/* </Link> */}
                </button>
              </div>
              <div>
                <p>
                  Have an account?
                  <div onClick={signupLinkOpen} className="sign">
                    Sign In
                  </div>
                </p>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
