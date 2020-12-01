import React from "react";
import { useIntl } from "react-intl";
import {
  CreateEventDescription,
  CreateEventFormContainer,
  CreateEventHeader,
  CreateEventHeaderContainer,
  CreateEventPageContainer,
} from "./styles";
import { CreateEventType } from "../../../requests/events/types";
import CreateEventForm from "./CreateEventForm";

export type CreateEventPageProps = {
  createNewEvent: (newEvent: CreateEventType) => void;
  isLoading: boolean;
};

const CreateEventPage = ({
  createNewEvent,
  isLoading,
}: CreateEventPageProps) => {
  const { formatMessage } = useIntl();

  return (
    <CreateEventPageContainer>
      <CreateEventFormContainer>
        <CreateEventHeaderContainer>
          <CreateEventHeader>
            {formatMessage({ id: "event.create" })}
          </CreateEventHeader>
          <CreateEventDescription>
            {formatMessage({ id: "event.details" })}
          </CreateEventDescription>
        </CreateEventHeaderContainer>
        <CreateEventForm
          createNewEvent={createNewEvent}
          isLoading={isLoading}
        />
      </CreateEventFormContainer>
    </CreateEventPageContainer>
  );
};

export default CreateEventPage;
