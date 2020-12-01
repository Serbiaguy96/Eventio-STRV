import { LocationState } from "history";

export interface RouterStateType {
  errorStatusCode?: number | null;
  from?: string;
}

export interface MatchParamsProps {
  eventId: string;
}

export type EventionLocationState = LocationState & RouterStateType;

export interface RouterLocationType {
  history: History;
  location: EventionLocationState;
}
