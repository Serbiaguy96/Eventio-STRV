import React, { FC, useEffect } from "react";
import { useLocalizationString } from "../../store/localization/useSelectors";
import { useSetLocale } from "../../store/localization/useActions";
import { Locale } from "../../store/localization/types";
import { StringIndexedDictionary } from "../../global/globalTypes";
import { cs_messages } from "../../assets/localization/cs_messages";
import { en_messages } from "../../assets/localization/en_messages";
import { IntlProvider } from "react-intl";

type LocaleObjectType = {
  [key: string]: StringIndexedDictionary<string>;
};

const localeObject: LocaleObjectType = {
  cs: cs_messages,
  en: en_messages,
};

const ConnectedIntlProvider: FC = ({ children }) => {
  const locale = useLocalizationString();
  const setLocale = useSetLocale();

  useEffect(() => {
    // checking if language was changed before user left app
    const storedLocale = localStorage.getItem("locale");

    if (storedLocale && storedLocale !== locale) {
      setLocale(storedLocale as Locale);
    }
  }, []);

  return (
    <IntlProvider locale={locale} messages={localeObject[locale]}>
      {children}
    </IntlProvider>
  );
};

export default ConnectedIntlProvider;
