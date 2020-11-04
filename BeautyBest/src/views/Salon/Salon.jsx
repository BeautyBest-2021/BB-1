import React, { Component } from "react";
import Nav from "./Nav";
import Container from "@material-ui/core/Container";
import { Jumbotron, Container1 } from "reactstrap";
import "./Salon.css";
import CoverImg from "assets/img/bg/cover.jpg";
import Info from "./Info";
import Details from "./Details";
import Services from "./Services";
import Gallery from "./Gallery";
class Salon extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />

        <Jumbotron
          fluid
          className="jumbotron__img"
          style={{ backgroundImage: `url(${CoverImg})` }}
        ></Jumbotron>
        <Info />
        <Details />

        <Services />

        <Gallery />
      </React.Fragment>
    );
  }
}
export default Salon;
