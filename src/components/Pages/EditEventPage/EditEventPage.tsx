import React from "react";
import { EventType } from "../../../store/events/types";
import { UserType } from "../../../store/authentication/types";
import { UpdateEventType } from "../../../requests/events/types";
import { MainAppContentContainer } from "../../layouts/MainAppLayout/styles";
import { Fragment } from "react";
import { RoundButton } from "../../atoms/buttons";
import {
  EventEditContentContainer,
  EventEditHeader,
  EventEditLabel,
} from "./styles";
import { useIntl } from "react-intl";
import Loader from "../../atoms/Loader";
import DeleteEvent from "../../atoms/DeleteEvent";
import EditEventForm from "../../molecules/forms/EditEventForm";
import EventAttendees from "../../molecules/EventAttendees";

export type EditEventPageProps = {
  eventData: EventType | undefined;
  userData: UserType | null;
  submitEvent: (newData: UpdateEventType) => void;
  deleteEvent: () => void;
  isLoading: boolean;
};

const EditEventPage = ({
  eventData,
  userData,
  isLoading,
  submitEvent,
  deleteEvent,
}: EditEventPageProps) => {
  const { formatMessage } = useIntl();

  if (!eventData) return null;
  if (isLoading) return <Loader size={60} />;
  return (
    <Fragment>
      <MainAppContentContainer>
        <EventEditHeader>
          <EventEditLabel>{`${formatMessage({ id: "event.detail" })}: \n#${
            eventData.id
          }`}</EventEditLabel>
          <DeleteEvent deleteAction={deleteEvent} />
        </EventEditHeader>
        <EventEditContentContainer>
          <EditEventForm eventData={eventData} submitEvent={submitEvent} />
          <EventAttendees
            attendees={eventData.attendees}
            user={userData}
            namedGrid
          />
        </EventEditContentContainer>
      </MainAppContentContainer>
      <RoundButton buttonType="edit" isSubmit formId="edit-submit" />
    </Fragment>
  );
};

export default EditEventPage;
