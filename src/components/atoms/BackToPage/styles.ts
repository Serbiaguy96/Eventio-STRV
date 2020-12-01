import styled from "@emotion/styled";
import { ArrowBack } from "@material-ui/icons";

export const BackToPageContainer = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverDarkGray};
  }

  @media only screen and (max-width: 1024px) {
  }
`;

export const BackIcon = styled(ArrowBack)`
  font-size: 40px !important;
  margin-right: 10px;

  @media only screen and (max-width: 1024px) {
    font-size: 20px !important;
    margin-right: 7px;
  }
`;
