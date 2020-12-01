import React from "react";
import { useAllEventsData } from "../../../store/events/useSelectors";
import { useUserData } from "../../../store/authentication/useSelectors";
import UserProfilePage from "./UserProfilePage";
import { EventType } from "../../../store/events/types";

const ReduxContainer = () => {
  const { eventsData, isLoading } = useAllEventsData();
  const userData = useUserData();

  // function return true if user is somehow part of event
  const filterFunction = (event: EventType) => {
    if (event.owner.id === userData?.id) return true;

    // checking if user is one of attendees
    return !!event.attendees.filter((attendee) => attendee.id === userData?.id)
      .length;
  };

  const getUserEvents = () => {
    if (!userData) return [];
    return Object.values(eventsData).filter(filterFunction);
  };

  return (
    <UserProfilePage
      events={getUserEvents()}
      userData={userData}
      isLoading={isLoading}
    />
  );
};

export default ReduxContainer;
