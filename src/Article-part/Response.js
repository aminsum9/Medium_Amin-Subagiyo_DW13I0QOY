import React, { Component } from "react";

class Response extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputHeight: 100,
      showBtn: "none"
    };
  }
  render() {
    return (
      <div className="app-comment-body">
        <div className="app-comment-article-title">
          <textarea
            onFocus={() =>
              this.setState({
                inputHeight: 300,
                showBtn: "block"
              })
            }
            onBlur={() =>
              this.setState({
                inputHeight: 100,
                showBtn: "none"
              })
            }
            style={{ height: this.state.inputHeight }}
          ></textarea>
          <div style={{ display: this.state.showBtn }}>
            <button>click me</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Response;
