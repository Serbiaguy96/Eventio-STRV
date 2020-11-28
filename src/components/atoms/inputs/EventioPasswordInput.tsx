import React, { useState } from "react";
import { TextFieldProps } from "@material-ui/core/TextField";
import { InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { CssIconButton, CssTextField } from "./styles";

const EventioPasswordInput = (props: TextFieldProps) => {
  const [visible, setVisible] = useState(false);

  const getAdornment = () => (
    <InputAdornment position="end">
      <CssIconButton onClick={() => setVisible(!visible)}>
        {visible ? <Visibility /> : <VisibilityOff />}
      </CssIconButton>
    </InputAdornment>
  );

  return (
    <CssTextField
      {...props}
      type={visible ? "text" : "password"}
      InputProps={{ endAdornment: getAdornment() }}
    />
  );
};

export default EventioPasswordInput;
