import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:10
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  //const url='https://img.buzzfeed.com/buzzfeed-static/static/2013-11/enhanced/webdr03/18/17/enhanced-buzz-22126-1384812593-32.jpg';

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://img.buzzfeed.com/buzzfeed-static/static/2013-11/enhanced/webdr03/18/17/enhanced-buzz-22126-1384812593-32.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Biriyani
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Cuisine
          </Typography>
          <Typography>
            User Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            details....
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
