import React from "react";
import { EventsPerRowType, VisibleEventsType } from "../../types";
import { DashboardHeaderContainer } from "./styles";

import VisibleEvents from "./VisibleEvents";
import ListedEvents from "./ListedEvents";

export type DashboardHeaderProps = {
  visibleEvents: VisibleEventsType;
  listStyle: EventsPerRowType;
  changeVisibleEvents: (newValue: VisibleEventsType) => void;
  changeListStyle: (newValue: EventsPerRowType) => void;
};

const DashboardHeader = ({
  visibleEvents,
  listStyle,
  changeListStyle,
  changeVisibleEvents,
}: DashboardHeaderProps) => {
  return (
    <DashboardHeaderContainer>
      <VisibleEvents
        visibleEvents={visibleEvents}
        changeVisibleEvents={changeVisibleEvents}
      />
      <ListedEvents listStyle={listStyle} changeListStyle={changeListStyle} />
    </DashboardHeaderContainer>
  );
};

export default DashboardHeader;
