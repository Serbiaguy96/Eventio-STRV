import React from "react";
import { Switch, Route } from "react-router";
import { AppMainContainer } from "./global/globalStyles";
import Page404 from "./components/Pages/Page404";

const App = () => {
  return (
    <AppMainContainer>
      <Switch>
        <Route component={Page404} />
      </Switch>
    </AppMainContainer>
  );
};

export default App;
