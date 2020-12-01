import React from "react";
import { useParams } from "react-router";
import { MatchParamsProps } from "../../../store/router/types";
import {
  useAreEventsLoading,
  useEventDataByEventId,
} from "../../../store/events/useSelectors";
import { useUserData } from "../../../store/authentication/useSelectors";
import EditEventPage from "./EditEventPage";
import {
  useDeleteEventAction,
  useUpdateEventAction,
} from "../../../store/events/useActions";

const ReduxContainer = () => {
  const { eventId } = useParams<MatchParamsProps>();
  const eventData = useEventDataByEventId(eventId);
  const userData = useUserData();
  const isLoading = useAreEventsLoading();
  const updateEvent = useUpdateEventAction(eventId);
  const deleteEvent = useDeleteEventAction(eventId);

  return (
    <EditEventPage
      eventData={eventData}
      userData={userData}
      submitEvent={updateEvent}
      deleteEvent={deleteEvent}
      isLoading={isLoading}
    />
  );
};

export default ReduxContainer;
