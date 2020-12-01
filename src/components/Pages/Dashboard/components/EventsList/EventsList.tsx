import React from "react";
import { Events, EventType } from "../../../../../store/events/types";
import { EventsPerRowType } from "../../types";
import { EventsListContainer } from "./styles";
import { MORE_EVENTS } from "../../constants";
import SingleEvent from "../../../../molecules/SingleEvent";
import Loader from "../../../../atoms/Loader";
import EmptyMessage from "../../../../atoms/EmptyMessage";

export type EventsListProps = {
  events: Events;
  listStyle: EventsPerRowType;
  isLoading: boolean;
};

const EventsList = ({ events, isLoading, listStyle }: EventsListProps) => {
  const renderSingleEvent = (event: EventType, index: number) => {
    return (
      <SingleEvent
        eventData={event}
        key={index}
        listStyle={listStyle}
        isClickable
      />
    );
  };

  if (isLoading) return <Loader size={100} />;

  if (!events.length) return <EmptyMessage />;

  return (
    <EventsListContainer inRow={listStyle === MORE_EVENTS}>
      {events.map(renderSingleEvent)}
    </EventsListContainer>
  );
};

export default EventsList;
