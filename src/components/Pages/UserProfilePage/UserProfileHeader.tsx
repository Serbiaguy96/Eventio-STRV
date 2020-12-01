import React from "react";
import { UserType } from "../../../store/authentication/types";
import {
  StyledEmail,
  StyledUserName,
  UserInfoContainer,
  UserProfileHeaderContainer,
  UserProfileInitials,
} from "./styles";

export type UserProfileHeaderProps = {
  userData: UserType;
};

const UserProfileHeader = ({ userData }: UserProfileHeaderProps) => {
  const { firstName, lastName, email } = userData;
  return (
    <UserProfileHeaderContainer>
      <UserProfileInitials>
        {`${firstName[0]}${lastName[0]}`}
      </UserProfileInitials>
      <UserInfoContainer>
        <StyledUserName>{`${firstName} ${lastName}`}</StyledUserName>
        <StyledEmail>{email}</StyledEmail>
      </UserInfoContainer>
    </UserProfileHeaderContainer>
  );
};

export default UserProfileHeader;
