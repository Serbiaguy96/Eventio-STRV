import React, { FC } from "react";
import { MainAppContainer } from "./styles";
import EventioLogo from "../../atoms/EventioLogo";
import UserNavigation from "../../molecules/UserNavigation";

const MainAppLayout: FC<{ page404?: boolean }> = ({ children, page404 }) => {
  return (
    <MainAppContainer>
      <EventioLogo page404={page404} />
      <UserNavigation />
      {children}
    </MainAppContainer>
  );
};

export default MainAppLayout;
