import React from "react";
import Container from "@material-ui/core/Container";
import { Jumbotron, Container1 } from "reactstrap";
import Card from "components/Card/Card.js";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import "./Salon.css";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > span": {
      margin: theme.spacing(2),
    },
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  price: {
    color: "purple",
    fontWeight: "bold",
    float: "right",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Services() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Jumbotron fluid className="jumbotron__service">
        <Container fluid>
          <h3>Services</h3>
          <Card>
            <div className={classes.root}>
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="on"
                  indicatorColor="primary"
                  textColor="primary"
                  aria-label="scrollable force tabs example"
                >
                  <Tab label="Eyebrows" {...a11yProps(0)} />
                  <Tab label="Face" {...a11yProps(1)} />
                  <Tab label="Hair Colouring" {...a11yProps(2)} />
                  <Tab label="Makeup" {...a11yProps(3)} />
                  <Tab label="Wax" {...a11yProps(4)} />
                  <Tab label="Hair Cutting" {...a11yProps(5)} />
                  <Tab label="Wedding" {...a11yProps(6)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <Toolbar>
                  <Typography className={classes.title} variant="p" noWrap>
                    Brows threading
                  </Typography>
                  <Typography variant="p" className={classes.price} noWrap>
                    150 Rs.
                  </Typography>
                  <IconButton
                    edge="end"
                    className={classes.backButton}
                    color="inherit"
                  >
                    <Icon color="primary">add_circle</Icon>
                  </IconButton>
                </Toolbar>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Toolbar>
                  <Typography className={classes.title} variant="p" noWrap>
                    Face Threading
                  </Typography>
                  <Typography variant="p" className={classes.price} noWrap>
                    300 Rs.
                  </Typography>
                  <IconButton
                    edge="end"
                    className={classes.backButton}
                    color="inherit"
                  >
                    <Icon color="primary">add_circle</Icon>
                  </IconButton>
                </Toolbar>
                <Toolbar>
                  <Typography className={classes.title} variant="p" noWrap>
                    Facial
                  </Typography>
                  <Typography variant="p" className={classes.price} noWrap>
                    2000 Rs.
                  </Typography>
                  <IconButton
                    edge="end"
                    className={classes.backButton}
                    color="inherit"
                  >
                    <Icon color="primary">add_circle</Icon>
                  </IconButton>
                </Toolbar>
                <Toolbar>
                  <Typography className={classes.title} variant="p" noWrap>
                    Skin Polisher
                  </Typography>
                  <Typography variant="p" className={classes.price} noWrap>
                    1000 Rs.
                  </Typography>
                  <IconButton
                    edge="end"
                    className={classes.backButton}
                    color="inherit"
                  >
                    <Icon color="primary">add_circle</Icon>
                  </IconButton>
                </Toolbar>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Toolbar>
                  <Typography className={classes.title} variant="p" noWrap>
                    Hair Color
                  </Typography>
                  <Typography variant="p" className={classes.price} noWrap>
                    500 Rs.
                  </Typography>
                  <IconButton
                    edge="end"
                    className={classes.backButton}
                    color="inherit"
                  >
                    <Icon color="primary">add_circle</Icon>
                  </IconButton>
                </Toolbar>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Toolbar>
                  <Typography className={classes.title} variant="p" noWrap>
                    Wedding
                  </Typography>
                  <Typography variant="p" className={classes.price} noWrap>
                    8000 Rs.
                  </Typography>
                  <IconButton
                    edge="end"
                    className={classes.backButton}
                    color="inherit"
                  >
                    <Icon color="primary">add_circle</Icon>
                  </IconButton>
                </Toolbar>
                <Toolbar>
                  <Typography className={classes.title} variant="p" noWrap>
                    Engagement
                  </Typography>
                  <Typography variant="p" className={classes.price} noWrap>
                    2500 Rs.
                  </Typography>
                  <IconButton
                    edge="end"
                    className={classes.backButton}
                    color="inherit"
                  >
                    <Icon color="primary">add_circle</Icon>
                  </IconButton>
                </Toolbar>
                <Toolbar>
                  <Typography className={classes.title} variant="p" noWrap>
                    Student Makeup
                  </Typography>
                  <Typography variant="p" className={classes.price} noWrap>
                    1000 Rs.
                  </Typography>
                  <IconButton
                    edge="end"
                    className={classes.backButton}
                    color="inherit"
                  >
                    <Icon color="primary">add_circle</Icon>
                  </IconButton>
                </Toolbar>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Toolbar>
                  <Typography className={classes.title} variant="p" noWrap>
                    Arm Wax
                  </Typography>
                  <Typography variant="p" className={classes.price} noWrap>
                    1000 Rs.
                  </Typography>
                  <IconButton
                    edge="end"
                    className={classes.backButton}
                    color="inherit"
                  >
                    <Icon color="primary">add_circle</Icon>
                  </IconButton>
                </Toolbar>
                <Toolbar>
                  <Typography className={classes.title} variant="p" noWrap>
                    Face Wax
                  </Typography>
                  <Typography variant="p" className={classes.price} noWrap>
                    3000 Rs.
                  </Typography>
                  <IconButton
                    edge="end"
                    className={classes.backButton}
                    color="inherit"
                  >
                    <Icon color="primary">add_circle</Icon>
                  </IconButton>
                </Toolbar>
                <Toolbar>
                  <Typography className={classes.title} variant="p" noWrap>
                    Full Wax
                  </Typography>
                  <Typography variant="p" className={classes.price} noWrap>
                    5000 Rs.
                  </Typography>
                  <IconButton
                    edge="end"
                    className={classes.backButton}
                    color="inherit"
                  >
                    <Icon color="primary">add_circle</Icon>
                  </IconButton>
                </Toolbar>
              </TabPanel>
              <TabPanel value={value} index={5}>
                <Toolbar>
                  <Typography className={classes.title} variant="p" noWrap>
                    Step Cutting
                  </Typography>
                  <Typography variant="p" className={classes.price} noWrap>
                    2000 Rs.
                  </Typography>
                  <IconButton
                    edge="end"
                    className={classes.backButton}
                    color="inherit"
                  >
                    <Icon color="primary">add_circle</Icon>
                  </IconButton>
                </Toolbar>
                <Toolbar>
                  <Typography className={classes.title} variant="p" noWrap>
                    Model Cutting
                  </Typography>
                  <Typography variant="p" className={classes.price} noWrap>
                    2500 Rs.
                  </Typography>
                  <IconButton
                    edge="end"
                    className={classes.backButton}
                    color="inherit"
                  >
                    <Icon color="primary">add_circle</Icon>
                  </IconButton>
                </Toolbar>
                <Toolbar>
                  <Typography className={classes.title} variant="p" noWrap>
                    Layers Cutting
                  </Typography>
                  <Typography variant="p" className={classes.price} noWrap>
                    3000 Rs.
                  </Typography>
                  <IconButton
                    edge="end"
                    className={classes.backButton}
                    color="inherit"
                  >
                    <Icon color="primary">add_circle</Icon>
                  </IconButton>
                </Toolbar>
              </TabPanel>
              <TabPanel value={value} index={6}>
                <Toolbar>
                  <Typography className={classes.title} variant="p" noWrap>
                    MakeUp - Hair
                  </Typography>
                  <Typography variant="p" className={classes.price} noWrap>
                    10000 Rs.
                  </Typography>
                  <IconButton
                    edge="end"
                    className={classes.backButton}
                    color="inherit"
                  >
                    <Icon color="primary">add_circle</Icon>
                  </IconButton>
                </Toolbar>
              </TabPanel>
            </div>
          </Card>
        </Container>
      </Jumbotron>
    </div>
  );
}
