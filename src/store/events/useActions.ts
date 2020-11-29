import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { fetchAllEventsThunk } from "./thunks";
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
