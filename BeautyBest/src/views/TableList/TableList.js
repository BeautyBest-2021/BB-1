import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

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

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>UpComing Appointments</h4>
            <p className={classes.cardCategoryWhite}>
              Here is your scheduled appointments
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Salon", "Date", "time", "Services", "Status"]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", <li>
                  Hair cutting
              </li>,
                  , "pending"],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", <a href="#" onClick={e => {
                  e.preventDefault(); //handleOpen() 
                }}>
                  View Services
            </a>, "confrim"],
                ["Sage Rodriguez", "Netherlands", "Baileux", <a href="#" onClick={e => {
                  e.preventDefault(); //handleOpen() 
                }}>
                  View Services
            </a>, "confirm"],
                ["Philip Chaney", "Korea, South", "Overland Park", <a href="#" onClick={e => {
                  e.preventDefault(); //handleOpen() 
                }}>
                  View Services
            </a>, "pending"],
                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", <a href="#" onClick={e => {
                  e.preventDefault(); //handleOpen() 
                }}>
                  View Services
            </a>, "pending"],
                ["Mason Porter", "Chile", "Gloucester", <a href="#" onClick={e => {
                  e.preventDefault(); //handleOpen()
                }}>
                  View Services
            </a>, "confirm"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Past Appointments</h4>
            <p className={classes.cardCategoryWhite}>
              Here is your past appointments
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Salon", "Date", "time", "Services", "Status"]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", <li>
                  Hair cutting
              </li>,
                  , "Recieved"],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", <a href="#" onClick={e => {
                  e.preventDefault(); //handleOpen() 
                }}>
                  View Services
            </a>, "Recieved"],
                ["Sage Rodriguez", "Netherlands", "Baileux", <a href="#" onClick={e => {
                  e.preventDefault(); //handleOpen() 
                }}>
                  View Services
            </a>, "Recieved"],
                ["Philip Chaney", "Korea, South", "Overland Park", <a href="#" onClick={e => {
                  e.preventDefault(); //handleOpen() 
                }}>
                  View Services
            </a>, "Cancelled"],
                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", <a href="#" onClick={e => {
                  e.preventDefault(); //handleOpen() 
                }}>
                  View Services
            </a>, "Cancelled"],
                ["Mason Porter", "Chile", "Gloucester", <a href="#" onClick={e => {
                  e.preventDefault(); //handleOpen()
                }}>
                  View Services
            </a>, "Recieved"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
