import { RootState as RS } from "../types";
import { Locale, LocalizationState } from "./types";

const getLocalizationSlice = (state: RS): LocalizationState =>
  state.localization;

export const getLocalizationString = (state: RS): Locale =>
  getLocalizationSlice(state).locale;
