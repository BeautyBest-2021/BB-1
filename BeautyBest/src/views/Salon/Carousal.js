import React, { Component } from 'react'
import Card from './CarousalCard';
import './Package.css';
import Slider from "react-slick";
import Toolbar from '@material-ui/core/Toolbar';


export default class Carousal extends Component {


  render() {
    var data = this.props.data;
    var newsTemplate;
    var settings = {
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    }
    if (data.length > 0) {
      newsTemplate = data.map(function (item, index) {
        return (
          <div key={index}>
            <Card data={item} />
          </div>
        )
      })
    } else {
      newsTemplate = <p>Please add some cards</p>
    }
    return (
      <div className='news'>
        <Slider {...settings}>{newsTemplate}</Slider>

      </div>
    )
  }
}
