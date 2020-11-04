import React, { Component } from "react";
import "./Info.css";
import Container from "@material-ui/core/Container";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardMedia from "@material-ui/core/CardMedia";
import CardBody from "components/Card/CardBody.js";
import { Jumbotron } from "reactstrap";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { purple } from "@material-ui/core/colors";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    width: "190px",
    "&:hover": {
      backgroundColor: purple[300],
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
}))(Button);
class Info extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Jumbotron fluid className="jumbotron__title">
          <Container fluid>
            <GridContainer>
              <GridItem xs={4} sm={4} md={3}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="180"
                    image="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    title="Contemplative Reptile"
                  />
                </Card>
              </GridItem>
              <GridItem xs={5} sm={6} md={6}>
                <h3>Zara's Salon</h3>
                <p>No reviews yet</p>
                <br />
                <ColorButton
                  variant="contained"
                  color="primary"
                  href="/salon/appointment"
                >
                  Book appointment
                </ColorButton>
              </GridItem>
              <GridItem xs={2} sm={2} md={3}>
                <CardBody>
                  <h1 className="discount__text">3%</h1>
                  <h4 style={{ color: "crimson" }}>CashBack</h4>
                </CardBody>
              </GridItem>
            </GridContainer>
          </Container>
        </Jumbotron>
      </React.Fragment>
    );
  }
}
export default Info;
