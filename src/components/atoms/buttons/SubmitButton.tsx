import React from "react";
import DefaultButton from "./DefaultButton";
import { useThemeColors } from "../../../providers/ConnectedThemeProvider/ConnectedThemeProvider";
import { CustomButtonProps } from "./types";

const SubmitButton = ({ label, action }: CustomButtonProps) => {
  const { lightGreen } = useThemeColors();
  return <DefaultButton label={label} action={action} bgColor={lightGreen} />;
};

export default SubmitButton;
