import { RootState as RS } from "../types";
import { EventsById, EventsState } from "./types";

const getEventsSlice = (state: RS): EventsState => state.events;

export const getAllEvents = (state: RS): EventsById =>
  getEventsSlice(state).events;

export const getAreEventsLoading = (state: RS): boolean =>
  getEventsSlice(state).isLoading;
