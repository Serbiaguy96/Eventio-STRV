import React from "react";
import { EventButtonActionTypes } from "../../molecules/SingleEvent/types";
import { EventStyledButton } from "./styles";
import { EDIT, JOIN, LEAVE } from "../../molecules/SingleEvent/constants";
import { useIntl } from "react-intl";
import Loader from "../Loader";

export type EventActionButtonProps = {
  buttonType: EventButtonActionTypes;
  buttonAction: () => void;
  isLoading?: boolean;
};

const EventActionButton = ({
  buttonAction,
  buttonType,
  isLoading,
}: EventActionButtonProps) => {
  const { formatMessage } = useIntl();

  const onUserClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    buttonAction();
  };

  const getLabelText = () => {
    switch (buttonType) {
      case JOIN:
        return formatMessage({ id: "common.join" });
      case LEAVE:
        return formatMessage({ id: "common.leave" });
      case EDIT:
        return formatMessage({ id: "common.edit" });
      default:
        return "";
    }
  };

  return (
    <EventStyledButton actionType={buttonType} onClick={onUserClick}>
      {isLoading ? <Loader size={25} /> : getLabelText()}
    </EventStyledButton>
  );
};

export default EventActionButton;
