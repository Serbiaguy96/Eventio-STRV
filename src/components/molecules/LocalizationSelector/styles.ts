import styled from "@emotion/styled";

export const LocalizationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledImage = styled.img<{ active: boolean }>`
  width: 24px;
  ${({ active }) => active && "opacity: 0.4"};
  margin-right: 10px;
`;

export const UkFlag = styled.img<{ active: boolean }>`
  width: 30px;
  ${({ active }) => active && "opacity: 0.4"};
  margin-right: 10px;
`;
