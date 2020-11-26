import { useDispatch } from "react-redux";
import { Locale } from "./types";
import { setLocalization } from "./actionCreators";

export const useSetLocale = () => {
  const dispatch = useDispatch();
  return (locale: Locale) => dispatch(setLocalization(locale));
};
