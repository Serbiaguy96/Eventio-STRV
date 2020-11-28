import React from "react";
import styled from "@emotion/styled";
import { DefaultButtonProps } from "./types";

const StyledButton = styled.button<{ bgColor: string; textColor: string }>`
  width: 240px;
  height: 57px;
  border-radius: 4px;
  font-family: Hind;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;

  ${({ textColor, bgColor }) =>
    `color: ${textColor}; background-color: ${bgColor};`}
`;

const DefaultButton = ({
  label,
  action,
  bgColor,
  textColor = "white",
}: DefaultButtonProps) => {
  return (
    <StyledButton onClick={action} textColor={textColor} bgColor={bgColor}>
      {label}
    </StyledButton>
  );
};

export default DefaultButton;
