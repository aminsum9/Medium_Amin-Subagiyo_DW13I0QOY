import React, { Component } from "react";
import MenuProfileBar from "./Menu-profile-bar";

const BaseContext = React.createContext();

class Bookmark extends Component {
  state = {title: "Offline reading is here"}
  render() {
    return (
      <BaseContext.Provider value={this.state.title}>
        <div>
          <MenuProfileBar />
          <div className="Bookmark-container">
            <p>Bookmarks</p>
            <BookMarkContain />
          </div>
        </div>
      </BaseContext.Provider>
    );
  }
}

export default Bookmark;

class BookMarkContain extends React.Component {
  static contextType = BaseContext;

  render() {
    return (
      <div className="Bookmark-contain">
        <div id="Bookmark-mark-image">
          <img
            src="https://image.flaticon.com/icons/png/512/16/16714.png"
            alt="-"
          />
        </div>
        <div id="Bookmark-reading-here">
          <p>{this.context}</p>
        </div>
        <div id="Bookmark-upgrade">
          <div>
            <p>Upgrade</p>
          </div>
        </div>
      </div>
    );
  }
}
