import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import {
  attendEventThunk,
  fetchAllEventsThunk,
  unAttendEventThunk,
} from "./thunks";
import { useAllEvents, useAreEventsLoading } from "./useSelectors";

export const useFetchAllEvents = () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(fetchAllEventsThunk()), []);
};

export const useAllEventsData = () => {
  const eventsData = useAllEvents();
  const isLoading = useAreEventsLoading();
  const fetchEvents = useFetchAllEvents();

  useEffect(() => {
    if (!Object.keys(eventsData).length) {
      fetchEvents();
    }
  }, []);

  return {
    eventsData,
    isLoading,
    reloadData: fetchEvents,
  };
};

export const useAttendeeActions = () => {
  const dispatch = useDispatch();
  return {
    attend: useCallback(
      (eventId: string) => dispatch(attendEventThunk(eventId)),
      []
    ),
    unAttend: useCallback(
      (eventId: string) => dispatch(unAttendEventThunk(eventId)),
      []
    ),
  };
};
