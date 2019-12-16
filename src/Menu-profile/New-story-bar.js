import React from "react";
import { Link } from "react-router-dom";

export default function NewStoryBar() {
  return (
    <div class="New-story-bar">
      <div id="New-story-bar-1">
        <div id="New-story-bar-2">
          <Link to="../Home">
            <img src="https://cdn.dribbble.com/users/314298/screenshots/3796877/medium-dribbble.png" />
          </Link>
          <p>Draft</p>
        </div>
        <div id="New-story-bar-3">
          <div id="Publish">Publish</div>
          <img
            src="https://icon-library.net/images/icon-other/icon-other-26.jpg"
            id="other"
          ></img>
          <img
            src="https://cdn3.iconfinder.com/data/icons/line-icons-medium-version/64/bell-512.png"
            id="bell"
          ></img>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/20180602_FIFA_Friendly_Match_Austria_vs._Germany_Mesut_%C3%96zil_850_0704.jpg"
            id="account"
          ></img>
        </div>
      </div>
    </div>
  );
}
