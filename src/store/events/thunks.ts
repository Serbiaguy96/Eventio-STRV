import { replace } from "connected-react-router";
import { EventioThunk } from "../types";
import { getAreEventsLoading } from "./selectors";
import {
  attendEventById,
  fetchAllEvents,
  unAttendEventById,
} from "../../requests/events/requestCreators";
import {
  receiveEvents,
  setEventIsLoading,
  setEventsLoading,
  updateEvent,
} from "./actionCreators";
import { getRouterPathname } from "../router/selectors";

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
