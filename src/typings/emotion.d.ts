import "@emotion/react";
import { ColorsType } from "../providers/ConnectedThemeProvider/types";

declare module "@emotion/react" {
  export interface Theme {
    colors: ColorsType;
  }
}
