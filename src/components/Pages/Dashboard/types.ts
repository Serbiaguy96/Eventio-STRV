type ALL_EVENTS_VISIBLE = "all";
type FUTURE_EVENTS_VISIBLE = "future";
type PAST_EVENTS_VISIBLE = "past";

type MORE_EVENTS_PER_ROW = "more";
type LESS_EVENTS_PER_ROW = "less";

export type VisibleEventsType =
  | ALL_EVENTS_VISIBLE
  | FUTURE_EVENTS_VISIBLE
  | PAST_EVENTS_VISIBLE;

export type EventsPerRowType = MORE_EVENTS_PER_ROW | LESS_EVENTS_PER_ROW;
