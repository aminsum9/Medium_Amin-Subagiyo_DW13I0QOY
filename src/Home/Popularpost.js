import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import "./Home.css";

export default class SimpleCard extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/v1/articles/latest`).then(res => {
      const articles = res.data;
      console.log(res.data);
      this.setState({ articles });
    });
  }

  render() {
    return (
      <Card className="cardPopular" style={{ boxShadow: "none" }}>
        {this.state.articles.map(article => (
          <CardContent className="contentPopular">
            <h1 style={{ paddingRight: "20px", color: "grey" }}>
              {article.id}
            </h1>
            <div style={{ float: "right" }}>
              <Typography
                className="titlePopular"
                color="textSecondary"
                gutterBottom
              >
                {/* {article.category} */}
              </Typography>
              <Typography variant="h5" component="h2">
                {article.title}
              </Typography>
              <Typography variant="body2" component="p">
                {article.content.substring(0, 100) + "..."}
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </div>
          </CardContent>
        ))}
      </Card>
    );
  }
}
