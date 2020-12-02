import React from "react";
import { Controller } from "react-hook-form";
import { useIntl } from "react-intl";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { FormHookInputTypes } from "./types";
import { CssTimeField, materialTheme } from "./styles";
import { ThemeProvider } from "@material-ui/styles";

type TimeInputProps = FormHookInputTypes & {
  value: string | undefined | null;
};

const FormHookTimeInput = ({
  name,
  control,
  error,
  required,
  helperText,
  label,
  defaultValue,
  value,
}: TimeInputProps) => {
  const { formatMessage } = useIntl();
  return (
    <Controller
      name={name}
      control={control}
      render={(props) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ThemeProvider theme={materialTheme}>
            <CssTimeField
              {...props}
              value={value}
              label={label}
              autoOk
              clearable
              defaultValue={defaultValue}
              error={error}
              helperText={helperText}
            />
          </ThemeProvider>
        </MuiPickersUtilsProvider>
      )}
      rules={{
        required: required && formatMessage({ id: "common.mandatory_field" }),
      }}
    />
  );
};

export default FormHookTimeInput;
