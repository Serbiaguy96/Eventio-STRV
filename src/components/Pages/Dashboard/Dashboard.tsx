import React from "react";
import { Events } from "../../../store/events/types";
import { EventsPerRowType, VisibleEventsType } from "./types";
import Loader from "../../atoms/Loader";
import { DashboardContainer } from "./styles";

export type DashboardProps = {
  eventsList: Events;
  visibleEvents: VisibleEventsType;
  listStyle: EventsPerRowType;
  changeVisibleEvents: (newValue: VisibleEventsType) => void;
  changeListStyle: (newValue: EventsPerRowType) => void;
  isLoading: boolean;
};

const Dashboard = ({
  eventsList,
  changeListStyle,
  changeVisibleEvents,
  isLoading,
  listStyle,
  visibleEvents,
}: DashboardProps) => {
  if (isLoading) return <Loader size={50} />;
  return (
    <DashboardContainer>
      {eventsList.map((event) => event.title)}
    </DashboardContainer>
  );
};

export default Dashboard;
