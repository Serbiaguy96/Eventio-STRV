export type ColorsType = {
  darkGray: string;
  lightGray: string;
  lighterGray: string;
  lightGreen: string;
  errorRed: string;
  backgroundColor: string;
  hoverDarkGray: string;
  hoverLightGray: string;
  hoverLightGreen: string;
  hoverErrorRed: string;
};

export type Theme = {
  colors: ColorsType;
};

export type ThemeOnlyProps = {
  theme: Theme;
};
