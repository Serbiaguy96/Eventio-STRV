import React from "react";
import { Events, EventType } from "../../../../../store/events/types";
import { EventsPerRowType } from "../../types";
import { EventsListContainer } from "./styles";
import { MORE_EVENTS } from "../../constants";
import SingleEvent from "./SingleEvent";
import Loader from "../../../../atoms/Loader";

export type EventsListProps = {
  events: Events;
  listStyle: EventsPerRowType;
  isLoading: boolean;
};

const EventsList = ({ events, isLoading, listStyle }: EventsListProps) => {
  const renderSingleEvent = (event: EventType, index: number) => {
    return <SingleEvent eventData={event} key={index} listStyle={listStyle} />;
  };

  if (isLoading) return <Loader size={100} />;

  return (
    <EventsListContainer inRow={listStyle === MORE_EVENTS}>
      {events.map(renderSingleEvent)}
    </EventsListContainer>
  );
};

export default EventsList;
