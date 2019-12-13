import React, { Component } from "react";

class Response extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputHeight: 100,
      placeholder: "Write a response...",
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
                inputHeight: 230,
                showBtn: "block",
                placeholder: ""
              })
            }
            onBlur={() =>
              this.setState({
                inputHeight: 100,
                showBtn: "none",
                placeholder: "Write a reponse..."
              })
            }
            style={{ height: this.state.inputHeight }}
            placeholder={this.state.placeholder}
          ></textarea>
          <div style={{ display: this.state.showBtn }}>
            <button>
              <strong>Publish</strong>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Response;
