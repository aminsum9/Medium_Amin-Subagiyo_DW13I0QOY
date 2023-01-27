import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import "./Home.css";
import { IMG_URL } from "../config/host";

export default class LastPost extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/v1/articles`).then(res => {
      const articles = res.data;
      console.log(res.data);
      this.setState({ articles });
    });
  }

  render() {
    return (
      <Card
        className="cardLastPost"
        style={{ boxShadow: "none", width: "100%" }}
      >
        <div className="containerLastPost">
          {this.state.articles.map(article => (
            <CardContent className="bulletLastPost">
              <div>
                <img src={IMG_URL + article.image} className="imageLastPost"></img>
              </div>
              <Typography
                className="titleLastPost"
                color="textSecondary"
                gutterBottom
              >
                {/* {article.category} */}
              </Typography>
              <Typography variant="h5" component="h2">
                {article.title}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className="articleLastPost"
              >
                {article.content.substring(0, 200) + "..."}
                <br />
              </Typography>
            </CardContent>
          ))}
        </div>
      </Card>
    );
  }
}
