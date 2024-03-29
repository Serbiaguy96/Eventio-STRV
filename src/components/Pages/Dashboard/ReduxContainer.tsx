import React from "react";
import StateContainer from "./StateContainer";
import { useAllEventsData } from "../../../store/events/useSelectors";

const ReduxContainer = () => {
  const { eventsData, isLoading, reloadData } = useAllEventsData();
  return (
    <StateContainer
      allEvents={eventsData}
      isLoading={isLoading}
      reloadEvents={reloadData}
    />
  );
};

export default ReduxContainer;
