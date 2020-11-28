import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { CallHistoryMethodAction, RouterState } from "connected-react-router";
import {
  AuthenticationActionTypes,
  AuthenticationState,
} from "./authentication/types";
import { EventsActionsTypes, EventsState } from "./events/types";
import {
  LocalizationActionsType,
  LocalizationState,
} from "./localization/types";

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
  Action
>;

export type ActionTypes =
  | AuthenticationActionTypes
  | EventsActionsTypes
  | LocalizationActionsType
  | CallHistoryMethodAction;
