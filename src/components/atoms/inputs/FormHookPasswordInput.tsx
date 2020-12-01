import React from "react";
import { Controller } from "react-hook-form";
import { FormHookInputTypes } from "./types";
import EventioPasswordInput from "./EventioPasswordInput";
import { useIntl } from "react-intl";

type PasswordInputProps = FormHookInputTypes & {
  customRules?: any;
};

const FormHookPasswordInput = ({
  name,
  label,
  control,
  error,
  helperText,
  required,
  customRules,
}: PasswordInputProps) => {
  const { formatMessage } = useIntl();
  const validCustomRules = customRules || {};
  return (
    <Controller
      name={name}
      control={control}
      render={(props) => (
        <EventioPasswordInput
          label={label || formatMessage({ id: "sign_in.password" })}
          {...props}
          error={error}
          helperText={helperText}
        />
      )}
      rules={{
        ...validCustomRules,
        required: required && formatMessage({ id: "common.mandatory_field" }),
      }}
    />
  );
};

export default FormHookPasswordInput;
