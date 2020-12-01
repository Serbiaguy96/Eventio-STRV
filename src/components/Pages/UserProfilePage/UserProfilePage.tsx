import React, { useState } from "react";
import { useIntl } from "react-intl";
import { Events } from "../../../store/events/types";
import { EventsPerRowType } from "../Dashboard/types";
import { UserType } from "../../../store/authentication/types";
import { MainAppContentContainer } from "../../layouts/MainAppLayout/styles";
import UserProfileHeader from "./UserProfileHeader";
import { EventsTitle, UserEventsContainer } from "./styles";
import { MORE_EVENTS } from "../Dashboard/constants";
import ListedEvents from "../Dashboard/components/DashboardHeader/ListedEvents";
import EventsList from "../Dashboard/components/EventsList";

export type UserProfileProps = {
  events: Events;
  userData: UserType | null;
  isLoading: boolean;
};

const UserProfilePage = ({ events, userData, isLoading }: UserProfileProps) => {
  const { formatMessage } = useIntl();
  const [rowType, setRowType] = useState<EventsPerRowType>(MORE_EVENTS);

  if (!userData) return null;

  return (
    <MainAppContentContainer>
      <UserProfileHeader userData={userData} />
      <UserEventsContainer>
        <EventsTitle>{formatMessage({ id: "account.events" })}</EventsTitle>
        <ListedEvents listStyle={rowType} changeListStyle={setRowType} />
      </UserEventsContainer>
      <EventsList events={events} listStyle={rowType} isLoading={isLoading} />
    </MainAppContentContainer>
  );
};

export default UserProfilePage;
