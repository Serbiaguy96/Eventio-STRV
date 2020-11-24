import {
  RECEIVE_USER_DATA,
  REMOVE_USER_DATA,
  SET_IS_LOADING,
} from "./actionTypes";

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
}

export interface ReceiveUserDataAction {
  type: typeof RECEIVE_USER_DATA;
  payload: { userData: UserType };
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
  | SetIsLoadingUserAction
  | RemoveUserData;
