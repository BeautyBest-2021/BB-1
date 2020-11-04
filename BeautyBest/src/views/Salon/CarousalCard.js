import React, { Component } from 'react'
import { getCards } from './data';
import './Package.css';

export default class CarousalCard extends Component {

  render() {

    var image = this.props.data.image,
      title = this.props.data.title,
      subtitle = this.props.data.subtitle;

    return (
      <figure className="snip1584">
        <img src={image} />
        <figcaption>
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </figcaption><a href="#"></a>
      </figure>
    )
  }
}
