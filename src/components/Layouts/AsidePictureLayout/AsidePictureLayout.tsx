import React, { FC } from "react";
import {
  AsideImageContainer,
  LayoutContentContainer,
  QuoteAuthor,
  QuoteContainer,
  QuoteDivider,
  QuoteString,
} from "./styles";
import { useIntl } from "react-intl";
import { Fragment } from "react";

const AsidePictureLayout: FC = ({ children }) => {
  const { formatMessage } = useIntl();
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default AsidePictureLayout;
