import React from "react";
import { VisibleEventsType } from "../../../types";
import useIsMobile from "../../../../../../utils/useIsMobile";
import { ALL_EVENTS, FUTURE_EVENTS, PAST_EVENTS } from "../../../constants";
import { useIntl } from "react-intl";
import { VisibleEventsTooltip } from "../../../../../atoms/tooltips";
import {
  EventsActionsContainer,
  MobileActionsContainer,
  StyledAction,
  StyledLabel,
  StyledMobileAction,
} from "./styles";

export type VisibleEventsProps = {
  visibleEvents: VisibleEventsType;
  changeVisibleEvents: (newValue: VisibleEventsType) => void;
};

const VisibleEvents = ({
  visibleEvents,
  changeVisibleEvents,
}: VisibleEventsProps) => {
  const { formatMessage } = useIntl();
  const isMobile = useIsMobile();

  const getMessageByAction = () => {
    if (visibleEvents === ALL_EVENTS)
      return formatMessage({ id: "dashboard.all_events" });
    if (visibleEvents === FUTURE_EVENTS)
      return formatMessage({ id: "dashboard.future_events" });

    return formatMessage({ id: "dashboard.past_events" });
  };

  const renderDesktopView = () => {
    return (
      <EventsActionsContainer>
        <StyledAction
          active={visibleEvents === ALL_EVENTS}
          onClick={() => changeVisibleEvents(ALL_EVENTS)}
        >
          {formatMessage({ id: "dashboard.all_events" })}
        </StyledAction>
        <StyledAction
          active={visibleEvents === FUTURE_EVENTS}
          onClick={() => changeVisibleEvents(FUTURE_EVENTS)}
        >
          {formatMessage({ id: "dashboard.future_events" })}
        </StyledAction>
        <StyledAction
          active={visibleEvents === PAST_EVENTS}
          onClick={() => changeVisibleEvents(PAST_EVENTS)}
        >
          {formatMessage({ id: "dashboard.past_events" })}
        </StyledAction>
      </EventsActionsContainer>
    );
  };

  const renderMobileView = () => {
    return (
      <MobileActionsContainer>
        <StyledLabel>{`${formatMessage({ id: "common.show" })}:`}</StyledLabel>
        <StyledMobileAction>{getMessageByAction()}</StyledMobileAction>
        <VisibleEventsTooltip changeVisibleEvents={changeVisibleEvents} />
      </MobileActionsContainer>
    );
  };

  return isMobile ? renderMobileView() : renderDesktopView();
};

export default VisibleEvents;
