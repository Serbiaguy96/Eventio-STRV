import React from "react";
import EventDetailPage from "./EventDetailPage";
import { useParams } from "react-router";
import { MatchParamsProps } from "../../../store/router/types";
import {
  useAreEventsLoading,
  useEventDataByEventId,
} from "../../../store/events/useSelectors";
import { useUserData } from "../../../store/authentication/useSelectors";

const ReduxContainer = () => {
  const { eventId } = useParams<MatchParamsProps>();
  const eventData = useEventDataByEventId(eventId);
  const userData = useUserData();
  const isLoading = useAreEventsLoading();

  return (
    <EventDetailPage
      eventData={eventData}
      userData={userData}
      isLoading={isLoading}
    />
  );
};

export default ReduxContainer;
