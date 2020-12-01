import React from "react";
import { Fragment } from "react";
import { EventType } from "../../../store/events/types";
import Loader from "../../atoms/Loader";
import { MainAppContentContainer } from "../../layouts/MainAppLayout/styles";
import { RoundButton } from "../../atoms/buttons";
import { useHistory } from "react-router";
import { EventDetailContentContainer, EventDetailHeader } from "./styles";
import { useIntl } from "react-intl";
import SingleEvent from "../../molecules/SingleEvent";
import { MORE_EVENTS } from "../Dashboard/constants";
import EventAttendees from "../../molecules/EventAttendees";
import { UserType } from "../../../store/authentication/types";

export type EventDetailPageProps = {
  eventData: EventType | undefined;
  userData: UserType | null;
  isLoading: boolean;
};

const EventDetailPage = ({
  eventData,
  userData,
  isLoading,
}: EventDetailPageProps) => {
  const { formatMessage } = useIntl();

  if (!eventData) return null;
  if (isLoading) return <Loader size={60} />;
  return (
    <Fragment>
      <MainAppContentContainer>
        <EventDetailHeader>
          {`${formatMessage({ id: "event.detail" })}: \n#${eventData.id}`}
        </EventDetailHeader>
        <EventDetailContentContainer>
          <SingleEvent eventData={eventData} key={1} listStyle={MORE_EVENTS} />
          <EventAttendees attendees={eventData.attendees} user={userData} />
        </EventDetailContentContainer>
      </MainAppContentContainer>
      <RoundButton buttonType="create" />
    </Fragment>
  );
};

export default EventDetailPage;
