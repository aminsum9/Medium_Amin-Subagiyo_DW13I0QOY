import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "../App.css";
import Newpost from "./New-post";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 400,
    width: 330
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function MainArticle() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      className="top-main-article"
    >
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <Grid item>
            <Paper className={classes.paper} style={{ boxShadow: "none" }}>
              <Link
                to="/Article"
                className="read-more"
                style={{ textDecoration: "none", color: "#000000" }}
              >
                <div className="main-article">
                  <img
                    src="https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg"
                    width="100%"
                  ></img>
                  <p style={{ fontSize: "20px", fontWeight: "700" }}>
                    If You Only Read A Few Books In 2018, Read These
                  </p>
                  <p>
                    If you’d liked to be jerked around less, provoked less, and
                    more productive and inwardly focused, where should you
                    start?...
                  </p>
                </div>
              </Link>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className="new-post" style={{ boxShadow: "none" }}>
              <Newpost />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper} style={{ boxShadow: "none" }}>
              <Link
                to="/Article"
                className="read-more"
                style={{ textDecoration: "none", color: "#000000" }}
              >
                <div className="main-article">
                  <img
                    src="https://cdn.vox-cdn.com/thumbor/CmBSQJuMj7ePmO-Rcv8FTXFXvls=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/64802772/jbareham_180405_1777_facebook_0003.0.jpg"
                    width="100%"
                  ></img>
                  <p style={{ fontSize: "20px", fontWeight: "700" }}>
                    What is Facebook?
                  </p>
                  <p>facebook is one of most popular social media</p>
                </div>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
