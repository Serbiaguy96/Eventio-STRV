import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RouterState } from "connected-react-router";
import { AuthenticationState } from "./authentication/types";
import { EventsState } from "./events/types";

export interface RootState {
  authentication: AuthenticationState;
  events: EventsState;
  router: RouterState;
}

export type EventioThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
