import React from "react";
import {
  useIsUserLoading,
  useRequestError,
} from "../../../store/authentication/useSelectors";
import { useLogInUser } from "../../../store/authentication/useActions";
import SignInPage from "./SignInPage";
import { INVALID_USER_PASSWORD } from "../../../requests/authentication/constants";

const ReduxContainer = () => {
  const requestError = useRequestError();
  const logUserIn = useLogInUser();
  const userLoading = useIsUserLoading();

  return (
    <SignInPage
      wrongCredentialsError={requestError.error === INVALID_USER_PASSWORD}
      isUserSigning={userLoading}
      logUserIn={logUserIn}
    />
  );
};

export default ReduxContainer;
