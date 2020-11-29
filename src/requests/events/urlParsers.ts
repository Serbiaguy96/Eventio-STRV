export const getEventsUrl = () => "/events";

export const getEventByIdUrl = (eventId: string) => `/events/${eventId}`;

export const getEventAttendeeUrl = (eventId: string) =>
  `/events/${eventId}/attendees/me`;
