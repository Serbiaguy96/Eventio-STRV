import React from "react";
import { Controller } from "react-hook-form";
import { FormHookInputTypes } from "./types";
import EventioPasswordInput from "./EventioPasswordInput";
import { useIntl } from "react-intl";

const FormHookPasswordInput = ({
  name,
  control,
  error,
  helperText,
  required,
}: FormHookInputTypes) => {
  const { formatMessage } = useIntl();
  return (
    <Controller
      name={name}
      control={control}
      render={(props) => (
        <EventioPasswordInput
          label={formatMessage({ id: "sign_in.password" })}
          {...props}
          error={error}
          helperText={helperText}
        />
      )}
      rules={{
        required: required && formatMessage({ id: "common.mandatory_field" }),
      }}
    />
  );
};

export default FormHookPasswordInput;
