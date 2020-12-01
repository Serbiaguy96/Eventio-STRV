import { useDispatch } from "react-redux";
import { useCallback } from "react";
import {
  attendEventThunk,
  createNewEventThunk,
  deleteEventByIdThunk,
  fetchAllEventsThunk,
  fetchEventByIdThunk,
  unAttendEventThunk,
  updateEventByIdThunk,
} from "./thunks";
import { CreateEventType, UpdateEventType } from "../../requests/events/types";

export const useFetchAllEvents = () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(fetchAllEventsThunk()), []);
};

export const useFetchEventById = (eventId: string) => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(fetchEventByIdThunk(eventId)), [dispatch]);
};

export const useCreateNewEvent = () => {
  const dispatch = useDispatch();
  return useCallback(
    (eventData: CreateEventType) => dispatch(createNewEventThunk(eventData)),
    [dispatch]
  );
};

export const useUpdateEventAction = (eventId: string) => {
  const dispatch = useDispatch();
  return useCallback(
    (eventData: UpdateEventType) =>
      dispatch(updateEventByIdThunk(eventId, eventData)),
    [dispatch]
  );
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

export const useDeleteEventAction = (eventId: string) => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(deleteEventByIdThunk(eventId)), [dispatch]);
};
