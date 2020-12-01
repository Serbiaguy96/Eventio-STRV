import { useSelector } from "react-redux";
import { getAllEvents, getAreEventsLoading, getEventById } from "./selectors";
import { RootState } from "../types";
import { useEffect } from "react";
import { useFetchAllEvents, useFetchEventById } from "./useActions";

export const useAllEvents = () => useSelector(getAllEvents);

export const useAreEventsLoading = () => useSelector(getAreEventsLoading);

export const useEventDataByEventId = (eventId: string) => {
  const fetchEventById = useFetchEventById(eventId);
  const eventData = useSelector((state: RootState) =>
    getEventById(eventId, state)
  );

  useEffect(() => {
    if (!eventData) {
      fetchEventById();
    }
  }, []);

  return eventData;
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
