import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../App.css";

const useStyles = makeStyles({
  card: {
    width: "100%"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function Newpost() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const articles = [
    {
      image:
        "https://yt3.ggpht.com/a/AGF-l7-9-FRpBK_E7OQcduUOufKvX3SEXv8svC1Cfg=s900-c-k-c0xffffffff-no-rj-mo",
      category: "web",
      title: "Blogger",
      content: "blogger is the one of most polular blog maker.."
    },
    {
      image:
        "https://ultrawebjogja.com/wp-content/uploads/2019/07/wordpress.png",
      category: "web",
      title: "WordPress",
      content: "WordPress is the one of most polular blog maker.."
    },
    {
      image: "https://medium.com/icons/monogram-mask.svg",
      category: "web",
      title: "Medium",
      content: "Medium is the one of most polular blog maker.."
    }
  ];

  return (
    <Card className={classes.card}>
      {/* article 1 */}
      {articles.map(article => (
        <div className="new-article">
          <CardContent>
            <div className="image-new-post">
              <img src={article.image}></img>
            </div>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {article.category}
            </Typography>
            <Typography variant="h5" component="h2">
              {article.title}
            </Typography>
            <Typography variant="body2" component="p">
              {article.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </div>
      ))}
    </Card>
  );
}
