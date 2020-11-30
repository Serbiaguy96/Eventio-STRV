import React from "react";
import { LESS_EVENTS, MORE_EVENTS } from "../../../constants";
import { EventsPerRowType } from "../../../types";
import { ListActionsContainer, ModuleView, StreamView } from "./styles";

export type ListedEventsProps = {
  listStyle: EventsPerRowType;
  changeListStyle: (newValue: EventsPerRowType) => void;
};

const ListedEvents = ({ listStyle, changeListStyle }: ListedEventsProps) => {
  return (
    <ListActionsContainer>
      <ModuleView
        active={listStyle === MORE_EVENTS}
        onClick={() => changeListStyle(MORE_EVENTS)}
      />
      <StreamView
        active={listStyle === LESS_EVENTS}
        onClick={() => changeListStyle(LESS_EVENTS)}
      />
    </ListActionsContainer>
  );
};

export default ListedEvents;
