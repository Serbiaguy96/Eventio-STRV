import styled from "@emotion/styled";
import {
  EDIT,
  FULL,
  JOIN,
  LEAVE,
  NONE,
} from "../../molecules/SingleEvent/constants";
import { EventButtonActionTypes } from "../../molecules/SingleEvent/types";

export const StyledRoundButton = styled.button<{
  isCreate: boolean;
  visible: boolean;
}>`
  position: fixed;
  right: 40px;
  bottom: 40px;
  color: white;
  background-color: ${({ isCreate, theme }) =>
    isCreate ? theme.colors.darkGray : theme.colors.lightGreen};

  border-radius: 50%;
  border: none;
  padding: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  ${({ visible }) => !visible && "display: none;"}

  &:hover {
    background-color: ${({ isCreate, theme }) =>
      isCreate ? theme.colors.hoverDarkGray : theme.colors.hoverLightGreen};
  }

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 1024px) {
    position: static;
    margin: 0 20px 15px auto;
  }
`;

export const DefaultStyledButton = styled.button<{
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
    margin-top: 20px;
  }

  &:focus {
    outline: none;
  }
`;

export const EventStyledButton = styled.button<{
  actionType: EventButtonActionTypes;
}>`
  width: 100px;
  height: 32px;
  text-align: center;
  font-family: Hind;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1px;
  cursor: ${({ actionType }) =>
    actionType === FULL ? "context-menu" : "pointer"};
  border: none;
  text-transform: uppercase;
  border-radius: 4px;
  color: ${({ actionType, theme }) =>
    actionType === EDIT ? theme.colors.lightGray : "white"};

  display: ${({ actionType }) => actionType === NONE && "none"};

  background-color: ${({ actionType, theme }) => {
    switch (actionType) {
      case JOIN:
        return theme.colors.lightGreen;
      case LEAVE:
        return theme.colors.errorRed;
      case EDIT:
        return theme.colors.lighterGray;
      case FULL:
        return theme.colors.darkGray;
      default:
        return "";
    }
  }};

  &:hover {
    background-color: ${({ actionType, theme }) => {
      switch (actionType) {
        case JOIN:
          return theme.colors.hoverLightGreen;
        case LEAVE:
          return theme.colors.hoverErrorRed;
        case EDIT:
          return theme.colors.hoverLightGray;
        default:
          return "";
      }
    }};
  }

  &:focus {
    outline: none;
  }
`;
