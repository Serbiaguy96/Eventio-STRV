import { useDispatch } from "react-redux";
import { Locale } from "./types";
import { setLocalization } from "./actionCreators";
import { LOCALE } from "../../global/globalConstants";
import { useCallback } from "react";

export const useSetLocale = () => {
  const dispatch = useDispatch();
  return useCallback(
    (locale: Locale) => {
      localStorage.setItem(LOCALE, locale);
      dispatch(setLocalization(locale));
    },
    [dispatch]
  );
};
