import React, { Fragment } from "react";
import { Switch } from "react-router";
import SignInPage from "./components/pages/SignInPage";
import Page404 from "./components/pages/Page404";
import Dashboard from "./components/pages/Dashboard";
import PublicRoute from "./components/layouts/PublicRoute";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <PublicRoute path="/signIn" component={SignInPage} />
        <PublicRoute exact path="/" component={Dashboard} />
        <PublicRoute component={Page404} />
      </Switch>
    </Fragment>
  );
};

export default App;
