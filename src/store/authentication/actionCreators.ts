import {
  ReceiveUserDataAction,
  RemoveUserData,
  SetIsLoadingUserAction,
  UserType,
} from "./types";
import {
  RECEIVE_USER_DATA,
  REMOVE_USER_DATA,
  SET_IS_LOADING,
} from "./actionTypes";

export const receiveUserData = (userData: UserType): ReceiveUserDataAction => ({
  type: RECEIVE_USER_DATA,
  payload: { userData },
});

export const removeUserData = (): RemoveUserData => ({
  type: REMOVE_USER_DATA,
});

export const setIsLoadingUser = (flag: boolean): SetIsLoadingUserAction => ({
  type: SET_IS_LOADING,
  payload: { flag },
});
