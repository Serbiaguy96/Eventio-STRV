import { combineReducers } from "redux";
import { History } from "history";
import { connectRouter } from "connected-react-router";
import authenticationReducer from "./authentication/reducer";
import eventsReducer from "./events/reducer";

const createRootReducer = (history: History) =>
  combineReducers({
    authentication: authenticationReducer,
    events: eventsReducer,
    router: connectRouter(history),
  });


export default createRootReducer;
