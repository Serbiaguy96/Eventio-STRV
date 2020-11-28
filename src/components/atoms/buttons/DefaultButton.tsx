import React from "react";
import styled from "@emotion/styled";
import { DefaultButtonProps } from "./types";
import Loader from "../Loader";

const StyledButton = styled.button<{
  bgColor: string;
  textColor: string;
  hoverColor: string;
}>`
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
  margin-top: 64px;
  cursor: pointer;
  border: none;

  ${({ textColor, bgColor }) =>
    `color: ${textColor}; background-color: ${bgColor};`}

  &:hover {
    ${({ hoverColor }) => `background-color: ${hoverColor}`}
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 40px;
  }
`;

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
    <StyledButton
      onClick={action}
      textColor={textColor}
      hoverColor={hoverColor}
      bgColor={bgColor}
      type={type}
      disabled={disabled}
    >
      {loading ? <Loader size={35} /> : label}
    </StyledButton>
  );
};

export default DefaultButton;
