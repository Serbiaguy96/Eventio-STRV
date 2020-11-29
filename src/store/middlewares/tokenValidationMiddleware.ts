import jwtDecode from "jwt-decode";
import { AxiosError } from "axios";
import {
  CALL_HISTORY_METHOD,
  LOCATION_CHANGE,
  replace,
} from "connected-react-router";
import { JwtTokenType, MiddlewareType } from "./types";
import { RootState } from "../types";
import { refreshTokenAuthentication } from "../../requests/authentication/requestCreators";
import { getRouterPathname } from "../router/selectors";
import { removeUserData } from "../authentication/actionCreators";
import { AUTH_TOKEN, REFRESH_TOKEN } from "../../global/globalConstants";

export const isAuthTokenExpired = (exp: number) => Date.now() > exp * 1000;

const tokenValidationMiddleware: MiddlewareType<RootState> = (store) => (
  next
) => (action) => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);
  const state = store.getState();

  // dont need to check token validity for router actions
  if (action.type === LOCATION_CHANGE || action.type === CALL_HISTORY_METHOD)
    return next(action);

  if (!authToken) return next(action);

  const { exp } = jwtDecode<JwtTokenType>(authToken);

  if (
    isAuthTokenExpired(exp) &&
    refreshToken !== undefined &&
    refreshToken !== null
  ) {
    refreshTokenAuthentication(refreshToken)
      .then(({ headers }) => {
        localStorage.setItem(AUTH_TOKEN, headers.authorization);
        next(action);
      })
      .catch((error: AxiosError) => {
        // here i check if refresh token is not expired
        if (error.response?.status === 401) {
          // if yes, i log user out and move him to log in again
          localStorage.removeItem(AUTH_TOKEN);
          localStorage.removeItem(REFRESH_TOKEN);
          store.dispatch(removeUserData());
        }
        const pathname = getRouterPathname(state);
        store.dispatch(
          replace(pathname, { errorStatusCode: error.response?.status })
        );
      });
  } else {
    next(action);
  }
};

export default tokenValidationMiddleware;
