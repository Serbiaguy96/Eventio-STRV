import React, { FC } from "react";
import { Redirect, Route, useLocation } from "react-router";
import { useIsUserLoggedIn } from "../../../store/authentication/useSelectors";
import { useLogLoggedUser } from "../../../store/authentication/useActions";
import jwtDecode from "jwt-decode";
import { JwtTokenType } from "../../../store/middlewares/types";
import { AppLayoutProps } from "../../../global/globalTypes";
import { AUTH_TOKEN, REFRESH_TOKEN } from "../../../global/globalConstants";
import MainAppLayout from "../MainAppLayout";

const PrivateRoute: FC<AppLayoutProps> = ({ component: Component, ...res }) => {
  const { pathname } = useLocation();
  const isUserLogged = useIsUserLoggedIn();
  const logLoggedUser = useLogLoggedUser();

  const authToken = localStorage.getItem(AUTH_TOKEN);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);

  if (!authToken && !isUserLogged) {
    return <Redirect to={{ pathname: "/signIn", state: { from: pathname } }} />;
  }

  if (authToken && !isUserLogged) {
    const { user } = jwtDecode<JwtTokenType>(authToken);
    logLoggedUser(user);
  }

  return (
    <Route
      {...res}
      render={(matchProps) => (
        <MainAppLayout>
          {Component !== undefined && <Component {...matchProps} />}
        </MainAppLayout>
      )}
    />
  );
};

export default PrivateRoute;