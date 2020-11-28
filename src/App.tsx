import React, { Fragment } from "react";
import { Switch, Route } from "react-router";
import SignInPage from "./components/pages/SignInPage";
import PrivateRoute from "./components/layouts/PrivateRoute";
import Page404 from "./components/pages/Page404";
import Dashboard from "./components/pages/Dashboard";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/signIn" component={SignInPage} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route component={Page404} />
      </Switch>
    </Fragment>
  );
};

export default App;
