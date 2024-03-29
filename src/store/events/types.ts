import { UserType } from "../authentication/types";
import {
  DELETE_EVENT,
  EVENT_IS_LOADING,
  RECEIVE_ALL_EVENTS,
  RECEIVE_EVENT,
  SET_EVENTS_LOADING,
  UPDATE_EVENT,
} from "./actionTypes";

export interface EventType {
  _id: string;
  title: string;
  description: string;
  startsAt: string;
  capacity: number;
  updatedAt: string;
  createdAt: string;
  owner: UserType;
  _v: number;
  attendees: UserType[];
  id: string;
  isLoading: boolean;
}

export type Events = EventType[];

export type EventsById = {
  [key: string]: EventType;
};

export interface EventsState {
  events: EventsById;
  isLoading: boolean;
}

export interface ReceiveEventsAction {
  type: typeof RECEIVE_ALL_EVENTS;
  payload: { allEvents: Events };
}

export interface ReceiveEventAction {
  type: typeof RECEIVE_EVENT;
  payload: { event: EventType };
}

export interface SetEventsLoadingAction {
  type: typeof SET_EVENTS_LOADING;
  payload: { flag: boolean };
}

export interface UpdateEventAction {
  type: typeof UPDATE_EVENT;
  payload: { eventId: string; eventData: EventType };
}

export interface DeleteEventAction {
  type: typeof DELETE_EVENT;
  payload: { eventId: string };
}

export interface SetEventIsLoadingAction {
  type: typeof EVENT_IS_LOADING;
  payload: { eventId: string; flag: boolean };
}

export type EventsActionsTypes =
  | ReceiveEventsAction
  | ReceiveEventAction
  | SetEventsLoadingAction
  | UpdateEventAction
  | DeleteEventAction
  | SetEventIsLoadingAction;
