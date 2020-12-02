import React from "react";
import { useUserData } from "../../../store/authentication/useSelectors";
import { useLogUserOut } from "../../../store/authentication/useActions";
import UserNavigation from "./UserNavigation";

const ReduxContainer = () => {
  const userData = useUserData();
  const logUserOut = useLogUserOut();
  return <UserNavigation userData={userData} logOutUser={logUserOut} />;
};

export default ReduxContainer;
