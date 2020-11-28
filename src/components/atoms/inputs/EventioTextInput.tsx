import React from "react";
import { TextFieldProps } from "@material-ui/core/TextField";
import { CssTextField } from "./styles";

const EventioTextInput = (props: TextFieldProps) => {
  return <CssTextField {...props} />;
};

export default EventioTextInput;
