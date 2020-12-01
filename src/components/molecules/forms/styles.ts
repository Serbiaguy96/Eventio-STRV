import styled from "@emotion/styled";

export const DefaultFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;

  @media only screen and (max-width: 1024px) {
    align-items: center;
  }
`;

export const EditFormContainer = styled.form`
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  padding: 30px 30px 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-area: form;
`;

export const EventForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 64px);

  @media only screen and (max-width: 1024px) {
    width: calc(100% - 30px);
  }
`;
