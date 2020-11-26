import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RouterState } from "connected-react-router";
import { AuthenticationState } from "./authentication/types";
import { EventsState } from "./events/types";
import { LocalizationState } from "./localization/types";

export interface RootState {
  authentication: AuthenticationState;
  events: EventsState;
  localization: LocalizationState;
  router: RouterState;
}

export type EventioThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
