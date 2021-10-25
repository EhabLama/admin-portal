import Home from "../views/home";
import Login from "../views/login";
import Users from "../views/users";
import Listings from "../views/listings";
import Cars from "../views/cars";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import React from "react";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/listings">
          <Listings />
        </Route>
        <Route exact path="/cars">
          <Cars />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
