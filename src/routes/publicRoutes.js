import Login from "../views/login";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router-dom";
import React from "react";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/*">
          <Login />
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
