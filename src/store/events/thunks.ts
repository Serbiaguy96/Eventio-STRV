import { replace } from "connected-react-router";
import { EventioThunk } from "../types";
import { getAreEventsLoading } from "./selectors";
import {
  attendEventById,
  createEvent,
  deleteEventById,
  fetchAllEvents,
  fetchEventById,
  unAttendEventById,
  updateEventById,
} from "../../requests/events/requestCreators";
import {
  deleteEvent,
  receiveEvent,
  receiveEvents,
  setEventIsLoading,
  setEventsLoading,
  updateEvent,
} from "./actionCreators";
import { getRouterPathname } from "../router/selectors";
import { CreateEventType, UpdateEventType } from "../../requests/events/types";

export const fetchAllEventsThunk = (): EventioThunk => (dispatch, getState) => {
  const state = getState();
  const isLoading = getAreEventsLoading(state);
  if (isLoading) return;

  dispatch(setEventsLoading(true));
  fetchAllEvents()
    .then(({ data }) => {
      dispatch(receiveEvents(data));
    })
    .catch(({ response }) => {
      const pathname = getRouterPathname(state);
      dispatch(replace(pathname, { errorStatusCode: response.status }));
    })
    .finally(() => {
      dispatch(setEventsLoading(false));
    });
};

export const createNewEventThunk = (
  newEventData: CreateEventType
): EventioThunk => (dispatch) => {
  dispatch(setEventsLoading(true));
  createEvent(newEventData)
    .then(({ data }) => {
      dispatch(receiveEvent(data));
      dispatch(replace("/"));
    })
    .catch(({ response }) => {
      dispatch(replace("/create-event", { errorStatusCode: response.status }));
    })
    .finally(() => dispatch(setEventsLoading(false)));
};

export const fetchEventByIdThunk = (eventId: string): EventioThunk => (
  dispatch
) => {
  dispatch(setEventsLoading(true));
  fetchEventById(eventId)
    .then(({ data }) => {
      dispatch(receiveEvent(data));
    })
    .catch(({ response }) => {
      dispatch(replace("/", { errorStatusCode: response.status }));
    })
    .finally(() => dispatch(setEventsLoading(false)));
};

export const updateEventByIdThunk = (
  eventId: string,
  eventData: UpdateEventType
): EventioThunk => (dispatch, getState) => {
  const state = getState();
  dispatch(setEventsLoading(true));
  updateEventById(eventId, eventData)
    .then(({ data }) => {
      dispatch(updateEvent(eventId, data));
      dispatch(replace("/"));
    })
    .catch(({ response }) => {
      const pathname = getRouterPathname(state);
      dispatch(replace(pathname, { errorStatusCode: response.status }));
    })
    .finally(() => dispatch(setEventsLoading(false)));
};

export const attendEventThunk = (eventId: string): EventioThunk => (
  dispatch,
  getState
) => {
  const state = getState();
  dispatch(setEventIsLoading(eventId, true));
  attendEventById(eventId)
    .then(({ data }) => {
      dispatch(updateEvent(eventId, { ...data, isLoading: false }));
    })
    .catch(({ response }) => {
      const pathname = getRouterPathname(state);
      dispatch(replace(pathname, { errorStatusCode: response.status }));
    })
    .finally(() => dispatch(setEventIsLoading(eventId, false)));
};

export const unAttendEventThunk = (eventId: string): EventioThunk => (
  dispatch,
  getState
) => {
  const state = getState();
  dispatch(setEventIsLoading(eventId, true));
  unAttendEventById(eventId)
    .then(({ data }) => {
      dispatch(updateEvent(eventId, { ...data, isLoading: false }));
    })
    .catch(({ response }) => {
      const pathname = getRouterPathname(state);
      dispatch(replace(pathname, { errorStatusCode: response.status }));
    })
    .finally(() => dispatch(setEventIsLoading(eventId, false)));
};

export const deleteEventByIdThunk = (eventId: string): EventioThunk => (
  dispatch,
  getState
) => {
  const state = getState();
  deleteEventById(eventId)
    .then(() => {
      dispatch(deleteEvent(eventId));
      dispatch(replace("/", {}));
    })
    .catch(({ response }) => {
      const pathname = getRouterPathname(state);
      dispatch(replace(pathname, { errorStatusCode: response.status }));
    });
};
