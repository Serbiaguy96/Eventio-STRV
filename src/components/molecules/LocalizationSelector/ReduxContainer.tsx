import React from "react";
import { useLocalizationString } from "../../../store/localization/useSelectors";
import { useSetLocale } from "../../../store/localization/useActions";
import LocalizationSelector from "./LocalizationSelector";

const ReduxContainer = () => {
  const localization = useLocalizationString();
  const setNewLocale = useSetLocale();
  return (
    <LocalizationSelector locale={localization} setLocale={setNewLocale} />
  );
};

export default ReduxContainer;
