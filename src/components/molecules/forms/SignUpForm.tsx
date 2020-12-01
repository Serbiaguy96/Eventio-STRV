import React from "react";
import { SignUpPageProps } from "../../pages/SignUpPage/SignUpPage";
import { useForm } from "react-hook-form";
import { FormHookPasswordInput, FormHookTextInput } from "../../atoms/inputs";
import { useIntl } from "react-intl";
import { SubmitButton } from "../../atoms/buttons";
import { DefaultFormContainer } from "./styles";
import ShorthandSignContainer from "../../atoms/ShorthandSignContainer";
import useIsMobile from "../../../utils/useIsMobile";

export type SignUpFormProps = SignUpPageProps;

type SignUpFormType = {
  firstName: string;
  lastName: string;
  password: string;
  passwordAgain: string;
  email: string;
};

const SignUpForm = ({
  registerUser,
  userExistsError,
  isLoading,
}: SignUpFormProps) => {
  const { formatMessage } = useIntl();
  const { handleSubmit, errors, control, watch } = useForm<SignUpFormType>();
  const isMobile = useIsMobile();

  const onSubmitHandle = (data: SignUpFormType) => {
    if (!Object.keys(errors).length) {
      const { firstName, email, lastName, password } = data;
      registerUser({ firstName, email, lastName, password });
    }
  };

  const passwordToCmp = watch("password");

  return (
    <DefaultFormContainer
      onSubmit={handleSubmit(onSubmitHandle)}
      autoComplete="off"
    >
      <FormHookTextInput
        name="firstName"
        label={formatMessage({ id: "sign_up.first_name" })}
        control={control}
        error={!!errors.firstName}
        required
        helperText={errors.firstName?.message}
      />
      <FormHookTextInput
        name="lastName"
        label={formatMessage({ id: "sign_up.last_name" })}
        control={control}
        error={!!errors.lastName}
        required
        helperText={errors.lastName?.message}
      />
      <FormHookTextInput
        name="email"
        label={formatMessage({ id: "sign_in.email" })}
        control={control}
        error={userExistsError || !!errors.email}
        required
        helperText={errors.email?.message}
        customRules={{
          pattern: {
            value: /[\S]*@[a-z]*.[a-z]*/,
            message: formatMessage({ id: "sign_up.wrong_email_format" }),
          },
        }}
      />
      <FormHookPasswordInput
        name="password"
        label={formatMessage({ id: "sign_in.password" })}
        control={control}
        error={!!errors.password}
        required
        helperText={errors.password?.message}
      />
      <FormHookPasswordInput
        name="passwordAgain"
        label={formatMessage({ id: "sign_up.password_again" })}
        control={control}
        error={!!errors.passwordAgain}
        required
        customRules={{
          validate: (value: string | undefined) =>
            value === passwordToCmp ||
            formatMessage({ id: "sign_up.no_match" }),
        }}
        helperText={errors.passwordAgain?.message}
      />
      <ShorthandSignContainer visible={isMobile} />
      <SubmitButton
        label={formatMessage({ id: "sign_up.main" })}
        loading={isLoading}
      />
    </DefaultFormContainer>
  );
};

export default SignUpForm;
