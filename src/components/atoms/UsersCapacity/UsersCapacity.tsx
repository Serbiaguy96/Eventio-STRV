import React from "react";
import { UserType } from "../../../store/authentication/types";
import { EventsPerRowType } from "../../Pages/Dashboard/types";
import { PersonIcon, TextStyle, UsersCapacityContainer } from "./styles";
import { MORE_EVENTS } from "../../Pages/Dashboard/constants";
import { useIntl } from "react-intl";

export type UsersCapacityProps = {
  capacity: number;
  attendees: UserType[];
  listType: EventsPerRowType;
};

const UsersCapacity = ({
  capacity,
  attendees,
  listType,
}: UsersCapacityProps) => {
  const { formatMessage } = useIntl();

  const isRow = listType === MORE_EVENTS;
  return (
    <UsersCapacityContainer>
      <PersonIcon isRow={isRow} />
      <TextStyle>{`${attendees.length} ${formatMessage({
        id: "common.of",
      })} ${capacity}`}</TextStyle>
    </UsersCapacityContainer>
  );
};

export default UsersCapacity;
