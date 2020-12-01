import React from "react";
import { UserType } from "../../../store/authentication/types";
import { UserAccountContainer, UserInitials, UserName } from "./styles";
import { AccountTooltip } from "../../atoms/tooltips";
import { useHistoryActions } from "../../../store/router/useActions";
import ShorthandSignContainer from "../../atoms/ShorthandSignContainer";
import useIsMobile from "../../../utils/useIsMobile";
import { useLocation } from "react-router";
import ClosePage from "../../atoms/ClosePage";

export type UserNavigationProps = {
  userData: UserType | null;
  logOutUser: () => void;
};

const UserNavigation = ({ userData, logOutUser }: UserNavigationProps) => {
  const { push } = useHistoryActions();
  const { pathname } = useLocation();
  const isMobile = useIsMobile();
  if (!userData) return <ShorthandSignContainer visible={!isMobile} />;

  if (pathname === "/create-event") return <ClosePage />;

  const moveToProfile = () => {
    push("/profile");
  };

  const { firstName, lastName } = userData;
  return (
    <UserAccountContainer>
      <UserInitials
        onClick={moveToProfile}
      >{`${firstName[0]}${lastName[0]}`}</UserInitials>
      <UserName>{`${firstName} ${lastName}`}</UserName>
      <AccountTooltip logOutAction={logOutUser} profileAction={moveToProfile} />
    </UserAccountContainer>
  );
};

export default UserNavigation;
