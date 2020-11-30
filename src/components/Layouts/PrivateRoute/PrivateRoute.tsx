import React, { FC } from "react";
import { Redirect, Route, useLocation } from "react-router";
import { useIsUserLoggedIn } from "../../../store/authentication/useSelectors";
import { useLogLoggedUser } from "../../../store/authentication/useActions";
import jwtDecode from "jwt-decode";
import { JwtTokenType } from "../../../store/middlewares/types";
import { AppLayoutProps } from "../../../global/globalTypes";
import { AUTH_TOKEN } from "../../../global/globalConstants";
import MainAppLayout from "../MainAppLayout";

const PrivateRoute: FC<AppLayoutProps> = ({
  component: Component,
  insideApp,
  ...res
}) => {
  const { pathname } = useLocation();
  const isUserLogged = useIsUserLoggedIn();
  const logLoggedUser = useLogLoggedUser();

  const authToken = localStorage.getItem(AUTH_TOKEN);

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
        <MainAppLayout insideApp={insideApp}>
          {Component !== undefined && <Component {...matchProps} />}
        </MainAppLayout>
      )}
    />
  );
};

export default PrivateRoute;
