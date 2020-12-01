import React from "react";
import { Controller } from "react-hook-form";
import { useIntl } from "react-intl";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import DateFnsUtils from "@date-io/date-fns";
import { FormHookInputTypes } from "./types";
import { CssDateField, materialTheme } from "./styles";

type DateInputProps = FormHookInputTypes & {
  value: string | undefined | null;
};

const FormHookDateInput = ({
  name,
  control,
  error,
  required,
  helperText,
  label,
  defaultValue,
  value,
}: DateInputProps) => {
  const { formatMessage } = useIntl();
  return (
    <Controller
      name={name}
      control={control}
      render={(props) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ThemeProvider theme={materialTheme}>
            <CssDateField
              {...props}
              label={label}
              autoOk
              clearable
              error={error}
              helperText={helperText}
              value={value}
              minDate={new Date()}
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

export default FormHookDateInput;
