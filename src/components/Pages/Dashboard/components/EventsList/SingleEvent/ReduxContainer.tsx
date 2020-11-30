import React from "react";
import { EventType } from "../../../../../../store/events/types";
import { useHistory } from "react-router";
import useEventActionData from "../hooks/useEventActionData";
import { EventsPerRowType } from "../../../types";
import SingleEvent from "./SingleEvent";

export type ReduxContainerProps = {
  eventData: EventType;
  key: number;
  listStyle: EventsPerRowType;
};

const ReduxContainer = ({ eventData, key, listStyle }: ReduxContainerProps) => {
  const { push } = useHistory();
  const { buttonType, buttonAction } = useEventActionData(eventData);

  const onEventClick = () => push(`/detail/${eventData.id}`);

  return (
    <SingleEvent
      event={eventData}
      key={key}
      onEventClick={onEventClick}
      buttonType={buttonType}
      buttonAction={buttonAction}
      listStyle={listStyle}
    />
  );
};

export default ReduxContainer;
