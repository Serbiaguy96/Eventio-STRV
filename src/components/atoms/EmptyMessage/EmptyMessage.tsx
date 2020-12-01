import React from "react";
import { MessageContainer, NothingToSeeContainer } from "./styles";
import { useIntl } from "react-intl";

const EmptyMessage = () => {
  const { formatMessage } = useIntl();
  return (
    <NothingToSeeContainer>
      <MessageContainer>
        {formatMessage({ id: "common.empty" })}
      </MessageContainer>
    </NothingToSeeContainer>
  );
};

export default EmptyMessage;
