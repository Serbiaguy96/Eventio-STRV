import React from "react";
import { Switch, Route } from "react-router";
import { AppMainContainer } from "./global/globalStyles";
import Page404 from "./components/pages/Page404";
import ErrorHandlerProvider from "./providers/ErrorHandlerProvider";

const App = () => {
  return (
    <AppMainContainer>
      <ErrorHandlerProvider>
        <Switch>
          <Route component={Page404} />
        </Switch>
      </ErrorHandlerProvider>
    </AppMainContainer>
  );
};

export default App;
