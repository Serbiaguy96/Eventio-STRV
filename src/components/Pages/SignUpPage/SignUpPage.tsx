import React from "react";
import { UserPostDataType } from "../../../requests/users/types";
import AsidePictureLayout from "../../layouts/AsidePictureLayout";
import {
  SignInFormContainer,
  SignInMessage,
  SignInTitle,
} from "../SignInPage/styles";
import { useIntl } from "react-intl";
import SignUpForm from "./SignUpForm";

export type SignUpPageProps = {
  registerUser: (userData: UserPostDataType) => void;
  userExistsError: boolean;
  isLoading: boolean;
};

const SignUpPage = ({
  userExistsError,
  isLoading,
  registerUser,
}: SignUpPageProps) => {
  const { formatMessage } = useIntl();
  return (
    <AsidePictureLayout>
      <SignInFormContainer>
        <SignInTitle>{formatMessage({ id: "sign_up.title" })}</SignInTitle>
        <SignInMessage error={userExistsError}>
          {userExistsError
            ? formatMessage({ id: "sign_up.error" })
            : formatMessage({ id: "sign_in.description" })}
        </SignInMessage>
        <SignUpForm
          registerUser={registerUser}
          userExistsError={userExistsError}
          isLoading={isLoading}
        />
      </SignInFormContainer>
    </AsidePictureLayout>
  );
};

export default SignUpPage;
