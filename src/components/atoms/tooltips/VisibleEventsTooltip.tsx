import React, { useState } from "react";
import { VisibleEventsType } from "../../Pages/Dashboard/types";
import { useIntl } from "react-intl";
import { ArrowDarkIcon, EventActionItem, TooltipContent } from "./styles";
import {
  ALL_EVENTS,
  FUTURE_EVENTS,
  PAST_EVENTS,
} from "../../Pages/Dashboard/constants";
import CustomTooltip from "./CustomTooltip";

export type VisibleEventsTooltipProps = {
  changeVisibleEvents: (newValue: VisibleEventsType) => void;
};

const VisibleEventsTooltip = ({
  changeVisibleEvents,
}: VisibleEventsTooltipProps) => {
  const { formatMessage } = useIntl();
  const [open, toggleTooltip] = useState(false);

  const wrapChangeEvents = (event: VisibleEventsType) => {
    changeVisibleEvents(event);
    toggleTooltip(false);
  };

  const getTooltipContent = () => {
    return (
      <TooltipContent>
        <EventActionItem onClick={() => wrapChangeEvents(ALL_EVENTS)}>
          {formatMessage({ id: "dashboard.all_events" })}
        </EventActionItem>
        <EventActionItem onClick={() => wrapChangeEvents(FUTURE_EVENTS)}>
          {formatMessage({ id: "dashboard.future_events" })}
        </EventActionItem>
        <EventActionItem onClick={() => wrapChangeEvents(PAST_EVENTS)}>
          {formatMessage({ id: "dashboard.past_events" })}
        </EventActionItem>
      </TooltipContent>
    );
  };

  return (
    <CustomTooltip
      content={getTooltipContent()}
      open={open}
      onClose={() => toggleTooltip(false)}
    >
      <ArrowDarkIcon onClick={() => toggleTooltip(!open)} />
    </CustomTooltip>
  );
};

export default VisibleEventsTooltip;
