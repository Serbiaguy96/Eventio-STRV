import styled from "@emotion/styled";
import { LogoTheme } from "./EventioLogo";

export const LogoContainer = styled.div<{ logoTheme: LogoTheme }>`
  font-family: Hind;
  font-weight: bold;
  font-size: 3rem;
  letter-spacing: 4px;
  position: fixed;
  left: 1rem;
  top: 1rem;
  z-index: 1000;
  cursor: pointer;

  color: ${({ theme, logoTheme }) =>
    logoTheme === "light" ? "white" : theme.colors.darkGray};

  @media only screen and (max-width: 1024px) {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;
