import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import authenticationReducer from "./authentication/reducer";
import eventsReducer from "./events/reducer";

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  events: eventsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
