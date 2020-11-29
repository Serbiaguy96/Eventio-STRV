import { useSelector } from "react-redux";
import { getAllEvents, getAreEventsLoading } from "./selectors";

export const useAllEvents = () => useSelector(getAllEvents);

export const useAreEventsLoading = () => useSelector(getAreEventsLoading);
