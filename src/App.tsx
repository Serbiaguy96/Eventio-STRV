import React, { Fragment } from "react";
import { Switch } from "react-router";
import SignInPage from "./components/Pages/SignInPage";
import Page404 from "./components/Pages/Page404";
import Dashboard from "./components/Pages/Dashboard";
import PublicRoute from "./components/Layouts/PublicRoute";
import PrivateRoute from "./components/Layouts/PrivateRoute";
import CreateEventPage from "./components/Pages/CreateEventPage";
import EventDetailPage from "./components/Pages/EventDetailPage";
import EditEventPage from "./components/Pages/EditEventPage";
import UserProfilePage from "./components/Pages/UserProfilePage";
import SignUpPage from "./components/Pages/SignUpPage";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <PublicRoute path="/signIn" component={SignInPage} />
        <PublicRoute path="/signUp" component={SignUpPage} />
        <PublicRoute exact path="/" component={Dashboard} insideApp />
        <PrivateRoute
          path="/create-event"
          component={CreateEventPage}
          insideApp
        />
        <PublicRoute
          path="/event-detail/:eventId"
          component={EventDetailPage}
          insideApp
        />
        <PrivateRoute
          path="/edit-event/:eventId"
          component={EditEventPage}
          insideApp
        />
        <PrivateRoute path="/profile" component={UserProfilePage} insideApp />
        <PublicRoute component={Page404} />
      </Switch>
    </Fragment>
  );
};

export default App;
