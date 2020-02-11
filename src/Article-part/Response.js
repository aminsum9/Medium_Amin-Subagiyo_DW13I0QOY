import React, { Component } from "react";

class Response extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputHeight: 100,
      placeholder: "Write a response...",
      showBtn: "none",
      comment: "",
      allComment: []
    };
  }

  onClick = () => {
    // return console.log("tes");
    this.setState({
      allComment: [this.state.allComment, this.state.comment]
    });
    this.setState({ comment: "" });
    window.setTimeout(() => this.coba(this.state.allComment), 500);
  };

  yourComment = e => {
    // const stateComment = e.target.value;
    this.setState({ comment: e.target.value });
  };

  coba = comment => {
    console.log(comment);
  };

  render() {
    return (
      <div>
        <div>
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
                inputHeight: 230,
                // showBtn: "none",
                placeholder: "Write a reponse..."
              })
            }
            onChange={this.yourComment}
            style={{ height: this.state.inputHeight }}
            placeholder={this.state.placeholder}
          />
          <div style={{ display: this.state.showBtn }}>
            <button onClick={this.onClick}>
              <strong>Publish</strong>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Response;
