import styled from "@emotion/styled";

export const DashboardHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media only screen and (max-width: 1024px) {
    width: 95%;
    margin: 0 auto 30px auto;
  }
`;
