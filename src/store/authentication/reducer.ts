import {AuthenticationActionTypes, AuthenticationState} from "./types";
import {RECEIVE_USER_DATA, REMOVE_USER_DATA, SET_IS_LOADING} from "./actionTypes";

const initialState: AuthenticationState = {
  user: null,
  isLoading: false,
  loggedIn: false,
};

const authenticationReducer = (
  state = initialState,
  action: AuthenticationActionTypes
): AuthenticationState => {
  switch (action.type) {
    case RECEIVE_USER_DATA:
      return {
        ...state,
        loggedIn: true,
        user: action.payload.userData,
      };
    case REMOVE_USER_DATA:
      return {
        ...state,
        loggedIn: false,
        user: null,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.flag,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
