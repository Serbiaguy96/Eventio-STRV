import jwtDecode from "jwt-decode";
import { AxiosError } from "axios";
import { replace } from "connected-react-router";
import { JwtTokenType, MiddlewareType } from "./types";
import { RootState } from "../types";
import { refreshTokenAuthentication } from "../../requests/authentication/requestCreators";
import { getRouterPathname } from "../router/selectors";
import { removeUserData } from "../authentication/actionCreators";

const isAuthTokenExpired = (exp: number) => Date.now() > exp * 1000;

const tokenValidationMiddleware: MiddlewareType<RootState> = (store) => (
  next
) => (action) => {
  const authToken = localStorage.getItem("authToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const state = store.getState();

  if (!authToken) {
    return next(action);
  }

  const { exp } = jwtDecode<JwtTokenType>(authToken);

  if (isAuthTokenExpired(exp) && refreshToken) {
    refreshTokenAuthentication(refreshToken)
      .then(({ headers }) => {
        localStorage.setItem("authToken", headers.Authorization);
        next(action);
      })
      .catch((error: AxiosError) => {
        // here i check if refresh token is not expired
        if (error.response?.status === 401) {
          // if yes, i log user out and move him to log in again
          localStorage.removeItem("authToken");
          localStorage.removeItem("refreshToken");
          store.dispatch(removeUserData());
        }
        const pathname = getRouterPathname(state);
        store.dispatch(
          replace(
            { pathname, search: "", hash: "" },
            { errorStatusCode: error.response?.status }
          )
        );
      });
  } else {
    next(action);
  }
};

export default tokenValidationMiddleware;
