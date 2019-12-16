import React, { Component } from "react";
import MenuStoryBar from "./Menu-profile-bar";
import ProfileUnderBar from "./Profile-underbar";
import "./script.js";
import "./Profile.css";

class Profile extends Component {
  // handleClick = () => {
  //   alert("tes");
  // };

  render() {
    return (
      <div>
        <MenuStoryBar />
        <div className="Profile-container">
          <div id="identity">
            <div id="identity-name">
              <p>Amin Subagiyo</p>
              <div id="edit-profile">
                <p>Edit Profile</p>
              </div>
            </div>
            <div id="Following">
              <p>1 Following</p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/20180602_FIFA_Friendly_Match_Austria_vs._Germany_Mesut_%C3%96zil_850_0704.jpg"></img>
          </div>
          <ProfileUnderBar />
        </div>
      </div>
    );
  }
}

export default Profile;
