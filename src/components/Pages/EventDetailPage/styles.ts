import styled from "@emotion/styled";

export const EventDetailHeader = styled.div`
  width: 100%;
  text-align: left;
  color: ${({ theme }) => theme.colors.lighterGray};

  font-family: Hind;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;

  letter-spacing: 1px;
  text-transform: uppercase;

  margin-bottom: 20px;

  @media only screen and (max-width: 1024px) {
    white-space: pre;
    margin-left: 10px;
  }
`;

export const EventDetailContentContainer = styled.div`
  display: grid;
  grid-template-columns: auto 390px;
  justify-items: stretch;
  grid-template-rows: 300px;
  gap: 15px;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 10fr;
  }
`;
