import { EventioThunk } from "../types";
import {
  receiveRequestError,
  receiveUserData,
  setIsLoadingUser,
} from "./actionCreators";
import { logInUser } from "../../requests/authentication/requestCreators";
import { EventioError } from "../../requests/types";
import { push, replace } from "connected-react-router";
import { getRouterPathname } from "../router/selectors";
import { INVALID_USER_PASSWORD } from "../../requests/authentication/constants";

export const logUserInThunk = (
  email: string,
  password: string
): EventioThunk => (dispatch, getState) => {
  const state = getState();
  dispatch(setIsLoadingUser(true));
  logInUser({ email, password })
    .then(({ data, headers }) => {
      localStorage.setItem("authToken", headers.authorization);
      localStorage.setItem("refreshToken", headers.refreshToken);
      dispatch(receiveUserData(data));
      dispatch(receiveRequestError({} as EventioError));
      dispatch(push("/"));
    })
    .catch(({ response }) => {
      if (response.data.error === INVALID_USER_PASSWORD) {
        dispatch(receiveRequestError(response.data));
      } else {
        const pathname = getRouterPathname(state);
        dispatch(replace(pathname, { errorStatusCode: response.status }));
      }
    })
    .then(() => dispatch(setIsLoadingUser(false)));
};
