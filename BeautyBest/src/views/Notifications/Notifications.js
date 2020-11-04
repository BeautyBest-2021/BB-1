/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import bgnotify from "assets/img/bg/notify.jpg";
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function Notifications() {
  const classes = useStyles();

  React.useEffect(() => {
    // Specify how to clean up after this effect:
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });

  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Notifications</h4>

      </CardHeader>
      <CardBody>
        <GridContainer>
          <GridItem xs={20} sm={20} md={8}>

            <br />
            <SnackbarContent
              message={
                'PRIMARY - This is a regular notification made with color="info"'
              }
              close
              color="info"
            />
            <SnackbarContent
              message={
                'PRIMARY - This is a regular notification made with color="info"'
              }
              close
              color="info"
            />

            <SnackbarContent
              message={
                'PRIMARY - This is a regular notification made with color="info"'
              }
              close
              color="info"
            />
            <SnackbarContent
              message={
                'PRIMARY - This is a regular notification made with color="info"'
              }
              close
              color="info"
            />
            <SnackbarContent
              message={
                'PRIMARY - This is a regular notification made with color="info"'
              }
              close
              color="info"
            />
          </GridItem>
          <GridItem xs={6} sm={6} md={2}>
            <img src={bgnotify} />


          </GridItem>
        </GridContainer>
        <br />
        <br />


      </CardBody>
    </Card>
  );
}
