import { EventsActionsTypes, EventsById, EventsState } from "./types";
import {
  DELETE_EVENT,
  RECEIVE_ALL_EVENTS,
  SET_EVENTS_LOADING,
  UPDATE_EVENT,
} from "./actionTypes";
import produce from "immer";

const initialState: EventsState = {
  events: {},
  isLoading: false,
};

const eventsReducer = (
  state = initialState,
  action: EventsActionsTypes
): EventsState => {
  switch (action.type) {
    case RECEIVE_ALL_EVENTS: {
      const newEvents: EventsById = {};
      const { allEvents } = action.payload;
      allEvents.forEach((event) => {
        newEvents[event.id] = event;
      });
      return {
        ...state,
        events: newEvents,
      };
    }
    case UPDATE_EVENT: {
      const { eventId, eventData } = action.payload;
      const updatedEvents = produce(state.events, (draft: EventsById) => {
        draft[eventId] = eventData;
      });
      return {
        ...state,
        events: updatedEvents,
      };
    }
    case DELETE_EVENT: {
      const { eventId } = action.payload;
      const updatedEvents = produce(state.events, (draft: EventsById) => {
        delete draft[eventId];
      });
      return {
        ...state,
        events: updatedEvents,
      };
    }
    case SET_EVENTS_LOADING:
      return {
        ...state,
        isLoading: action.payload.flag,
      };
    default:
      return state;
  }
};

export default eventsReducer;
