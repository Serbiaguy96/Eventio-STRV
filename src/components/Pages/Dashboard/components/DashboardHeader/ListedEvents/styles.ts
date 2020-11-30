import styled from "@emotion/styled";
import { Theme } from "../../../../../../providers/ConnectedThemeProvider/types";
import { ViewModule, ViewStream } from "@material-ui/icons";

type ActiveType = { active: boolean };

export const ListActionsContainer = styled.div`
  width: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const iconStyleCss = (theme: Theme, active: boolean) => `
  cursor: pointer;
  font-size: 12px;

  color: ${active ? theme.colors.darkGray : theme.colors.lightGray};
    
   &:hover {
    color: ${active ? theme.colors.hoverDarkGray : theme.colors.hoverLightGray};
   }
`;

export const ModuleView = styled(ViewModule)<ActiveType>`
  ${({ theme, active }) => iconStyleCss(theme, active)};
`;

export const StreamView = styled(ViewStream)<ActiveType>`
  ${({ theme, active }) => iconStyleCss(theme, active)};
`;
