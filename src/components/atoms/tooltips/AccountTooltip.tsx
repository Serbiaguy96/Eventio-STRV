import React from "react";
import { useIntl } from "react-intl";
import { ArrowIcon, CssTooltip, TooltipContent, TooltipItem } from "./styles";

export type AccountTooltipProps = {
  logOutAction: () => void;
  profileAction: () => void;
};

const AccountTooltip = ({
  logOutAction,
  profileAction,
}: AccountTooltipProps) => {
  const { formatMessage } = useIntl();

  const getTooltipContent = () => (
    <TooltipContent>
      <TooltipItem onClick={profileAction}>
        {formatMessage({ id: "account.profile" })}
      </TooltipItem>
      <TooltipItem onClick={logOutAction}>
        {formatMessage({ id: "account.log_out" })}
      </TooltipItem>
    </TooltipContent>
  );

  return (
    <CssTooltip
      title={getTooltipContent()}
      arrow
      interactive
      placement="bottom-end"
    >
      <ArrowIcon />
    </CssTooltip>
  );
};

export default AccountTooltip;
