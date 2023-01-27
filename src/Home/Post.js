import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Popularpost from "./Popularpost";
import LastPost from "./Last-post";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "30px"
  },
  paper: {
    boxShadow: "none"
  },
  control: {
    padding: theme.spacing(1)
  }
}));

export default function Post() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <LastPost />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <div className="popular-post-title">
                <p>Popular on Medium</p>
                <hr
                  style={{
                    width: "220px",
                    float: "left"
                  }}
                ></hr>
              </div>
              <Popularpost />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
