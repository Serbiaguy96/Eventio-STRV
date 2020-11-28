import React, { FC } from "react";
import { LoggedUserLayoutContainer } from "./styles";
import EventioLogo from "../../atoms/EventioLogo";
import UserNavigation from "../../molecules/UserNavigation";

const LoggedUserLayout: FC = ({ children }) => {
  return (
    <LoggedUserLayoutContainer>
      <EventioLogo theme="dark" />
      <UserNavigation />
      {children}
    </LoggedUserLayoutContainer>
  );
};

export default LoggedUserLayout;
