import React from "react";
import { useCreateNewEvent } from "../../../store/events/useActions";
import { useAreEventsLoading } from "../../../store/events/useSelectors";
import CreateEventPage from "./CreateEventPage";

const ReduxContainer = () => {
  const createNewEvent = useCreateNewEvent();
  const areEventsLoading = useAreEventsLoading();
  return (
    <CreateEventPage
      createNewEvent={createNewEvent}
      isLoading={areEventsLoading}
    />
  );
};

export default ReduxContainer;
