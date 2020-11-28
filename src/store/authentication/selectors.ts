import { RootState as RS } from "../types";
import { AuthenticationState, UserType } from "./types";
import { EventioError } from "../../requests/types";

const getAuthenticationSlice = (state: RS): AuthenticationState =>
  state.authentication;

export const getUserData = (state: RS): UserType | null =>
  getAuthenticationSlice(state).user;

export const getIsUserLoggedIn = (state: RS): boolean =>
  getAuthenticationSlice(state).loggedIn;

export const getIsUserLoading = (state: RS): boolean =>
  getAuthenticationSlice(state).isLoading;

export const getRequestError = (state: RS): EventioError =>
  getAuthenticationSlice(state).error;
