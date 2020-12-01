import React, { useState } from "react";
import { useIntl } from "react-intl";
import { ArrowIcon, TooltipContent, TooltipItem } from "./styles";
import CustomTooltip from "./CustomTooltip";
import { useHistory, useLocation } from "react-router";
import LocalizationSelector from "../../molecules/LocalizationSelector";

export type AccountTooltipProps = {
  logOutAction: () => void;
  profileAction: () => void;
};

const AccountTooltip = ({
  logOutAction,
  profileAction,
}: AccountTooltipProps) => {
  const [open, setOpen] = useState(false);
  const { formatMessage } = useIntl();
  const { push } = useHistory();
  const { pathname } = useLocation();

  const wrapProfileActionClick = () => {
    profileAction();
    setOpen(false);
  };

  const wrapLogoutActionClick = () => {
    logOutAction();
    setOpen(false);
  };

  const wrapCreateEventAction = () => {
    push("/create-event", { from: pathname });
    setOpen(false);
  };

  const getTooltipContent = () => (
    <TooltipContent>
      <TooltipItem onClick={wrapProfileActionClick}>
        {formatMessage({ id: "account.profile" })}
      </TooltipItem>
      <TooltipItem onClick={wrapCreateEventAction}>
        {formatMessage({ id: "event.create" })}
      </TooltipItem>
      <TooltipItem onClick={wrapLogoutActionClick}>
        {formatMessage({ id: "account.log_out" })}
      </TooltipItem>
      <TooltipItem>
        <LocalizationSelector />
      </TooltipItem>
    </TooltipContent>
  );

  return (
    <CustomTooltip
      content={getTooltipContent()}
      onClose={() => setOpen(false)}
      open={open}
    >
      <ArrowIcon onClick={() => setOpen(!open)} />
    </CustomTooltip>
  );
};

export default AccountTooltip;
