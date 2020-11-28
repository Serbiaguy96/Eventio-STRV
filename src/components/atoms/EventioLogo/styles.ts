import styled from "@emotion/styled";
import { LogoTheme } from "./EventioLogo";

export const LogoContainer = styled.div<{ logoTheme: LogoTheme }>`
  font-family: Hind;
  font-weight: bold;
  font-size: 3rem;
  letter-spacing: 4px;
  position: fixed;
  left: 40px;
  top: 10px;
  z-index: 1000;
  cursor: pointer;

  color: ${({ theme, logoTheme }) =>
    logoTheme === "light" ? "white" : theme.colors.darkGray};

  @media only screen and (max-width: 1024px) {
    color: ${({ theme }) => theme.colors.darkGray};
    left: 24px;
    top: 29px;
  }
`;
