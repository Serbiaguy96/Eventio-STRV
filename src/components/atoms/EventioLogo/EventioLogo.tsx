import React from "react";
import { useHistory, useLocation } from "react-router";
import { LogoContainer } from "./styles";
import { RouterStateType } from "../../../store/router/types";

export type LogoTheme = "dark" | "light";

export type EventioLogoProps = {
  page404?: boolean;
};

const EventioLogo = ({ page404 }: EventioLogoProps) => {
  const { push } = useHistory();
  const { pathname, state } = useLocation();

  // this is little hack, to check if to shot light sign or dark sign
  const errorCode = (state as RouterStateType)?.errorStatusCode;
  const lightThemeOnDesktop =
    pathname === "/signIn" || pathname === "/signUp" || errorCode || page404;
  return (
    <LogoContainer
      onClick={() => push("/")}
      logoTheme={lightThemeOnDesktop ? "light" : "dark"}
    >
      E.
    </LogoContainer>
  );
};

export default EventioLogo;
