import {
  RECEIVE_REQUEST_ERROR,
  RECEIVE_USER_DATA,
  REMOVE_USER_DATA,
  SET_IS_LOADING,
} from "./actionTypes";
import { EventioError } from "../../requests/types";

export type UserType = {
  _id: string;
  firsName: string;
  lastName: string;
  email: string;
  _v: number;
  id: string;
};

export interface AuthenticationState {
  user: UserType | null;
  loggedIn: boolean;
  isLoading: boolean;
  error: EventioError;
}

export interface ReceiveUserDataAction {
  type: typeof RECEIVE_USER_DATA;
  payload: { userData: UserType };
}

export interface ReceiveRequestError {
  type: typeof RECEIVE_REQUEST_ERROR;
  payload: { errorData: EventioError };
}

export interface RemoveUserData {
  type: typeof REMOVE_USER_DATA;
}

export interface SetIsLoadingUserAction {
  type: typeof SET_IS_LOADING;
  payload: { flag: boolean };
}

export type AuthenticationActionTypes =
  | ReceiveUserDataAction
  | ReceiveRequestError
  | SetIsLoadingUserAction
  | RemoveUserData;
