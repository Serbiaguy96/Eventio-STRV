import React from "react";
import {
  useIsUserLoading,
  useRequestError,
} from "../../../store/authentication/useSelectors";
import { usePostNewUser } from "../../../store/authentication/useActions";
import SignUpPage from "./SignUpPage";
import { USER_EXISTS } from "../../../requests/authentication/constants";

const ReduxContainer = () => {
  const requestError = useRequestError();
  const registerUser = usePostNewUser();
  const isLoading = useIsUserLoading();

  return (
    <SignUpPage
      registerUser={registerUser}
      userExistsError={requestError.error === USER_EXISTS}
      isLoading={isLoading}
    />
  );
};

export default ReduxContainer;
