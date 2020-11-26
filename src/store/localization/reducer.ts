import { LocalizationActionsType, LocalizationState } from "./types";
import { SET_LOCALIZATION } from "./actionTypes";

const initialState: LocalizationState = {
  locale: "en",
};

const localizationReducer = (
  state = initialState,
  action: LocalizationActionsType
): LocalizationState => {
  switch (action.type) {
    case SET_LOCALIZATION:
      return {
        locale: action.payload.locale,
      };
    default:
      return state;
  }
};

export default localizationReducer;
