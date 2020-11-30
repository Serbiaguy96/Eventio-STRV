import React from "react";
import { DefaultButtonProps } from "./types";
import Loader from "../Loader";
import { DefaultStyledButton } from "./styles";

const DefaultButton = ({
  label,
  action,
  bgColor,
  textColor = "white",
  disabled = false,
  type = "button",
  loading,
  hoverColor,
}: DefaultButtonProps) => {
  return (
    <DefaultStyledButton
      onClick={action}
      textColor={textColor}
      hoverColor={hoverColor}
      bgColor={bgColor}
      type={type}
      disabled={disabled}
    >
      {loading ? <Loader size={35} /> : label}
    </DefaultStyledButton>
  );
};

export default DefaultButton;
