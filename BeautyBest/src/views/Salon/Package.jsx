import React from 'react'
import Container from '@material-ui/core/Container';
import { Jumbotron, Container1 } from 'reactstrap';
import Crousal from './Carousal';
import './Package.css';
var cards = [
  {
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
    "title": "Burgundy Flemming",
    "subtitle": "Advertising"
  },
  {
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
    "title": "Nigel Nigel",
    "subtitle": "Sound & Vision"
  },
  {
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
    "title": "Caspian Bellevedere",
    "subtitle": "Accounting"
  }
];


export default function Package() {
  return (

    <Jumbotron fluid className="jumbotron__info" >
      <h3>Packages</h3>
      <div className='app'></div>

    </Jumbotron>


  )
}
