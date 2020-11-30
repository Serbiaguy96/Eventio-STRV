import { ClickAwayListener } from "@material-ui/core";
import React, { FC } from "react";
import { TooltipTip, TooltipWrapper } from "./styles";

export type CustomTooltipProps = {
  content: any;
  open: boolean;
  onClose: () => void;
};

const CustomTooltip: FC<CustomTooltipProps> = ({
  open,
  onClose,
  children,
  content,
}) => {
  return (
    <ClickAwayListener onClickAway={onClose}>
      <TooltipWrapper>
        {children}
        {open && <TooltipTip>{content}</TooltipTip>}
      </TooltipWrapper>
    </ClickAwayListener>
  );
};

export default CustomTooltip;
