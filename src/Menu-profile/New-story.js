import React, { Component } from "react";
import NewStoryBar from "./New-story-bar";
import "./Profile.css";
import { TextField } from "@material-ui/core";
//Import Redux
import { connect } from "react-redux";
import { getCategories } from "../_actions/categories";
import { postArticle } from "../_actions/article";

class Newstory extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      category_id: "",
      image: "",
      data: []
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    window.setTimeout(this.stateData, 500);
  };

  stateData = () => {
    const data = {
      title: this.state.title,
      content: this.state.content,
      category_id: this.state.category_id,
      image: this.state.image
    };
    // console.log(data);
    this.setState({ data });
  };

  onClick = () => {
    const data = {
      title: this.state.title,
      content: this.state.content,
      category_id: this.state.category_id,
      image: this.state.image
    };
    this.setState({ data });
  };

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { categories } = this.props.categories;

    return (
      <div>
        <NewStoryBar data={this.state.data} />
        {/* <svg width="400" height="200">
          <polygon
            points="110,10 40,198 190,78 10,78 160,198"
            style={{
              fill: "lime",
              stroke: "purple",
              strokeWidth: 5
              // fillRule: "evenodd"
            }}
          />
        </svg> */}
        <div id="Section-content">
          <form id="form-add-story">
            <TextField
              id="new-story-title"
              label="Title"
              multiline
              rows="4"
              variant="outlined"
              name="title"
              onChange={this.onChange}
            />
            <br></br>
            <br></br>
            <TextField
              id="new-story-add"
              label="Article"
              multiline
              rows="4"
              variant="outlined"
              name="content"
              onChange={this.onChange}
            />
            <br></br>
            <br></br>
            <div>
              <select
                id="new-story-select-category"
                name="category_id"
                onChange={this.onChange}
              >
                <option>please select one...</option>
                {categories.map((entry, index) => {
                  return (
                    <option key={index} value={entry.id}>
                      {entry.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div id="new-story-image">
              <TextField
                id="new-story-image-add"
                label="Image Url"
                multiline
                rows="4"
                variant="outlined"
                name="image"
                onChange={this.onChange}
              />
              <img src={this.state.image}></img>
            </div>
            {/* <button type="button" onClick={this.onClick}>
              Create Article
            </button> */}
          </form>
        </div>
      </div>
    );
  }
}

const data = new Newstory().onClick();
console.log(data);

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  // console.log(this.state.title);
  return {
    postArticle: () => {
      dispatch(postArticle(data));
    },
    getCategories: () => {
      dispatch(getCategories());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Newstory);
