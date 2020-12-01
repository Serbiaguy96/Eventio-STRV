import { useHistory } from "react-router";
import { noop } from "lodash";
import { EventType } from "../../../../../../store/events/types";
import { useUserData } from "../../../../../../store/authentication/useSelectors";
import {
  EDIT,
  JOIN,
  LEAVE,
  NONE,
} from "../../../../../molecules/SingleEvent/constants";
import { EventButtonActionTypes } from "../../../../../molecules/SingleEvent/types";
import { useAttendeeActions } from "../../../../../../store/events/useActions";

type EventActionHookType = {
  buttonType: EventButtonActionTypes;
  buttonAction: () => void;
};

export default (event: EventType): EventActionHookType => {
  const userData = useUserData();
  const { push } = useHistory();
  const { attend, unAttend } = useAttendeeActions();

  const { id, attendees, owner } = event;

  const editAction = () => push(`/edit-event/${id}`);

  const joinAction = () => attend(id);
  const leaveAction = () => unAttend(id);

  const doesAttendeesContainUser = () => {
    let contain = false;
    attendees.forEach((attendee) => {
      if (attendee.id === userData!.id) contain = true;
    });
    return contain;
  };

  if (!userData)
    return {
      buttonType: NONE,
      buttonAction: noop,
    };
  if (owner.id === userData.id)
    return {
      buttonType: EDIT,
      buttonAction: editAction,
    };
  if (doesAttendeesContainUser())
    return {
      buttonType: LEAVE,
      buttonAction: leaveAction,
    };

  return {
    buttonType: JOIN,
    buttonAction: joinAction,
  };
};
