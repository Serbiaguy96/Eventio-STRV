import styled from "@emotion/styled";
import { ArrowDropDown } from "@material-ui/icons";

export const UserAccountContainer = styled.div`
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
  font-size: 16px;
  text-transform: uppercase;
  margin-right: 5px;
  cursor: pointer;

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

  color: ${({ theme }) => theme.colors.lightGray};
  margin-right: 5px;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
