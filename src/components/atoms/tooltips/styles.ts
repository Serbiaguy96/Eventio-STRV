import styled from "@emotion/styled";
import { ArrowDropDown } from "@material-ui/icons";
import { Tooltip, withStyles } from "@material-ui/core";
import { APP_COLORS } from "../../../providers/ConnectedThemeProvider/ConnectedThemeProvider";

export const ArrowIcon = styled(ArrowDropDown)`
  color: ${({ theme }) => theme.colors.lighterGray};
  font-size: 14px;
  cursor: pointer;
`;

export const CssTooltip = withStyles({
  tooltip: {
    width: "140px",
    background: "#FFFFFF",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.198087)",
    borderRadius: "14px",
    color: APP_COLORS.lightGray,
  },
  arrow: {
    color: "#FFFFFF",
    left: "125px !important",
  },
})(Tooltip);

export const TooltipContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
`;

export const TooltipItem = styled.span`
  margin: 5px 0;
  cursor: pointer;
  font-family: Hind;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  ${({ theme }) => theme.colors.lightGray};

  &:hover {
    ${({ theme }) => theme.colors.lightGray};
  }
`;
