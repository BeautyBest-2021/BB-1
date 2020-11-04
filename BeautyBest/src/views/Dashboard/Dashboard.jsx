import React, { useState } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles, withStyles } from "@material-ui/core/styles";

// @material-ui/icons

import Visibility from "@material-ui/icons/Visibility";

import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { NavLink } from "react-router-dom";
import Info from "components/Typography/Info.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardMedia from "@material-ui/core/CardMedia";

import { getSalons } from "../Dashboard/Dashboard";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = styles;

class Dashboard extends React.Component {
  state = {
    salons: getSalons(),
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          {this.state.salons.map((c) => (
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={c.imgURL}
                      title="Contemplative Reptile"
                    />
                  </CardIcon>

                  <h3 className={classes.cardTitle}>{c.name}</h3>
                  <p className={classes.cardCategory}>{c.address}</p>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <Info>
                      <Visibility />
                    </Info>

                    <NavLink to="/salon">Visit Salon</NavLink>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    );
  }
}
export default withStyles(useStyles)(Dashboard);
