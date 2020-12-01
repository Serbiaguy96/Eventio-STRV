import React from "react";
import { SignInPageProps } from "../../pages/SignInPage/SignInPage";
import { FormHookPasswordInput, FormHookTextInput } from "../../atoms/inputs";
import ShorthandSignContainer from "../../atoms/ShorthandSignContainer";
import { SubmitButton } from "../../atoms/buttons";
import { useIntl } from "react-intl";
import useIsMobile from "../../../utils/useIsMobile";
import { useForm } from "react-hook-form";
import { SignInFormType } from "../../../requests/authentication/types";
import { DefaultFormContainer } from "./styles";

export type SignInFormProps = SignInPageProps;

const SignInForm = ({
  wrongCredentialsError,
  isUserSigning,
  logUserIn,
}: SignInFormProps) => {
  const { formatMessage } = useIntl();
  const isMobile = useIsMobile();
  const { handleSubmit, control, errors } = useForm<SignInFormType>();

  const submitHandler = (data: SignInFormType) => {
    if (!Object.keys(errors).length) {
      logUserIn(data);
    }
  };
  return (
    <DefaultFormContainer onSubmit={handleSubmit(submitHandler)}>
      <FormHookTextInput
        name="email"
        label={formatMessage({ id: "sign_in.email" })}
        control={control}
        error={wrongCredentialsError || !!errors.email}
        required
        helperText={errors.email?.message}
      />
      <FormHookPasswordInput
        name="password"
        label={formatMessage({ id: "sign_in.password" })}
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
    </DefaultFormContainer>
  );
};

export default SignInForm;
