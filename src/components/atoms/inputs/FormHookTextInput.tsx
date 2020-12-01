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
  label,
  defaultValue,
  customRules,
}: FormHookInputTypes) => {
  const { formatMessage } = useIntl();
  const validCustomRules = customRules || {};
  return (
    <Controller
      name={name}
      control={control}
      render={(props) => (
        <EventioTextInput
          label={label}
          error={error}
          defaultValue={defaultValue}
          helperText={helperText}
          {...props}
        />
      )}
      rules={{
        ...validCustomRules,
        required: required && formatMessage({ id: "common.mandatory_field" }),
      }}
    />
  );
};

export default FormHookTextInput;
