import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Mediacard from "./Popularpost";
import "../App.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 700,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
            <Grid item>
              <Paper className={classes.paper}>
                <h1 className="popular-post-title">Popular Post</h1>
                <Mediacard /> 
              </Paper>         
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <h1 className="last-post-title">Last Post</h1>
                <Mediacard />
              </Paper>         
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}