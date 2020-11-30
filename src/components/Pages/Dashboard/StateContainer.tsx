import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { Events, EventsById, EventType } from "../../../store/events/types";
import { EventsPerRowType, VisibleEventsType } from "./types";
import {
  ALL_EVENTS,
  FUTURE_EVENTS,
  MORE_EVENTS,
  PAST_EVENTS,
} from "./constants";

export type StateContainerProps = {
  allEvents: EventsById;
  reloadEvents: () => void;
  isLoading: boolean;
};

const allTheFutureEvents = (event: EventType) => {
  const nowDate = new Date();
  const eventDate = new Date(event.startsAt);
  return eventDate.getTime() >= nowDate.getTime();
};

const allThePastEvents = (event: EventType) => {
  const nowDate = new Date();
  const eventDate = new Date(event.startsAt);
  return eventDate.getTime() < nowDate.getTime();
};

const cmpFunction = (a: EventType, b: EventType) => {
  const aDate = new Date(a.startsAt);
  const bDate = new Date(b.startsAt);

  if (aDate.getTime() > bDate.getTime()) return 1;
  if (aDate.getTime() < bDate.getTime()) return -1;
  return 0;
};

const StateContainer = ({
  allEvents,
  isLoading,
  reloadEvents,
}: StateContainerProps) => {
  const [visibleEvents, setVisibleEvents] = useState<VisibleEventsType>(
    ALL_EVENTS
  );
  const [eventsPerRow, setEventsPerRow] = useState<EventsPerRowType>(
    MORE_EVENTS
  );

  useEffect(() => {
    reloadEvents();
  }, [visibleEvents, eventsPerRow]);

  const getRightEventsArr = () => {
    const allEventsArr = Object.values(allEvents);
    let finalEventsArr: Events;

    if (visibleEvents === PAST_EVENTS) {
      finalEventsArr = allEventsArr.filter(allThePastEvents);
    } else if (visibleEvents === FUTURE_EVENTS) {
      finalEventsArr = allEventsArr.filter(allTheFutureEvents);
    } else {
      finalEventsArr = [...allEventsArr];
    }

    return finalEventsArr.sort(cmpFunction);
  };

  return (
    <Dashboard
      eventsList={getRightEventsArr()}
      visibleEvents={visibleEvents}
      listStyle={eventsPerRow}
      changeListStyle={setEventsPerRow}
      changeVisibleEvents={setVisibleEvents}
      isLoading={isLoading}
    />
  );
};

export default StateContainer;
