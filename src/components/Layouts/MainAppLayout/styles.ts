import styled from "@emotion/styled";

export const MainAppContainer = styled.div<{ insideApp?: boolean }>`
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${({ theme, insideApp }) =>
    insideApp ? theme.colors.backgroundColor : "white"};
`;

export const MainAppHeaderContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: transparent;
  padding: 10px 30px 0 30px;
`;

export const MainAppFooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background: transparent;
  padding: 0 30px 10px 30px;
`;
