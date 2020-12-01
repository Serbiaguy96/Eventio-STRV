import React, { FC } from "react";
import { MainAppContainer, MainAppHeaderContainer } from "./styles";
import EventioLogo from "../../atoms/EventioLogo";
import UserNavigation from "../../molecules/UserNavigation";
import BackToPage from "../../atoms/BackToPage";

const MainAppLayout: FC<{ page404?: boolean; insideApp?: boolean }> = ({
  children,
  page404,
  insideApp,
}) => {
  return (
    <MainAppContainer insideApp={insideApp}>
      <MainAppHeaderContainer>
        <EventioLogo page404={page404} />
        <BackToPage />
        <UserNavigation />
      </MainAppHeaderContainer>
      {children}
    </MainAppContainer>
  );
};

export default MainAppLayout;
