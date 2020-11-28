import React from "react";
import DefaultButton from "./DefaultButton";
import { useThemeColors } from "../../../providers/ConnectedThemeProvider/ConnectedThemeProvider";
import { CustomButtonProps } from "./types";

const SubmitButton = ({
  label,
  action,
  disabled,
  loading,
}: CustomButtonProps) => {
  const { lightGreen, hoverLightGreen } = useThemeColors();
  return (
    <DefaultButton
      label={label}
      action={action}
      bgColor={lightGreen}
      hoverColor={hoverLightGreen}
      type="submit"
      loading={loading}
      disabled={disabled}
    />
  );
};

export default SubmitButton;
