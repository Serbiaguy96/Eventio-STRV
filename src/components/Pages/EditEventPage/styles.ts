import styled from "@emotion/styled";

export const EventEditHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

  @media only screen and (max-width: 1024px) {
    width: 95%;
    margin: 0 auto 20px auto;
  }
`;

export const EventEditLabel = styled.span`
  color: ${({ theme }) => theme.colors.lighterGray};

  font-family: Hind;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;

  letter-spacing: 1px;
  text-transform: uppercase;

  @media only screen and (max-width: 1024px) {
    white-space: pre;
  }
`;

export const EventEditContentContainer = styled.div`
  display: grid;
  grid-template-columns: auto 390px;
  grid-template-rows: 300px auto;
  grid-template-areas:
    "form attendees"
    "form .";
  gap: 15px;
  justify-items: stretch;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 10fr;
    grid-template-rows: auto;
    grid-template-areas: "form";
  }
`;
