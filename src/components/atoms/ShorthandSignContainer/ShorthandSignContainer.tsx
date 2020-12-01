import React from "react";
import { useIntl } from "react-intl";
import { useHistory, useLocation } from "react-router";
import { LighterGraySpan, LightGraySpan, SignContainer } from "./styles";

type ShorthandSignContainerType = {
  visible: boolean;
};

const ShorthandSignContainer = ({ visible }: ShorthandSignContainerType) => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const { formatMessage } = useIntl();

  if (!visible && (pathname === "/signIn" || pathname === "/signUp"))
    return null;

  if (pathname === "/signIn") {
    return (
      <SignContainer>
        <LighterGraySpan>
          {formatMessage({ id: "layout.no_account" })}
        </LighterGraySpan>
        <LightGraySpan onClick={() => push("/signUp", { from: pathname })}>
          {formatMessage({ id: "sign_up.main" })}
        </LightGraySpan>
      </SignContainer>
    );
  }

  return (
    <SignContainer>
      <LighterGraySpan>
        {formatMessage({ id: "layout.account" })}
      </LighterGraySpan>
      <LightGraySpan onClick={() => push("/signIn", { from: pathname })}>
        {formatMessage({ id: "sign_in.main" })}
      </LightGraySpan>
    </SignContainer>
  );
};

export default ShorthandSignContainer;
