import { combineReducers } from "redux";
import { History } from "history";
import { connectRouter } from "connected-react-router";
import authenticationReducer from "./authentication/reducer";
import eventsReducer from "./events/reducer";
import localizationReducer from "./localization/reducer";

const createRootReducer = (history: History) =>
  combineReducers({
    authentication: authenticationReducer,
    events: eventsReducer,
    localization: localizationReducer,
    router: connectRouter(history),
  });

export default createRootReducer;
