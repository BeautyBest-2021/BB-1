import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import logo from "assets/img/faces/logo.jpg";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};


const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>Contact US</h4>
            <p className={classes.cardCategoryWhite}>
              Please don't hesitate to contact us for any issue, suggestion or info.
        </p>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>

            </GridContainer>
            <GridContainer>

              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Email address"
                  id="email-address"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={5}>

                <CustomInput
                  labelText="Phone Number"
                  id="phone"
                  formControlProps={{
                    fullWidth: true
                  }}
                />

              </GridItem>
            </GridContainer>
            <GridContainer>

              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Subject"
                  id="subject"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>


            </GridContainer>


            <br />
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>

                <CustomInput
                  labelText="Your Message Here."
                  id="about-me"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter>
            <Button color="primary">Submit</Button>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card profile >
          <CardAvatar profile>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={logo} alt="..." />
            </a>
          </CardAvatar>
          <CardBody profile >
            <h3 className={classes.cardTitle}>About US</h3>
            <br />

            <p className={classes.description}>
              Beauty Best is the online destination for beauty & wellness professionals and clients. Professionals can showcase their work, connect with new and existing clients, and build their business. Clients can discover new services and providers, book appointments online and get inspired....
          </p>

          </CardBody>
        </Card>
      </GridItem>

    </GridContainer>
  );
}
