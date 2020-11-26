import React, { FC } from "react";
import {
  AsideImageContainer,
  LayoutContentContainer,
  NotLoggedUserLayoutContainer,
  QuoteAuthor,
  QuoteContainer,
  QuoteDivider,
  QuoteString,
} from "./styles";
import { useIntl } from "react-intl";

const NotLoggedUserLayout: FC = ({ children }) => {
  const { formatMessage } = useIntl();
  return (
    <NotLoggedUserLayoutContainer>
      <AsideImageContainer>
        <QuoteContainer>
          <QuoteString>
            {formatMessage({ id: "layout.han_solo_quote" })}
          </QuoteString>
          <QuoteDivider>-</QuoteDivider>
          <QuoteAuthor>{formatMessage({ id: "layout.han_solo" })}</QuoteAuthor>
        </QuoteContainer>
      </AsideImageContainer>
      <LayoutContentContainer>{children}</LayoutContentContainer>
    </NotLoggedUserLayoutContainer>
  );
};

export default NotLoggedUserLayout;
