import { UserType } from "../authentication/types";
import {
  DELETE_EVENT,
  RECEIVE_ALL_EVENTS,
  SET_EVENTS_LOADING,
  UPDATE_EVENT,
} from "./actionTypes";

export interface EventType {
  _id: string;
  updatedAt: string;
  createdAt: string;
  title: string;
  description: string;
  startsAt: string;
  capacity: number;
  owner: UserType;
  _v: number;
  attendees: UserType[];
  id: string;
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

export type EventsActionsTypes =
  | ReceiveEventsAction
  | SetEventsLoadingAction
  | UpdateEventAction
  | DeleteEventAction;
