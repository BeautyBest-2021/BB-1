import React, { Component } from "react";
import "./Info.css";
import Container from "@material-ui/core/Container";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { Jumbotron } from "reactstrap";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Toolbar from "@material-ui/core/Toolbar";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import DateRangeIcon from "@material-ui/icons/DateRange";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
const useStyles = (theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(1),
    },
  },
  title: {
    marginLeft: 5,
    alignSelf: "flex",
    display: "flex",
    marginLeft: 10,
  },
  callButton: {
    marginRight: theme.spacing(2),
  },
});

class Details extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Jumbotron fluid className="jumbotron__info">
          <Container fluid>
            <GridItem>
              <Card>
                <CardBody>
                  <Toolbar>
                    <LocationOnIcon style={{ color: purple[500] }} />
                    <Typography className={classes.title} variant="p" noWrap>
                      143R Johar town, Lahore
                    </Typography>
                  </Toolbar>
                </CardBody>
              </Card>
              <GridContainer>
                <GridItem xs={6} sm={6} md={3}>
                  <Card>
                    <CardBody>
                      <Toolbar>
                        <AccessTimeIcon style={{ color: purple[500] }} />
                        <Typography
                          className={classes.title}
                          variant="p"
                          noWrap
                        >
                          Opening Hours
                          <br />
                          9:00 AM - 6:00 PM
                        </Typography>
                      </Toolbar>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={6} sm={6} md={3}>
                  <Card>
                    <CardBody>
                      <Toolbar>
                        <DateRangeIcon style={{ color: purple[500] }} />
                        <Typography
                          className={classes.title}
                          variant="p"
                          noWrap
                        >
                          Excluded days
                          <br />
                          No excluded days
                        </Typography>
                      </Toolbar>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={6} sm={6} md={3}>
                  <Card>
                    <CardBody>
                      <Toolbar>
                        <HowToRegIcon style={{ color: purple[500] }} />
                        <Typography
                          className={classes.title}
                          variant="p"
                          noWrap
                        >
                          Sections
                          <br />
                          Ladies Section
                        </Typography>
                      </Toolbar>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={6} sm={6} md={3}>
                  <Card>
                    <CardBody>
                      <Toolbar>
                        <CardMembershipIcon style={{ color: purple[500] }} />
                        <Typography
                          className={classes.title}
                          variant="p"
                          noWrap
                        >
                          Member's Type
                          <br />
                          Women
                        </Typography>
                      </Toolbar>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
              <GridItem>
                <IconButton
                  edge="start"
                  className={classes.callButton}
                  color="inherit"
                >
                  <Toolbar>
                    <span class="material-icons">call</span>
                    <Typography className={classes.title} variant="p" noWrap>
                      Call Now
                    </Typography>
                  </Toolbar>
                </IconButton>
              </GridItem>
            </GridItem>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
export default withStyles(useStyles)(Details);
