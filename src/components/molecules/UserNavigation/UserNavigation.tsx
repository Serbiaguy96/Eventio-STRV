import React from "react";
import { UserType } from "../../../store/authentication/types";
import {
  ArrowIcon,
  UserAccountContainer,
  UserInitials,
  UserName,
} from "./styles";

export type UserNavigationProps = {
  userData: UserType | null;
  logOutUser: () => void;
};

const UserNavigation = ({ userData, logOutUser }: UserNavigationProps) => {
  if (!userData) return null;

  const { firsName, lastName } = userData;
  return (
    <UserAccountContainer>
      <UserInitials>{`${firsName[0]}${lastName[0]}`}</UserInitials>
      <UserName>{`${firsName} ${lastName}`}</UserName>
      <ArrowIcon active={false} />
    </UserAccountContainer>
  );
};

export default UserNavigation;
