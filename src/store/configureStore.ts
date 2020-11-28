import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router/immutable";
import { composeWithDevTools } from "redux-devtools-extension";
import createRootReducer from "./creatRootReducer";
import tokenValidationMiddleware from "./middlewares/tokenValidationMiddleware";

export const history = createBrowserHistory();

const middlewares = [
  routerMiddleware(history),
  tokenValidationMiddleware,
  thunk,
];

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
