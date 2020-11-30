import styled from "@emotion/styled";
import { ArrowDropDown } from "@material-ui/icons";

export const ArrowIcon = styled(ArrowDropDown)`
  color: ${({ theme }) => theme.colors.lighterGray};
  font-size: 14px;
  cursor: pointer;
`;

export const ArrowDarkIcon = styled(ArrowDropDown)`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 14px;
  cursor: pointer;
`;

export const TooltipWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const TooltipTip = styled.div`
  position: absolute;
  width: 140px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.198087);
  border-radius: 14px;
  right: -90px;
  top: 40px;
  padding: 5px;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.lightGray};
  background: white;
  font-size: 14px;
  font-family: sans-serif;
  line-height: 1;
  z-index: 100;
  white-space: nowrap;

  &:before {
    content: " ";
    right: 18px;
    bottom: 100%;
    height: 0;
    width: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
    position: absolute;
    pointer-events: none;
    border-width: 10px;
    margin-left: -10px;
  }
`;

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

export const EventActionItem = styled.span`
  margin: 5px 0;
  cursor: pointer;
  font-family: Hind;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  margin: 5px 0;

  color: ${({ theme }) => theme.colors.darkGray};

  &:hover {
    ${({ theme }) => theme.colors.hoverDarkGray};
  }
`;
