import React, { FC } from "react";
import {
  Redirect,
  Route,
  RouteProps,
  useHistory,
  useLocation,
} from "react-router";
import { useIsUserLoggedIn } from "../../../store/authentication/useSelectors";
import { useLogLoggedUser } from "../../../store/authentication/useActions";
import jwtDecode from "jwt-decode";
import { JwtTokenType } from "../../../store/middlewares/types";
import { isAuthTokenExpired } from "../../../store/middlewares/tokenValidationMiddleware";
import { refreshTokenAuthentication } from "../../../requests/authentication/requestCreators";
import { AppLayoutProps } from "../../../global/globalTypes";
import LoggedUserLayout from "../LoggedUserLayout";

const PrivateRoute: FC<AppLayoutProps> = ({ component: Component, ...res }) => {
  const { pathname } = useLocation();
  const { replace } = useHistory();
  const isUserLogged = useIsUserLoggedIn();
  const logLoggedUser = useLogLoggedUser();

  const authToken = localStorage.getItem("authToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!authToken && !isUserLogged) {
    return <Redirect to={{ pathname: "/signIn", state: { from: pathname } }} />;
  }

  if (authToken && !isUserLogged) {
    const { user, exp } = jwtDecode<JwtTokenType>(authToken);

    if (isAuthTokenExpired(exp) && refreshToken) {
      refreshTokenAuthentication(refreshToken)
        .then(({ headers }) => {
          localStorage.setItem("authToken", headers.authorization);
          logLoggedUser(user);
        })
        .catch(({ response }) => {
          if (response.status === 401) {
            localStorage.removeItem("authToken");
            localStorage.removeItem("refreshToken");
          }
          replace(pathname, { errorStatusCode: response.status });
        });
    }

    logLoggedUser(user);
  }

  return (
    <Route
      {...res}
      render={(matchProps) => (
        <LoggedUserLayout>
          {Component !== undefined && <Component {...matchProps} />}
        </LoggedUserLayout>
      )}
    />
  );
};

export default PrivateRoute;
