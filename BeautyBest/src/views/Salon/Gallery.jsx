import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import { Jumbotron, Container1 } from 'reactstrap';
import GridListTile from '@material-ui/core/GridListTile';

var tileData = [
  {
    id: "1",
    img: "https://s17026.pcdn.co/wp-content/uploads/sites/9/2016/06/1-229.jpg",
    title: "salon"
  },
  {
    id: "2",
    img: "https://www.business.com/images/content/5d6/85f0e5a215e6f388b456b/0-800-",
    title: "salon"
  },
  {
    id: "3",
    img: "https://www.janets.org.uk/wp-content/uploads/2018/10/185-Makeup-Artist-Nail-Technician-and-Hairdressing-Course-for-Beauty-Salon.jpg",
    title: "salon"
  },
  {
    id: "4",
    img: "https://hairformationsinc.com/wp-content/uploads/2018/11/shutterstock_567539041-e1541099394254.jpg",
    title: "salon"
  },
  {
    id: "4",
    img: "https://blog.bridals.pk/wp-content/uploads/2019/01/madeehas-01.jpg",
    title: "salon"
  },
  {
    id: "1",
    img: "https://s17026.pcdn.co/wp-content/uploads/sites/9/2016/06/1-229.jpg",
    title: "salon"
  },
  {
    id: "2",
    img: "https://www.business.com/images/content/5d6/85f0e5a215e6f388b456b/0-800-",
    title: "salon"
  },
  {
    id: "3",
    img: "https://www.janets.org.uk/wp-content/uploads/2018/10/185-Makeup-Artist-Nail-Technician-and-Hairdressing-Course-for-Beauty-Salon.jpg",
    title: "salon"
  },
  {
    id: "4",
    img: "https://hairformationsinc.com/wp-content/uploads/2018/11/shutterstock_567539041-e1541099394254.jpg",
    title: "salon"
  },
  {
    id: "4",
    img: "https://blog.bridals.pk/wp-content/uploads/2019/01/madeehas-01.jpg",
    title: "salon"
  },
  {
    id: "1",
    img: "https://s17026.pcdn.co/wp-content/uploads/sites/9/2016/06/1-229.jpg",
    title: "salon"
  },
  {
    id: "2",
    img: "https://www.business.com/images/content/5d6/85f0e5a215e6f388b456b/0-800-",
    title: "salon"
  },
  {
    id: "3",
    img: "https://www.janets.org.uk/wp-content/uploads/2018/10/185-Makeup-Artist-Nail-Technician-and-Hairdressing-Course-for-Beauty-Salon.jpg",
    title: "salon"
  },
  {
    id: "4",
    img: "https://hairformationsinc.com/wp-content/uploads/2018/11/shutterstock_567539041-e1541099394254.jpg",
    title: "salon"
  },
  {
    id: "4",
    img: "https://blog.bridals.pk/wp-content/uploads/2019/01/madeehas-01.jpg",
    title: "salon"
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1500,
    height: 450,
  },
}));


export default function Gallery() {

  const classes = useStyles();
  return (
    <Jumbotron fluid className="jumbotron__info" >
      <h3>Gallery</h3>
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={4}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Jumbotron>
  )
}
