import Home from "./views/home";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
