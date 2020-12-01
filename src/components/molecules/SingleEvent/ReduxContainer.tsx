import React from "react";
import { EventType } from "../../../store/events/types";
import { useHistory } from "react-router";
import useEventActionData from "../../pages/Dashboard/components/EventsList/hooks/useEventActionData";
import { EventsPerRowType } from "../../pages/Dashboard/types";
import SingleEvent from "./SingleEvent";

export type ReduxContainerProps = {
  eventData: EventType;
  key: number;
  listStyle: EventsPerRowType;
  isClickable?: boolean;
};

const ReduxContainer = ({
  eventData,
  key,
  listStyle,
  isClickable,
}: ReduxContainerProps) => {
  const { push } = useHistory();
  const { buttonType, buttonAction } = useEventActionData(eventData);

  const onEventClick = () => push(`/event-detail/${eventData.id}`);

  return (
    <SingleEvent
      event={eventData}
      key={key}
      onEventClick={onEventClick}
      buttonType={buttonType}
      buttonAction={buttonAction}
      listStyle={listStyle}
      isClickable={isClickable}
    />
  );
};

export default ReduxContainer;
