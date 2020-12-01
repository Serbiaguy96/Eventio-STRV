import { RootState as RS } from "../types";
import { EventsById, EventsState, EventType } from "./types";

const getEventsSlice = (state: RS): EventsState => state.events;

export const getAllEvents = (state: RS): EventsById =>
  getEventsSlice(state).events;

export const getAreEventsLoading = (state: RS): boolean =>
  getEventsSlice(state).isLoading;

export const getEventById = (
  eventId: string,
  state: RS
): EventType | undefined => getAllEvents(state)[eventId];
