import React from "react";
import { UserType } from "../../../store/authentication/types";
import { UserAccountContainer, UserInitials, UserName } from "./styles";
import { AccountTooltip } from "../../atoms/tooltips";
import { useHistoryActions } from "../../../store/router/useActions";
import ShorthandSignContainer from "../../atoms/ShorthandSignContainer";
import useIsMobile from "../../../utils/useIsMobile";

export type UserNavigationProps = {
  userData: UserType | null;
  logOutUser: () => void;
};

const UserNavigation = ({ userData, logOutUser }: UserNavigationProps) => {
  const { push } = useHistoryActions();
  const isMobile = useIsMobile();
  if (!userData) return <ShorthandSignContainer visible={!isMobile} />;

  const { firstName, lastName } = userData;
  return (
    <UserAccountContainer>
      <UserInitials>{`${firstName[0]}${lastName[0]}`}</UserInitials>
      <UserName>{`${firstName} ${lastName}`}</UserName>
      <AccountTooltip
        logOutAction={logOutUser}
        profileAction={() => push("/profile")}
      />
    </UserAccountContainer>
  );
};

export default UserNavigation;
