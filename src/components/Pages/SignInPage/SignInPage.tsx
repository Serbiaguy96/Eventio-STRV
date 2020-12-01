import React from "react";
import { useIntl } from "react-intl";
import { SignInFormContainer, SignInMessage, SignInTitle } from "./styles";
import { SignInFormType } from "../../../requests/authentication/types";
import AsidePictureLayout from "../../Layouts/AsidePictureLayout";
import SignInForm from "../../molecules/forms/SignInForm";

export type SignInPageProps = {
  wrongCredentialsError: boolean;
  isUserSigning: boolean;
  logUserIn: (formData: SignInFormType) => void;
};

const SignInPage = ({
  wrongCredentialsError,
  isUserSigning,
  logUserIn,
}: SignInPageProps) => {
  const { formatMessage } = useIntl();

  return (
    <AsidePictureLayout>
      <SignInFormContainer>
        <SignInTitle>{formatMessage({ id: "sign_in.title" })}</SignInTitle>
        <SignInMessage error={wrongCredentialsError}>
          {wrongCredentialsError
            ? formatMessage({ id: "sign_in.error" })
            : formatMessage({ id: "sign_in.description" })}
        </SignInMessage>
        <SignInForm
          wrongCredentialsError={wrongCredentialsError}
          isUserSigning={isUserSigning}
          logUserIn={logUserIn}
        />
      </SignInFormContainer>
    </AsidePictureLayout>
  );
};

export default SignInPage;
