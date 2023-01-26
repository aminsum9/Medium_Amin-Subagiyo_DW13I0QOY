import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import "./Articlepart.css";

class Claps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      account: {
        username: ""
      }
    };
  }

  render() {
    return (
      <div
        style={{
          width: "800px",
          margin: "40px",
          // margin: "auto",
          display: "flex",
          padding: "20px"
        }}
      >
        <Fab
          id="clap"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          <img src="https://static.thenounproject.com/png/1085294-200.png"></img>
        </Fab>
        <p id="counter">{this.state.counter} claps</p>
        <div className="share">
          <IconButton>
            <img src="https://storage.needpix.com/rsynced_images/facebook-719085_1280.png"></img>
          </IconButton>
          <IconButton>
            <img src="https://www.iconninja.com/files/552/369/307/socialmedia-social-news-network-tweet-twitter-share-icon.png"></img>
          </IconButton>
          <IconButton>
            <img src="https://www.freepngimg.com/thumb/instagram/60239-like-icons-bookmark-button-computer-facebook-instagram.png"></img>
          </IconButton>
          <IconButton>
            <img src="https://cdn2.iconfinder.com/data/icons/interface-elements-2/512/more_options_menu_option-512.png"></img>
          </IconButton>
        </div>
      </div>
    );
  }
}

export default Claps;
