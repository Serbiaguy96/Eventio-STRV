import React, { FC } from "react";
import { AppLayoutProps } from "../../../global/globalTypes";
import { Redirect, Route, useLocation } from "react-router";
import { AUTH_TOKEN } from "../../../global/globalConstants";
import { useIsUserLoggedIn } from "../../../store/authentication/useSelectors";
import { useLogLoggedUser } from "../../../store/authentication/useActions";
import jwtDecode from "jwt-decode";
import { JwtTokenType } from "../../../store/middlewares/types";
import MainAppLayout from "../MainAppLayout/MainAppLayout";

const PublicRoute: FC<AppLayoutProps> = ({
  path,
  component: Component,
  ...res
}) => {
  const { pathname } = useLocation();
  const isLoggedInUser = useIsUserLoggedIn();
  const logLoggedUser = useLogLoggedUser();

  const authToken = localStorage.getItem(AUTH_TOKEN);
  if (!isLoggedInUser && authToken) {
    const { user } = jwtDecode<JwtTokenType>(authToken);
    logLoggedUser(user);
  }

  if (authToken && (pathname === "/signIn" || pathname === "/signUp")) {
    return <Redirect to={"/"} />;
  }

  return (
    <Route
      {...res}
      path={path}
      render={(matchProps) => (
        <MainAppLayout page404={!path}>
          {Component !== undefined && <Component {...matchProps} />}
        </MainAppLayout>
      )}
    />
  );
};

export default PublicRoute;
