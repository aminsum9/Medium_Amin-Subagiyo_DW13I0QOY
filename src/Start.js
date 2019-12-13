import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./App.css";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function Start() {
  const classes = useStyles();
  const [loginOpen, setLoginOpen] = useState(false);
  const [regOpen, setRegOpen] = useState(false);

  const signinOpen = () => {
    setLoginOpen(true);
  };

  const signupOpen = () => {
    setRegOpen(true);
  };

  const signinLinkOpen = () => {
    setLoginOpen(false);
    setRegOpen(true);
  };

  const signupLinkOpen = () => {
    setRegOpen(false);
    setLoginOpen(true);
  };

  const handleClose = type => {
    if (type == "login") setLoginOpen(false);
    else setRegOpen(false);
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
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
            <form action="" method="">
              <div>
                <label for="email">Username</label>
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  id="email"
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
                  placeholder="  fill new password..."
                ></input>
              </div>
              <br></br>
              <div>
                <button type="button">
                  <Link to="/Home" className="start">
                    Sign In
                  </Link>
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
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
            <form action="" method="">
              <div>
                <label for="name">Full Name</label>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="  fill your full name..."
                ></input>
              </div>
              <br></br>
              <div>
                <label for="email">Username</label>
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  id="email"
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
                  placeholder="  create new password..."
                ></input>
              </div>
              <br></br>
              <div>
                <button type="button">
                  <Link to="./Home" className="start">
                    Sign Up
                  </Link>
                </button>
              </div>
              <div>
                <p>Have an account?</p>
                <div onClick={signupLinkOpen} className="sign">
                  Sign In
                </div>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
