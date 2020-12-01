import React from "react";
import { Events } from "../../../store/events/types";
import { EventsPerRowType, VisibleEventsType } from "./types";
import DashboardHeader from "./components/DashboardHeader";
import EventsList from "./components/EventsList";
import { RoundButton } from "../../atoms/buttons";
import { Fragment } from "react";
import { MainAppContentContainer } from "../../layouts/MainAppLayout/styles";

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
  return (
    <Fragment>
      <MainAppContentContainer>
        <DashboardHeader
          visibleEvents={visibleEvents}
          listStyle={listStyle}
          changeVisibleEvents={changeVisibleEvents}
          changeListStyle={changeListStyle}
        />
        <EventsList
          events={eventsList}
          listStyle={listStyle}
          isLoading={isLoading}
        />
      </MainAppContentContainer>
      <RoundButton buttonType="create" />
    </Fragment>
  );
};

export default Dashboard;
