import React from "react";
import { useIntl } from "react-intl";
import { Controller, useForm } from "react-hook-form";
import NotLoggedUserLayout from "../../layouts/NotLoggedUserLayout";
import {
  SignInForm,
  SignInFormContainer,
  SignInMessage,
  SignInTitle,
} from "./styles";
import {
  EventioTextInput,
  FormHookPasswordInput,
  FormHookTextInput,
} from "../../atoms/inputs";
import EventioPasswordInput from "../../atoms/inputs/EventioPasswordInput";
import { SubmitButton } from "../../atoms/buttons";
import { SignInFormType } from "../../../requests/authentication/types";
import ShorthandSignContainer from "../../atoms/ShorthandSignContainer";
import useIsMobile from "../../../utils/useIsMobile";

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
  const isMobile = useIsMobile();

  const { handleSubmit, control, errors } = useForm<SignInFormType>();

  const submitHandler = (data: SignInFormType) => {
    if (!Object.keys(errors).length) {
      logUserIn(data);
    }
  };

  return (
    <NotLoggedUserLayout>
      <SignInFormContainer>
        <SignInTitle>{formatMessage({ id: "sign_in.title" })}</SignInTitle>
        <SignInMessage error={wrongCredentialsError}>
          {wrongCredentialsError
            ? formatMessage({ id: "sign_in.error" })
            : formatMessage({ id: "sign_in.description" })}
        </SignInMessage>
        <SignInForm onSubmit={handleSubmit(submitHandler)}>
          <FormHookTextInput
            name="email"
            control={control}
            error={wrongCredentialsError || !!errors.email}
            required
            helperText={errors.email?.message}
          />
          <FormHookPasswordInput
            name="password"
            control={control}
            error={wrongCredentialsError || !!errors.password}
            required
            helperText={errors.password?.message}
          />
          <ShorthandSignContainer visible={isMobile} />
          <SubmitButton
            label={formatMessage({ id: "sign_in.main" })}
            loading={isUserSigning}
            disabled={isUserSigning}
          />
        </SignInForm>
      </SignInFormContainer>
    </NotLoggedUserLayout>
  );
};

export default SignInPage;
