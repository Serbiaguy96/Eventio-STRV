import styled from "@emotion/styled";

export const MainAppContainer = styled.div<{ insideApp?: boolean }>`
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  background-color: ${({ theme, insideApp }) =>
    insideApp ? theme.colors.backgroundColor : "white"};
`;

export const MainAppContentContainer = styled.div`
  padding: 200px 140px 20px 140px;

  @media only screen and (max-width: 1024px) {
    padding: 120px 10px 10px 10px;
  }
`;

export const MainAppHeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  padding: 10px 30px 0 30px;

  @media only screen and (max-width: 1024px) {
    padding: 10px 10px 0 15px;
  }
`;

export const MainAppFooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background: transparent;
  padding: 0 30px 10px 30px;
`;
