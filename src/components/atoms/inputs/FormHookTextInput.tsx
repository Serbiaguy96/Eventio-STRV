import React from "react";
import { Controller } from "react-hook-form";
import { useIntl } from "react-intl";
import { EventioTextInput } from "./index";
import { FormHookInputTypes } from "./types";

const FormHookTextInput = ({
  name,
  control,
  error,
  required,
  helperText,
}: FormHookInputTypes) => {
  const { formatMessage } = useIntl();
  return (
    <Controller
      name={name}
      control={control}
      render={(props) => (
        <EventioTextInput
          label={formatMessage({ id: "sign_in.email" })}
          error={error}
          helperText={helperText}
          {...props}
        />
      )}
      rules={{
        required: required && formatMessage({ id: "common.mandatory_field" }),
      }}
    />
  );
};

export default FormHookTextInput;
