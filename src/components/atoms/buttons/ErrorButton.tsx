import React from "react";
import DefaultButton from "./DefaultButton";
import { useThemeColors } from "../../../providers/ConnectedThemeProvider/ConnectedThemeProvider";
import { CustomButtonProps } from "./types";

const ErrorButton = ({ label, action }: CustomButtonProps) => {
  const { darkGray, hoverDarkGray } = useThemeColors();
  return (
    <DefaultButton
      label={label}
      action={action}
      bgColor={darkGray}
      hoverColor={hoverDarkGray}
    />
  );
};

export default ErrorButton;
