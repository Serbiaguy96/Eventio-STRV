import {
  ReceiveRequestError,
  ReceiveUserDataAction,
  RemoveUserData,
  SetIsLoadingUserAction,
  UserType,
} from "./types";
import {
  RECEIVE_REQUEST_ERROR,
  RECEIVE_USER_DATA,
  REMOVE_USER_DATA,
  SET_IS_LOADING,
} from "./actionTypes";
import { EventioError } from "../../requests/types";

export const receiveUserData = (userData: UserType): ReceiveUserDataAction => ({
  type: RECEIVE_USER_DATA,
  payload: { userData },
});

export const removeUserData = (): RemoveUserData => ({
  type: REMOVE_USER_DATA,
});

export const receiveRequestError = (
  errorData: EventioError
): ReceiveRequestError => ({
  type: RECEIVE_REQUEST_ERROR,
  payload: { errorData },
});

export const setIsLoadingUser = (flag: boolean): SetIsLoadingUserAction => ({
  type: SET_IS_LOADING,
  payload: { flag },
});
