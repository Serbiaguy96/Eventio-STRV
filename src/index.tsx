import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store/configureStore";
import ConnectedThemeProvider from "./providers/ConnectedThemeProvider";
import App from "./App";
import ConnectedIntlProvider from "./providers/ConnectedIntlProvider";

import "./assets/fonts/Hind-Regular.ttf";
import "./assets/fonts/PlayfairDisplay-Regular.ttf";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedThemeProvider>
      <ConnectedIntlProvider>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </ConnectedIntlProvider>
    </ConnectedThemeProvider>
  </Provider>,
  document.getElementById("root")
);
