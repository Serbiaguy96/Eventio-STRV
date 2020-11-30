import axiosWrapper from "../axiosWrapper";
import { Events, EventType } from "../../store/events/types";
import {
  getEventAttendeeUrl,
  getEventByIdUrl,
  getEventsUrl,
} from "./urlParsers";
import { CreateEventType, UpdateEventType } from "./types";

export const fetchAllEvents = () =>
  axiosWrapper<Events>({
    url: getEventsUrl(),
    method: "GET",
  });

export const fetchEventById = (eventId: string) =>
  axiosWrapper<EventType>({
    url: getEventByIdUrl(eventId),
    method: "GET",
  });

export const createEvent = (eventData: CreateEventType) =>
  axiosWrapper<EventType>(
    {
      url: getEventsUrl(),
      method: "POST",
      data: { ...eventData },
    },
    true
  );

export const updateEventById = (eventId: string, eventData: UpdateEventType) =>
  axiosWrapper<EventType>({
    url: getEventByIdUrl(eventId),
    method: "PATCH",
    data: { ...eventData },
  });

export const deleteEventById = (eventId: string) =>
  axiosWrapper(
    {
      url: getEventByIdUrl(eventId),
      method: "DELETE",
    },
    true
  );

export const attendEventById = (eventId: string) =>
  axiosWrapper<EventType>(
    {
      url: getEventAttendeeUrl(eventId),
      method: "POST",
    },
    true
  );

export const unAttendEventById = (eventId: string) =>
  axiosWrapper<EventType>(
    {
      url: getEventAttendeeUrl(eventId),
      method: "DELETE",
    },
    true
  );
