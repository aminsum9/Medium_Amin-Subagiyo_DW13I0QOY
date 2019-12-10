import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { display } from '@material-ui/system';

const useStyles = makeStyles({
  card: {
    width: "100%",
    height: "500px"
  },
  CardActionArea: {
    width: 500
  },
  media: {
    height: 350,
  },
});

export default function MainArticle() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.tripsavvy.com/thmb/oOoIxfAquiM7PBa_sDMXNdo_wtk=/2416x1600/filters:fill(auto,1)/how-to-visit-the-googleplex-google-hq-mountain-view-57e2d4515f9b586c3529ba9c.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Google
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Google is the biggest inconporate in America
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}