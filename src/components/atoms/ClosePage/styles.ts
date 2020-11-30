import styled from "@emotion/styled";
import { Clear } from "@material-ui/icons";

export const CloseContainer = styled.div`
  display: flex;

  align-items: center;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 48px;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverDarkGray};
  }
`;

export const CloseIcon = styled(Clear)`
  font-size: 45px important!;
  margin-right: 10px;
`;

export const StyledText = styled.span`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
