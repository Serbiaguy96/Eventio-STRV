import {
  DeleteEventAction,
  Events,
  EventType,
  ReceiveEventsAction,
  SetEventsLoadingAction,
  UpdateEventAction
} from "./types";
import {DELETE_EVENT, RECEIVE_ALL_EVENTS, SET_EVENTS_LOADING, UPDATE_EVENT} from "./actionTypes";

export const receiveEvents = (eventsData: Events): ReceiveEventsAction => ({
  type: RECEIVE_ALL_EVENTS,
  payload: { allEvents: eventsData },
});

export const setEventsLoading = (flag: boolean): SetEventsLoadingAction => ({
  type: SET_EVENTS_LOADING,
  payload: { flag },
});

export const deleteEvent = (eventId: string): DeleteEventAction => ({
  type: DELETE_EVENT,
  payload: { eventId },
});

export const updateEvent = (
  eventId: string,
  eventData: EventType
): UpdateEventAction => ({
  type: UPDATE_EVENT,
  payload: { eventData, eventId },
}); 
