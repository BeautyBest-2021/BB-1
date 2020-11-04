import React, { Component, useState } from "react";
import Nav from "../Salon/Nav";
import Container from "@material-ui/core/Container";
import { Jumbotron } from "reactstrap";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import "../Salon/Salon.css";
import CardHeader from "components/Card/CardHeader";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import DatePicker from "react-datepicker";
import TextField from "@material-ui/core/TextField";
import "react-datepicker/dist/react-datepicker.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    alignSelf: "center",
    width: "190px",
    "&:hover": {
      backgroundColor: purple[300],
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
}))(Button);

const useStyles = (theme) => ({
  root: {
    "& > span": {
      margin: theme.spacing(2),
    },
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    flexGrow: 1,
    color: "purple",
  },
  body: {
    color: "#00bcd4",
    fontSize: 20,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  list: {
    width: "100%",
    maxWidth: 360,
    color: "purple",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
});

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startdate: new Date(),
      open: false,
      openModel: false,
    };
  }

  render() {
    const { classes } = this.props;
    const { handleOpen } = () => {
      this.setState({ openModel: true });
    };

    const { handleClose } = () => {
      this.setState({ openModel: false });
    };

    return (
      <React.Fragment>
        <Nav />

        <Jumbotron fluid className={classes.root}>
          <Container fluid>
            <Card>
              <CardHeader>
                <Toolbar>
                  <Typography className={classes.title} variant="h5" noWrap>
                    Reservation date
                  </Typography>
                </Toolbar>
              </CardHeader>
              <CardBody>
                <TextField
                  id="date"
                  label="Appointment date"
                  type="date"
                  defaultValue={new Date()}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </CardBody>
            </Card>
          </Container>
          <Container fluid>
            <Card>
              <CardHeader>
                <Toolbar>
                  <Typography className={classes.title} variant="h5" noWrap>
                    Reservation service
                  </Typography>
                </Toolbar>
              </CardHeader>
              <CardBody>
                <List component="nav" className={classes.list}>
                  <ListItem
                    button
                    onClick={() => this.setState({ open: !this.state.open })}
                  >
                    <ListItemText primary="Cutting" />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                      </ListItem>
                    </List>
                  </Collapse>
                </List>
              </CardBody>
            </Card>
          </Container>
          <Container fluid>
            <Card>
              <CardHeader>
                <Toolbar>
                  <Typography className={classes.title} variant="h5" noWrap>
                    Reservation time
                  </Typography>
                </Toolbar>
              </CardHeader>
              <CardBody>
                <TextField
                  id="time"
                  label="Appointment times"
                  type="time"
                  defaultValue="07:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300,
                  }}
                />
              </CardBody>
              <br />
              <ColorButton
                variant="contained"
                color="primary"
                sizeLarge
                onClick={handleOpen}
              >
                CheckOut
              </ColorButton>
              <Modal
                open={handleOpen}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <div className={classes.paper}>
                  <h2 id="simple-modal-title">Text in a modal</h2>
                  <p id="simple-modal-description">
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </p>
                </div>
              </Modal>
              <br />
            </Card>
          </Container>
        </Jumbotron>
      </React.Fragment>
    );
  }
}
export default withStyles(useStyles)(Appointment);
