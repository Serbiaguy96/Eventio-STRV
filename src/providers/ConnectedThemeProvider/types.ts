export type ColorsType = {
  darkGray: string;
  lightGray: string;
  lighterGray: string;
  lightGreen: string;
  errorRed: string;
  backgroundColor: string;
};

export type Theme = {
  colors: ColorsType;
};

export type ThemeOnlyProps = {
  theme: Theme;
};
