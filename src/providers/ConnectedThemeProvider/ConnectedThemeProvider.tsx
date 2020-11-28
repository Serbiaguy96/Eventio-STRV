import React, { FC } from "react";
import { ThemeProvider } from "@emotion/react";
import { ColorsType } from "./types";

export const APP_COLORS: ColorsType = {
  darkGray: "#323C46",
  lightGray: "#949EA8",
  lighterGray: "#C9CED3",
  lightGreen: "#22D486",
  errorRed: "#FF4081",
  backgroundColor: "#F2F2F2",
  hoverDarkGray: "#565D5A",
  hoverLightGray: "#C4C9D1",
  hoverErrorRed: "#E73370",
  hoverLightGreen: "#20BD78",
};

export const useThemeColors = (): ColorsType => APP_COLORS;

const ConnectedThemeProvider: FC = ({ children }) => {
  return (
    <ThemeProvider theme={{ colors: APP_COLORS }}>{children}</ThemeProvider>
  );
};

export default ConnectedThemeProvider;
