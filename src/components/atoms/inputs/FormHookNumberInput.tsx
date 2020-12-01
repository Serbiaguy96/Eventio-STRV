import React from "react";
import { Controller } from "react-hook-form";
import { useIntl } from "react-intl";
import { FormHookInputTypes } from "./types";
import { EventioTextInput } from "./index";

const FormHookNumberInput = ({
  name,
  control,
  error,
  required,
  helperText,
  label,
  defaultValue,
}: FormHookInputTypes) => {
  const { formatMessage } = useIntl();
  return (
    <Controller
      name={name}
      control={control}
      render={(props) => (
        <EventioTextInput
          type="number"
          label={label}
          error={error}
          defaultValue={defaultValue}
          helperText={helperText}
          {...props}
        />
      )}
      rules={{
        required: required && formatMessage({ id: "common.mandatory_field" }),
        validate: (value) =>
          (value > 0 && value <= 50) || formatMessage({ id: "error.capacity" }),
      }}
    />
  );
};

export default FormHookNumberInput;
