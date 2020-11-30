import React from "react";
import { useHistory, useLocation } from "react-router";
import { RouterStateType } from "../../../store/router/types";
import { CloseContainer, CloseIcon, StyledText } from "./styles";
import { useIntl } from "react-intl";

const ClosePage = () => {
  const { state } = useLocation<RouterStateType>();
  const { replace } = useHistory();
  const { formatMessage } = useIntl();

  const handleCloseClick = () => {
    if (state?.from) {
      replace(state.from, {});
    } else {
      replace("/");
    }
  };

  return (
    <CloseContainer onClick={handleCloseClick}>
      <CloseIcon />
      <StyledText>{formatMessage({ id: "common.close" })}</StyledText>
    </CloseContainer>
  );
};

export default ClosePage;
