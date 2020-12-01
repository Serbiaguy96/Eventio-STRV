import React from "react";
import { useHistory, useLocation } from "react-router";
import { BackIcon, BackToPageContainer } from "./styles";
import { useIntl } from "react-intl";

const BackToPage = () => {
  const { pathname } = useLocation();
  const { push } = useHistory();
  const { formatMessage } = useIntl();

  if (!(pathname.includes("/event-detail") || pathname.includes("/edit-event")))
    return null;

  return (
    <BackToPageContainer onClick={() => push("/")}>
      <BackIcon />
      <span>{formatMessage({ id: "event.detail.back" })}</span>
    </BackToPageContainer>
  );
};

export default BackToPage;
