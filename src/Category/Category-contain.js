import React, { Component } from "react";
import "../App.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Main from './Mainarticle';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: 1000,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Contain() {
  const classes = useStyles();

  return (
    <div className="category-container">
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Main />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}><img src="https://img.okeinfo.net/content/2019/05/20/207/2057902/dilarang-pakai-android-huawei-bikin-os-buatan-sendiri-jH6KUCG3XU.jpg" width="100%"></img></Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}><img src="https://lh3.googleusercontent.com/vA4tG0v4aasE7oIvRIvTkOYTwom07DfqHdUPr6k7jmrDwy_qA_SonqZkw6KX0OXKAdk" width="100%"></img></Paper>
            </Grid>
        </Grid>
        </div>
    </div>
  );
}