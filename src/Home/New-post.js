import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnK5dwCwWuUVn7HNrMesLwzghfc3WSFwNP2wxFTU0v4h5Prwou",
      category: "music",
      title: "Bagaimana Kabar Grub Band Lawas Yang Satu Ini?",
      content:
        "Setelah sekian lama tidak kelihatan di layar televisi, bagaimana kabar grub band music yang satu ini..."
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUSfj9mQebP0AcfO5p7ptQxYf4DzHN_jrX6TJ3nui_rGz7eSIp",
      category: "health",
      title: "Anda Sering Merasa Sakit Padahal Sehat?",
      content:
        "Hipokondria adalah suatu kondisi gangguan kesehatan yang mana..."
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQo3lXrZ5n6V7yJv1asb3qv5pcFF3TMX7DVOmvwdSwsChUUh55e",
      category: "programming",
      title: "Yup, Berkenalan Dengan DBMS Yang Satu Ini?",
      content: "Pernahkan anda mendengar Mongo DB. Dalam dunia programming..."
    }
  ];

  return (
    <Card className={classes.card} style={{ boxShadow: "none" }}>
      {/* article 1 */}
      {articles.map(article => (
        <div className="new-article" style={{ texrDecoration: "none" }}>
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
            <Typography
              variant="h6"
              component="h3"
              className="new-article-title"
            >
              {article.title}
            </Typography>
            <Typography variant="body2" component="p">
              {article.content}
            </Typography>
          </CardContent>
        </div>
      ))}
    </Card>
  );
}
