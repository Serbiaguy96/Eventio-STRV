import { SET_LOCALIZATION } from "./actionTypes";

export type Locale = "en" | "cs";

export interface LocalizationState {
  locale: Locale;
}

export interface SetLocalizationAction {
  type: typeof SET_LOCALIZATION;
  payload: { locale: Locale };
}

export type LocalizationActionsType = SetLocalizationAction;
