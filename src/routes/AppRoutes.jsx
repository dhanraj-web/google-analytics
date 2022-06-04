import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import About from "../views/about";
import Home from "../views/home";
import Users from "../views/users";
import ReactGA from "react-ga";
import { withRouter } from "react-router-dom";

ReactGA.initialize("G-CJ7H4ZGGVT");

const AppRoutes = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default withRouter(AppRoutes);
