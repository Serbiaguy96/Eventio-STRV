import React from "react";
import { LocalizationContainer, StyledImage, UkFlag } from "./styles";

import UkImg from "../../../assets/images/gb.gif";
import CzImg from "../../../assets/images/cz.gif";
import { Locale } from "../../../store/localization/types";

export type LocalizationSelectorProps = {
  locale: string;
  setLocale: (newLocale: Locale) => void;
};

const LocalizationSelector = ({
  locale,
  setLocale,
}: LocalizationSelectorProps) => {
  return (
    <LocalizationContainer>
      <UkFlag
        src={UkImg}
        active={locale === "en"}
        onClick={() => setLocale("en")}
      />
      <StyledImage
        src={CzImg}
        active={locale === "cs"}
        onClick={() => setLocale("cs")}
      />
    </LocalizationContainer>
  );
};

export default LocalizationSelector;
