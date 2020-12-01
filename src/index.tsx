import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router/immutable";
import store, { history } from "./store/configureStore";
import ConnectedThemeProvider from "./providers/ConnectedThemeProvider";
import ErrorHandlerProvider from "./providers/ErrorHandlerProvider";
import ConnectedIntlProvider from "./providers/ConnectedIntlProvider";
import App from "./App";

import "./assets/fonts/Hind-Regular.ttf";
import "./assets/fonts/PlayfairDisplay-Regular.ttf";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedThemeProvider>
      <ConnectedRouter history={history}>
        <ConnectedThemeProvider>
          <ConnectedIntlProvider>
            <ErrorHandlerProvider>
              <App />
            </ErrorHandlerProvider>
          </ConnectedIntlProvider>
        </ConnectedThemeProvider>
      </ConnectedRouter>
    </ConnectedThemeProvider>
  </Provider>,
  document.getElementById("root")
);
