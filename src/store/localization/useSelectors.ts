import { useSelector } from "react-redux";
import { getLocalizationString } from "./selectors";

export const useLocalizationString = () => useSelector(getLocalizationString);
