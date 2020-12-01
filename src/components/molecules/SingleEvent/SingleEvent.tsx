import React from "react";
import { EventType } from "../../../store/events/types";
import { EventButtonActionTypes } from "./types";
import { EventsPerRowType } from "../../pages/Dashboard/types";
import {
  DateFlexContainer,
  EventContainer,
  EventTitle,
  EventDescription,
  EventUser,
  CapacityFlexContainer,
  ButtonFlexContainer,
} from "./styles";
import { MORE_EVENTS } from "../../pages/Dashboard/constants";
import DateFormat from "../../atoms/DateFormat";
import UsersCapacity from "../../atoms/UsersCapacity";
import { EventActionButton } from "../../atoms/buttons";

export type SingleEventProps = {
  event: EventType;
  key: number;
  onEventClick: () => void;
  buttonType: EventButtonActionTypes;
  buttonAction: () => void;
  listStyle: EventsPerRowType;
  isClickable?: boolean;
};

const SingleEvent = ({
  event,
  buttonType,
  key,
  buttonAction,
  onEventClick,
  listStyle,
}: SingleEventProps) => {
  const {
    startsAt,
    owner,
    title,
    attendees,
    capacity,
    description,
    isLoading,
  } = event;
  const isRow = listStyle === MORE_EVENTS;
  return (
    <EventContainer isRow={isRow} key={key} onClick={onEventClick} isClickable>
      <DateFlexContainer isRow={isRow}>
        <DateFormat eventDate={startsAt} listType={listStyle} />
      </DateFlexContainer>
      <EventTitle isRow={isRow}>{title}</EventTitle>
      <EventUser
        isRow={isRow}
      >{`${owner.firstName} ${owner.lastName}`}</EventUser>
      <EventDescription isRow={isRow}>{description}</EventDescription>
      <CapacityFlexContainer isRow={isRow}>
        <UsersCapacity
          capacity={capacity}
          attendees={attendees}
          listType={listStyle}
        />
      </CapacityFlexContainer>
      <ButtonFlexContainer>
        <EventActionButton
          isLoading={isLoading}
          buttonType={buttonType}
          buttonAction={buttonAction}
        />
      </ButtonFlexContainer>
    </EventContainer>
  );
};

export default SingleEvent;
