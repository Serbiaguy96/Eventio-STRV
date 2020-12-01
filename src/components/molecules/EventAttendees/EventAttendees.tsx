import React from "react";
import { UserType } from "../../../store/authentication/types";
import {
  Attendee,
  AttendeesContainer,
  AttendeesTitle,
  AttendeesWrapper,
} from "./styles";
import { useIntl } from "react-intl";
import EmptyMessage from "../../atoms/EmptyMessage";

export type EventAttendeesProps = {
  attendees: UserType[];
  user: UserType | null;
  namedGrid?: boolean;
};

const EventAttendees = ({
  attendees,
  user,
  namedGrid,
}: EventAttendeesProps) => {
  const { formatMessage } = useIntl();

  const showSingleAttendee = (
    { firstName, lastName, id }: UserType,
    index: number
  ) => {
    const isUser = !!user && id === user.id;
    return (
      <Attendee
        key={index}
        isUser={isUser}
      >{`${firstName} ${lastName}`}</Attendee>
    );
  };

  return (
    <AttendeesWrapper namedGrid={namedGrid}>
      <AttendeesTitle>
        {formatMessage({ id: "event.attendees" })}
      </AttendeesTitle>
      {attendees.length > 0 ? (
        <AttendeesContainer>
          {attendees.map(showSingleAttendee)}
        </AttendeesContainer>
      ) : (
        <EmptyMessage />
      )}
    </AttendeesWrapper>
  );
};

export default EventAttendees;
