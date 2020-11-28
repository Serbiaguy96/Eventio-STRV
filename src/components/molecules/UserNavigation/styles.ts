import styled from "@emotion/styled";
import { ArrowDropDown } from "@material-ui/icons";

export const UserAccountContainer = styled.div`
  position: fixed;
  top: 40px;
  right: 100px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const UserInitials = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Hind;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;

  ${({ theme }) =>
    `color: ${theme.colors.lightGray}; background-color: ${theme.colors.lighterGray}`};

  border-radius: 50%;
`;

export const UserName = styled.span`
  font-family: Hind;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;

  color: ${({ theme }) => theme.colors.lighterGray};
  margin: 0 5px;
`;

export const ArrowIcon = styled(ArrowDropDown)<{ active: boolean }>`
  color: ${({ theme }) => theme.colors.lighterGray};
  font-size: 14px;

  ${({ active }) => active && "transform: rotation(180deg);"}
`;
