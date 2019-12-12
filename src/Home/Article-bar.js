import React, { Component } from "react";
import "../App.css";

class ArticleBar extends Component {
  render() {
    return <div className="article-bar">{this.props.title}</div>;
  }
}

export default ArticleBar;
