import { EventioThunk } from "../types";
import {
  receiveRequestError,
  receiveUserData,
  setIsLoadingUser,
} from "./actionCreators";
import { logInUser } from "../../requests/authentication/requestCreators";
import { EventioError } from "../../requests/types";
import { push, replace } from "connected-react-router";
import { getRouterPathname, getRouterState } from "../router/selectors";
import { INVALID_USER_PASSWORD } from "../../requests/authentication/constants";
import { AUTH_TOKEN, REFRESH_TOKEN } from "../../global/globalConstants";

export const logUserInThunk = (
  email: string,
  password: string
): EventioThunk => (dispatch, getState) => {
  const state = getState();
  const stateRouter = getRouterState(state);
  dispatch(setIsLoadingUser(true));
  logInUser({ email, password })
    .then(({ data, headers }) => {
      const { authorization, "refresh-token": refreshToken } = headers;

      localStorage.setItem(AUTH_TOKEN, authorization);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);
      dispatch(receiveUserData(data));
      dispatch(receiveRequestError({} as EventioError));
      // i check, if user came from some authorized page, if so, i move him there
      if (stateRouter?.from) {
        dispatch(replace(stateRouter.from, {}));
      } else {
        dispatch(push("/"));
      }
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
