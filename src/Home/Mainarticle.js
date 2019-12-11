import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Article from '../Article';
import "../App.css";
import Newpost from "./New-post";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 400,
    width: 430,
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
                <div className="main-article">
                <img src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/08/google-play-store-apps-malware-796x450.jpg" width="100%"></img>
                <p>google is one of most popular search engine</p>
                </div>
                <Link to="/Article">Read More</Link>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className="new-post"><Newpost /></Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <div className="main-article">
                <img src="https://cdn.vox-cdn.com/thumbor/CmBSQJuMj7ePmO-Rcv8FTXFXvls=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/64802772/jbareham_180405_1777_facebook_0003.0.jpg" width="100%"></img>
                <p>facebook is one of most popular social media</p>
                </div>
                <Link to="/Article">Read More</Link>
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}