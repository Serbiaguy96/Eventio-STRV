import React, { FC } from "react";
import { useIntl } from "react-intl";
import {
  AsideImageContainer,
  LayoutContentContainer,
  NotLoggedUserLayoutContainer,
  QuoteAuthor,
  QuoteContainer,
  QuoteDivider,
  QuoteString,
} from "./styles";
import EventioLogo from "../../atoms/EventioLogo";
import useIsMobile from "../../../utils/useIsMobile";
import ShorthandSignContainer from "../../atoms/ShorthandSignContainer";

const NotLoggedUserLayout: FC = ({ children }) => {
  const { formatMessage } = useIntl();
  const isMobile = useIsMobile();

  return (
    <NotLoggedUserLayoutContainer>
      <EventioLogo theme="light" />
      <ShorthandSignContainer visible={!isMobile} />
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
