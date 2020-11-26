import { Locale, SetLocalizationAction } from "./types";
import { SET_LOCALIZATION } from "./actionTypes";

export const setLocalization = (locale: Locale): SetLocalizationAction => ({
  type: SET_LOCALIZATION,
  payload: { locale },
});
