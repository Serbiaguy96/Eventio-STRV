import React from "react";
import { useHistory } from "react-router";
import { LogoContainer } from "./styles";

export type LogoTheme = "dark" | "light";

export type EventioLogoProps = {
  theme: LogoTheme;
};

const EventioLogo = ({ theme }: EventioLogoProps) => {
  const { push } = useHistory();
  return (
    <LogoContainer onClick={() => push("/")} logoTheme={theme}>
      E.
    </LogoContainer>
  );
};

export default EventioLogo;
