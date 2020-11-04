import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import Home from "views/Home/Home.js";
import Salon from "./views/Salon/Salon";
import Appointment from "./views/Booking/Appointment";

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/salon" component={Salon} />
      <Route path="/salon/appointment" component={Appointment} />
      <Route path="/admin" component={Admin} />
      <Route path="/login" component={Home} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
