import styled from "@emotion/styled";

type ActiveType = { active: boolean };

export const StyledAction = styled.span<ActiveType>`
  font-family: Hind;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: ${({ active, theme }) =>
    active ? theme.colors.darkGray : theme.colors.lightGray};

  &:hover {
    color: ${({ active, theme }) =>
      active ? theme.colors.hoverDarkGray : theme.colors.hoverLightGray};
  }
`;

export const EventsActionsContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MobileActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Hind;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const StyledLabel = styled.span`
  color: ${({ theme }) => theme.colors.lighterGray};
  margin-right: 5px;
`;

export const StyledMobileAction = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-right: 5px;
`;
