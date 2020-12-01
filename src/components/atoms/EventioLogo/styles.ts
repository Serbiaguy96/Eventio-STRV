import styled from "@emotion/styled";
import { LogoTheme } from "./EventioLogo";

export const LogoContainer = styled.div<{ logoTheme: LogoTheme }>`
  font-family: Hind;
  font-weight: bold;
  font-size: 50px;
  letter-spacing: 4px;
  z-index: 1000;
  cursor: pointer;

  color: ${({ theme, logoTheme }) =>
    logoTheme === "light" ? "white" : theme.colors.darkGray};

  @media only screen and (max-width: 1024px) {
    color: ${({ theme }) => theme.colors.darkGray};
    left: 24px;
    top: 29px;
    font-size: 30px;
    letter-spacing: 2px;
  }
`;
